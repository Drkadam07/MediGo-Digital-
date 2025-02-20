export default function Hero() {
    return (
        <section className="bg-[#003B5C] relative overflow-hidden">
<div className="absolute inset-0">
  <div className="absolute inset-0 bg-[url('/bghero.webp')] bg-cover bg-center opacity-30" ></div>
</div>
            <div className="container mx-auto px-4 py-20 relative mt-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl font-bold leading-tight">
                            The Prescription For Digital Success.
                        </h1>
                        <p className="text-xl text-gray-800 ">
                            Transforming Healthcare Through Digital Innovation
                        </p>
                        <button className="bg-gradient-to-r rounded-full from-white via-[#add8e6] to-[#f8d7da] hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white text-black text-lg px-6 py-3 w-auto">
                            Discover More
                        </button>

                    </div>
                    <div className="relative">
                        <img
                            src="/h1medigo.png"
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
