"use client";

import { Suspense } from "react";
import Link from "next/link";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import { Button, Navbar } from "flowbite-react";

export default async function Nav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img src="https://imgur.com/m3GZIgA.jpeg" className="mr-3 h-6 sm:h-9" alt="雙龍體育購物 Logo" />
      
      </Navbar.Brand>
      <div className="flex md:order-2">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href="/" active>
          首頁
        </Link>
        <Link href="/store">購物</Link>
        <Link href="/account">帳號</Link>
        <Link href="/search">搜尋</Link>
        <Link href="/support">聯繫客服</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

