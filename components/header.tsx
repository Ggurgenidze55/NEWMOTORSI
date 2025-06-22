"use client"
import Link from "next/link"
import type React from "react"

import Image from "next/image"
import { Menu, ChevronDown, ChevronRight, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import LanguageSwitcher from "@/components/language-switcher"
import LogoFallback from "@/components/logo-fallback"
import { useLanguage } from "@/contexts/language-context"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Header() {
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance animation
      gsap.fromTo(headerRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

      // Logo animation
      // gsap.fromTo(
      //   logoRef.current,
      //   { scale: 0, rotation: -180 },
      //   { scale: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)", delay: 0.3 },
      // )

      // Navigation items staggered animation
      gsap.fromTo(
        navRef.current?.children || [],
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.5 },
      )

      // Social icons animation
      // gsap.fromTo(
      //   socialRef.current?.children || [],
      //   { scale: 0, rotation: 360 },
      //   { scale: 1, rotation: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)", delay: 0.8 },
      // )

      // Header scroll effect
      ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to(headerRef.current, {
            backgroundColor: progress > 0.1 ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.95)",
            backdropFilter: progress > 0.1 ? "blur(10px)" : "blur(2px)",
            boxShadow: progress > 0.1 ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "0 1px 3px rgba(0, 0, 0, 0.05)",
            duration: 0.3,
          })
        },
      })

      // Mobile menu animation
      if (isMobileMenuOpen && mobileMenuRef.current) {
        gsap.fromTo(
          mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" },
        )

        gsap.fromTo(
          mobileMenuRef.current.querySelectorAll("a"),
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, delay: 0.2 },
        )
      }
    }, headerRef)

    return () => ctx.revert()
  }, [isMobileMenuOpen])

  // Add hover animations for navigation items
  const handleNavHover = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      y: -2,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleNavLeave = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const productCategories = [
    {
      id: "shelving",
      name: t("shelving"),
      href: "/categories/shelving",
      hasSubcategories: true,
      subcategories: [
        {
          id: "warehouse-shelving",
          name: t("warehouseShelving"),
          href: "/categories/warehouse-shelving",
        },
        {
          id: "pallet-shelving",
          name: t("palletShelving"),
          href: "/categories/pallet-shelving",
        },
        {
          id: "archive-shelving",
          name: t("archiveShelving"),
          href: "/categories/archive-shelving",
        },
        {
          id: "kitchen-shelving",
          name: t("kitchenShelving"),
          href: "/categories/kitchen-shelving",
        },
      ],
    },
    {
      id: "market-shelves",
      name: t("marketShelves"),
      href: "/categories/market-shelves",
    },
    {
      id: "market-accessories",
      name: t("marketAccessories"),
      href: "/categories/market-accessories",
    },
    {
      id: "pos-materials",
      name: t("posMaterials"),
      href: "/categories/pos-materials",
    },
    {
      id: "trolleys",
      name: t("trolleys"),
      href: "/categories/trolleys",
    },
    {
      id: "trash-bins",
      name: t("trashBins"),
      href: "/categories/trash-bins",
    },
  ]

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {!logoError ? (
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/new-motorsi-logo.png"
                alt="New Motorsi Logo"
                width={220}
                height={75}
                className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                priority
                onError={() => setLogoError(true)}
              />
            </Link>
          ) : (
            <LogoFallback />
          )}

          {/* Navigation */}
          <nav ref={navRef} className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary font-medium transition-colors relative group"
              onMouseEnter={handleNavHover}
              onMouseLeave={handleNavLeave}
            >
              {t("home")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-primary font-medium transition-colors relative group flex items-center gap-1 p-0 h-auto hover:bg-transparent"
                  onMouseEnter={handleNavHover}
                  onMouseLeave={handleNavLeave}
                >
                  {t("products")}
                  <ChevronDown className="h-4 w-4 ml-1" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 bg-white border border-gray-200 shadow-lg z-[60]">
                <DropdownMenuItem asChild>
                  <Link href="/products" className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
                    <span>ყველა პროდუქტი</span>
                  </Link>
                </DropdownMenuItem>
                {productCategories.map((category) => (
                  <div key={category.id}>
                    {category.hasSubcategories ? (
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
                          <span>{category.name}</span>
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="bg-white border border-gray-200 shadow-lg z-[60]">
                          <DropdownMenuItem asChild>
                            <Link href={category.href} className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
                              <span>ყველა {category.name}</span>
                            </Link>
                          </DropdownMenuItem>
                          {category.subcategories?.map((sub) => (
                            <DropdownMenuItem key={sub.id} asChild>
                              <Link href={sub.href} className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
                                <span>{sub.name}</span>
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    ) : (
                      <DropdownMenuItem asChild>
                        <Link href={category.href} className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
                          <span>{category.name}</span>
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="text-gray-700 hover:text-primary font-medium transition-colors relative group"
              onMouseEnter={handleNavHover}
              onMouseLeave={handleNavLeave}
            >
              {t("about")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary font-medium transition-colors relative group"
              onMouseEnter={handleNavHover}
              onMouseLeave={handleNavLeave}
            >
              {t("contact")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher
  className="bg-white text-black border border-gray-200 transition-all duration-300 hover:bg-[#00adef] hover:text-white hover:-translate-y-1 hover:shadow-md"
/>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden text-[#00adef] hover:bg-[#00adef]/10"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="bg-[#00adef] rounded-lg mt-4 overflow-hidden">
              <nav className="flex flex-col">
                <Link
                  href="/"
                  className="text-white hover:bg-white/10 px-4 py-3 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("home")}
                </Link>

                {/* Products Section */}
                <div className="border-t border-white/20">
                  <Link
                    href="/products"
                    className="text-white hover:bg-white/10 px-4 py-3 font-medium transition-colors block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("products")}
                  </Link>
                  {productCategories.map((category) => (
                    <div key={category.id} className="border-t border-white/10">
                      <Link
                        href={category.href}
                        className="text-white hover:bg-white/10 px-4 py-3 transition-colors block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                      {category.subcategories?.map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.href}
                          className="text-white hover:bg-white/10 px-8 py-2 text-sm transition-colors block border-t border-white/5"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="text-white hover:bg-white/10 px-4 py-3 font-medium transition-colors border-t border-white/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("about")}
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:bg-white/10 px-4 py-3 font-medium transition-colors border-t border-white/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("contact")}
                </Link>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 p-4 border-t border-white/20">
                  <Link
                    href="#"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <span className="text-white text-sm font-bold">f</span>
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <span className="text-white text-sm font-bold">in</span>
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <span className="text-white text-sm font-bold">@</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
