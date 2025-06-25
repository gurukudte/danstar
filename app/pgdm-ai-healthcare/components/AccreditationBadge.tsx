import Image from "next/image";

export function AccreditationBadge() {
  return (
    <div className="p-4 md:p-6 w-full">
      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-8 text-center">
        ACCREDITED BY
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 items-center justify-items-center">
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
            className="relative h-16 w-full max-w-[120px] flex items-center justify-center bg-white p-2"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 640px) 50px, (max-width: 768px) 80px, 100px"
              priority={idx < 3} // Only prioritize first few images
            />
          </div>
        ))}
      </div>
    </div>
  );
}
