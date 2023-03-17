import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function CodeBox() {
  return (
    <div className="bg-white p-5 text-xl rounded-xl flex-column" style={{ width: '340px'}}>
      <Image alt="qr code"  className='rounded-xl' height="300" src="/images/image-qr-code.png" width="300"/>
      <p className='flex font-semibold my-5 text-center px-2'>Improve your front-end skills by building projects
      </p>
      <p className='flex font-light text-center text-sm px-2 mb-3'>Scan the QR code to visit Frontend Mentor and take you coding skills to the next level
      </p>
    </div>
  )
}