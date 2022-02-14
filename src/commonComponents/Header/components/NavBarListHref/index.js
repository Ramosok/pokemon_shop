import { memo } from "react";

export const NavBarListHref = memo(({ title, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {title}
    </a>
  );
});
