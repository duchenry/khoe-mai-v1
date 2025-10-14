import Image from "next/image";
import { ModeToggle } from "./components/ModeToggle";

export default function Home() {
  return (
    <div className="flex p-6 items-center justify-between">
      <h1 className="text-3xl text-foreground font-bold underline">Hello, <span className="text-primary">Next.js!</span></h1>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
