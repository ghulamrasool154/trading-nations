import { getDictionary } from "@/localization/get-dictionary";
import PartnersScreen from "@/screen/partners";
import { META_DATA_OBJECT } from "@/seo/meta-data";

export async function generateMetadata({ params }) {
  const {
    content: { seo },
  } = await getDictionary(params.lang);

  return META_DATA_OBJECT(seo, 11);
}

export default async function Partners({ params }) {
  const content = await getDictionary(params.lang);
  return (
    <PartnersScreen
      content={content.content.pages.partners_and_ecosystem}
      lang={params.lang}
    />
  );
}
