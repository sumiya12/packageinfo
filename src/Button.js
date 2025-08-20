import React from "react";
import { Button } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";

const App = ({ name, className }) => {
  let check;
  let ner;

  if (name === "Regular") {
    ner = "Энгийн багц";
    check = "https://calendly.com/picshot";
  } else {
    ner = "Portrait багц";
    check = "https://calendly.com/picshot23";
  }
  return (
    <Button className={className} style={{ margin: "10px" }} href={check}>
      {ner}
      <UpCircleOutlined />
    </Button>
  );
};
export default App;
