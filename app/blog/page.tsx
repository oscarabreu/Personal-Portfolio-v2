import BlogSection from "@/components/BlogSection"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen font-body font-base-lg bg-bgclr overflow-y-scroll">
      <Navbar />
      <main className="flex flex-grow justify-center md:py-1/10 min-h-full text-sm max-md:p-10 md:m-10">
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}



