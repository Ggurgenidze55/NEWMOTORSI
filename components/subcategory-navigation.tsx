"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"

export default function SubcategoryNavigation() {
  const { t } = useLanguage()

  const subcategories = [
    {
      id: "shelving",
      name: t("shelving"),
      href: "/categories/shelving",
      count: 45,
      hasSubcategories: true,
      subcategories: [
        {
          id: "warehouse-shelving",
          name: t("warehouseShelving"),
          href: "/categories/warehouse-shelving",
          count: 15,
        },
        {
          id: "pallet-shelving",
          name: t("palletShelving"),
          href: "/categories/pallet-shelving",
          count: 12,
        },
        {
          id: "archive-shelving",
          name: t("archiveShelving"),
          href: "/categories/archive-shelving",
          count: 8,
        },
        {
          id: "kitchen-shelving",
          name: t("kitchenShelving"),
          href: "/categories/kitchen-shelving",
          count: 10,
        },
        {
          id: "tire-shelving",
          name: t("tireShelving"),
          href: "/categories/tire-shelving",
          count: 1,
        },
        {
          id: "clothing-shelving",
          name: t("clothingShelving"),
          href: "/categories/clothing-shelving",
          count: 1,
        },
      ],
    },
    {
      id: "market-shelves",
      name: t("marketShelves"),
      href: "/categories/market-shelves",
      count: 32,
    },
    {
      id: "market-accessories",
      name: t("marketAccessories"),
      href: "/categories/market-accessories",
      count: 28,
    },
    {
      id: "pos-materials",
      name: t("posMaterials"),
      href: "/categories/pos-materials",
      count: 3,
    },
    {
      id: "trolleys",
      name: t("trolleys"),
      href: "/categories/trolleys",
      count: 24,
    },
    {
      id: "trash-bins",
      name: t("trashBins"),
      href: "/categories/trash-bins",
      count: 16,
    },
  ]

  return (
    <div className="border-b bg-[#00adef]">
      <div className="container px-4 py-3">
        <div className="flex items-center gap-6 overflow-x-auto">
          <Link
            href="/products"
            className="text-sm font-medium whitespace-nowrap hover:text-white/80 transition-colors text-white"
          >
            {t("allSubcategories")}
          </Link>

          {/* Desktop subcategory links */}
          <div className="hidden md:flex items-center gap-6">
            {subcategories.map((subcategory) => (
              <div key={subcategory.id} className="relative">
                {subcategory.hasSubcategories ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-sm font-medium whitespace-nowrap hover:text-white/80 transition-colors flex items-center gap-1 p-0 h-auto text-white hover:bg-white/10"
                      >
                        {subcategory.name}
                        <ChevronDown className="h-3 w-3 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      <DropdownMenuItem asChild>
                        <Link href={subcategory.href} className="flex justify-between">
                          <span>ყველა {subcategory.name}</span>
                        </Link>
                      </DropdownMenuItem>
                      {subcategory.subcategories?.map((sub) => (
                        <DropdownMenuItem key={sub.id} asChild>
                          <Link href={sub.href} className="flex justify-between">
                            <span>{sub.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={subcategory.href}
                    className="text-sm font-medium whitespace-nowrap hover:text-white/80 transition-colors text-white"
                  >
                    {subcategory.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm" className="bg-white text-[#00adef] hover:bg-white/90">
                {t("subcategories")}
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {subcategories.map((subcategory) => (
                <div key={subcategory.id}>
                  <DropdownMenuItem asChild>
                    <Link href={subcategory.href} className="flex justify-between">
                      <span>{subcategory.name}</span>
                    </Link>
                  </DropdownMenuItem>
                  {subcategory.subcategories?.map((sub) => (
                    <DropdownMenuItem key={sub.id} asChild className="pl-6">
                      <Link href={sub.href} className="flex justify-between">
                        <span>{sub.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
