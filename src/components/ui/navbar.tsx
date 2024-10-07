import Link from "next/link";
import { itemsTooltip } from "../data/navListItemData";

const Navbar = () => {
  return (
    <>
      <aside className="flex-1" >
        <nav className ='grid items-start px-2 text-sm font-medium lg:px-4'>
          {
            itemsTooltip.Home.map((item) => {
              return (
                <Link key={item.id} href={item.href} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <item.attribute className="w-4 h-4" />{item.title}
                </Link>
              )
            })
          }
        </nav>
      </aside>
      <aside>
        <nav className="mt-auto grid items-start px-2 text-sm font-medium lg:px-4">
          {
            itemsTooltip.Out.map((item) => {
              return (
                <Link key={item.id} href={item.href} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary" >
                  <item.attribute className="w-4 h-4" />{item.title}
                </Link>
              )
            })
          }
        </nav>
      </aside>
    </>
  )
}

export default Navbar;
