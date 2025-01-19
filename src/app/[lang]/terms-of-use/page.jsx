import HeroHeading from "@/components/abs-headings/hero-heading";
import { getDictionary } from "@/localization/get-dictionary";
import { META_DATA_OBJECT } from "@/seo/meta-data";
import React from "react";

export async function generateMetadata({ params }) {
  const {
    content: { seo },
  } = await getDictionary(params.lang);

  return META_DATA_OBJECT(seo, 9);
}
export default async function TermsOfUse({ params }) {
  return (
    <div className="about-page-screen flex items-center justify-center">
      <div className="border-secondary/30 pt-20 flex-col flex justify-center  px-5">
        <div className="max-w-maxWidth flex flex-col justify-center items-center">
          <div className="mx-auto my-20 mw-10:my-5">
            <section className="section-hero mw-10:mb-10 mb-20">
              <HeroHeading> terms of uses</HeroHeading>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
