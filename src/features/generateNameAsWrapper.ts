import { NAME } from "../settings";

export function generateNameAsWrapper(node: FrameNode): string | null {
  if (
    // 子
    node.children.length > 0 &&
    // 自身
    node.layoutMode !== 'NONE' &&
    // 親
    node.parent !== null &&
    (node.parent.type === 'PAGE' || node.parent.type === 'SECTION')
  ) {
   return NAME.wrapper
  }
  return null;
}
