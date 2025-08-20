import { Collapse, Row, Col, Image, Button, Typography } from "antd";
import {
  FieldTimeOutlined,
  CaretRightOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Portrait from "./media/IMG_3609.jpeg";
// import Portrait2 from "./media/portrait_2.jpeg";
// import Portrait3 from "./media/portrait_3.jpeg";
// import Portrait4 from "./media/portrait_4.jpeg";
import Regular from "./media/IMG_9363.jpeg";
// import Full2 from "./media/full_2.jpeg";
// import Full3 from "./media/full_3.jpeg";
// import Full4 from "./media/full_4.jpeg";
import "./App.css";

const { Panel } = Collapse;
const { Title, Text } = Typography;

/** 2x2 Grid gallery with its own PreviewGroup (isolated) */
const OneThumbPreview = ({ images = [], thumbHeight }) => {
  const [visible, setVisible] = useState(false);
  const cover = images?.[0];

  if (!cover) return null;

  return (
    <Image.PreviewGroup
      preview={{
        visible,
        onVisibleChange: (v) => setVisible(v),
      }}
    >
      {/* Зөвхөн НЭГ зураг харагдана, дээр нь дарахад preview нээгдэнэ */}
      <Image
        src={cover}
        style={{ objectFit: "fill", borderRadius: 8 }}
        onClick={() => setVisible(true)}
      />

      {/* Preview-д бүртгүүлэх зорилгоор үлдсэн зургуудыг нууцалж оруулна */}
      <div style={{ display: "none" }}>
        {images.map((src, i) => (
          <Image key={`${src}-${i}`} src={src} />
        ))}
      </div>
    </Image.PreviewGroup>
  );
};
const BOOKING_FAQ = [
  {
    id: "portrait",
    question: "Хөрөг зургийн төрлөөр (Биеийн дээд хэсгийн зураг авалттай)",
    answer:
      "Үүнд: <br/>- Төрсөн өдрийн багц (30/60мин) <br/>- Portrait багц (30/60мин) <br/>- Жирэмсний 60мин багц <br/>Та <a href='https://calendly.com/picshot23' target='_blank' rel='noreferrer'>энд дарж</a> цаг захиална уу.",
    images: [Portrait, Regular, Portrait], // 4 ХӨРӨГ ЗУРАГ
  },
  {
    id: "fullbody",
    question: "Бүтэн бие орсон төрлөөр",
    answer:
      "Үүнд: <br/>- Энгийн багц (30/60мин) <br/>- Хүүхдийн төрсөн өдөр (30/60мин) <br/>- Жирэмсний 60мин багц <br/>Та <a href='https://calendly.com/picshot' target='_blank' rel='noreferrer'>энд дарж</a> цаг захиална уу.",
    images: [Regular], // 4 БҮТЭН БИЕ ЗУРАГ
  },
];

const WARN_FAQ = [
  {
    id: "w1",
    question: "1. Хүүхдийн зураг авалт ямар хугацаанд дуусах вэ?",
    answer: "30 минут орчим.",
  },
  {
    id: "w2",
    question: "2. Студийн байрлал хаана?",
    answer: "Улаанбаатар хотын төвд.",
  },
  {
    id: "w3",
    question: "3. Төлбөр яаж хийх вэ?",
    answer: "Карт, бэлэн, онлайн.",
  },
  {
    id: "w4",
    question: "4. Дижитал файлыг яаж авах вэ?",
    answer: "Имэйл эсвэл апп-аар.",
  },
  {
    id: "w5",
    question: "5. Цаг тохируулахад юу хэрэгтэй вэ?",
    answer: "Нэр, утас, хүссэн цаг.",
  },
  { id: "w6", question: "6. Үнэ?", answer: "Вэбсайт/утаснаас лавлана." },
  {
    id: "w7",
    question: "7. Үйлчилгээнд юу багтдаг вэ?",
    answer: "Зөвлөмж, хэрэгсэл, хувцас гэх мэт.",
  },
  {
    id: "w8",
    question: "8. Сессийн явцад би юу авах вэ?",
    answer: "Зураг, хөтөч болон бусад зүйлс.",
  },
  {
    id: "w9",
    question: "9. Нэмэлт үйлчилгээ?",
    answer: "Хүүхэд, гэр бүл гэх мэт.",
  },
  {
    id: "w10",
    question: "10. Төрлүүд?",
    answer: "Энгийн, портрет, хүүхдийн зураг авалт.",
  },
  {
    id: "w11",
    question: "11. Онлайн захиалга?",
    answer: "Тийм, хурдан хялбар.",
  },
];

const FAQSection = () => {
  const [visibleWarnCount, setVisibleWarnCount] = useState(5);
  const canLoadMoreWarn = visibleWarnCount < WARN_FAQ.length;

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "12px 16px" }}>
      {/* Booking */}
      <Row justify="center" gutter={[16, 24]}>
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={1} style={{ textAlign: "center", marginBottom: 6 }}>
            <Text style={{ color: "black" }}>
              <FieldTimeOutlined /> Цаг авах
            </Text>
          </Title>

          <Collapse
            accordion
            style={{ background: "#83d6a6", font: "grey" }}
            defaultActiveKey={[1]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            {BOOKING_FAQ.map((item) => (
              <Panel header={item.question} key={item.id}>
                {/* ТУС БҮРДЭЭ PreviewGroup (холилдохгүй) */}
                <OneThumbPreview images={item.images} />
                <div
                  style={{ lineHeight: 1.7, marginTop: 12 }}
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </Panel>
            ))}
          </Collapse>
        </Col>
      </Row>

      {/* Warnings */}
      <Row justify="center" gutter={[16, 24]} style={{ marginTop: 12 }}>
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={3} style={{ textAlign: "center", marginBottom: 6 }}>
            <Text style={{ color: "black" }}>
              <WarningOutlined /> Анхаарах зүйлс
            </Text>
          </Title>

          <Collapse
            accordion
            style={{ background: "#d68583" }}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
          >
            {WARN_FAQ.slice(0, visibleWarnCount).map((item) => (
              <Panel header={item.question} key={item.id}>
                <div
                  style={{ lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </Panel>
            ))}
          </Collapse>

          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 12 }}
          >
            <Button
              disabled={!canLoadMoreWarn}
              onClick={() => setVisibleWarnCount((n) => n + 5)}
            >
              Цааш үзэх
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FAQSection;
