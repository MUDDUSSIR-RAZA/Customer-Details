import { Layout } from "antd";
const { Footer } = Layout;

const MyFooter = () => {
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          width: "100%",
          padding: "2px",
          background: "#001529",
          color: "white",
        }}
      >
        <h1> MR DEVELOPER</h1>
      </Footer>
    </>
  );
};
export default MyFooter;
