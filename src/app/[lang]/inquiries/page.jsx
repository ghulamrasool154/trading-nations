import { getDictionary } from "@/localization/get-dictionary";
import InquiriesPageScreen from "@/screen/inquiries";

import { META_DATA_OBJECT } from "@/seo/meta-data";

export async function generateMetadata({ params }) {
  const {
    content: { seo },
  } = await getDictionary(params.lang);

  return META_DATA_OBJECT(seo, 10);
}
export default async function Inquiries({ params }) {
  const content = await getDictionary(params.lang);

  return <InquiriesPageScreen content={content.content.pages.inquiries} />;
}
