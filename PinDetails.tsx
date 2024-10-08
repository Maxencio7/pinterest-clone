//import { useParams } from "react-router-dom";
import PinImage from "./Smaller-comps/PinImage";
import PinInfo from "./Smaller-comps/PinInfo";
import Comments from "./Smaller-comps/Comments";

const PinDetails = () => {
  return (
    <div>
      <PinImage image={""} />
      <PinInfo description={""} />
      <Comments />
    </div>
  );
};

export default PinDetails;
