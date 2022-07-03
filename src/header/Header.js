import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header(props) {
  return (
    <header id="home">
      <Navbar></Navbar>
      <Hero></Hero>
    </header>
  );
}
