import Image from "next/image";
import { IIconBox } from "../../../../types/icon-boxes";


const IconBox = ({ imageUrl, title, description }: IIconBox) => {
  return (
    <div className="col-sm-8 col-lg-4">
      <div className="mil-iconbox mil-tac mil-mb60">
        <Image width={120} height={120} priority src={imageUrl} alt="icon" className="mil-mb30" />
        <h4 className="mil-head4 mil-mb30">{title}</h4>
        <p className="mil-text-md mil-shortened">{description}</p>
      </div>
    </div>
  );
};

export default IconBox;
