import { Navbar } from "@/components/navbar/Navbar";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div>
        { children }
      </div>
    </>
  );
}