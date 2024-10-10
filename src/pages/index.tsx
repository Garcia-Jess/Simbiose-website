import NavbarSharedComp from "@/components/NavbarSharedComp";
import HeroComp from "@/components/HeroComp";
import FeaturesComp from "@/components/FeaturesComp";
import ShirtComp from "@/components/ShirtComp";
import HelpComp from "@/components/HelpComp";
import FooterComp from "@/components/FooterComp";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Simbiose - Camisetas Personalizadas</title>
        <link rel="icon" href="/images/favicon.png" type="image/png" />;
        <meta
          name="description"
          content="Camisetas pintadas à mão e personalizadas de forma exclusiva. Criamos artes únicas para expressar seu estilo. Entre em contato e envie sua arte."
        />
        <meta
          name="keywords"
          content="camisetas, personalizadas, pintura manual, arte, estilo"
        />
        <meta name="author" content="Simbiose" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Simbiose - Camisetas Personalizadas"
        />
        <meta
          property="og:description"
          content="Camisetas pintadas à mão e personalizadas de forma exclusiva. Confira nossas coleções!"
        />
        <meta property="og:image" content="/images/simbiose-logo.png" />
        <meta property="og:url" content="https://www.seusite.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="bg-gray-900">
        <NavbarSharedComp />
        <HeroComp />
        <FeaturesComp />
        <ShirtComp />
        <HelpComp />
        <FooterComp />
      </div>
    </>
  );
}
