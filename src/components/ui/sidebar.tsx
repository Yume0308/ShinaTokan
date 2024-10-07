import Image from "next/image";
import Link from "next/link";

const Sidebar = () =>
{
  <div className="flex h-full max-h-screen flex-col gap-2">
    {/* logo */}
    <div className='flex h-14 items-center border-b px-3 lg:h-[60px] lg:px-5'>
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="ShinaTokan" width={75} height={75} />
        <span className="text-3xl font-bold">ShinaTokan</span>
      </Link>
    </div>
    {/* items */}
    <div className="flex-auto">

    </div>
  </div>
}

export default Sidebar;
