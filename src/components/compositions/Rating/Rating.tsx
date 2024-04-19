import { listItems } from "@/utils";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

type StarProps = {
  score: number;
};

const Star = ({ score }: StarProps) => {
  return (
    <>
      {listItems(5).map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="w-3 h-3 m-[3px]"
          style={{ color: index < score ? "#0174BE" : "#CBCBCB" }}
        />
      ))}
    </>
  );
};

export default memo(Star);
