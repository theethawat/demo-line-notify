import { Button } from '@chakra-ui/react'
import React from 'react'
import TDCLogo from '../Assets/TDC Logo black.png'
export default function Home({ props }) {
  return (
    <div className="container mx-auto">
      <div className="">
        <div className="flex justify-start">
          <img className="h-24" src={TDCLogo} alt="The Duck Creator Logo" />
        </div>

        <h1 className="text-2xl">Home Page </h1>
        <p>
          Continues rest of Working by using{' '}
          <a
            className="text-green-600 hover:text-green-500"
            href="https://reactjs.org"
            alt="react website "
          >
            React{' '}
          </a>
          ,{' '}
          <a
            href="https://expressjs.com"
            className="text-green-600 hover:text-green-500"
            alt="Express JS Webiste "
          >
            Express
          </a>{' '}
          and the other documents
        </p>
        <a href="https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=YOURCLIENTID&redirect_uri=http://localhost:7000/api/notify&scope=notify&state=test">
          <Button size="lg"> Notify with Line</Button>
        </a>

        <br />
        <h4 className="text-xl">ปุ่ม</h4>
        <hr className="mb-4 mt-2" />
        <div className="flex gap-3">
          <div className="flex gap-1 ">
            <Button colorScheme="brand" size="lg">
              ทดสอบ
            </Button>
            <Button colorScheme="brand" size="md">
              ทดสอบ
            </Button>
            <Button colorScheme="brand" size="sm">
              ทดสอบ
            </Button>
          </div>
          <div className="flex gap-1 font-sans font-normal">
            <Button colorScheme="brand" size="lg">
              ทดสอบ
            </Button>
            <Button colorScheme="brand" size="md">
              ทดสอบ
            </Button>
            <Button colorScheme="brand" size="sm">
              ทดสอบ
            </Button>
          </div>
        </div>
        <br />
        <div className="flex gap-1 ">
          <Button colorScheme="brand" size="md">
            Primary
          </Button>
          <Button colorScheme="pink" size="md">
            Secondary
          </Button>
          <Button colorScheme="gray" size="md">
            Gray
          </Button>
          <Button colorScheme="blue" size="md">
            Confirm
          </Button>
          <Button colorScheme="red" size="md">
            Danger
          </Button>
          <Button colorScheme="yellow" size="md">
            Warning
          </Button>
        </div>
        <br />
        <h4 className="text-xl">บทความ</h4>
        <hr className="mb-4 mt-2" />

        <div className="flex flex-wrap gap-4">
          <div className="lg:w-1/3">
            <p>
              เป็นมนุษย์สุดประเสริฐเลิศคุณค่า กว่าบรรดาฝูงสัตว์เดรัจฉาน
              จงฝ่าฟันพัฒนาวิชาการ อย่าล้างผลาญฤๅเข่นฆ่าบีฑาใคร
              ไม่ถือโทษโกรธแช่งซัดฮึดฮัดด่า หัดอภัยเหมือนกีฬาอัชฌาสัย
              ปฏิบัติประพฤติกฎกำหนดใจ พูดจาให้จ๊ะ ๆ จ๋า ๆ น่าฟังเอยฯ
            </p>
            <br />
            <p className="font-normal font-sans text-lg">
              เป็นมนุษย์สุดประเสริฐเลิศคุณค่า กว่าบรรดาฝูงสัตว์เดรัจฉาน
              จงฝ่าฟันพัฒนาวิชาการ อย่าล้างผลาญฤๅเข่นฆ่าบีฑาใคร
              ไม่ถือโทษโกรธแช่งซัดฮึดฮัดด่า หัดอภัยเหมือนกีฬาอัชฌาสัย
              ปฏิบัติประพฤติกฎกำหนดใจ พูดจาให้จ๊ะ ๆ จ๋า ๆ น่าฟังเอยฯ
            </p>
          </div>
          <div className="lg:w-1/3">
            <p className="font-light font-sans text-xl">
              เป็นมนุษย์สุดประเสริฐเลิศคุณค่า กว่าบรรดาฝูงสัตว์เดรัจฉาน
              จงฝ่าฟันพัฒนาวิชาการ อย่าล้างผลาญฤๅเข่นฆ่าบีฑาใคร
              ไม่ถือโทษโกรธแช่งซัดฮึดฮัดด่า หัดอภัยเหมือนกีฬาอัชฌาสัย
              ปฏิบัติประพฤติกฎกำหนดใจ พูดจาให้จ๊ะ ๆ จ๋า ๆ น่าฟังเอยฯ
            </p>
            <br />
            <p className="font-semibold font-sans text-2xl">
              เป็นมนุษย์สุดประเสริฐเลิศคุณค่า กว่าบรรดาฝูงสัตว์เดรัจฉาน
              จงฝ่าฟันพัฒนาวิชาการ อย่าล้างผลาญฤๅเข่นฆ่าบีฑาใคร
              ไม่ถือโทษโกรธแช่งซัดฮึดฮัดด่า หัดอภัยเหมือนกีฬาอัชฌาสัย
              ปฏิบัติประพฤติกฎกำหนดใจ พูดจาให้จ๊ะ ๆ จ๋า ๆ น่าฟังเอยฯ
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
