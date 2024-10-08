import Image from "next/image";
import React from "react";
import { Arrow } from "../icons";
import { useTranslations } from "next-intl";

export default function Me() {
  const t = useTranslations("main.me");
  return (
    <section className="mt-20">
      <div className="flex absolute mx-16">
        <Arrow />
        <p className="pt-5">
          {t("salutation")}{" "}
          <span className="text-primary-foreground">Landry Bitege</span>
        </p>
      </div>
      <div className="flex mt-20 items-center gap-10">
        <div className="">
          <Image
            src={`/image_1.png`}
            alt="My profile"
            width={100}
            height={150}
          />
        </div>

        <div className="w-[53%]">
          <p className="underline decoration-border">{t("title")}</p>
          <h2 className="scroll-m-20 py-4 text-5xl font-bold tracking-tight first:mt-0">
            {t("description")}
          </h2>
          <p className="text-xs">{t("note")}</p>
        </div>
      </div>
    </section>
  );
}
