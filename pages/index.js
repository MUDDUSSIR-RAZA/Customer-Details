import React from "react";
import Link from "next/link";
import PageLayout from "@/Components/PageLayout";
import { AiFillHome } from "react-icons/Ai";

const MyComponent = () => {
  return (
    <PageLayout>
      <Link href="CustomersPage">Go to the Customer Page</Link>
    </PageLayout>
  );
};

export default MyComponent;
