import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const App = ({ title, description, Regular }) => {
  return (
    <Card
      hoverable
      style={{
        boxShadow: 10,
        width: 300,
        margin: 20,
      }}
      cover={<img alt="portrait" src={Regular} />}
    >
      <Meta
        title={title}
        description={description}
        style={{
          textDecorationLine: "none",
          fontWeight: "bold",
          color: "black",
        }}
      />
    </Card>
  );
};
export default App;
