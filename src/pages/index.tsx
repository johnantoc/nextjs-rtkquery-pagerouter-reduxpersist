import { ReactElement } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import HeadTags from "@/components/HeadTags";
import { wrapper } from "@/store";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row grow min-w-screen bg-white justify-center relative px-4 lg:px-10">
      Home
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      <HeadTags />
      {page}
    </DefaultLayout>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    return {
      props: {},
    };
  }
);
