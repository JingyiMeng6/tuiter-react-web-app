import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./index.css"




const ProfileComponent = () => {
  const profile = useSelector(state => state.profile)
  return(
      <>
        <div className="row">
          <div className="col-1">
            <Link to="/tuiter/home"><i className="bi bi-arrow-left"></i> </Link>
          </div>
          <div className={"col-11 "}>
            <span className={"fw-bold"}>{profile.firstName} {profile.lastName}</span> <br/>
            <i className={"text-muted"}>6,114 Tweets</i>
          </div>
        </div>
        <img  className={"w-100"} style={{ height: 200 }} src={`/images/${profile.bannerPicture}`}/>
        <Link to={"/tuiter/edit-profile"}><button className="btn rounded-pill float-end border border-dark mt-2">Edit profile</button></Link>
        <img className="rounded-circle position-relative wd-nudge-up"  height={70} src={`/images/react-blue.png`} />
        <div>
          <span className={"fw-bold"}>{profile.firstName} {profile.lastName}</span> <br/>
          <i className={"text-muted"}>{profile.handle}</i>
        </div>
        <div>
          {profile.bio}
        </div>
        <div>
          <i className="bi bi-geo-alt"></i> {profile.location} <i
            className="bi bi-balloon"></i> Born on {profile.dateOfBirth} <i
            className="bi bi-calendar"></i> Joined on {profile.dateJoined}
        </div>
        <div>
          <span className={"fw-bold"}>{profile.followingCount} </span>Following    <span className={"fw-bold"}>{profile.followersCount}</span> Followers
        </div>

      </>
  );
};

export default ProfileComponent;