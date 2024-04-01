import "./globals.css";
//imlnk: import Link from 'next/link'
import Navbar from "./Components/Navbar";
import NeroHeadTest from "./Components/NeroHeadTest";
import Hero from "./Components/Hero";
import LoadingComponent from "./Components/loading_comp/LoadingComponent";
import ParaQueIA from "./Components/mainpage/ParaQueIA";
import QueEsSeguridad from "./Components/mainpage/QueEsSeguridad";
import DescripcionIA from "./Components/mainpage/DescripcionIA";
import ObjetivoIA from "./Components/mainpage/ObjetivoIA";

function Home() {
  return (
    <>
      <LoadingComponent>
        <NeroHeadTest />
        <Navbar />
        <Hero />
        <ParaQueIA />
        <QueEsSeguridad />
        <DescripcionIA />
        <ObjetivoIA />
      </LoadingComponent>
    </>
  );
}

export default Home;
