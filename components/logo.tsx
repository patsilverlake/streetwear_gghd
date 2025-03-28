import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-24 h-24">
      <Image src="/images/gghd-logo.png" alt="GGHD" fill className="object-contain" priority />
    </div>
  )
}

