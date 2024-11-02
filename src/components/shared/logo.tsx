import { cn } from '@/lib/utils'
import { SquareDashedMousePointer } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type LogoProps = {
  className?: string
  fontSize?: string
  iconSize?: number
}
const Logo = ({className, fontSize="text-2xl", iconSize=20}: LogoProps) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 font-bold text-2xl", className, fontSize)}>
      <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-2">
        <SquareDashedMousePointer size={iconSize} className='stroke-white'/>
      </div>
    </Link>
  )
}

export default Logo
