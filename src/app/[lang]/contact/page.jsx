import { getDictionary } from "@/localization/get-dictionary";
import ContactUsPageScreen from "@/screen/contact-us";
import { META_DATA_OBJECT } from "@/seo/meta-data";

export async function generateMetadata({ params }) {
  const {
    content: { seo },
  } = await getDictionary(params.lang);

  return META_DATA_OBJECT(seo, 7);
}
export default async function ContactUs({ params }) {
  const content = await getDictionary(params.lang);

  return <ContactUsPageScreen content={content.content.pages.contact} />;
}
