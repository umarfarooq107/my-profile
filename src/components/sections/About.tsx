import { awards } from "@/data/awards";

export function About() {
  return (
    <div id="about" className="section-about flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-user-circle" />
        About
      </div>
      <h4 className="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
        Building scalable software and <br className="d-none d-lg-block" />
        web applications with <br className="d-none d-lg-block" />
        modern technology
      </h4>
      <p className="s-desc text-black-56 scrolling-effect effectTop">
        brand identity, and no-code development to help
        <br className="d-none d-lg-block" /> businesses move faster while staying true to their personality. <br />
        <br />
        Every project is approached with both strategy and style—making sure <br className="d-none d-lg-block" />
        design isn’t just good-looking, but also purposeful and effective.
      </p>
     
    </div>
  );
}
