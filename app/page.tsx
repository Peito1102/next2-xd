import Link from "next/link";


export default async function Home() {

  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Hola mi dey </span>
      <Link href="/about">Sobre nosotros</Link>
    </main>
  );
}