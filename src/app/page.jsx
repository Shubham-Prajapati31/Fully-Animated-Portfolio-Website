"use client"
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Image from "next/image";



export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/> 
    <Contact/>
    <Footer/>
   </div>
  );
}
