"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export function useDynamicTitle() {
  const { language } = useLanguage()

  const getTitle = () => {
    switch (language) {
      case "en":
        return "New Motorsi - Shelving and Warehouse Equipment"
      case "ru":
        return "Нью Моторси - Стеллажи и складское оборудование"
      default:
        return "ნიუ მოტორსი - სტელაჟები და საწყობის აღჭურვილობა"
    }
  }

  const getDescription = () => {
    switch (language) {
      case "en":
        return "Professional shelving, market shelves and warehouse equipment in Georgia"
      case "ru":
        return "Профессиональные стеллажи, торговые полки и складское оборудование в Грузии"
      default:
        return "პროფესიონალური სტელაჟები, მარკეტის თაროები და საწყობის აღჭურვილობა საქართველოში"
    }
  }

  useEffect(() => {
    // Update document title
    document.title = getTitle()

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", getDescription())
    }

    // Update HTML lang attribute
    document.documentElement.lang = language
  }, [language])

  return { title: getTitle(), description: getDescription() }
}
