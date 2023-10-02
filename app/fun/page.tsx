import FunSection from "@/components/FunSection"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function Fun() {
  return (
    <div className="flex flex-col min-h-screen font-body bg-bgclr overflow-y-scroll">
      <Navbar />
      <main className="flex flex-grow justify-center md:py-1/10 min-h-full text-sm max-md:p-10 md:m-10">
        <FunSection />
      </main>
      <Footer />
    </div>
  )
}



