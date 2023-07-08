import { Layout } from "antd";
const { Content } = Layout;
const MyContent = ({ children }) => {
  return (
    <>
      <Content
        style={{
          margin: "24px 16px 0",
          textAlign: "center",
          paddingBottom: "50px",
          color: "#001529",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 360,
          }}
        >
          {children}
        </div>
      </Content>
    </>
  );
};

export default MyContent;
