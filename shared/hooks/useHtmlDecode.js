const useHtmlDecode = (content) => {
  const doc = new DOMParser().parseFromString(content, "text/html");
  return doc.documentElement.textContent;
};

export default useHtmlDecode;
