// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";

const data = [
  {
    id: "01",
    heading: "Виїзд для замірів",
    description: "Доступний безкоштовний виїзд для замірів штор",
  },
  {
    id: "02",
    heading: "Повіска штор",
    description: "Є доступною функція повіски штор робітниками ательє",
  },
  {
    id: "03",
    heading: "Прасування штор",
    description:
      "Працівники ательє прасують штори після завершення пошиття штор",
  },
];

const Branding = () => {

  const [animate, setAnimate] = useState([]);

  useEffect(() => {
    const divs = document.querySelectorAll(".floating-div");
    const floatingDiv = Array.from(divs);

    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    function handleScroll() {
      floatingDiv.forEach((div, index) => {
        if (isElementInViewport(div) && !animate.includes(index)) {
          setAnimate((prev) => [...prev, index]);
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animate]);

  return (
    <section>
      <div className="bg-white w-[65%] mx-auto my-14 rounded-2xl p-10">
        <p className="text-6xl text-center pb-7">Ми пропонуємо:</p>
        {data.map((value, index) => {
          return (
            <div key={index} className={`flex space-x-16 items-center py-4 border-b-4 hover:bg-purple-dark 
              hover:text-white rounded-xl floating-div ${animate.includes(index) ? 'animate-slide' : 'invisible'}`}>
              <div >
                <h1 className="text-4xl text-end ml-10 font-bold">{value.id}</h1>
              </div>
              <div className="flex-col">
                <h2 className="text-2xl font-bold pb-2">{value.heading}</h2>
                <p>{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Branding;
