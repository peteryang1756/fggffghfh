import { Suspense } from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { listRegions } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import SideMenu from "@modules/layout/components/side-menu";

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img src="https://imgur.com/m3GZIgA.jpeg" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Your Brand</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex-1">
          <SideMenu regions={regions} />
        </div>
        <Navbar.Link as={Link} href="/" active>
          Home
        </Navbar.Link>
        {process.env.FEATURE_SEARCH_ENABLED && (
          <Navbar.Link as={Link} href="/search" scroll={false}>
            搜尋
          </Navbar.Link>
        )}
        <Navbar.Link as={Link} href="/account">
          帳號
        </Navbar.Link>
        <Suspense
          fallback={
            <Navbar.Link as={Link} href="/cart">
              購物車 (0)
            </Navbar.Link>
          }
        >
          <CartButton />
        </Suspense>
      </Navbar.Collapse>
    </Navbar>
  );
}
