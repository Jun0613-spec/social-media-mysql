import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext.js";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
    </div>
  );
};

export default Stories;
