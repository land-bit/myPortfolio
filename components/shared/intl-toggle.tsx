import React from "react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";

type Props = { locale: string };

export default function IntlToggle({ locale }: Props) {
  return (
    <Link locale={locale.toString() === "en" ? "fr" : "en"} href="/">
      <Button variant="outline">
        {locale}
        <span className="sr-only">Toggle language</span>
      </Button>
    </Link>
  );
}
