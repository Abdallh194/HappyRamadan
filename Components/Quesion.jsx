import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import quran from "../public/quran.png";
import Image from "next/image";
function Quesion() {
  let [show_q_01, setshow_q_01] = useState(null);
  let [show_q_02, setshow_q_02] = useState(null);
  let [show_q_03, setshow_q_03] = useState(null);
  let [answer_01, setanswer_01] = useState("");
  let [answer_02, setanswer_02] = useState("");
  let [answer_03, setanswer_03] = useState("");
  let [answer_04, setanswer_04] = useState("");
  let [answer_05, setanswer_05] = useState("");
  let [answer_01_state, setanswer_01_state] = useState(null);
  let [answer_02_state, setanswer_02_state] = useState(null);
  let [answer_03_state, setanswer_03_state] = useState(null);
  let [answer_04_state, setanswer_04_state] = useState(null);
  let [answer_05_state, setanswer_05_state] = useState(null);

  let HandleSubmit = (e) => {
    e.preventDefault();
    if (answer_01 === "الرحمن") {
      setanswer_01_state(true);
    }
    if (answer_02 === "النساء") {
      setanswer_02_state(true);
    }
    if (answer_03 === "طه") {
      setanswer_03_state(true);
    }
    if (answer_04 === "يس") {
      setanswer_04_state(true);
    }
    if (answer_05 === "النمل") {
      setanswer_05_state(true);
    }
  };
  return (
    <>
      <div className="Quesion  hadle-Padding-margin-Global" id="Read">
        <Container>
          <div className="head">القران الكريم</div>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4} className="box">
              <div className="cont_01">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    fill="currentColor"
                    class="bi bi-boombox"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                    <path d="M11.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                    <path d="M7 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                    <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0ZM1 3v3h14V3H1Zm14 4H1v7h14V7Z" />
                  </svg>
                </div>
                <div className="header">جميع الشيوخ</div>
                <div className="desc">
                  يمكنك الاستماع إلى القرآن الكريم وتنزيل السور والمصحف بصوت
                  القارئ الذي تريد اختياره ، حيث يوفر موقع في القلوب مكتبة صوتية
                  ضخمة لأشهر قراء العالم الإسلامي.
                </div>
                <div className="cont_02">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      fill="currentColor"
                      class="bi bi-collection-play"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z" />
                      <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z" />
                    </svg>
                  </div>
                  <div className="header"> أيات مخصصه</div>
                  <div className="desc">
                    يمكنك الاستماع وتنزيل ايات مخصصه مثلا الرقيه الشرعيه وعلاج
                    السحر
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="img quran">
                <Image src={quran} alt={quran} className="img-fluid" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="box">
              <div className="cont_01">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    fill="currentColor"
                    class="bi bi-body-text"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
                    />
                  </svg>
                </div>
                <div className="header"> شرح وتفسير</div>
                <div className="desc">
                  تفسير جامع البيان في تفسير القرآن التفسير يوضّح معاني القرآن
                  الكريم ويبينها ومثلا تفسير القرآن بالقرآن
                </div>
                <div className="cont_02">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      fill="currentColor"
                      class="bi bi-book"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                    </svg>
                  </div>
                  <div className="header"> القران كاملا</div>
                  <div className="desc">
                    عن أبي أمامة الباهلي رضي الله عنه قال : سمعت رسول الله صلى
                    الله عليه وسلم يقول : اقرءوا القرآن فإنه يأتي يوم القيامة
                    شفيعا لأصحابه
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Ques-text hadle-Padding-margin-Global" id="Quesion">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} className="text">
              <div className="head">
                اسئلة دينية سهلة وصعبة واجابتها للكبار والصغار لزيادة العلم
                والمعرفة
              </div>
              <div className="desc">
                تعرفوا معنا على اكبر مجموعة من اسئلة دينية سهلة والتي تكون على
                النحو التالي
              </div>
              <div className="qusn">
                <div className="q1 q">
                  1- من هو النبي الكريم الذي أُرسل إلى قوم عاد ؟
                </div>
                <div
                  className="show_01 show"
                  onClick={() => {
                    setshow_q_01(true);
                  }}
                >
                  اظهار الاجابه
                </div>
                {show_q_01 ? (
                  <span>النبي الكريم هو سيدنا هود عليه السلام</span>
                ) : (
                  ""
                )}

                <div className="q2 q">
                  2- صحابي من الصحابة لقب بساعي الرسول صلى الله عليه وسلم ؟
                </div>
                <div
                  className="show_02 show"
                  onClick={() => {
                    setshow_q_02(true);
                  }}
                >
                  اظهار الاجابه
                </div>
                {show_q_02 ? (
                  <span>
                    هو الصحابي عمرو بن أمية الضمري رضي الله عنه وأرضاه.
                  </span>
                ) : (
                  ""
                )}
                <div className="q3 q">3- ما هو اسم زوجة فرعون ؟</div>
                <div
                  className="show_03 show"
                  onClick={(e) => {
                    setshow_q_03(true);
                  }}
                >
                  اظهار الاجابه
                </div>
                {show_q_03 ? (
                  <span>اسمها اسيا عليها السلام وكانت مؤمنة بالله تعالى.</span>
                ) : (
                  ""
                )}
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} className="img">
              <div className="content">
                ماذا إن صبرت؟ سيرضيك الله ويرضي قلبك إن الله مع الصابرين. لا
                تحزن وابتسم فقد كان الرسول عليه السلام أثقل البشر همًا ولكن كان
                أكثرهم تبسمًا. صبرًا إنه على جبر القلوب لقادر. لا تيأس من رحمة
                الله فقد أخبرنا الله إن مع العسر يسر. اصبر على قضاء ربك فرب
                الخير لا يأتيك إلا بالخير. استغفر ربك دائمًا ففي الاستغفار يزيد
                رزقك. ما يبتليك الله إلا ليختبر صبرك، فاصبر على ابتلائه وسيفتح
                لك أبواب الخير والرزق. تمنى من الله ما شئت ولا تقل هذا مستحيل
              </div>
            </Col>
            <Form
              className="allQ"
              onSubmit={HandleSubmit}
              xs={12}
              sm={12}
              md={6}
              lg={6}
            >
              <div className="allq_01">
                <div className="header">
                  ما هي السورة التي يُطلق عليها عروس القرآن؟
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="ادخل الاجابه"
                  onChange={(e) => {
                    setanswer_01(e.target.value);
                  }}
                />
                {answer_01_state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check-square-fill true"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-x-circle-fill wrong"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                )}
              </div>
              <div className="allq_01">
                <div className="header">
                  ما هي السورة التي يطلق عليها سورة الفرائض؟
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="ادخل الاجابه"
                  onChange={(e) => {
                    setanswer_02(e.target.value);
                  }}
                />
                {answer_02_state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check-square-fill true"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-x-circle-fill wrong"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                )}
              </div>
              <div className="allq_01">
                <div className="header">
                  ما هي السورة التي تسببت في إسلام عمر بن الخطاب؟
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="ادخل الاجابه"
                  onChange={(e) => {
                    setanswer_03(e.target.value);
                  }}
                />
                {answer_03_state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check-square-fill true"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-x-circle-fill wrong"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                )}
              </div>
              <div className="allq_01">
                <div className="header">
                  ما هي السورة التي تسمى بقلب القرآن؟
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="ادخل الاجابه"
                  onChange={(e) => {
                    setanswer_04(e.target.value);
                  }}
                />
                {answer_04_state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check-square-fill true"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-x-circle-fill wrong"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                )}
              </div>
              <div className="allq_01">
                <div className="header">
                  ما هي السورة التي ذكرت فيها البسملة مرتين؟
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="ادخل الاجابه"
                  onChange={(e) => {
                    setanswer_05(e.target.value);
                  }}
                />
                {answer_05_state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check-square-fill true"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-x-circle-fill wrong"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                )}
              </div>

              <input
                type="submit"
                className="form-control submit"
                value="تسجيل"
              />
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Quesion;
