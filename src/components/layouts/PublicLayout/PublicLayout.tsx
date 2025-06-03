import PublicNavbar from "./PublicLayoutNavbar";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div>
      <PublicNavbar />
      {children}
    </div>
  );
};
