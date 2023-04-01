import React, {useState} from "react";
import {createTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {tuit}
) => {
  // let [liked, setLiked] = useState(tuit.liked);
  // let [likes, setLikes] = useState(tuit.likes);
  const dispatch = useDispatch();
  const likeClickHandler = () => {
    if (tuit.liked) {
      dispatch(updateTuitThunk({
        ...tuit,
        likes: tuit.likes - 1,
        liked: !tuit.liked
      }));
    } else {
      dispatch(updateTuitThunk({
        ...tuit,
        likes: tuit.likes + 1,
        liked: !tuit.liked
      }))
    }
  }

  return(
      <div className="row ">
        <div className="col text-muted text-center">
          <i className="bi bi-chat"></i> {tuit.replies}</div>
        <div className="col text-muted text-center">
          <i className="bi bi-arrow-repeat"></i> {tuit.retuits}</div>
        <div className="col text-muted text-center" onClick={likeClickHandler}>
          <i className={"bi " + (tuit.liked ? 'bi-heart-fill text-danger' : 'bi-heart')}></i> {tuit.likes}</div>
        <div className="col text-muted text-center">
          <i className="bi bi-box-arrow-up"></i></div>
      </div>
  )
}


export default TuitStats;