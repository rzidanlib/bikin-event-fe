import PublicNavbar from "@/components/Public/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicNavbar />
      <div className="max-w-7xl mx-auto">{children}</div>
    </>
  );
}
