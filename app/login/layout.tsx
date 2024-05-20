import Link from "next/link";
import ApplicationLogo from "../components/atoms/ApplicationLogo/ApplicationLogo";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-r from-purple-950 to-black">
      <div>
        <Link href="/">
          <ApplicationLogo />
        </Link>
      </div>

      <div className="w-full bg-opacity-30 sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  )
}