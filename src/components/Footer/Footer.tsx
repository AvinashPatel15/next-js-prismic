import React from "react";
import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Footer() {
  const client = createClient();

  const settingsData = await client.getSingle("settings");

  return (
    <>
      <footer className="px-7 py-3 flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1>{settingsData?.data?.site_title}</h1>
          </Link>
        </div>

        <div>
          <p>
            ©{new Date().getFullYear()} {settingsData?.data?.site_title}
          </p>
        </div>

        <div className="flex items-center gap-5">
          {settingsData?.data?.navigation.map(({ link, label }) => (
            <PrismicNextLink
              key={label}
              field={link}
            //   className="px-2 py-1 rounded-lg bg-orange-300 cursor-pointer"
            >
              {label}
            </PrismicNextLink>
          ))}
        </div>
      </footer>
    </>
  );
}
