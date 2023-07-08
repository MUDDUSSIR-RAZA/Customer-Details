import { Menu } from "antd";
import Link from "next/link";
import { AiFillHome } from "react-icons/Ai";

const items = [
  {
    label: "All Customers",
    key: "mail",
    icon: <AiFillHome />,
  },
];
const MyMenu = () => {
  return (
    <>
      <Link href={"/"}>
        <Menu mode="horizontal" items={items} />
      </Link>
      ;
    </>
  );
};
export default MyMenu;
