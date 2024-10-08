import Header from "@/components/header/header";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <>
      <header>
        <Header locale={locale} />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
