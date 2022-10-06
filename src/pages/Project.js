import React from "react";
import ProjectContainer from "../components/ProjectContainer";


function Project() {
    return (
      <section className="section bg-green h-auto rounded-2xl ml-2 mr-2">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
              Our latest work
            </h2>
            <p className="subtitle text-accent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              veniam labore nisium illum cupiditate reiciendis a numquam
            </p>
          </div>
          <ProjectContainer />
        </div>
      </section>
    );
}

export default Project