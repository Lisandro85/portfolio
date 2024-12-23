import Image from "next/image";

const Avatar = () => {
  return (
    <div className="mt-0 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden group mx-auto md:mx-0 flex-shrink-0">
      <Image
        className="mt-0 w-full h-full object-cover filter grayscale transition duration-300 group-hover:grayscale-0"
        src={"/assets/avatar.png"}
        alt="Avatar Image "
        width={100}
        height={100}
      />{" "}
    </div>
  );
};
export default Avatar;
