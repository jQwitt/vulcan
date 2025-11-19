export const valueOrEmpty = (url: string, key: string) => {
  try {
    return new URL(url).searchParams.get(key) ?? "";
  } catch {}

  return "";
};
