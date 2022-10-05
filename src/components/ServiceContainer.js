import React from 'react'

function ServiceContainer({service}) {

  return (
    <>
      <section
        className="section bg-green h-auto rounded-2xl ml-2 mr-2"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-24">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h4 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                  {service.text}
                </h4>
                <p className="mb-4 text-accent">
                  {service.description}
                </p>
                <hr className="mb-8 opacity-5" />
                <img
                  className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
                  src={service.img_url}
                  alt=""
                />
              </div>
            </div>
            <img
              className="object-cover w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
              src={service.image}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceContainer