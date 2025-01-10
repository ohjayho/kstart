export const getImageUrl = (src) => {
  const baseUrl = window.location.origin;
  return new URL(src, baseUrl).href;
};
