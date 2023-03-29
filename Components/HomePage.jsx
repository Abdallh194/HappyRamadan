import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Home_Fannos_Img from "../public/fanoos.png";
function HomePage() {
  return (
    <div className="homePage">
      <div className="overlay">
        <Container>
          <Row className="content">
            <Col xs={12} sm={12} md={6} lg={6} className="txt-box">
              <div className="head">رمضان يجمعنا </div>
              <div className="head"> كل عام وانتم بخير </div>
              <div className="desc">
                <div>
                  الحمد لله على حلول شهر رمضان المبارك، واسال الله ان يديم هذا
                  الشهر كله بالخير عليكم
                </div>
                <div>
                  اللهم لا تجعل رمضان يمر علينا إلا وقد أصلحت فساد قلوبنا وسترت
                  عيوبنا وجبرت نواقصنا
                </div>
                <div>
                  ربي ادبر هذا الشهر وانت مستجيب لدعائنا واستغاثتنا يا الله،
                  اللهم ارزقنا بحلالك وابعد عنا حرام الدنيا واهوائها
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="img-box">
              <Image
                src={Home_Fannos_Img}
                alt="Home_Fannos_Img"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;
