import PublicNavbar from "@/components/Public/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicNavbar />
      {children}
    </>
  );
}
