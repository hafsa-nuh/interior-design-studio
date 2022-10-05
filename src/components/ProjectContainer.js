import React, { useEffect, useState } from 'react'
import ProjectFetching from './ProjectFetching';

function ProjectContainer() {
  const [project, setProject] = useState({ name: "all" });
  console.log(project);
  const [items, setItems] = useState([]);
  // console.log(items)
  const [object, setObject] = useState(0);

  useEffect(() => {
    fetch(" http://localhost:3000/project")
      .then((r) => r.json())
      .then((data) => {
        if (project.name === "all") {
          setItems(data);
        } else {
          const newItems = data.filter((item) => {
            return item.category.toLowerCase() === project.name;
          });
          console.log(newItems);
          setItems(newItems);
        }
      });
  }, [project]);

  // function for the navbar
  const handleClick = (e, id) => {
    setProject({ name: e.target.textContent.toLowerCase() });
    setObject(id);
  };
  // targeting each by name for a project navbar
  const projectsNav = [
    {
      name: "all",
    },
    {
      name: "kitchen",
    },
    {
      name: "bedroom",
    },
    {
      name: "office",
    },
    {
      name: "livingroom",
    },
    {
      name: "bathroom",
    },
  ];

  return (
    <>
        <nav className="mb-12 max-w-xl mx-auto">
          <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
            {projectsNav.map((item, id) => {
              return (
                <li
                  onClick={(e) => {
                    handleClick(e, id);
                  }}
                  className={`${
                    object === id ? "active" : ""
                  } cursor-pointer capitalize m-5 `}
                  key={id}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </nav>
        {/* the project section */}
        <div className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 ml-4 mr-6   ">
          {items.map((item) => (
            <ProjectFetching item={item} key={item.id} />
          ))}
          {/* {items.map((item) => (
            <ProjectFetching item={item} key={item.id} />
          ))} */}
        </div>
    </>
  );
}

export default ProjectContainer