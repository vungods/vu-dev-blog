import Image from 'next/image'

export default function ApplicationLogo() {
  return <div className="dark:invert">
    <Image src="/assets/doglogo.png" alt="Vu-Dev" width={64} height={64} priority />
  </div>
}
