"use client";
import Link from "next/link";

export default function App() {
  return (
    <>
      <header>
        <nav className="flex gap-x-2">
          <Link href="/">Home</Link>
          <Link href="/numberTutorial">NumberTutorial</Link>
        </nav>
      </header>
    </>
  );
}
