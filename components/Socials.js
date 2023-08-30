
import Link from 'next/link';

import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href="https://github.com/Rupesh0914" target="_blank" className='hover:text-accent transition-all duration-300'>
        <AiFillGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/rupesh-malhotra/" target="_blank" className='hover:text-accent transition-all duration-300'>
        <AiOutlineLinkedin />
      </Link>
    </div>
  );
};

export default Socials;
