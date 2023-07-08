import { Descriptions, Badge } from "antd";
const ShowDetails = ({ details }) => {
  return (
    <Descriptions
      title={<h1 style={{ color: "#001529" }}>Client Details</h1>}
      bordered
    >
      <Descriptions.Item label="client Name">
        {details.clientName}
      </Descriptions.Item>
      <Descriptions.Item label="Billing Mode">
        {details.billingInfo.paymentMethod}
      </Descriptions.Item>
      <Descriptions.Item label="Project">
        {details.projects[0].name}
      </Descriptions.Item>
      <Descriptions.Item label="Order time">
        {details.orderTime}
      </Descriptions.Item>
      <Descriptions.Item label="Detail" span={2}>
        {details.projects[0].details}
      </Descriptions.Item>
      <Descriptions.Item label="Project Status" span={3}>
        <Badge status="processing" text="Running" />
      </Descriptions.Item>
      <Descriptions.Item label="Client Email" span={2}>
        {details.contactInfo.email}
      </Descriptions.Item>
      <Descriptions.Item label="Negotiated Amount">
        {details.amount}
      </Descriptions.Item>
      <Descriptions.Item label="Attachment">
        {details.attachments}
      </Descriptions.Item>
      <Descriptions.Item label="Clent Number">
        {details.contactInfo.phone}
      </Descriptions.Item>
      <Descriptions.Item label="Client Address" span={3}>
        {details.contactInfo.address}
      </Descriptions.Item>
    </Descriptions>
  );
};
export default ShowDetails;
