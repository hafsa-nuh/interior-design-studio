import React from 'react';
import TestimonialSlider from '../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <>
      <section className="section bg-green h-auto rounded-2xl ml-2 mr-2">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
              What our customers said
            </h2>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              veniam labore nisium illum cupiditate reiciendis a numquam
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>
    </>
  );
}

export default Testimonials