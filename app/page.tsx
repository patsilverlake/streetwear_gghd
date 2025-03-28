import { HoodieCard } from "@/components/hoodie-card"
import { AutoSliderBanner } from "@/components/auto-slider-banner"

export default function Home() {
  const hoodies = [
    {
      id: 1,
      name: "GGHD Tactical Hoodie",
      price: 149.99,
      image: "/images/hoodie1.png",
    },
    {
      id: 2,
      name: "GGHD Calligraphy Hoodie",
      price: 154.99,
      image: "/images/hoodie2.png",
    },
    {
      id: 3,
      name: "GGHD Kanji Hoodie",
      price: 159.99,
      image: "/images/hoodie3.png",
    },
    {
      id: 4,
      name: "GGHD Circuit Hoodie",
      price: 199.99,
      image: "/images/hoodie4.png",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Full-screen Auto-sliding Banner */}
      <AutoSliderBanner />

      {/* Product Section */}
      <section id="product-section" className="w-full py-12 md:py-24 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Latest Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hoodies.map((hoodie) => (
              <HoodieCard key={hoodie.id} {...hoodie} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

