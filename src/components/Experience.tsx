"use client";

import SmoothScroll from "./SmoothScroll";
import Nav from "./Nav";
import Intro from "./Intro";
import Chapter01 from "./chapters/Chapter01";
import Chapter02 from "./chapters/Chapter02";
import Chapter03 from "./chapters/Chapter03";
import Chapter04 from "./chapters/Chapter04";
import Chapter05 from "./chapters/Chapter05";
import Chapter06 from "./chapters/Chapter06";
import Contact from "./Contact";

export default function Experience() {
  return (
    <SmoothScroll>
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Intro />
        <Chapter01 />
        <Chapter02 />
        <Chapter03 />
        <Chapter04 />
        <Chapter05 />
        <Chapter06 />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
