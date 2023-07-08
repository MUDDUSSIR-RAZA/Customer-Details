import { Layout } from "antd";
const { Header } = Layout;

const MyHeader = () => {
  return (
    <>
      <Header
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        <h1>CUSTOMER DETAILS PROJECTS</h1>
      </Header>
    </>
  );
};

export default MyHeader;
