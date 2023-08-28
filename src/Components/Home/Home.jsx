// eslint-disable-next-line no-unused-vars
import React from "react";
import Carousel from "./Carousel";
// import video from "../../assets/videoq.mp4"

const slides = [
  { id: 1, link: "https://i.ibb.co/sFtSpNL/Raichel-003-min.jpg" },
  { id: 2, link: "https://i.ibb.co/L8SXsjp/1637771878315881.jpg" },
  { id: 3, link: "https://i.ibb.co/qDb30Xd/1616585484517317.jpg" },
  {
    id: 4,
    link: "https://i.ibb.co/nk2nR94/6725f94a3f53254d61bf8b5efbbc0529-orig.jpg",
  },
];

const Home = () => {
  return (
    <div className="flex w-full">
      {/* Carousel */}
      <div className="flex mt-16 mx-2 border-2 border-white border-double">
        <Carousel autoSlide={true}>
          {slides.map((s) => (
            <img src={s.link} key={s.id} />
          ))}
        </Carousel>
      </div>

      <div className="mt-16 h-[100%]">
        <div className="my-9 mr-2  bg-white px-4 pt-8 pb-6 rounded-2xl">
          <h1 className="text-3xl text-center my-4 font-bold">
            Штори у Тернополі на замовлення в салоні штор Руслана
          </h1>
          <p>
            Будь-яка господиня прагне зробити свій дім чарівним у всіх деталях:
            від підмітання підлоги до експонування сімейних антикваріатних
            речей, від вибору масивних меблів до здобуття найменших аксесуарів,
            які гармонійно вписуються у внутрішній інтер&apos;єр. Величезний
            асортимент тканин, кольорів та стилів відкривається в Тернополі, і
            ми готові допомогти вам не заблукати у цьому різноманітті.
            <br />
            <br />
            Наші поради стосовно оформлення вікон, вибору правильного розміру та
            дизайну жалюзі або підходящої гардини допоможуть вам прикрасити ваше
            житло.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
