export const getFirstLetters = (name: string) => {
  const words = name.split(" ");
  const firstLetters = words.map((word) => word.charAt(0).toUpperCase());
  return firstLetters.join("");
};
