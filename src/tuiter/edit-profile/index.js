import React, {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "../profile/index.css"
import {changeProfile} from "../reducers/profile-reducer";




const EditProfileComponent = () => {
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const [editingProfile, setEditingProfile] = useState({...profile});
  const nameChangeHandler = (event)=> {
    const fullName = event.target.value.split(" ");
    const newFirstName = fullName[0]
    const newLastName = fullName[1]
    const newProfile = {
      ...editingProfile,
      firstName: newFirstName,
      lastName: newLastName
    }
    setEditingProfile(newProfile)
  }
  const bioChangeHandler = (event)=> {
    const newBio = event.target.value;
    const newProfile = {
      ...editingProfile,
      bio: newBio
    }
    setEditingProfile(newProfile)
  }
  const locationChangeHandler = (event)=> {
    const newLocation = event.target.value;
    const newProfile = {
      ...editingProfile,
      location: newLocation
    }
    setEditingProfile(newProfile)
  }
  const websiteChangeHandler = (event)=> {
    const newWebsite = event.target.value;
    const newProfile = {
      ...editingProfile,
      website: newWebsite
    }
    setEditingProfile(newProfile)
  }

  const dateOfBirthChangeHandler = (event)=> {
    const newDateOfBirth = event.target.value;
    const newProfile = {
      ...editingProfile,
      dateOfBirth: newDateOfBirth
    }
    setEditingProfile(newProfile);
  }

  const saveHandler = (event)=> {
    console.log("save")
    const newProfile = {...editingProfile}
    dispatch(changeProfile(newProfile))
  }


  return(
      <>
        <div className="row">
          <div className="col-1">
            <Link to="/tuiter/profile"><i className="bi bi-x-lg"></i> </Link>
          </div>
          <div className={"col-11 "}>
            <span className={"fw-bold"}>Edit profile</span>
            <Link to="/tuiter/profile">
              <button className="btn btn-dark rounded-pill float-end mb-2" onClick={saveHandler}>Save</button>
            </Link>
          </div>
        </div>

        <img  className={"w-100"} style={{ height: 200 }} src={`/images/${profile.bannerPicture}`}/>
        <img className="rounded-circle position-relative wd-nudge-up"  height={70} src={`/images/react-blue.png`} />
        <ul className={"list-group"}>
          <li className={"list-group-item"}>
            <span className={"text-muted"}>Name</span>
            <input onChange={nameChangeHandler}  value={editingProfile.firstName +" "+ editingProfile.lastName} className={"form-control border-0 w-100"}/>
          </li>
          <li className={"list-group-item"}>
            <span className={"text-muted"}>Bio</span>
            <input onChange={bioChangeHandler} value={editingProfile.bio} className={"form-control border-0 w-100"}/>
          </li>
          <li className={"list-group-item"}>
            <span className={"text-muted"}>Location</span>
            <input onChange={locationChangeHandler} value={editingProfile.location} className={"form-control border-0"}/>
          </li>
          <li className={"list-group-item"}>
            <span className={"text-muted"}>Website</span>
            <input onChange={websiteChangeHandler} value={editingProfile.website} className={"form-control border-0"}/>
          </li>
          <li className={"list-group-item"}>
            <span className={"text-muted"}>Birth date</span>
            <input onChange={dateOfBirthChangeHandler} value={editingProfile.dateOfBirth} className={"form-control border-0"}/>
          </li>





        </ul>
        <br/>
        Switch to professional
        <i className="bi bi-arrow-right-short float-end"></i>
        <br/>
      </>


  )
}

export default EditProfileComponent;