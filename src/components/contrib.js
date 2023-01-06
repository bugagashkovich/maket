export default function Contributer() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white/90 font-medium text-[48px] pb-[25px]">
        Become a contributor?
      </h1>
      <p className="text-white/50 font-medium text-[18px] pb-[100px] text-center">
        Join us and get tips & tricks to become a great <br></br> Designer and
        Developer
      </p>
      <form className="bg-[#283036] h-[64px] w-[550px] rounded-[15px] flex justify-between items-center p-2 pl-5 ">
        <div className="flex ">
          <input
            className="bg-transparent ml-[13px]"
            style={{
              outline: "none",
              width: "100%",
              caretColor: "#837A93",
            }}
            placeholder="Enter your email..."
          ></input>
        </div>
        <button className="text-white font-semibold text-[16px] bg-[#FF6E30] px-8 py-3 rounded-[8px]">
          Join Us
        </button>
      </form>
    </div>
  );
}
