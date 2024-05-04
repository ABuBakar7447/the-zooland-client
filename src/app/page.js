import Homepage from "@/components/UI/Homepage/Homepage";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-black">
      <main className="pt-10 lg:max-w-screen-xl mx-auto bg-black min-h-screen">
        <Homepage></Homepage>
      </main>
    </div>
  );
}
