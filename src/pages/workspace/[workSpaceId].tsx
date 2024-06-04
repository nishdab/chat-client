import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "../layout";
import { useAppSelector } from "@/store/hooks";

const WorkspacePage = () => {
  const router = useRouter();
  const { workSpaceId } = router.query;
  const { channels, status } = useAppSelector((state) => state.channel);

  useEffect(() => {
    if (router.asPath === `/workspace/${workSpaceId}`) {
      if (channels && channels.length > 0)
        router.push(`/workspace/${workSpaceId}/${channels[0]?.id}`);
    }
  }, [channels, workSpaceId, router]);

  return (
    <MainLayout>
      <div className={`h-full bg-slack-brand-ffffff overflow-y-auto `}></div>
    </MainLayout>
  );
};

export default WorkspacePage;
