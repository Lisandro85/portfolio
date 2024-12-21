import { useState, useEffect } from "react";

export default function Carrusel() {
  const images = [
    "css.svg",
    "html5.png",
    "javascript.svg",
    "NestJS.svg",
    "next-js.svg",
    "react.svg",
    "typescript.svg",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (index: number, images: string[], next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedIndex, images]);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-transparent">
      <div
        className="relative w-full max-w-lg h-64 bg-transparent shadow-lg rounded-full"
        style={{ width: "50px", height: "50px" }}
      >
        <img
          src={`assets/${selectedImage}`}
          alt="TechLogo"
          className="w-full h-full object-contain transition duration-300 filter grayscale spin-effect"
        />
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((image, index) => (
          <button key={index} onClick={() => setSelectedIndex(index)}></button>
        ))}
      </div>
    </div>
  );
}
