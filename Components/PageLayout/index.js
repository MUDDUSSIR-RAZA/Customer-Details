import { Layout } from "antd";
import MyContent from "../MyContent";
import MyFooter from "../MyFooter";
import MyHeader from "../MyHeader";
import MyMenu from "../MyMenu";

const PageLayout = ({ children }) => {
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <MyHeader />
      <MyMenu />
      <MyContent>{children}</MyContent>
      <MyFooter />
    </Layout>
  );
};

export default PageLayout;
