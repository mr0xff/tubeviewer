import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { HiBars3 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import clsx from 'clsx'
import { NavLink, useLocation } from 'react-router';

const navigation = [
  { name: 'Página Inicial', href: '/' },
  { name: 'Vidoes', href: '/videos' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contactos', href: '/contactos' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-[#041d2c]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="text-orange-500 text-lg font-bold text-center md:text-start">O BRILHO DO RISO, QUE VEM DE CASA, MAIS CHEGA AO MUNDO</div>
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="text-yellow-300 group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-500 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <HiBars3 aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <FaXmark aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Me merece"
                src="/logo.jpg"
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 text-yellow-300">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={clsx(
                      location.pathname === item.href ? 'bg-yellow-100/20' : 'hover:bg-yellow-100/10',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name.toUpperCase()}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden text-yellow-300">
        <div className="space-y-1 px-2 pt-2 pb-3 text-yellow-300">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={clsx(
                location.pathname === item.href  ? 'bg-yellow-100/20' : 'hover:bg-yellow-100/10',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}