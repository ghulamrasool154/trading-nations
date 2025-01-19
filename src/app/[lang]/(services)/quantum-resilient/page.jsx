import { getDictionary } from "@/localization/get-dictionary";
import QuantumResilient from "@/screen/services/quantum-resilient";

import { META_DATA_OBJECT } from "@/seo/meta-data";

export async function generateMetadata({ params }) {
  const {
    content: { seo },
  } = await getDictionary(params.lang);

  return META_DATA_OBJECT(seo, 4);
}
export default async function QuantumResilientService({ params }) {
  const content = await getDictionary(params.lang);

  const quantum_resilient =
    content.content.pages.our_services_quantum_resilient;
  return <QuantumResilient content={quantum_resilient} />;
}
