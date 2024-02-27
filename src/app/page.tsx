import Bored from "@/components/bored";
import Image from "next/image";

export default function Home() {

  return (
    <main className="bg-gray-700 flex min-h-screen flex-col justify-center items-center p-24">
      <h1 className="text-white text-2xl font-semibold mb-4">U bored?</h1>

      <Bored />
    </main>
  );
}
