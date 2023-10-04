export function handleClickScroll(
  item,
  setActiveSection,
  setReferenceNode,
  ref,
  maksPage
) {
  const offset = item * 2;
  if (offset >= 0 && offset <= maksPage) {
    ref.current.scrollTo(offset);
    setActiveSection(item);
    setReferenceNode(offset);
  }
}

export function handleClickButtonDown(
  activeSection,
  setActiveSection,
  setReferenceNode,
  ref,
  maksPage
) {
  const offset = (activeSection + 1) * 2;
  if (offset >= 0 && offset <= maksPage) {
    ref.current.scrollTo(offset);
    setActiveSection((prevSection) => prevSection + 1);
    setReferenceNode(offset);
  }
}

export function handleClickButtonUp(
  activeSection,
  setActiveSection,
  setReferenceNode,
  ref,
  maksPage
) {
  const offset = (activeSection - 1) * 2;
  if (offset >= 0 && offset <= maksPage) {
    ref.current.scrollTo(offset);
    setActiveSection((prevSection) => prevSection - 1);
    setReferenceNode(offset);
  }
}
