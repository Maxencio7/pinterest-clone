//import { useParams } from "react-router-dom";
import UserInfo from "./Smaller-comps/UserInfo";
import BoardGrid from "./Smaller-comps/BoardGrid";
import "/home/king888/Pintii-clone/src/App.css";

// interface ProfileParams {
//   username: string;
// }
const Profile = () => {
  //   const { username } = useParams();
  return (
    <div>
      <UserInfo />
      <BoardGrid />
    </div>
  );
};

export default Profile;
