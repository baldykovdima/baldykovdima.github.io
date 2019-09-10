import React from "react";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./app.css";
import "./app.less";

function App() {
  AOS.init({ duration: 1000, delay: 100 });
  return (
    <>
      <h2
        className="triggered"
        data-aos="fade-right"
        data-aos-anchor="#trigger-left"
      >
        triggered
      </h2>
      <section data-aos="fade-zoom-in">
        <h2>I</h2>
      </section>
      <section>
        <h2 data-aos="zoom-out-up">am</h2>
      </section>
      <section data-aos="slide-right">
        <h2 data-aos="slide-right">developer</h2>
      </section>
      <section>
        <h2 data-aos="slide-down" id="trigger-left">
          contacts
        </h2>
      </section>
    </>
  );
}

export default App;
