import { Outlet } from "react-router";

// Compositional Layout
const RootLayout = () => {
  return (
    <main className="bg-[#f6f5f8] min-h-screen">
      <div className="max-w-[768px] mx-auto p-4">
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
