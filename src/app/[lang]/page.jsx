import HomeHero from "@/components/home-hero";
import { getDictionary } from "@/localization/get-dictionary";
import HomePageScreen from "@/screen/home";
import { META_DATA_OBJECT } from "@/seo/meta-data";

export async function generateMetadata({ params }) {
  const { content: { seo } } = await getDictionary(params.lang);

  return META_DATA_OBJECT(seo, 0);
}

export default async function Home({ params }) {
  const content = await getDictionary(params.lang);
  return <HomePageScreen content={content.content.pages.home} lang={params.lang} />;
}
