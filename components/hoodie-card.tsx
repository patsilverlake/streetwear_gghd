"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

interface HoodieCardProps {
  id: number
  name: string
  price: number
  image: string
}

export function HoodieCard({ id, name, price, image }: HoodieCardProps) {
  const { addItem } = useCart()

  const handleBuyNow = () => {
    addItem({ id, name, price, image })
  }

  return (
    <div className="bg-dark-800 rounded-lg overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-100">{name}</h3>
        <p className="text-gray-400 mb-4">${price.toFixed(2)}</p>
        <Button className="w-full" variant="outline" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </div>
    </div>
  )
}

