// eslint-disable-next-line no-unused-vars
import React from "react";

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
  return (
    <section>
      <div className="bg-white w-[65%] mx-auto my-14 rounded-2xl p-10">
        <p className="text-6xl text-center pb-7">Ми припонуємо:</p>
        {data.map((value) => {
          return (
            <div className="flex space-x-16 items-center py-4 border-b-4">
              <div >
                <h1 className="text-4xl text-end ml-10">{value.id}</h1>
              </div>
              <div className="flex-col">
                <h2>{value.heading}</h2>
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
