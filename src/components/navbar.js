import Logo from "../img/logo.png";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center pt-[12px] pb-[12px]">
      <div className="flex items-center">
        <img src={Logo} className="w-38 h-38" />
        <p className="ml-[12px] font-semibold text-[22px] text-white opacity-95">
          antools.
        </p>
      </div>
      <div className="flex space-x-[41px] text-white text-[16px] opacity-50 font-medium">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#" className="flex items-baseline space-x-[8px]">
          <p>My Collections</p>{" "}
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 0.75L6 5.25L10.5 0.75"
              stroke="white"
              stroke-opacity="0.55"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a href="#">Blog</a>
      </div>
      <div className="flex space-x-[41px] items-center">
        <a href="#" className="text-white text-[16px] font-semibold opacity-80">
          Login
        </a>
        <a
          href="#"
          className="bg-[#FF6E30] px-8 py-2 rounded-[8px] text-[#FDF5FF] font-semibold"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
}
