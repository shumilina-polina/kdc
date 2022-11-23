const useHtmlDecode = (content, markdown = false) => {
  const doc = new DOMParser().parseFromString(content, "text/html");
  if (markdown) {
    const text = "";
    doc.documentElement.childNodes[1].childNodes.forEach((node) => {
      if (!(node.outerHTML === undefined)) text = text + node.outerHTML;
    });
    return text;
  }
  return doc.documentElement.textContent;
};

export default useHtmlDecode;
