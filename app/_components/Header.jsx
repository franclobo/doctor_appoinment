import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  const Menu=[
    {
      id:1,
      name:"Home",
      path:"/"
    },
    {
      id:2,
      name:"Explore",
      path:"/explore"
    },
    {
      id:3,
      name:"Contact Us",
      path:"/contact"
    }
  ]
  return (
    <div className="flex justify-between items-center p-5 shadow-sm">
      <div className="flex gap-10 items-center">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item) => (
            <Link key={item.id} href={item.path}>
              <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
}

export default Header
