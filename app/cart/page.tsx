import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, ShoppingCart, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  // This would typically come from an API or database
  const cartItems = [
    {
      id: "1",
      name: "კლასიკური მაისური",
      price: 29.99,
      image: "/placeholder.svg?height=100&width=100",
      quantity: 2,
      color: "შავი",
      size: "M",
    },
    {
      id: "2",
      name: "ზამთრის ქურთუკი",
      price: 89.99,
      image: "/placeholder.svg?height=100&width=100",
      quantity: 1,
      color: "ლურჯი",
      size: "L",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <div className="bg-white min-h-screen">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <ShoppingCart className="h-8 w-8" />
              კალათა
            </h1>
            <p className="text-muted-foreground">თქვენი კალათა შეიცავს {cartItems.length} პროდუქტს</p>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="rounded-lg border">
                  <div className="p-6">
                    <h2 className="text-lg font-semibold">პროდუქტები</h2>
                  </div>
                  <Separator />
                  <div>
                    {cartItems.map((item, index) => (
                      <div key={item.id}>
                        <div className="p-6 flex flex-col sm:flex-row gap-4">
                          <div className="flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={100}
                              height={100}
                              className="rounded-md object-cover"
                            />
                          </div>
                          <div className="flex-1 flex flex-col sm:flex-row gap-4 justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">
                                <Link href={`/products/${item.id}`} className="hover:underline">
                                  {item.name}
                                </Link>
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                ფერი: {item.color}, ზომა: {item.size}
                              </p>
                              <p className="font-medium">{item.price.toFixed(2)}₾</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center border rounded-md">
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                                  <Minus className="h-3 w-3" />
                                  <span className="sr-only">რაოდენობის შემცირება</span>
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                                  <Plus className="h-3 w-3" />
                                  <span className="sr-only">რაოდენობის გაზრდა</span>
                                </Button>
                              </div>
                              <Button variant="ghost" size="icon" className="text-muted-foreground">
                                <Trash className="h-4 w-4" />
                                <span className="sr-only">წაშლა</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                        {index < cartItems.length - 1 && <Separator />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border">
                  <div className="p-6">
                    <h2 className="text-lg font-semibold">შეკვეთის შეჯამება</h2>
                  </div>
                  <Separator />
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ქვეჯამი</span>
                      <span>{subtotal.toFixed(2)}₾</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">მიწოდება</span>
                      <span>{shipping.toFixed(2)}₾</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>ჯამი</span>
                      <span>{total.toFixed(2)}₾</span>
                    </div>
                    <Button className="w-full mt-4" size="lg">
                      გადახდაზე გადასვლა
                    </Button>
                  </div>
                </div>
                <div className="mt-6 rounded-lg border p-6">
                  <h3 className="font-medium mb-4">გაქვთ კუპონი?</h3>
                  <div className="flex gap-2">
                    <Input placeholder="კუპონის კოდი" />
                    <Button variant="outline">გამოყენება</Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">თქვენი კალათა ცარიელია</h2>
              <p className="text-muted-foreground mb-6">
                თქვენს კალათაში ჯერ არ არის პროდუქტები. დაიწყეთ შოპინგი და დაამატეთ პროდუქტები.
              </p>
              <Button asChild>
                <Link href="/products">პროდუქტების დათვალიერება</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
