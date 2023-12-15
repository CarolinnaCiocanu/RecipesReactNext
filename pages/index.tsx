import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="home-wrapper">
        <h5 className="title">Welcome to the LEGEND Recipes application.</h5>
        <Link href="/recipes">See our best recipes</Link>
      </div>
    </>
  );
};

export default HomePage;
