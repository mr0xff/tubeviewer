import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";

export default function RootLayout(){
  return(
    <main>
      <Navbar />
      <section className="bg-orange-100 min-sm:md:mx-20 min-xl:mx-96">
        <Outlet />
      </section>
    </main>
  )
}