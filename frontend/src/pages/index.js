import Head from 'next/head';
import { usePageView } from '../hooks/use-page-view';
import { Layout as MarketingLayout } from '../layouts/marketing';
import { HomeCta } from '../sections/home/home-cta';
import { HomeFaqs } from '../sections/home/home-faqs';
import { HomeFeatures } from '../sections/home/home-features';
import { HomeHero } from '../sections/home/home-hero';
import { HomeReviews } from '../sections/home/home-reviews';

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>AtomAnalytics</title>
      </Head>
      <main>
        <HomeHero />
        {/* <HomeFeatures />
        <HomeReviews />
        <HomeCta />
        <HomeFaqs /> */}
      </main>
    </>
  );
};

Page.getLayout = (page) => <MarketingLayout>{page}</MarketingLayout>;

export default Page;
