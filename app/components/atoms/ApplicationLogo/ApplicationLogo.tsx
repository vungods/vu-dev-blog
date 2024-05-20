import Image from 'next/image'

export default function ApplicationLogo() {
  return <div className="dark:invert ml-4">
    <Image src="/assets/dog_cat.png" alt="Vu-Dev" width={80} height={80} priority />
  </div>
}
