// import { Button } from "@/components/ui/button"
// import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/herobg.png')] opacity-10"></div>
            </div>
            <div className="container mx-auto px-4 py-20 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            The prescription for Digital Success.
                        </h1>
                        <p className="text-xl text-gray-800">
                            Transforming Healthcare Through Digital Innovation
                        </p>
                        <button className="bg-gradient-to-r rounded-full from-white via-[#add8e6] to-[#f8d7da] hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white text-black text-lg px-6 py-3 w-auto">
                            Show Me How
                        </button>

                    </div>
                    <div className="relative">
                        <img
                            src="/heromedigo.png"
                            alt="Award Certificate"
                            width={600}
                            height={400}
                            className="rounded-lg"
                        />
                        <div className="absolute -right-8 -bottom-8">
                            <img src="/placeholder.svg" alt="Award Trophy" width={200} height={200} className="animate-bounce" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

