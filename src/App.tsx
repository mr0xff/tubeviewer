import { Route, Routes } from "react-router";
import RootLayout from "@/components/RootLayout";
import Home from "@/pages/Home";
import Videos from "./pages/Videos";
import VideoWatch from "./pages/VideoWatch";
import Producoes from "./pages/Producoes";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

export default function App(){
  return(
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="videos" element={<Videos />} />
        <Route path="watch/:videoId" element={<VideoWatch />} />
        <Route path="producoes" element={<Producoes />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
      </Route>
    </Routes>
  )
}

