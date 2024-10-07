import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  Book,
  User,
  Info,
  MessageCircle,
  MapPinHouse,
  LogOut,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Navbar from "@/components/ui/navbar"
import LogoLinkNavbar from "@/components/ui/logoLinkNavbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AvatarHeader from "@/components/ui/avatarHeader"
import ButtonSheet from "@/components/ui/buttonSheet"
import ButtonSearch from "@/components/ui/buttonSearch"

// import Sidebar from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[180px_1fr] lg:grid-cols-[210px_1fr]">

      {/* <Sidebar /> */}
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">

          {/* logo link*/}
          <LogoLinkNavbar imgSrc="/logo.png" imgAlt="ShinaTokan" size={30} title="Shinatokan" />
          {/* nav */}
          <Navbar />

        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col">
        {/* header */}
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          {/* button sheet  */}
          <ButtonSheet side="left" logo={
            {
              imgSrc: "/logo.png",
              imgAlt: "ShinaTokan",
              size: 35,
            }
          } />
          <ButtonSearch />

          {/* avatar header */}
          <AvatarHeader avatarImgSrc="https://github.com/shadcn.png" avatarImgAlt="" avatarFallback="SC" nickname="Shadcn" email="Shadcn@gmail.com"/>
        </header>

        {/* main */}
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}
