import { useRef, useState } from "react"

//components
import SocialIconList from "../components/SocialIconList"
import SkillIconList from "../components/SkillIconList"

//layout
import TwoColumn from "../layouts/TwoColumn"
import SingleColumn from "../layouts/SingleColumn"

//hooks
import useWindowSize from "../hooks/useWindowSize"

export default function Home() {
  const { width } = useWindowSize()
  //if Screen is 880px or larger display 2 columns
  if (width >= 975) {
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
          leftStyles={{ width: "40%" }}
          rightStyles={{ textAlign: "justify" }}
        />
        <SocialIconList stickToLeft={true} />
      </main>
    )
  }

  //if it is a small screen (less than 880 px) - display single column
  return (
    <main className="about-page">
      <SingleColumn
        className="page-wrapper"
        containerStyles={{ textAlign: "justify" }}
      >
        <IntroStatementSection />
        <AboutSection />
        <CurrentWorkSection />
        <SkillIconList />

        <SocialIconList />
      </SingleColumn>
    </main>
  )
}

function IntroStatementSection() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="page-title">Hi there, I'm Nick</h1>
      <p>I like to find inefficiencies and build solutions.</p>
    </div>
  )
}

function AboutSection() {
  return (
    <article>
      <header className="section-title">
        <h2>About Me</h2>
      </header>
      <section>
        <p>
          I have always been interested in a plethora of subjects from art to
          science to language. This became an internal conflict which has
          controlled several creative outlets throughout my life: In highschool
          it was art and design, in college it was science, and, post college
          the battle has continued. Ultimately this has landed me squarely in a
          place where I like to learn and create. I learn about the real world
          and I create solutions for problems plaguing it or or parts of it.
        </p>
        <p> Or at least that is my goal.</p>
      </section>
    </article>
  )
}

function CurrentWorkSection() {
  return (
    <article style={{ marginTop: "1em" }}>
      <header className="section-title">
        <h2>About My Work</h2>
      </header>
      <section>
        <p>
          I hope that my work reflects my goal which is stated above. I have
          created workflows and systems that create efficiencies. As it relates
          to development and web development, I have created several systems
          that improve or take the place of administrative tasks or that make it
          easier to track crucial information within a business.
        </p>
        <p>
          As far as my other work and professional experience, I am an
          experienced project manager. I estimate projects, create staffing
          plans, manage and control quality of deliverables, and ensure
          satisfaction with the stakeholders of the project. This experience
          comes from working at an engineering firm in the construction
          materials quality control department. Working in the contruction
          industry has honed my work ethic, time management skills, and
          (especially relating to the quality control side) given me experience
          operating within a highly regulated and standardized environment.
        </p>
      </section>
    </article>
  )
}

// //components
// import SingleColumn from "../layouts/SingleColumn"
// import SocialIconList from "../components/SocialIconList"
// import SkillIconList from "../components/SkillIconList"

// export default function Home() {
//   return (
//     <main className="home-page">
//       <h1 className="page-title">Nick Jackson</h1>
//       <SingleColumn className="page-wrapper">
//         <section className="home-content">
//           I build solutionson the web. I lead a life of continuous learning and
//           deep diving with new skills and ideas. Front end is currenlty my jam.
//         </section>

//         <SocialIconList className="home-social" />

//         <SkillIconList />
//       </SingleColumn>
//     </main>
//   )
// }
