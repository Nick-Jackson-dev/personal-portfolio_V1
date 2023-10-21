import { useRef, useState } from "react"

//components
import SocialIconList from "../components/SocialIconList"
import SkillIconList from "../components/SkillIconList"

//layout
import TwoColumn from "../layouts/TwoColumn"
import SingleColumn from "../layouts/SingleColumn"

//hooks
import useWindowSize from "../hooks/useWindowSize"

export default function About() {
  const { width } = useWindowSize()
  //if Screen is 880px or larger display 2 columns
  if (width >= 880) {
    return (
      <main className="about-page">
        <TwoColumn
          containerClassName="page-wrapper"
          leftSideJSX={
            <>
              <IntroStatementSection />
              <hr />
              <SkillIconList />
            </>
          }
          rightSideJSX={
            <>
              <AboutSection />
              <CurrentWorkSection />
            </>
          }
          leftStyles={{ width: "80%" }}
        />
        <SocialIconList stickToLeft={true} />
      </main>
    )
  }

  //if it is a small screen (less than 880 px) - display single column
  return (
    <main className="about-page">
      <SingleColumn className="page-wrapper">
        <IntroStatementSection />
        <AboutSection />
        <SkillIconList />
        <CurrentWorkSection />
        <SocialIconList />
      </SingleColumn>
    </main>
  )
}

function IntroStatementSection() {
  return <div className="page-title">Hi there, I'm Nick</div>
}

function AboutSection() {
  return (
    <article>
      <header className="section-title">About Me</header>
      <section>Section 1 - about me!</section>
    </article>
  )
}

function CurrentWorkSection() {
  return (
    <article>
      <section>Section 2 - What I am working on now</section>
    </article>
  )
}
