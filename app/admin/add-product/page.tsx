"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { toast } from "@/hooks/use-toast"

export default function AddProductPage() {
  const { t, language } = useLanguage()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState("/placeholder.svg")

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  })

  const categories = [
    { value: "warehouse-shelving", label: t("warehouseShelving") },
    { value: "market-shelves", label: t("marketShelves") },
    { value: "kitchen-shelving", label: t("kitchenShelving") },
    { value: "trolleys", label: t("trolleys") },
    { value: "trash-bins", label: t("trashBins") },
    { value: "market-accessories", label: t("marketAccessories") },
    { value: "pos-materials", label: t("posMaterials") },
  ]

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setImagePreview(result)
        setFormData((prev) => ({ ...prev, image: result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate saving to localStorage (in real app, this would be an API call)
      const existingProducts = JSON.parse(localStorage.getItem("customProducts") || "[]")

      const newProduct = {
        id: `custom-${Date.now()}`,
        name: formData.name,
        description: formData.description,
        price: Number.parseFloat(formData.price) || 0,
        category: formData.category,
        image: formData.image || "/placeholder.svg",
        isNew: true,
        createdAt: new Date().toISOString(),
      }

      const updatedProducts = [...existingProducts, newProduct]
      localStorage.setItem("customProducts", JSON.stringify(updatedProducts))

      toast({
        title: language === "ka" ? "წარმატება!" : language === "en" ? "Success!" : "Успех!",
        description:
          language === "ka"
            ? "პროდუქტი წარმატებით დაემატა"
            : language === "en"
              ? "Product added successfully"
              : "Товар успешно добавлен",
      })

      // Reset form
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
      })
      setImagePreview("/placeholder.svg")

      // Redirect to products page
      setTimeout(() => {
        router.push("/products")
      }, 1000)
    } catch (error) {
      toast({
        title: language === "ka" ? "შეცდომა!" : language === "en" ? "Error!" : "Ошибка!",
        description:
          language === "ka"
            ? "პროდუქტის დამატება ვერ მოხერხდა"
            : language === "en"
              ? "Failed to add product"
              : "Не удалось добавить товар",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const getPageTitle = () => {
    switch (language) {
      case "en":
        return "Add New Product"
      case "ru":
        return "Добавить новый товар"
      default:
        return "ახალი პროდუქტის დამატება"
    }
  }

  const getPageDescription = () => {
    switch (language) {
      case "en":
        return "Add a new product to your store with ease."
      case "ru":
        return "Легко добавьте новый товар в ваш магазин."
      default:
        return "მარტივად დაამატეთ ახალი პროდუქტი თქვენს მაღაზიაში."
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">{getPageTitle()}</h1>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="image">
                {language === "ka" ? "პროდუქტის სურათი" : language === "en" ? "Product Image" : "Изображение товара"}
              </Label>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="Product Preview"
                    width={100}
                    height={100}
                    className="rounded-md object-cover border"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {language === "ka"
                  ? "ატვირთეთ სურათი რომელიც საუკეთესოდ წარმოაჩენს თქვენს პროდუქტს"
                  : language === "en"
                    ? "Upload an image that best represents your product"
                    : "Загрузите изображение, которое лучше всего представляет ваш товар"}
              </p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name">
                {language === "ka" ? "პროდუქტის სახელი" : language === "en" ? "Product Name" : "Название товара"}
              </Label>
              <Input
                id="name"
                type="text"
                placeholder={
                  language === "ka"
                    ? "შეიყვანეთ პროდუქტის სახელი"
                    : language === "en"
                      ? "Enter product name"
                      : "Введите название товара"
                }
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">
                {language === "ka" ? "პროდუქტის აღწერა" : language === "en" ? "Product Description" : "Описание товара"}
              </Label>
              <Textarea
                id="description"
                placeholder={
                  language === "ka"
                    ? "აღწერეთ თქვენი პროდუქტი"
                    : language === "en"
                      ? "Describe your product"
                      : "Опишите ваш товар"
                }
                className="min-h-[100px]"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="price">
                  {language === "ka" ? "ფასი (₾)" : language === "en" ? "Price (₾)" : "Цена (₾)"}
                </Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  placeholder={
                    language === "ka" ? "შეიყვანეთ ფასი" : language === "en" ? "Enter price" : "Введите цену"
                  }
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">
                  {language === "ka" ? "კატეგორია" : language === "en" ? "Category" : "Категория"}
                </Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        language === "ka"
                          ? "აირჩიეთ კატეგორია"
                          : language === "en"
                            ? "Select category"
                            : "Выберите категорию"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" size="lg" disabled={isLoading}>
              {isLoading
                ? language === "ka"
                  ? "ინახება..."
                  : language === "en"
                    ? "Saving..."
                    : "Сохранение..."
                : language === "ka"
                  ? "პროდუქტის შენახვა"
                  : language === "en"
                    ? "Save Product"
                    : "Сохранить товар"}
            </Button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Product Illustration"
            width={400}
            height={400}
            className="max-w-full h-auto"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
          <p className="text-muted-foreground mt-4 text-center">{getPageDescription()}</p>
        </div>
      </div>
    </div>
  )
}
