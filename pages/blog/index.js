import React from "react";
import Articles from "../../components/blog/articles";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";

const Home = ({ articles, categories, blog }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={blog.attributes.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{blog.attributes.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, blogRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/blog", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      blog: blogRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
