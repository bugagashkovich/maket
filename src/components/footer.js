export default function Footer() {
  return (
    <div className="mt-[240px] border-solid border-t-[0.5px] border-t-white/20">
      <div className="container mx-auto py-[70px] flex justify-start text-white/50">
        <div className="flex flex-col">
          <div className="flex align-middle">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="38" height="38" rx="8" fill="#FF6E30" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9645 12.4359C19.632 12.4359 19.3089 12.4769 19 12.5542C19.1988 10.7606 19.9148 9.12398 20.9963 7.79492C25.2971 8.30464 28.6332 11.9646 28.6332 16.4029V22.7294C28.4605 22.7391 28.2864 22.744 28.1112 22.744C24.6706 22.744 21.6709 20.8483 20.1028 18.0423H23.9315V16.4029C23.9315 14.212 22.1554 12.4359 19.9645 12.4359Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.25641 16.9507C9.25641 11.625 13.5738 7.30762 18.8995 7.30762C21.5623 7.30762 23.9731 8.38695 25.7181 10.132C24.1095 8.52336 21.9351 7.48044 19.519 7.32724C17.894 9.12575 16.9044 11.5095 16.9044 14.1243C16.9044 14.3194 16.9099 14.5131 16.9208 14.7055C16.299 15.2538 15.9068 16.0565 15.9068 16.9507V17.6157H21.8921L17.5214 17.6158C18.9445 21.4968 22.6719 24.2661 27.0462 24.2661C27.5546 24.2661 28.0542 24.2287 28.5425 24.1565V28.2563H21.8921V24.2661H15.9068V28.2563H9.25641V20.9409V16.9507Z"
                fill="white"
              />
            </svg>
            <p className="ml-[12px] text-white/90 text-[22px] font-semibold">
              antools.
            </p>
          </div>
          <p className="mt-[25px] mb-[21px] text-white/90 font-medium">
            Copyright 2021. Antools
          </p>
          <p>
            Antool is a web collection of information <br></br> on paid or free
            Design <br></br>and Development tools
          </p>
        </div>
        <div className="flex flex-col ml-[156px]">
          <p className="text-white/90 font-medium text-[20px] mb-[20px]">
            Contact Us
          </p>
          <p className="mb-[10px]">+621987463</p>
          <p className="mb-[10px]">M Building, No.10 A</p>
          <p>antools@awesome.com</p>
        </div>
        <div className="flex flex-col ml-[115px]">
          <p className="text-white/90 font-medium text-[20px] mb-[20px]">
            Categories
          </p>
          <p className="mb-[10px]">Design</p>
          <p>Development</p>
        </div>
        <div className="flex flex-col  ml-[115px]">
          <p className="text-white/90 font-medium text-[20px] mb-[20px]">
            Company Info
          </p>
          <p className="mb-[10px]">About Us</p>
          <p className="mb-[10px]">Our Partners</p>
          <p>Blog</p>
        </div>
      </div>
    </div>
  );
}
