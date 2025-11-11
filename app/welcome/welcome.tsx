import {
  Card,
  Carousel,
  Col,
  Divider,
  FloatButton,
  Row,
  Space,
  Typography,
} from "antd";
import {
  CustomerServiceOutlined,
  FileProtectOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { FaMapLocationDot } from "react-icons/fa6";
import { Layout } from "antd";
import React from "react";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  fontSize: 22,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#cab34f",
};

const { Header, Footer, Content } = Layout;

const { Text, Title, Paragraph } = Typography;

export const Welcome = () => {
  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header style={headerStyle}>
        <Space>
          <img src="/favicon.png" alt="logo" width="60" />
          AN NINH CITY
        </Space>
      </Header>
      <Content style={{ flex: 1 }}>
        <FloatButton icon={<PhoneOutlined />} type="primary" href="tel:0909773302" description="Call">
        </FloatButton>
        <Carousel
          autoplay={{ dotDuration: true }}
          autoplaySpeed={4000}
          dots
          draggable
          arrows
          style={{
            maxWidth: 1500,
            width: "100%",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <Card cover={<img src="/images/1.png" alt="welcome 1" />}></Card>
          <Card cover={<img src="/images/2.png" alt="welcome 2" />}></Card>
          <Card cover={<img src="/images/3.png" alt="welcome 3" />}></Card>
        </Carousel>
        <Typography>
          <Title level={3} style={{ textAlign: "center" }}>GIỚI THIỆU CÔNG TY TNHH BẢO VỆ AN NINH CITY</Title>
          <Paragraph>
            Công ty Bảo vệ An Ninh City được sáng lập do các nhà lãnh đạo từng
            là các cựu chiến sĩ trong quân đội – công an, có nhiều năm kinh
            nghiệm trong lĩnh vực bảo vệ an ninh. An Ninh City tự hào là một
            trong những top công ty tiên phong trong lĩnh vực cung cấp các dịch
            vụ bảo vệ an ninh như: bảo vệ nhà máy – nhà xưởng – khu công nghiệp,
            tòa nhà – văn phòng công ty, công trình xây dựng, trường học bệnh
            viện, nhà hàng khách sạn resort,… được nhiều khách hàng đánh giá uy
            tín và chuyên nghiệp hiện nay.
            <img
              src="/images/BAOVE.png"
              alt="welcome 1"
              // style={{ maxWidth: 1000 }}
            />
          </Paragraph>
        </Typography>
        <Divider />
        <Typography>
          <Title level={3} style={{ textAlign: "center" }}>
            Vì sao nên chọn Dịch vụ Bảo vệ tại Công ty An Ninh City
          </Title>
          <Paragraph>
            Để đạt được thành tích nhiều năm liền trong quá trình hoạt động,
            Công ty bảo vệ An Ninh City luôn tự tin mang đến cho quý khách hàng:
            <ul>
              <li>
                Tính chuyên nghiệp: Đội ngũ nhân viên bảo vệ được công ty bảo vệ
                An Ninh City chọn lọc kỹ lưỡng, ưu tiên chọn bộ đội, công an
                xuất ngũ có kinh nghiệm trong lĩnh vực an ninh. Ngoài ra với
                +1000 nhân viên bảo vệ ưu tú và hơn 20 chi nhánh trên toàn quốc,
                chúng tôi tự tin khẳng định vị thế điểm mạnh của mình.
              </li>
              <li>
                Tính chất lượng: Không những đội ngũ nhân viên ưu tú, chúng tôi
                còn có hệ thống quản lý chất lượng, kèm với những trang thiết bị
                hiện đại theo tiêu chuẩn ISO 9001:2015. Nhằm đảm bảo tính an
                toàn hiệu quả nhất trong quá trình hợp tác với khách hàng.
              </li>
              <li>
                Tính linh hoạt: Bảng giá dịch vụ bảo vệ tại Công ty dịch vụ bảo
                vệ An Ninh City được công khai minh bạch cho khách hàng. Với mức
                chi phí cạnh tranh trên thị trường từ sơ cấp đến cao cấp đảm bảo
                đáp ứng được mọi nhu cầu của khách hàng.
              </li>
            </ul>
          </Paragraph>
        </Typography>
        <Divider />
        <Typography>
          <Title level={3} style={{ textAlign: "center" }}>
            3 lợi ích chính khi sử dụng dịch vụ bảo vệ An Ninh City
          </Title>
          <Paragraph>
            Để đạt được thành tích nhiều năm liền trong quá trình hoạt động,
            Công ty bảo vệ An Ninh City luôn tự tin mang đến cho quý khách hàng:
            <ul>
              <li>
                Đảm bảo tính an ninh cho doanh nghiệp, cá nhân, tài sản 24/7.
                Cung ứng các dịch vụ bảo vệ toàn diện dành cho khách hàng, luôn
                đảm bảo tính chuyên nghiệp – uy tín – an toàn. Cập nhật báo cáo
                định kỳ mỗi tuần, họp – thảo luận đưa ra những giải pháp khắc
                phục những nguy cơ xấu có thể xảy ra.
              </li>
              <li>
                Luôn có những gói chi phí dịch vụ bảo vệ tối ưu dành cho khách
                hàng kèm những ưu đãi hấp dẫn, giúp quý khách được tiết kiệm
                được nhiều chi phí hơn. Toàn bộ mọi chi phí luôn được công khai
                minh bạch trong lúc ký hợp đồng dịch vụ đảm bảo không phát sinh
                thêm phí khác.
              </li>
              <li>
                Tinh gọn hệ thống quản lý nhận sự chỉ với 1 gói dịch vụ bảo vệ
                chuyên nghiệp tại công ty An Ninh City, đảm bảo nhanh chóng – uy
                tín – chuyên nghiệp. Toàn bộ mọi vấn đề tuyển dụng, quản lý,
                giám sát, kiểm tra,… đều được công ty An Ninh City triển khai và
                hoạt động.
              </li>
            </ul>
          </Paragraph>
        </Typography>
      </Content>
      <Footer
        style={{
          backgroundColor: "#cab34f",
          color: "#fff",
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Space direction="vertical">
              <Space>
                <FileProtectOutlined />
                GPKD: 0319232661 cấp ngày: 24/10/2025 bởi Sở Tài Chính TP.HCM
              </Space>
              <Space>
                <FaMapLocationDot />
                Địa chỉ: 38 Cộng Hoà, phường Tân Sơn Nhất, TP.HCM
              </Space>
              <Space>
                <UserOutlined />
                Người đại diện: Phạm Thị Lan Chi
              </Space>
            </Space>
          </Col>
          <Col span={12}>
            <Space direction="vertical">
              <Space>
                <PhoneOutlined />
                <Text
                  style={{ color: "#fff" }}
                  copyable={{ text: "0909773302" }}
                >
                  Hotline: 0909 7733 02
                </Text>
              </Space>
              <Space>
                <MailOutlined />
                <Text style={{ color: "#fff" }} copyable>
                  baove.anninhcity@gmail.com
                </Text>
              </Space>
            </Space>
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            An ninh city ©{new Date().getFullYear()} Made with ❤ by An ninh
            city development team
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};
