import { Route, Routes } from "react-router";
import RootLayout from "@/components/RootLayout";
import Home from "@/pages/Home";
import Videos from "./pages/Videos";
import VideoWatch from "./pages/VideoWatch";

export default function App(){
  return(
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="videos" element={<Videos />} />
        <Route path="watch/:videoId" element={<VideoWatch />} />
      </Route>
    </Routes>
  )
}

