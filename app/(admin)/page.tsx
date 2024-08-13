import { Button } from "@/components/ui/button";
import Link from "next/link";

function Home() {
  return (
    <main className="p-10 bg-white m-10 rounded-sm w-full">
      <h1 className="text-4xl font-light">
        Welcome to{" "}
        <span className="text-[#64B5F5] font-semibold">Assistly</span>
      </h1>
      <h2 className="mt-2 mb-10">
        Your customisable <span className="font-semibold">AI Chat Agent</span>{" "}
        that helps you manage your customer conversations.
      </h2>

      <Link href="/create-chatbot">
        <Button className="bg-[#64B5F5] hover:opacity-50">
          Let&apos;s started by creating your first chatbot
        </Button>
      </Link>
    </main>
  );
}

export default Home;
