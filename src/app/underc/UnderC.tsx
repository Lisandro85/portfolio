import Image from "next/image";

export default function UnderC() {
  return (
    <>
      <div className="flex justify-center items-center  p-5 mt-24 mb-48">
        <Image
          width={400}
          height={400}
          src="/images/underC.jpg"
          alt="under construction"
          className="rounded-lg"
        />
      </div>
    </>
  );
}
