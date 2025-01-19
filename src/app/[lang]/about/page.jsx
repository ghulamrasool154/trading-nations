import { getDictionary } from "@/localization/get-dictionary";
import AboutUsPageScreen from "@/screen/about-us";

import { META_DATA_OBJECT } from "@/seo/meta-data";

export async function generateMetadata({ params }) {
  const { content: { seo } } = await getDictionary(params.lang);

  return META_DATA_OBJECT(seo, 1);
}

export default async function Home({ params }) {
  const content = await getDictionary(params.lang);

  return <AboutUsPageScreen content={content.content.pages.about} />;
}
