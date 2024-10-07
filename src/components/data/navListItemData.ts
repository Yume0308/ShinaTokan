import { Bell, Home, LineChart, Users, Book, User, Info, MessageCircle, MapPinHouse, LogOut} from "lucide-react"

import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

interface NavListItemInterface {
  id: string;
  title: string;
  href: string;
  attribute: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  isAccessToVisible: string[];
  tooltip?: string;
}

const NavListItemData: NavListItemInterface[] =
[
  {
    id: '791cf0e2a-2fd1-5a38-871e-3e2ca95b296e',
    title: 'Home',
    href : '/',
    attribute: Home,
    isAccessToVisible: ['all'],
    tooltip: 'Home'
  },
  {
    id: '0e32912c-aefc-57ce-8fe0-a92c3f9242db',
    title: 'Books',
    href : '/books',
    attribute: Book,
    isAccessToVisible: ['all'],
    tooltip: 'Home'
  },
  {
    id: '0f1921b5-412b-54d2-bb36-233c99b48728',
    title: 'Users',
    href : '/users',
    attribute: User,
    isAccessToVisible: ['all'],
    tooltip: 'Home'
  },
  {
    id: '4a3b3fb6-139c-5bdb-a761-a36a63e3cd74',
    title: 'Staffs',
    href : '/Staffs',
    attribute: Users,
    isAccessToVisible: ['all'],
    tooltip: 'Home'
  },
  {
    id: '2d6c6bfa-0d5f-5859-bf7f-db2a0da0f150',
    title: 'Analytics',
    href : '/analytics',
    attribute: LineChart,
    isAccessToVisible: ['all'],
    tooltip: 'Home'
  },
  {
    id: 'f3b3b3b6-139c-5bdb-a761-a36a63e3cd74',
    title: 'Message',
    href : '/message',
    attribute: MessageCircle,
    isAccessToVisible: ['all'],
    tooltip: 'Home'
  },
  {
    id: '4eabba06-0a47-564f-be60-9e08e37a44da',
    title: 'Notifications',
    href : '/notifications',
    attribute: Bell,
    isAccessToVisible: ['all'],
    tooltip: 'Home'
  },
  {
    id: 'ae45ff85-81ab-542c-afcc-cbfb51e0d1ad',
    title: 'Location',
    href : '/location',
    attribute: MapPinHouse,
    isAccessToVisible: ['all'],
    tooltip: 'Home'
  },
  {
    id: 'e7a7b1f7-2e7d-5e1c-8b3e-4f6d1f4d8c4d',
    title: 'Info',
    href : '/info',
    attribute: Info,
    isAccessToVisible: ['all'],
    tooltip: 'Home'
  },
  {
    id: 'e6da8bf7-5a93-5c9d-8ef6-fda42bbec27e',
    title: 'Logout',
    href : '/logout',
    attribute: LogOut,
    isAccessToVisible: ['all'],
    tooltip: 'Out'
  }
]

export {NavListItemData};
export type {NavListItemInterface};
