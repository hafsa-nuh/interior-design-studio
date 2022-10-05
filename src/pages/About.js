import React from "react";
import Stats from "../components/Stats"; 

const About = () => {
 
  const aboutPage = {
    image: "https://i.postimg.cc/7hrygS0P/about.jpg",
    text: "our team works every day to develop every detail in the interior? ocerall layout and movement paths based on spatial strategies and interactive elements . the design is functional and at the same time very unusual",
    img_url: "https://i.postimg.cc/3wQjD63f/about1.jpg",
  };

  // for stas.js
  const stats = [
    {
      value: "10",
      text: "Years Of Experience",
    },
    {
      value: "3",
      text: "Office In 3 Different Country",
    },
    {
      value: "12",
      text: "Countries We Operate In",
    },
    {
      value: "160+",
      text: "Completed Project",
    },
  ];


  return (
    <>
      <section className="section bg-green h-auto rounded-2xl ml-2 mr-2">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-24">
            <img
              className="object-cover w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
              src={aboutPage.image}
              alt=""
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h4 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                  From Creating Concept To Implementation
                </h4>
                <p className="mb-4 text-accent">
                  {aboutPage.text}
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odit, praesentium, quibusdam quod est quas facilis nobis
                  reprehenderit dolore veritatis dicta quos esse iste debitis
                  soluta corrupti! Doloribus blanditiis inventore illum!
                </p>
                <hr className="mb-8 opacity-5" />
                <img
                  className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
                  src={aboutPage.img_url}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <Stats stats={stats} />
    </>
  );
};

export default About;
