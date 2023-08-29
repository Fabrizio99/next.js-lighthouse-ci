import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page Title",
  description: "My Page description",
};

export default function Home() {
  return (
    <main>
      <div>
        <h1>Next.js + Lighthouse CI</h1>
      </div>
    </main>
  );
}
