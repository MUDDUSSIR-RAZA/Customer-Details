import React from "react";
import Link from "next/link";
import PageLayout from "@/Components/PageLayout";
import Head from "next/head";

const MyComponent = () => {
  return (
    <>
      <Head>
        <title>Customers Details App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PageLayout>
        <Link href="CustomersPage">Go to the Customer Page</Link>
      </PageLayout>
    </>
  );
};

export default MyComponent;
