import React from "react";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./app.css";

function App() {
  AOS.init({ duration: 1000, delay: 100 });
  return (
    <>
      <section>
        <h2 data-aos="fade-zoom-in">I</h2>
      </section>
      <section>
        <h2 data-aos="flip-left" data-aos-once>
          am
        </h2>
      </section>
      <section>
        <h2 data-aos="slide-right" data-aos-once>
          developer
        </h2>
      </section>
    </>
  );
}

export default App;
