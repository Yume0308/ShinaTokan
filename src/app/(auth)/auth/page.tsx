'use client'

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";

const AuthDashboard = () => {
  return (
    <div className='w-full lg:grid lg:min-h-[650px] lg:grid-cols-1 xl:min-h-[825px] text-center place-content-center'>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">

            {/* logo */}
            <section className="flex justify-center items-center gap-1 mb-3">
              <Image src="/logo.png" alt="ShinaTokan" width={75} height={75} />
              <h1 className="text-3xl font-bold">ShinaTokan</h1>
            </section>

            {/* introduction */}
            <section>
              <h2 className="text-xl font-semibold">Welcome!</h2>
              <p className="text-sm text-gray-500 mt-2">Sign in your account to LiRyMent</p>
            </section>

            {/* social login */}
            <section>
              <Button variant='outline' className="py-6 border-2 flex space-x-3  border-gray-300 hover:bg-amber-300">
                <FcGoogle size={25}/>
                <span>Sign in with Google</span>
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthDashboard;
