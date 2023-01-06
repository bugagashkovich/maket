import man from "../img/sliderPhoto.png";

export default function Slider() {
  return (
    <div className="container mx-auto mb-[250px]">
      <div className=" flex justify-between px-10 align-middle items-center mb-[100px]">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 36L18 24L30 12"
            stroke="white"
            stroke-opacity="0.28"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="flex justify-center items-center space-x-10">
          <img src={man} />
          <div className="text-[14px] text-white/80 w-[393px] leading-[30px] font-sans">
            Incididunt cillum do sint sint enim ullamco id deserunt mollit qui
            reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla
            velit labore occaecat do deserunt Lorem magna officia incididunt
            consectetur amet. Sunt consectetur veniam minim ex commodo sint non.
            Occaecat aute officia excepteur non laboris id qui ad.
          </div>
        </div>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 36L30 24L18 12"
            stroke="#FF6E30"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="flex justify-center">
        <svg
          width="168"
          height="8"
          viewBox="0 0 168 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="62" width="44" height="8" rx="4" fill="#FF6E30" />
          <rect x="124" y="1" width="44" height="6" rx="3" fill="#283036" />
          <rect y="1" width="44" height="6" rx="3" fill="#283036" />
        </svg>
      </div>
    </div>
  );
}
