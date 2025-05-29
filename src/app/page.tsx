import PublicLayout from "@/component/layouts/PublicLayout";
import Link from "next/link";

export default function Home() {
  return (
    <PublicLayout>
      <div className="flex justify-center items-center h-screen">
        <div className="p-5 bg-slate-500 rounded-md">
          <h1 className="text-3xl text-center text-white font-bold">
            BIKIN EVENT
          </h1>
          <Link
            href="/"
            className="text-white hover:text-primary text-center font-bold text-3xl mt-2 transition-colors"
          >
            HOME
          </Link>
        </div>
      </div>
    </PublicLayout>
  );
}
