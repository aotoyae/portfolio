export const handleMailto = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  // 제네릭 타입 파라미터(처음은 이벤트가 발생하는 요소 <a></a>, 다음은 이벤트의 타입)
  e.preventDefault();
  window.location.href = 'mailto:aotoyae@gamil.com';
};
