import { useEffect, useState } from "react";
import { jsonData } from "../../data";
import Link from "next/link";
import { Skeleton, Divider, List, Avatar } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

const AllCustomerslist = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = JSON.parse(jsonData);
      setClients(data);
    }

    fetchData();
  }, []);
  return (
    <>
      <InfiniteScroll
        dataLength={clients.length}
        hasMore={clients.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={clients}
          renderItem={(clients) => (
            <List.Item key={clients.email}>
              <List.Item.Meta
                avatar={<Avatar src={clients.image} />}
                title={
                  <Link href={`/CustomersPage/${clients.clientName}`}>
                    {clients.clientName}
                  </Link>
                }
                description={clients.contactInfo.email}
              />
              {/* <div>Content</div> */}
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </>
  );
};
export default AllCustomerslist;
