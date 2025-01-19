import "../globals.css";
import MainLayout from "@/layout";
import rtlDetect from "rtl-detect";
import { getDictionary } from "@/localization/get-dictionary";
import { rubik_font } from "@/utils/fonts";
import { ThemeProvider } from "next-themes";

export default async function RootLayout({ children, params }) {
  const isRtl = rtlDetect.isRtlLang(params.lang);
  const {
    content: { header, footer },
  } = await getDictionary(params.lang);
  let direction = isRtl ? "rtl" : "ltr";

  return (
    <html lang={params.lang} suppressHydrationWarning dir={direction}>
      <body
        dir={direction}
        className={`bg-backgroundClr font-rubik ${rubik_font.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <MainLayout header={header} footer={footer}>
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
