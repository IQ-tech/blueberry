import randomString from "randomstring";

export function uniqueKey(baseString: string): string{
  return `${baseString}-${randomString.generate({ length: 7 })}`
}