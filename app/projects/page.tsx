import ProjectsSectionAll from "@/components/ProjectsSectionAll"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-body  font-base-lg bg-bgclr ">
      <Navbar />
      <main className="flex flex-grow justify-center md:py-1/10 min-h-full text-sm max-md:p-10 md:m-10">
        <ProjectsSectionAll />
      </main>
      <Footer />
    </div>
  )
}



