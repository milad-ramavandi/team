import { IIconBox } from "../../../../types/icon-boxes";
import IconBox from "./IconBox";

const IconBoxesList: IIconBox[] = [
  {
    imageUrl: "img/home-1/iconbox/2.svg",
    title: "Expert Team",
    description:
      "Our team consists of experienced professionals who work with passion, delivering high-quality projects.",
  },
  {
    imageUrl: "img/home-1/iconbox/1.svg",
    title: "Innovative Solutions",
    description:
      "We offer unique and creative approaches that help your business stand out in the market and achieve success.",
  },
  {
    imageUrl: "img/home-1/iconbox/3.svg",
    title: "Client Focus",
    description:
      " We prioritize client needs, deeply understanding them to create tailored solutions for maximum results.",
  },
];

export const IconBoxes = () => {
  return (
    <div className="mil-p-0-100" id="scroll">
      <div className="container">
        <div className="row mil-jcc">
          {IconBoxesList.map((item, index) => {
            return (
              <IconBox key={index} {...item}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};
