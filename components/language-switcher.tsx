"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"

interface LanguageSwitcherProps {
  className?: string
}

const languages = {
  ka: { name: "ქართული", flag: "🇬🇪" },
  en: { name: "English", flag: "🇺🇸" },
  ru: { name: "Русский", flag: "🇷🇺" },
}

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`p-2 hover:bg-[#00adef]/15 text-gray-700 ${className}`}>
          <span className="mr-2">{languages[language].flag}</span>
          <span className="hidden sm:inline">{languages[language].name}</span>
          <Globe className="w-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-[#00adef] text-white border-none">
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as Language)}
            className={`text-white hover:bg-white/20 focus:bg-white/20 ${language === code ? "bg-white/30" : ""}`}
          >
            <span className="mr-2">{flag}</span>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
