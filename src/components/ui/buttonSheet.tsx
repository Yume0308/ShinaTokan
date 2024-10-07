import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
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
import Link from "next/link"
import { itemsTooltip } from "../data/navListItemData"
import PropTypes from 'prop-types'
import Image from "next/image"

const ButtonSheet = (props: any) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={props.side} className="flex flex-col">
        <nav className="grid gap-1 text-lg font-normal">
          <Link
            href="#"
            className="mx-[-0.3rem] flex items-center gap-1 text-lg font-semibold"
          >
            <Image src={props.logo.imgSrc} alt={props.logo.imgAlt} width={props.logo.size} height={props.logo.size} />
          </Link>
          {itemsTooltip.Home.map((item) => {
            return (
              <Link
                key = {item.id}
                href = {item.href}
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <item.attribute className="h-5 w-5" />{item.title}
              </Link>
            )
          })}
        </nav>
        <nav className="mt-auto grid gap-1 text-lg font-normal">
          {itemsTooltip.Out.map((item) => {
              return (
                <Link
                  key = {item.id}
                  href = {item.href}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <item.attribute className="h-5 w-5" />{item.title}
                </Link>
              )
            })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

ButtonSheet.defaultProps = {
  side: "left",
  logo: {
    imgSrc: "/logo.png",
    imgAlt: "ShinaTokan",
    size: 35,
  }
}

ButtonSheet.propTypes = {
  side: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  })
}

export default ButtonSheet;
