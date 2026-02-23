import { Nav } from "../components/nav";
import AboutStudio from "../components/aboutStudio";
import Footer from "../components/footer";
import { contactoInfo } from "../data/contactInfo";
export default function Home() {
  return (
    <main>
      <Nav></Nav>
      <AboutStudio></AboutStudio>
      <Footer info={contactoInfo}></Footer>
    </main>
  )
}
