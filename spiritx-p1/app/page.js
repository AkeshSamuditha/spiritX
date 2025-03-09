import Header from "../lib/ui/Header";
import Footer from "../lib/ui/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
        <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-blue-400">SpiritX</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover the next generation platform for digital innovation and creativity.
          </p>
         
        </div>
        
        <div className="relative h-64 w-full md:h-96 mt-12">
          <Image 
            src="/placeholder-hero.jpg" 
            alt="SpiritX Platform" 
            fill
            className="object-cover rounded-xl shadow-2xl"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 border border-blue-700 rounded-xl hover:border-blue-400 transition-all">
            <h3 className="text-2xl font-bold mb-4">Powerful Features</h3>
            <p>Leverage cutting-edge technology to bring your ideas to life.</p>
          </div>
          <div className="p-6 border border-blue-700 rounded-xl hover:border-blue-400 transition-all">
            <h3 className="text-2xl font-bold mb-4">Easy to Use</h3>
            <p>Intuitive interface designed for creators of all skill levels.</p>
          </div>
          <div className="p-6 border border-blue-700 rounded-xl hover:border-blue-400 transition-all">
            <h3 className="text-2xl font-bold mb-4">Fast & Reliable</h3>
            <p>Built for performance with reliability at its core.</p>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
