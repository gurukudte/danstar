import Image from "next/image";

export function AccreditationBadge() {
  return (
    <div className="p-6 w-full">
      <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
        ACCREDITED BY
      </h3>

      <div className="flex justify-between items-center gap-6">
        {[
          {
        src: "/images/Group-2611533_edited.webp",
        alt: "AIU Accredited",
          },
          {
        src: "/images/AICTE_edited.webp",
        alt: "AICTE Accredited",
          },
          {
        src: "/images/image-50.svg",
        alt: "AICTE Accredited",
          },
          {
        src: "/images/QS_edited.webp",
        alt: "QS Accredited",
          },
          {
        src: "/images/AIU_edited.webp",
        alt: "AIU Accredited",
          },
          {
        src: "/images/SAQS_edited.webp",
        alt: "SAQS Accredited",
          },
        ].map((img, idx) => (
          <div
        key={idx}
        className="relative h-20 w-20 flex items-center justify-center bg-white"
        style={{ minWidth: 100, minHeight: 50 }}
          >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          style={{ objectFit: "contain" }}
          sizes="50px"
          priority
        />
          </div>
        ))}
      </div>
    </div>
  );
}
