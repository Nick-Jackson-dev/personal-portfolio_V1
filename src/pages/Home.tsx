//components
import SingleColumn from "../layouts/SingleColumn"
import SocialIconList from "../components/SocialIconList"

export default function Home() {
  return (
    <main className="home-page">
      <h1 className="page-title">Nick Jackson</h1>
      <SingleColumn className="page-wrapper">
        <section className="home-content">
          This should be short copy about me!
        </section>

        <SocialIconList className="home-social" />
      </SingleColumn>
    </main>
  )
}
