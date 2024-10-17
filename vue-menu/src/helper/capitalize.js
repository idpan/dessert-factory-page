export default function capitalize(text) {
  const newStr = text
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
  return newStr;
}
