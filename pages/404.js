import Link from "next/link";
import Layout from "../components/layout";
import { NAV_ITEMS } from "../components/nav";
import SectionDefault from "../components/sectionDefault";

const Error = ({ slug, homepage }) => {
  // const router = useRouter();

  return (
    <Layout>
      <SectionDefault
        classes={"w-full min-h-[83vh] px-[10%] text-center"}
        display={"flex flex-col items-center justify-center"}
      >
        <div className="flex items-center justify-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 md:h-34 md:w-34 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className=" text-4xl md:text-6xl text-red-500">Ups...</h2>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-2xl text-red-500 mb-10 ">
            No hemos podido encontrar esta página.
          </p>
          <p className="text-sm text-black mb-4">
            {"(Pero para nosotros todo tiene solución...)"}
          </p>

          <h2 className="text-2xl text-black mb-4">
            A dónde querés que te redirijamos?
          </h2>

          <nav className="w-full h-full flex justify-center items-center">
            <ul className="h-full flex justify-center items-center">
              {NAV_ITEMS.map((item) => {
                return item.title != "Contactanos" ? (
                  <li
                    key={item.id}
                    className="li-nav mx-3 text-primary-dark font-semibold"
                  >
                    <Link href={item.href}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
          </nav>
        </div>
      </SectionDefault>
    </Layout>
  );
};

// export async function getStaticProps(context) {
//   let { slug } = context.params;

//   const [homepageRes] = await Promise.all([
//     fetchAPI("/homepage", {
//       populate: {
//         hero: "*",
//         seo: { populate: "*" },
//         banner: "*",
//       },
//     }),
//   ]);

//   return {
//     props: {
//       slug,
//       homepage: homepageRes.data,
//     },
//   };
// }

export default Error;
