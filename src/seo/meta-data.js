export const META_DATA_OBJECT = (data, pageIndex) => {
  const pageData = data.pages[pageIndex];

  let title = `${data.name} : ${pageData.title}`;
  let url = `${data.url}/${pageData.url}`;
  let description = data.description;
  const lang = data.language.reduce((acc, lang) => {
    acc[lang] = `${data.url}/${lang}${pageData.url}`;
    return acc;
  }, {});

  return {
    title: title,
    description: description,
    generator: data.name,
    applicationName: data.name,
    keywords: "trading-nations",
    authors: [{ name: data.name }],
    publisher: data.name,
    metadataBase: url,
    alternates: {
      canonical: "/",
      languages: lang,
    },
    openGraph: {
      title: title,
      description: description,
    },
  };
};
