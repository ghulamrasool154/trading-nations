import { getDictionary } from "@/localization/get-dictionary";
import GicsSectorsPage from "@/screen/services/gics-sectors";

import { META_DATA_OBJECT } from "@/seo/meta-data";

export async function generateMetadata({ params }) {
  const {
    content: { seo },
  } = await getDictionary(params.lang);

  return META_DATA_OBJECT(seo, 5);
}
export default async function GicsSectorsService({ params }) {
  const content = await getDictionary(params.lang);

  const gics = content.content.pages.our_services_gics_sectors;
  return <GicsSectorsPage content={gics} />;
}
