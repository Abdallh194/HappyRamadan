import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Happy_img_01 from "../public/happy_01.jpg";
import Happy_img_02 from "../public/happy_02.jpg";
import Happy_img_03 from "../public/happy_03.jpg";
import Happy_img_04 from "../public/happy_04.jpg";
function HappyRamd() {
  return (
    <div className="HappyRamd hadle-Padding-margin-Global">
      <Container>
        <div className="head">كبار قراء القران الكريم</div>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} className="box">
            <Image
              src={Happy_img_01}
              className="img-fluid"
              alt={Happy_img_01}
            />
            <div className="header">الشيخ محمد المنشاوي</div>
            <div className="desc">
              الصوت الخاشع والقلب الضارع أحد قرَّاء القرآن الكريم الأوائل الذين
              أقاموا مدارس التجويد من مصر قارئ قرآن مصري يُعد أحد أعلام هذا
              المجال وأحد روّاد التلاوة المتميزين بتلاوته المرتلة والمجوّدة
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} className="box">
            <Image
              src={Happy_img_02}
              className="img-fluid"
              alt={Happy_img_02}
            />
            <div className="header">الشيخ محمد الطبلاوي</div>
            <div className="desc">
              لُقّْب الشيخ بـسلطان التلاوة ويُعد من الرعيل الأول لقراء مصر،
              وصاحب شهرة واسعة في العالمين العربي والإسلامي.. هو قرآن مصري ويعد
              أحد أعلام هذا المجال البارزين، أنه العبقري الوحيد الموجود على
              الساحة
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} className="box">
            <Image
              src={Happy_img_03}
              className="img-fluid"
              alt={Happy_img_03}
            />
            <div className="header">الشيخ محمود الحصري</div>
            <div className="desc">
              قارئ قرآن مصري ويعد أحد أعلام هذا المجال البارزين، من مواليد قرية
              شبرا النملة، طنطا، محافظة الغربية يُحكي أن والد الشيخ الحصري رحمه
              الله رأى في منامه كأنما يخرج من ظهره عنقود من العنب يطعم منه الناس
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} className="box">
            <Image
              src={Happy_img_04}
              className="img-fluid"
              alt={Happy_img_04}
            />
            <div className="header">الشيخ مصطفى اسماعيل</div>
            <div className="desc">
              مصطفى إسماعيل مطرب الملوك والأمراء والرؤساء والفقراء الشيخ قام
              بحفظ القرآن الكريم كاملا بالأحكام وهو فى سن 12 عامًا، أتقن
              المقامات وقرأ القرآن بأكثر من 19 مقاماً بفروعها وبصوت عذب وأداء
              قوي
            </div>
          </Col>
        </Row>
        <div className="more">المزيد من القراء</div>
      </Container>
    </div>
  );
}

export default HappyRamd;
