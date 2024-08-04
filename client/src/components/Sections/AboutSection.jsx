import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate function
import aboutImage from '../../assets/about.png'; // Import about image
import aboutBack from '../../assets/back.png'; // Import background image
import Button from '../Buttons/Button'

function AboutSection() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="mt-16">
      <section className="flex mt-16">
        <div className="w-1/2">
          <img src={aboutImage} alt="About Us" className="w-full h-full object-cover" />
        </div>
        <div
          className="w-1/2 bg-red-500 bg-cover flex justify-center items-center p-5"
          style={{ backgroundImage: `url(${aboutBack})` }} // Inline style for background image
        >
          <div className="flex flex-col w-4/5 relative gap-5 text-white">
            <p className="text-3xl font-bold stroke-white">
              WE ARE
            </p>
            <p className="text-3xl font-bold stroke-white">
              NON-PROFIT TEAM
            </p>
            <p className="text-xl">
              We are a team of dedicated individuals, volunteers, and supporters
              who share a common vision: to alleviate suffering, promote
              equality, and uplift communities. With unwavering determination
              and a heartfelt passion for change, we have undertaken numerous
              projects and initiatives.
            </p>

            <Button ButtonText={"Donate Now"} onClickEvent={navigate} path={"/Causes"}/>
      
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
