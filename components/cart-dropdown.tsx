"use client"

import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CartDropdown() {
  const { items, isCartOpen, toggleCart, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleCart} />}

      {/* Cart Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-96 bg-dark-600 shadow-lg z-50 transform transition-transform duration-300 ease-in-out",
          isCartOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-dark-400">
            <h2 className="text-xl font-semibold text-white">Your Cart</h2>
            <button onClick={toggleCart} className="p-1 rounded-full hover:bg-dark-500 transition-colors">
              <X className="w-6 h-6 text-gray-300" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto py-4 px-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <ShoppingBag className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-lg">Your cart is empty</p>
                <Button variant="outline" className="mt-4" onClick={toggleCart}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center space-x-4 bg-dark-500 p-3 rounded-lg">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-sm font-medium text-white">{item.name}</h3>
                      <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>

                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full bg-dark-400 hover:bg-dark-300"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="mx-2 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full bg-dark-400 hover:bg-dark-300"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 rounded-full hover:bg-dark-400 transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-dark-400 p-4">
              <div className="flex justify-between mb-4">
                <span className="text-gray-300">Total</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <Button className="w-full">Checkout</Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

