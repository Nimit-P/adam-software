import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.jpeg"
        alt="Diligent Square Logo"
        width={110}
        height={80}
        className="object-contain"
      />
    </div>
  );
}
