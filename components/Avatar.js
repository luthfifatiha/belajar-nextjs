import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none xl:justify-end xl:relative xl:top-1'>
      <Image src={'/upi.png'} width={737} height={678} alt='' className='translate-z-0 w-full h-full'/>
    </div>
  )
};

export default Avatar;
