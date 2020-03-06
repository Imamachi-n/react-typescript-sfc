// id 指定した箇所にスムーズにスクロールする
export const anchorScroll = (
  event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>,
  anchorId: string,
  scrollBlock: 'end' | 'start' | 'center' | 'nearest' | undefined,
) => {
  // TODO: アンカーに`id="${props.anchorId}"`を設定する必要あり。
  const anchor = (
    (event.target as HTMLDivElement).ownerDocument || document
  ).querySelector(anchorId);

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: scrollBlock });
  }
};
