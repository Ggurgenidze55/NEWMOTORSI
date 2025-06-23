"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, ImageIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { createProduct } from "@/lib/products-api"

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image_url: "",
  })
  const [imagePreview, setImagePreview] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setImagePreview(result)
        setFormData((prev) => ({ ...prev, image_url: result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.category) {
      toast({
        title: "შეცდომა",
        description: "გთხოვთ შეავსოთ ყველა სავალდებულო ველი",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const product = await createProduct({
        name: formData.name,
        description: formData.description,
        price: Number.parseFloat(formData.price) || 0,
        category: formData.category,
        image_url: formData.image_url,
      })

      if (product) {
        toast({
          title: "წარმატება!",
          description: "პროდუქტი წარმატებით დაემატა",
        })

        // Reset form
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "",
          image_url: "",
        })
        setImagePreview("")

        // Redirect to products page
        router.push("/products")
      } else {
        throw new Error("Failed to create product")
      }
    } catch (error) {
      console.error("Error adding product:", error)
      toast({
        title: "შეცდომა",
        description: "პროდუქტის დამატება ვერ მოხერხდა",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ახალი პროდუქტის დამატება</h1>
          <p className="text-gray-600">შეავსეთ ფორმა ახალი პროდუქტის დასამატებლად</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Image Upload */}
                <div className="space-y-2">
                  <Label htmlFor="image">პროდუქტის სურათი</Label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      {imagePreview ? (
                        <img
                          src={imagePreview || "/placeholder.svg"}
                          alt="Preview"
                          className="w-20 h-20 rounded-md object-cover border"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-md border-2 border-dashed border-gray-300 flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    ატვირთეთ სურათი რომელიც საუკეთესოდ წარმოადგენს თქვენს პროდუქტს
                  </p>
                </div>

                {/* Product Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">პროდუქტის სახელი *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="შეიყვანეთ პროდუქტის სახელი"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">პროდუქტის აღწერა</Label>
                  <Textarea
                    id="description"
                    placeholder="აღწერეთ თქვენი პროდუქტი"
                    className="min-h-[100px]"
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  />
                </div>

                {/* Price and Category */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">ფასი (₾)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      placeholder="შეიყვანეთ ფასი"
                      value={formData.price}
                      onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">კატეგორია *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="აირჩიეთ კატეგორია" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="market-shelves">მარკეტის თაროები</SelectItem>
                        <SelectItem value="warehouse-shelving">საწყობის თაროები</SelectItem>
                        <SelectItem value="kitchen-shelving">სამზარეულოს თაროები</SelectItem>
                        <SelectItem value="clothing-racks">ტანსაცმლის თაროები</SelectItem>
                        <SelectItem value="trolleys">ურიკები</SelectItem>
                        <SelectItem value="accessories">აქსესუარები</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Upload className="w-4 h-4 mr-2 animate-spin" />
                      ინახება...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      პროდუქტის შენახვა
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-sm">
              {imagePreview ? (
                <img
                  src={imagePreview || "/placeholder.svg"}
                  alt="Product Preview"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ) : (
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">სურათის გადახედვა</p>
                  </div>
                </div>
              )}
            </div>
            <p className="text-gray-600 mt-4 text-center">დაამატეთ ახალი პროდუქტი თქვენს მაღაზიაში მარტივად</p>
          </div>
        </div>
      </div>
    </div>
  )
}
