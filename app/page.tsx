'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import Image from 'next/image'
import logo from '../public/logo.svg'

export default function SplineSceneBasic() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black font-inter">
      <Card className="w-full h-[500px] bg-black relative overflow-hidden border-none rounded-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
        />
        
        <div className="flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mt-4 leading-tight">
            A New Way to Explore AI
            </h1>
            <p className="mt-6 text-neutral-300 max-w-lg leading-relaxed">
            Launching March 11, 2025—AIPortalX makes discovering AI models effortless. Stay tuned.

Questions? Reach us at <a href="mailto:team.aiportalx@gmail.com" className="font-medium text-neutral-50">team.aiportalx@gmail.com</a>
            </p>
            <div className="mt-11">
              <Image src={logo} alt="Logo" width={150} height={150} />
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}