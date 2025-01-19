import { getDictionary } from "@/localization/get-dictionary";
import ServicePageScreen from "@/screen/services";
import TechnologyPageScreen from "@/screen/technology";

import { META_DATA_OBJECT } from "@/seo/meta-data";

export async function generateMetadata({ params }) {
  const {
    content: { seo },
  } = await getDictionary(params.lang);

  return META_DATA_OBJECT(seo, 3);
}
export default async function Home({ params }) {
  const content = await getDictionary(params.lang);

  return <ServicePageScreen content={content.content.pages.our_services} />;
}
