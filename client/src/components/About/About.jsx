import React from 'react'
import { Navbar, Footer, TitlebarImageList, BlogSection, TeamSection,AboutSection } from '../index'
import { Feature } from '../index'
import AboutCard from '../About/AboutCard';
import axios from "axios";
import { useState } from "react";
import aboutBanner from '../../assets/about-banner.jpg';

export function About() {
  const [data, setdata] = useState([]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const getMilestones = async () => {
      const res = await axios.get("http://localhost:8000/milestones", {
        responseType: "json",
      });
      console.log(res);
      setdata(res.data);
    };
    getMilestones();
  }, []);

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-center items-start w-full h-[320px] bg-cover bg-no-repeat bg-right md:bg-center p-5 relative"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${aboutBanner})` }} // Use the imported image
      >
        <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
          <h1 className="text-6xl tracking-tighter font-sans">About Us</h1>
          <p className="text-gray-200">
            We are a team of dedicated individuals, volunteers, and supporters
            who share a common vision: to alleviate suffering, promote equality,
            and uplift communities. With unwavering determination and a
            heartfelt passion for change, we have undertaken numerous projects
            and initiatives, all aimed at addressing the pressing challenges
            faced by marginalized individuals and communities.
          </p>
        </div>
      </div>


      <AboutSection/>
      <AboutCard />
      <TeamSection />
      <BlogSection />
      <Feature />
      <TitlebarImageList />
    </div>
  );
}

export default About;
