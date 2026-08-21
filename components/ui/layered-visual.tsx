import Image from "next/image";

export function LayeredVisual({
  back,
  front,
  backAlt,
  frontAlt,
  label
}: {
  back: string;
  front: string;
  backAlt: string;
  frontAlt: string;
  label: string;
}) {
  return (
    <div className="section-media" aria-label={label}>
      <Image src={back} alt={backAlt} width={720} height={460} className="media-back float-slow" sizes="(max-width: 900px) 90vw, 38vw" />
      <Image src={front} alt={frontAlt} width={520} height={360} className="media-front float-slower" sizes="(max-width: 900px) 70vw, 26vw" />
      <div className="media-caption mono">{label}</div>
    </div>
  );
}
