import Header from "@/components/header/header";
import Me from "@/components/shared/me";

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
      <main className="flex flex-col items-center">
        <Me />
      </main>
      <footer></footer>
    </>
  );
}
