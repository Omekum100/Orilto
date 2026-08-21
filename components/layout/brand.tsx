import Image from "next/image";
import Link from "next/link";

export function Brand({ href = "/", compact = false }: { href?: string; compact?: boolean }) {
  return (
    <Link className="brand" href={href} aria-label="Orilto home">
      <Image
        src="/orilto-logo.jpg"
        alt=""
        width={compact ? 38 : 44}
        height={compact ? 38 : 44}
        className="brand-logo"
        priority
      />
      <span className="sr-only">Orilto</span>
    </Link>
  );
}
