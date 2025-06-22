"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Eye, Filter } from "lucide-react"
import Image from "next/image"

export default function AirtableDemo() {
  const sampleProducts = [
    {
      id: 1,
      name: "სტელაჟი მაღალი",
      price: "250₾",
      category: "Shelving",
      status: "Active",
      image: "/images/warehouse-shelving.jpg",
      categoryColor: "bg-blue-100 text-blue-800",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      name: "მარკეტის თარო",
      price: "180₾",
      category: "Market Shelves",
      status: "Active",
      image: "/images/market-shelves.jpg",
      categoryColor: "bg-purple-100 text-purple-800",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      name: "საყიდლების ურიკა",
      price: "120₾",
      category: "Trolleys",
      status: "Draft",
      image: "/images/trolleys.jpg",
      categoryColor: "bg-orange-100 text-orange-800",
      statusColor: "bg-gray-100 text-gray-800",
    },
    {
      id: 4,
      name: "ნაგვის ურნა",
      price: "85₾",
      category: "Accessories",
      status: "Active",
      image: "/images/trash-bins.jpg",
      categoryColor: "bg-pink-100 text-pink-800",
      statusColor: "bg-green-100 text-green-800",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">📊 Products Database</h1>
            <p className="text-gray-600 mt-1">Manage your products with beautiful interface</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-4">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            All Categories
          </Button>
          <Badge className="bg-blue-100 text-blue-800">Shelving (2)</Badge>
          <Badge className="bg-purple-100 text-purple-800">Market (1)</Badge>
          <Badge className="bg-orange-100 text-orange-800">Trolleys (1)</Badge>
        </div>
      </div>

      {/* Airtable-style Grid */}
      <Card className="shadow-lg">
        <CardHeader className="bg-white border-b">
          <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-700">
            <div className="col-span-1">📷</div>
            <div className="col-span-3">Product Name</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Actions</div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {sampleProducts.map((product, index) => (
            <div
              key={product.id}
              className={`grid grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50 transition-colors ${
                index % 2 === 0 ? "bg-white" : "bg-gray-25"
              }`}
            >
              {/* Image */}
              <div className="col-span-1">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Name */}
              <div className="col-span-3 flex items-center">
                <span className="font-medium text-gray-900">{product.name}</span>
              </div>

              {/* Price */}
              <div className="col-span-2 flex items-center">
                <span className="text-lg font-semibold text-green-600">{product.price}</span>
              </div>

              {/* Category */}
              <div className="col-span-2 flex items-center">
                <Badge className={product.categoryColor}>{product.category}</Badge>
              </div>

              {/* Status */}
              <div className="col-span-2 flex items-center">
                <Badge className={product.statusColor}>{product.status}</Badge>
              </div>

              {/* Actions */}
              <div className="col-span-2 flex items-center gap-2">
                <Button size="sm" variant="outline">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mt-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-600">Total Products</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">Active</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-orange-600">4</div>
            <div className="text-sm text-gray-600">Categories</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-600">635₾</div>
            <div className="text-sm text-gray-600">Avg Price</div>
          </CardContent>
        </Card>
      </div>

      {/* Features */}
      <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">🎨 Airtable Features:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="font-medium">Image Preview</div>
            <div className="text-sm text-gray-600">Drag & Drop</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl mb-2">🏷️</div>
            <div className="font-medium">Color Categories</div>
            <div className="text-sm text-gray-600">Visual Organization</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl mb-2">📱</div>
            <div className="font-medium">Mobile App</div>
            <div className="text-sm text-gray-600">Edit Anywhere</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl mb-2">🔗</div>
            <div className="font-medium">API Access</div>
            <div className="text-sm text-gray-600">Auto Sync</div>
          </div>
        </div>
      </div>
    </div>
  )
}
