import { useRouter } from "next/router";
import { data } from "@/data";
import Custom404 from "@/pages/404";
import ShowDetails from "@/Components/ShowDetails";
import PageLayout from "@/Components/PageLayout";

export default function ClientDetails() {
  const route = useRouter();
  const { ClientDetails } = route.query;

  const dummyRequest = data.find(
    (client) => client.clientName === ClientDetails
  );

  if (!dummyRequest) {
    return <Custom404 />;
  }
  // console.log(dummyRequest);
  return (
    <PageLayout>
      <ShowDetails details={dummyRequest} />
    </PageLayout>
  );
}
