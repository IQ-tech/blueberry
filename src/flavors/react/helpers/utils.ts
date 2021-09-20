import randomString from "randomstring";

export function uniqueKey(baseString: string): string{
  return `${baseString}-${randomString.generate({ length: 7 })}`
}

export function cleanString(stringToClear: string): string{
  const lowerCase = stringToClear.toLowerCase()
  const withoutPoctuation = lowerCase.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  return withoutPoctuation
}