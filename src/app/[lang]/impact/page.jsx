import { getDictionary } from "@/localization/get-dictionary";
import ImpactPageScreen from "@/screen/impact";
import { META_DATA_OBJECT } from "@/seo/meta-data";

export async function generateMetadata({ params }) {
  const {
    content: { seo },
  } = await getDictionary(params.lang);

  return META_DATA_OBJECT(seo, 2);
}

export default async function Home({ params }) {
  const content = await getDictionary(params.lang);
  return (
    <ImpactPageScreen
      content={content.content.pages.impact_and_innovation}
      lang={params.lang}
    />
  );
}
