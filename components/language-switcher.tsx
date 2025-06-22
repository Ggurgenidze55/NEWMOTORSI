import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`p-2 hover:bg-[#00adef]/15 text-gray-700 ${className}`}>
          <Globe className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-[#00adef] text-white border-none">
        <DropdownMenuItem>English</DropdownMenuItem>
        <DropdownMenuItem>Spanish</DropdownMenuItem>
        <DropdownMenuItem>French</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
