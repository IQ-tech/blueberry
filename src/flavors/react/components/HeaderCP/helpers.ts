export function getAbsoluteLink(relativePath: string): string {
  const getNewPath = (relativePath) => {
    const pageOrigin = window.origin;
    return `${pageOrigin}${relativePath}`;
  };
  return typeof window !== undefined ? getNewPath(relativePath) : relativePath;
}
