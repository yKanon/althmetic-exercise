function commonParentNode(oNode1, oNode2) {
  if (oNode1.contains(oNode2)) return oNode1;
  return commonParentNode(oNode1.parentNode, oNode2);
}
