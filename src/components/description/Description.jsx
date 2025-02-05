import React from "react";
import './Description.css'
import desc from "../../assets/desc.png";
import { IoIosArrowForward } from "react-icons/io";
const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center container">
      <div className="flex gap-8 font-semibold text-[#737373] mt-20 mb-20">
        <p>Description</p>
        <p>Additional Information</p>
        <p>Reviews</p>
      </div>
      <hr />
      <div className="flex gap-9 desc">
        <div className="w-[332px]">
          <img src={desc} alt="" />
        </div>
        <div className="flex flex-col gap-5 w-[332px]">
          <h2 className="text-2xl font-bold">the quick fox jumps over </h2>
          <p className="text-[#737373] font-normal">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373] font-normal">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-[#737373] font-normal">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="flex flex-col w-[332px] gap-3.5">
        <h2 className="text-2xl font-bold">the quick fox jumps over </h2>
        <div className="font-normal flex gap-1 items-center  text-[#737373]">
        <p><IoIosArrowForward /></p>
        <p>the quick fox jumps over the lazy dog</p>
        </div>
        <div className="font-normal flex gap-1 items-center  text-[#737373]">
        <p><IoIosArrowForward /></p>
        <p>the quick fox jumps over the lazy dog</p>
        </div>
        <div className="font-normal flex gap-1 items-center  text-[#737373]">
        <p><IoIosArrowForward /></p>
        <p>the quick fox jumps over the lazy dog</p>
        </div>
        <div className="font-normal flex gap-1 items-center  text-[#737373]">
        <p><IoIosArrowForward /></p>
        <p>the quick fox jumps over the lazy dog</p>
        </div>
        <h2 className="text-2xl font-bold">the quick fox jumps over </h2>
        <div className="font-normal flex gap-1 items-center  text-[#737373]">
        <p><IoIosArrowForward /></p>
        <p>the quick fox jumps over the lazy dog</p>
        </div>
        <div className="font-normal flex gap-1 items-center  text-[#737373]">
        <p><IoIosArrowForward /></p>
        <p>the quick fox jumps over the lazy dog</p>
        </div>
        <div className="font-normal flex gap-1 items-center  text-[#737373]">
        <p><IoIosArrowForward /></p>
        <p>the quick fox jumps over the lazy dog</p>
        </div>
        <div className="font-normal flex gap-1 items-center  text-[#737373]">
        <p><IoIosArrowForward /></p>
        <p>the quick fox jumps over the lazy dog</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
