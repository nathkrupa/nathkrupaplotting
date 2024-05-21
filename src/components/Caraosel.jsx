import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { CLOUDINARY_URL, carouselImages } from "../utils/constants";

export default function Carousel() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    });

    slider.mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="glide-01 relative md:w-2/3 w-screen p-4">
      <div className="overflow-hidden" data-glide-el="track">
        <ul className="whitespace-no-wrap flex-no-wrap relative flex w-full overflow-hidden p-0">
          {carouselImages.map((image, index) => (
            <li key={index} className="glide__slide">
              <img
                src={`${CLOUDINARY_URL}${image}`}
                alt={`slide-${index}`}
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
          ))}
        </ul>
      </div>
      <div
        className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4"
        data-glide-el="controls"
      >
        <button
          className="inline-flex h-8 w-8 items-center justify-center bg-gray-300 rounded-full border border-gray-400 bg-white/20 text-gray-400 transition duration-300 hover:border-gray-700 hover:text-gray-700 focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir="<"
          aria-label="prev slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>{" "}
        </button>
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 bg-white/20 bg-gray-300 text-gray-400 transition duration-300 hover:border-gray-700 hover:text-gray-700 focus-visible:outline-none lg:h-12 lg:w-12"
          data-glide-dir=">"
          aria-label="next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>{" "}
        </button>
      </div>
    </div>
  );
}
