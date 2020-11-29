import { authService, dbService } from "fBase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default ({ userObj, refreshUser }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  //   const getMyNweets = async () => {
  //     const nweets = await dbService.collection("nweets").where("creatorId", "==", userObj.uid).orderBy("createAt").get();
  //     console.log(nweets.docs.map((doc) => doc.data()));
  //   };
  //   useEffect(() => {
  //     getMyNweets();
  //   });
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (newDisplayName !== userObj.displayName) {
      await userObj.updateProfile({ displayName: newDisplayName });
    }
    refreshUser();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type='text' value={newDisplayName} onChange={onChange} />
        <input type='submit' value='Change' />
      </form>
      <br />
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
