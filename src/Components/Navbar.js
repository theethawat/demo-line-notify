import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import TDCLogo from "../Assets/TDC Logo black.png";

const AppNavBar = () => {
  return (
    <div className='w-full bg-green-50 py-2'>
      <div className='container mx-auto px-4'>
        <div className='flex'>
          {/* <img className='h-8 ' src={TDCLogo} alt='The Duck Creator Logo' /> */}
          <h2 className='text-2xl font-bold font-sans ml-4'>
            {" "}
            TDC - เดอะดักส์ครีเอเตอร์
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AppNavBar;
