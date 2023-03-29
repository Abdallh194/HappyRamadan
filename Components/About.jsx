import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About_Img from "../public/about.png";
function About() {
  return (
    <div className="About hadle-Padding-margin-Global" id="About">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} className="txt-box">
            <div className="head">معلومات حولنا</div>
            <div className="desc">
              لابد من نبع الكلام الجميل من اعماق الشخص وارساله الى الاحبة
              والاقارب بمناسبة شهر رمضان، لان فيها اجر وثواب كبير عند الله، كما
              يستحب ان ترفق الادعية الجميلة والعبارات القصيرة المعبرة عن فضل شهر
              رمضان.شهر يرتفع فيه الدرجات شهر عظيم، شهر جميل، شهر يشعر المسلم
              بالفرحة، شهر رمضان الكريم.فع الله قدرك وفرج كربك وبلغك شهر الرحمة
              ودمت لمن أحبك.أسأل من أهل الهلال وأرسى الجبال أن يجعلك كل رمضان
              وأنت بأحسن حال. يا مرحب بأجمل شهر في السنة، مرحب لشهر الصوم
              والرحمة والمغفرة والراحة، الشهر الذي يغسل قلوبنا من الذنوب ويبعدنا
              عن المعاصي، كل سنة والجميع بخير في هذا الشهر الكريم.يا الله قر
              عيون أهلي وأصحابي برمضان وأنعم عليهم بلذة الجمع عند الأسحار
              والإفطار. الصيام لمن امتنع عن السيئات وليس لمن امتنع عن الطعام
              والشراب
            </div>
            <div className="more">اعرف المزيد</div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="img-box">
            <Image className="img-fluid" src={About_Img} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
