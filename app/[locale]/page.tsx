import Header from "@/components/header/header";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <>
      <header className="flex justify-around border-b py-4 bg-secondary">
        <Header locale={locale} />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
