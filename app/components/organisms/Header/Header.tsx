"use client"
import React from 'react'
import Navigation from '../Navigation/Navigation'
import ApplicationLogo from '../../atoms/ApplicationLogo/ApplicationLogo'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { logout } from '@/app/redux/features/userSlice';


const Header = () => {
  const user = useAppSelector((state) => state.userReducer.user);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    router.push("/login");
  }

  return (
    <header className="bg-gradient-to-r from-black to-purple-950 flex justify-start text-white py-4 items-center">
      <ApplicationLogo />
      <div className="flex-col content-center px-4 max-w-64">
        <h1 className="text-2xl font-bold">Vu-Dev Blogs</h1>
      </div>
      <div className="mx-auto">
        <Navigation />
      </div>
      {user ? (
        <div>
          <p className="text-gray-600 mr-4 ">
            <span className=" text-white font-medium mr-4">{user?.name}</span>
            <button className="text-white " onClick={handleLogout}>
              Logout
            </button>
          </p>
        </div>

      ) : (
        <Link href="/login">
          <button className="text-white">Login</button>
        </Link>
      )}
    </header>
  )
}

export default Header
