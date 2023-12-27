export const cleanText = (text: string) => {
  return text
    .trim()
    .replace(/\n\s*\n/g, '\n')
    .trim()
}
