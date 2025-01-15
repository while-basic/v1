import Image from "next/image";

export function Avatar() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 md:mb-0">
      <Image
        src="/avatar.jpg"
        alt="Christopher Celaya"
        width={160}
        height={160}
        className="rounded-full object-cover border-2 border-gray-800"
        priority
      />
    </div>
  );
}
