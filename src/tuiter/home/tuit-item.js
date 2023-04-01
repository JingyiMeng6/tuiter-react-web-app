import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {deleteTuit} from "../tuits/tuits-reducer";

const TuitItem = (
    {
      post = {
        _id: 123,
        topic: "Space",
        userName: "SpaceX",
        title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        time: "2h",
        image: "tesla.png",
        liked: true,
        replies: 123,
        retuits: 432,
        likes: 2345,
        handle: "@spacex",
        tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

      }
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return (
      <li className={"list-group-item border-0"} key={post._id}>
        <div className={"row"}>
          <div className="col-1">
            <img className="rounded-circle" height={48}
                 src={`/images/${post.image}`} alt=""/>
          </div>
          <div className="col-10 ms-1">
            {/*username, handle and time*/}
            <div className="">
              <i className="bi bi-x-lg float-end"
                 onClick={() => deleteTuitHandler(post._id)}></i>
              <span className="font-weight-bold">{post.userName}</span>
              <i className="fa-sharp fa-solid fa-circle-check"></i>
              <span className="text-muted">{post.handle} . {post.time}</span>
            </div>
            {/*  post body*/}
            <div className="">
              {post.tuit}
            </div>

          </div>
          {/*<div className={"col-1"}><i className="bi bi-three-dots"></i></div>*/}
        </div>
        <TuitStats tuit={post}/>
      </li>
  )
}

export default TuitItem;