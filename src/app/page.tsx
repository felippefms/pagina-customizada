import Header from "../components/Header";
import SignIn from "../components/SignIn";
import Services from "../components/Services";
import Marketplace from "../components/Marketplace";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col overflow-x-hidden'>
      <Header></Header>
      <SignIn></SignIn>
      <Services></Services>
      <Marketplace></Marketplace>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}
