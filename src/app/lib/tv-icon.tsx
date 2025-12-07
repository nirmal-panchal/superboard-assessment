import Image from "next/image";

const TvIcon = () => {
  return (
    <Image
      src="/Frame-update.png"
      alt="Campaign Pass"
      width={140}
      height={90}
      className="max-w-full h-auto"
      style={{ width: "clamp(80px, 100%, 140px)" }}
    />
  );
};

export default TvIcon;
