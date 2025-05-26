export default function extractDigits(str: string) {
  return str.replace(/[^0-9]/g, "");
}
