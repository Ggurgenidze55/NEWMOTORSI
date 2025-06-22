"use client"

import Link from "next/link"

interface LogoFallbackProps {
  className?: string
  isFooter?: boolean
}

export default function LogoFallback({ className = "", isFooter = false }: LogoFallbackProps) {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      <div
        className={`text-2xl font-bold transition-transform group-hover:scale-105 ${
          isFooter ? "text-white" : "text-primary"
        }`}
      >
        <span className="text-primary">ნიუ</span>
        <span className={isFooter ? "text-white ml-2" : "text-gray-800 ml-2"}>მოტორსი</span>
      </div>
    </Link>
  )
}
