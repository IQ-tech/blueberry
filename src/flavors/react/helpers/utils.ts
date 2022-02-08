export function cleanString(stringToClear: string): string{
  const lowerCase = stringToClear.toLowerCase()
  const withoutPoctuation = lowerCase.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  return withoutPoctuation
}