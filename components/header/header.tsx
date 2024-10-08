/* eslint-disable react/jsx-key */
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { useTranslations } from "next-intl";
import { ModeToggle } from "../shared/mode-toggle";
import IntlToggle from "../shared/intl-toggle";

type Props = { locale: string };

export default function Header({ locale }: Props) {
  const t = useTranslations("header");
  const menu = [
    t("menu.home"),
    t("menu.about"),
    <ModeToggle />,
    <IntlToggle locale={locale} />,
  ];
  return (
    <>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        <span className="text-primary-foreground">L</span>andry{" "}
        <span className="text-primary-foreground">B</span>
        itege
      </h2>
      <NavigationMenu>
        <NavigationMenuList className="gap-10">
          {menu.map((e, i) => (
            <NavigationMenuItem key={i}>
              <NavigationMenuLink>{e}</NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
