import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import { storage } from "../../firebase";

function Profile() {
  const context = useContext(UserContext);

  const [imageList, setImageList] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const imageListRef = ref(storage, "avatars/");

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) =>
          setImageList((prev) => [...prev, url])
        );
      });
    });
  }, []);

  useEffect(() => {
    setAvatar(imageList.find((item) => item.includes(context?.avatarName)));
  }, [imageList]);

  return (
    <div>
      <p>{context?.name}</p>
      <p>{context?.surname}</p>
      <img src={avatar} style={{ width: "100px", height: "100px" }} />
      <Button onClick={logOut}>Sign Out</Button>
    </div>
  );
}
export default Profile;
