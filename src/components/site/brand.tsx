import Image from "next/image";

/**
 * The site's mark is the person: a real photo and a typeset name, no
 * monogram. `role` adds the small mono line under the name.
 */
export function Brand({ role = true, size = 40 }: { role?: boolean; size?: number }) {
  return (
    <>
      <span className="fx-avatar" style={{ width: size, height: size }}>
        <Image src="/images/uzair-avatar-hd.jpg" alt="" width={size} height={size} sizes={`${size}px`} priority />
      </span>
      <span className="fx-brand-text">
        <span className="fx-brand-name">Uzair Saleem</span>
        {role && <span className="fx-brand-role">Software &amp; product engineer</span>}
      </span>
    </>
  );
}
