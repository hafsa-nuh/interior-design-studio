import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function HomePage() {
    const slides = [
      {
        id: 1,
        img: "https://i.postimg.cc/7hKY6t5T/home4.jpg",
        title: "Create your Space",
        text: "investing in good interior design adds value in the long run. An interior designer is well aware of the types of fixtures, lighting, drapes, paint, sofa designs and carpeting that you should put in various parts of a house",
      },
      {
        id: 2,
        img: "https://i.postimg.cc/KYfw31PC/homepage6.jpg",
        title: "Create your Space",
        text: "investing in good interior design adds value in the long run. An interior designer is well aware of the types of fixtures, lighting, drapes, paint, sofa designs and carpeting that you should put in various parts of a house",
      },
      {
        id: 3,
        img: "https://i.postimg.cc/Gtvgx90F/homepage7.jpg",
        title: "Create your Space",
        text: "investing in good interior design adds value in the long run. An interior designer is well aware of the types of fixtures, lighting, drapes, paint, sofa designs and carpeting that you should put in various parts of a house",
      },
      {
        id: 4,
        img: "https://i.postimg.cc/PqSL3RJV/homepage3.jpg",
        title: "Create your Space",
        text: "investing in good interior design adds value in the long run. An interior designer is well aware of the types of fixtures, lighting, drapes, paint, sofa designs and carpeting that you should put in various parts of a house",
      },
    ];

    const [index, setIndex] = useState(0);
    const { img, text, title } = slides[index];

    //  style for the div
    const slider = {
      marginLeft: "auto",
      marginRight: "auto",
    };

    // function to fix the number greater than my array
    const checkNumber = (number) => {
      if (number > slides.length - 1) {
        return 0;
      }
      if (number < 0) {
        return slides.length - 1;
      }
      return number;
    };

    // finctionally button next
    const nextIndex = () => {
      setIndex((currentIndex) => {
        let newItem = currentIndex + 1;
        return checkNumber(newItem);
      });
    };
    //   the prev button
    const prevIndex = () => {
      setIndex((currentIndex) => {
        let newItem = currentIndex - 1;
        return checkNumber(newItem);
      });
    };

    return (
      <>
        <main style={{ marginRight: "10px" }}>
          <section className=" flex items-center bg-green lg:bg-no-repeat py-32 h-auto rounded-2xl ml-2 ">
            <div className="container mx-auto ">
              <div className="flex items-center  ">
                <div className="flex-1  ">
                  <h1 className="text-4xl leading-[44px] md:text-5xl  lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                    {title}
                  </h1>
                  <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left text-accent">
                    {text}
                  </p>
                </div>
                <div className=" lg:flex flex-1 justify-end items-end ">
                  <img
                    className="rounded-2xl h-96 mr-32 w-full "
                    src={img}
                    alt=""
                  />
                </div>
              </div>
              <div style={slider}>
                <button
                  style={{
                    color: " white",
                    fontSize: "1.35rem",
                    background: "transparent",
                    borderColor: "transparent",
                    margin: "0 5rem",
                    transition: "var(--transition)",
                    cursor: "pointer",
                  }}
                  onClick={prevIndex}
                >
                  <FaChevronLeft />
                </button>
                <button
                  style={{
                    color: " white",
                    fontSize: "1.35rem",
                    background: "transparent",
                    borderColor: "transparent",
                    margin: "0 1rem",
                    transition: "var(--transition)",
                    cursor: "pointer",
                  }}
                  onClick={nextIndex}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </section>
        </main>
      </>
    );
}

export default HomePage