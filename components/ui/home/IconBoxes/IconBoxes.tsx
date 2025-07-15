import { IIconBox } from "../../../../types/icon-boxes";
import IconBox from "./IconBox";
import { texts } from "../../../../lib/texts";

const IconBoxesList: IIconBox[] = texts.homePage.iconBox;

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
