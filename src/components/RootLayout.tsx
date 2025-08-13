import { Outlet, useNavigate } from "react-router";
import Navbar from "@/components/Navbar";

export default function RootLayout() {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    // Navigate to videos page with search query
    navigate(`/videos?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar onSearch={handleSearch} />
      <main className="lg:mx-[25%]">
        <Outlet />
      </main>
    </div>
  );
}

