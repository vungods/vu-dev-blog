import Image from 'next/image'

export default function ApplicationLogo({ width = 100 }) {
  return <Image src="/tryhard.jpg" alt="Vu-Dev" className="dark:invert " width={width} height={24} priority />
}
