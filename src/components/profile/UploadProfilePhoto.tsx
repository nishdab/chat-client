import { NextPage } from "next";
import Image from "next/image";
import React, { useState, useRef } from "react";

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";

import "react-image-crop/dist/ReactCrop.css";
import { EditProfileFormProps } from "@/types/types";

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

const UploadProfilePhoto: NextPage<EditProfileFormProps> = ({ onCancel }) => {
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [aspect, setAspect] = useState<number | undefined>(1 / 1);

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  async function onDownloadCropClick() {
    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error("Crop canvas does not exist");
    }

    // This will size relative to the uploaded image
    // size. If you want to size according to what they
    // are looking at on screen, remove scaleX + scaleY
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    );
    const ctx = offscreen.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height
    );
    // You might want { type: "image/jpeg", quality: <0 to 1> } to
    // reduce image size
    const blob = await offscreen.convertToBlob({
      type: "image/png",
    });

    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
    }
    blobUrlRef.current = URL.createObjectURL(blob);

    if (hiddenAnchorRef.current) {
      hiddenAnchorRef.current.href = blobUrlRef.current;
      hiddenAnchorRef.current.click();
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
      }
    },
    100,
    [completedCrop]
  );
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[520px] rounded-lg bg-slackcom-nero max-w-[520px] overflow-hidden flex flex-col items-start justify-start max-h-[930px] tracking-[normal] text-left text-3xl text-appslackcom-thunder font-appslackcom-lato-bold-15 mq450:max-w-full mq500:max-w-full font-lato">
        <header className="flex items-center justify-between bg-slackcom-nero rounded-t-lg overflow-hidden min-h-[70px] sticky top-[0] z-[99]">
          {imgSrc ? (
            <>
              <div className="flex items-center py-0 pr-0 pl-4  mt-[-15px]">
                <div className="rounded flex items-center justify-center py-2 px-1.5">
                  <div className="h-5">
                    <Image
                      className="w-5 h-5 relative overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/backIcon.svg"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center py-5 px-1 min-h-[70px]">
                <div className="flex flex-col items-start justify-start">
                  <h3 className="m-0 text-inherit font-black whitespace-nowrap">
                    Crop your photo
                  </h3>
                </div>
              </div>
            </>
          ) : (
            <div className="self-stretch rounded-t-lg rounded-b-none bg-slackcom-nero overflow-hidden flex flex-row items-center justify-center py-0 pr-[0.5px] pl-[0.39999999999997726px] box-border min-h-[70px] max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start py-5 px-7 box-border min-h-[70px] max-w-full">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-start pt-0 px-0 pb-[0.5px]">
                    <div className="relative leading-[30px] font-black inline-block mq450:text-lg mq450:leading-[24px]">
                      Add a profile photo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        {!imgSrc ? (
          <section className="self-stretch h-[600px] bg-slackcom-nero overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-7 box-border gap-[24px] min-h-[50px] text-left text-lg text-appslackcom-thunder font-appslackcom-lato-bold-15">
            <div className="self-stretch flex-1 rounded-md flex flex-col items-center justify-center pt-[109.5px] px-5 pb-[110.5px] gap-[1px] border-[4px] border-dashed border-gainsboro-100 mq500:pt-[71px] mq500:pb-[72px] mq500:box-border">
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-4">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <div className="w-[190px] flex-1 flex flex-col items-start justify-start pt-0 px-5 pb-[5px] box-border">
                    <Image
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      loading="lazy"
                      alt=""
                      src="/uploadprofile.svg"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[24px] font-black">
                      Drag your photo here or…
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer pt-[7.5px] px-[11px] pb-[8.5px] bg-slackcom-nero rounded box-border flex flex-row items-center justify-center min-w-[78px] whitespace-nowrap border-[1px] border-solid border-appslackcom-thunder-30 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                <b className="w-[82px] relative text-mini flex font-appslackcom-lato-bold-15 text-appslackcom-thunder text-center items-center justify-center min-w-[82px] max-h-[33px]">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile}
                    placeholder="Browse files"
                  />
                </b>
              </button>
            </div>
            <div className="w-[241.1px] h-[106px] flex flex-col items-start justify-start gap-[12px] text-smi text-appslackcom-thunder-70">
              <div className="relative leading-[18px] inline-block min-w-[47px] max-w-[464px] mq450:max-w-full">
                Preview
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px] text-mini text-appslackcom-thunder">
                <div className="self-stretch flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <div className="flex-1 bg-appslackcom-thunder-13 overflow-hidden flex flex-row items-start justify-start">
                    <Image
                      className="h-[72px] w-[72px] relative overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      width={72}
                      height={72}
                      src="/no-photo-a.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
                  <div className="flex flex-row items-end justify-start">
                    <div className="flex flex-col items-start justify-start py-0 px-0">
                      <div className="mr-[-0.40000000000009095px] relative leading-[22px] inline-block min-w-[115.9px] shrink-0 [debug_commit:f6aba90]">
                        <b>Nishant Dabre</b>
                        <span>  </span>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-2 relative rounded-[1000px] bg-gainsboro-100 " />
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="self-stretch h-[600px] bg-slackcom-nero overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-7 box-border gap-[24px] min-h-[50px] text-left text-lg text-appslackcom-thunder font-appslackcom-lato-bold-15">
            <div className="self-stretch rounded bg-appslackcom-thunder-13 flex flex-row items-start justify-start max-w-full">
              <div className="h-[300px] flex-1 bg-slackcom-nero overflow-hidden flex flex-col items-start justify-start pt-0 px-0 box-border relative max-w-[460px] mq450:max-w-full">
                {!!imgSrc && (
                  <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={aspect}
                    // minWidth={400}
                    minHeight={100}
                  >
                    <img
                      ref={imgRef}
                      alt="Crop me"
                      src={imgSrc}
                      onLoad={onImageLoad}
                    />
                  </ReactCrop>
                )}
              </div>
            </div>
            <div className="self-stretch rounded flex flex-col items-start justify-start pt-6 px-0 pb-0 gap-[12px]">
              <div className="relative leading-[18px] inline-block min-w-[46px] max-w-[460px] mq450:max-w-full">
                Preview
              </div>
              <div className="w-[241.2px] flex flex-row items-start justify-start text-mini text-appslackcom-thunder">
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 ">
                  {/* <Image
                    className="w-[72px] h-[72px] relative rounded-[3px] object-cover"
                    alt=""
                    width={72}
                    height={72}
                    src="/no-photo-a.svg"
                  /> */}
                  {!!completedCrop && (
                    <>
                      <div>
                        <canvas
                          ref={previewCanvasRef}
                          className="rounded"
                          style={{
                            // border: "1px solid black",
                            objectFit: "contain",
                            width: 100,
                            height: 100,
                          }}
                        />
                      </div>
                      <div>
                        <button onClick={onDownloadCropClick}>
                          Download Crop
                        </button>
                        <a
                          href="#hidden"
                          ref={hiddenAnchorRef}
                          download
                          style={{
                            position: "absolute",
                            top: "-200vh",
                            visibility: "hidden",
                          }}
                        >
                          Hidden download
                        </a>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[9px] ml-[20px]">
                  <div className="flex flex-row items-end justify-start">
                    <div className="flex flex-col items-start justify-start py-0 px-0">
                      <div className="relative leading-[22px] inline-block min-w-[115.9px] shrink-0 [debug_commit:f6aba90]">
                        <b>Nishant Dabre</b>
                        <span>  </span>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-2 relative rounded-981xl bg-gainsboro-100" />
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="self-stretch rounded-t-none rounded-b-lg bg-slackcom-nero overflow-hidden flex flex-row items-center justify-end py-6 px-7">
          <div className="w-[172.9px] flex flex-row items-center justify-start py-0 pr-[0.09999999999990904px] pl-px box-border gap-[13px]">
            <button
              className="cursor-pointer pt-[7.5px] px-[15px] pb-[8.5px] bg-slackcom-nero flex-1 rounded box-border flex flex-row items-end justify-center min-w-[78px] border-[1px] border-solid border-appslackcom-thunder-30 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray"
              onClick={onCancel}
            >
              <b className="w-[46px] relative text-mini flex font-appslackcom-lato-bold-15 text-appslackcom-thunder text-center items-center justify-center min-w-[46px] max-h-[33px]">
                Cancel
              </b>
            </button>
            <button className="cursor-pointer [border:none] pt-[8.5px] px-6 pb-[9.5px] bg-appslackcom-tropical-rain-forest rounded flex flex-row items-end justify-center box-border min-w-[80px] hover:bg-seagreen">
              <b className="w-8 relative text-mini flex font-appslackcom-lato-bold-15 text-slackcom-nero text-center items-center justify-center min-w-[32px] max-h-[35px]">
                Save
              </b>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UploadProfilePhoto;
