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

          <ButtonSheet side="left" logo={
            {
              imgSrc: "/logo.png",
              imgAlt: "ShinaTokan",
              size: 35,
            }
          } />
          <ButtonSearch />

          <AvatarHeader avatarImgSrc="https://github.com/shadcn.png" avatarImgAlt="" avatarFallback="SC" nickname="Shadcn" email="Shadcn@gmail.com"/>
        </header>

        {/* main */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Books</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a book.
              </p>
              <Button className="mt-4">Add Book</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
