"use client"
import { Fragment, useState, Suspense } from 'react'
import Link from 'next/link'
import { DocSearch } from '@docsearch/react'
import { Dialog } from '@headlessui/react'
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default async function Head() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const regions = await listRegions().then((regions) => regions)

  return (
    <header className="sticky top-0 inset-x-0 z-50 group bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 h-16" aria-label="Global">
        <div className="flex lg:flex-1">
          <div className="h-full">
            
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">打開菜單</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex items-center h-full">
          <LocalizedClientLink
            href="/"
            className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            data-testid="nav-store-link"
          >
            <img className="h-8 w-auto" src="https://imgur.com/m3GZIgA.jpeg" alt="雙龍體育" />
          </LocalizedClientLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-6">
          {process.env.FEATURE_SEARCH_ENABLED && (
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/search"
              scroll={false}
              data-testid="nav-search-link"
            >
              搜尋
            </LocalizedClientLink>
          )}
          <LocalizedClientLink
            className="hover:text-ui-fg-base"
            href="/account"
            data-testid="nav-account-link"
          >
            帳號
          </LocalizedClientLink>
          <Suspense
            fallback={
              <LocalizedClientLink
                className="hover:text-ui-fg-base flex gap-2"
                href="/cart"
                data-testid="nav-cart-link"
              >
                購物車 (0)
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>
          
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <LocalizedClientLink href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">雙龍體育</span>
              <img
                className="h-8 w-auto"
                src="https://imgur.com/m3GZIgA.jpeg"
                alt=""
              />
            </LocalizedClientLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <LocalizedClientLink
                    href="/search"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    scroll={false}
                    data-testid="nav-search-link"
                  >
                    搜尋
                  </LocalizedClientLink>
                )}
                <LocalizedClientLink
                  href="/account"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  data-testid="nav-account-link"
                >
                  帳號
                </LocalizedClientLink>
              </div>
             
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
