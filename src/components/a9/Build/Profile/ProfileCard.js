import React, {useState, useEffect} from "react";
import "./profile.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentProfile, updateCurrentProfile} from "../../services/profileService";

const selectProfile = (state) => state.profile;
const ProfileCard = () => {

    const dispatch = useDispatch();
    const profile = useSelector(selectProfile);
    console.log(profile);
    // const profile = profiles[0];
    // console.log(profile);
    useEffect(() => fetchCurrentProfile(dispatch), [])

    const [isEdit, setIsEdit] = useState(false)

    const editChangeTrueHandler = (event) => {
        setIsEdit(true)
    }

    const editChangeFalseHandler = () => {
        setIsEdit(false)
    }


    // const [profileData, setprofileData] = useState({do: '', done: false});
    // const dispatch = useDispatch();
    const updateProfileClickHandler = (event) => {
        setIsEdit(false)
        // const action = {
        //     type: 'update-profile',
        //     profileData
        // };
        // dispatch(action);
        // console.log('================>')
        // console.log(profileData);
        // console.log('================>')
        updateCurrentProfile(dispatch, {
             profile
        });

    }


    const halfSizeFont = {"fontSize": "0.8em", "color": "gray"};
    const bgImage = {"background-image": `url(${profile.bannerPicture})`};
    return (
        <>
            <div className="container text-white bg-black">

                <div className="row justify-content-start">
                    <div className="col-2">
                        {isEdit ? <i className="fas fa-times" onClick={editChangeFalseHandler}/> : <i className="fas fa-arrow-left p-3"/>}
                    </div>

                    <div className="col-8">
                        {isEdit ?
                            <div className="row d-flex justify-content-between">
                                <div className="col-4 fw-bold">
                                    Edit Profile
                                </div>
                                <div className="col-8 save-button align-self-end rounded-pill btn btn-outline-primary"
                                     onClick={updateProfileClickHandler}>Save
                                </div>

                            </div>
                            : <>
                                <div className="fw-bold">
                                    {profile.firstName + " " + profile.lastName}
                                </div>
                                <div style={halfSizeFont}>1,000 Tweets</div>

                            </>}
                    </div>
                </div>

                <div className="row user-info-wrapper">
                    <div className="user-cover" style={bgImage}>
                    </div>

                    <div className="user-info">
                        <div className="row d-flex justify-content-between">
                            <div className="col-10 user-avatar">
                                <a className="edit-avatar" href="#"/>
                                <img src={profile.profilePicture} alt="User"/>
                            </div>

                            <div className="col-4 align-self-end">

                                {isEdit ? <></> :
                                    <button className="rounded-pill float-end btn btn-outline-primary mt-1"
                                            onClick={editChangeTrueHandler}>Edit profile</button>
                                }

                            </div>
                        </div>

                        {isEdit ?

                            <ul className="list-group">
                                <li className="list-group-item form-floating mt-4">
                                    <input className="text-white bg-black form-control" type="text" id="Name"
                                           placeholder="Name" defaultValue={profile.firstName + " " + profile.lastName}
                                           onChange={(e) => {
                                               profile.lastName = e.target.value;
                                           }
                                           }/>
                                    <label htmlFor="Name">Name</label>
                                </li>

                                <li className="list-group-item form-floating mt-4">
                                    <input className="text-white bg-black form-control" type="text" id="Bio"
                                           placeholder="Name" defaultValue={profile.bio} onChange={(e) => {
                                        console.log(e.target);
                                        profile.bio = e.target.value;

                                    }}/>
                                    <label htmlFor="Bio">Bio</label>
                                </li>

                                <li className="list-group-item form-floating mt-4">
                                    <input className="text-white bg-black form-control" type="text" id="Location"
                                           placeholder="Location" defaultValue={profile.location}/>
                                    <label htmlFor="Location">Location</label>
                                </li>

                                <li className="list-group-item form-floating mt-4">
                                    <input className="text-white bg-black form-control" type="url" id="Website"
                                           placeholder="Website"/>
                                    <label htmlFor="Website">Website</label>
                                </li>

                                <li className="list-group-item form-floating mt-4">
                                    <input className="text-white bg-black form-control no-border" type="text"
                                           id="BirthDate"
                                           defaultValue={profile.dateOfBirth}/>
                                    <label htmlFor="BirthDate">Birth date <button type="button"
                                                                                  className="btn btn-link">Edit</button>
                                    </label>
                                </li>

                            </ul>
                            :
                            <div className="user-data">
                                <h5>{profile.firstName + " " + profile.lastName}</h5>
                                <span className="text-secondary">@{profile.handle}</span>
                                <div>{profile.bio}</div>
                                <div className="d-flex flex-row text-secondary">
                                    <div className="p-2"><i className="fas fa-map-marker-alt"></i> {profile.location}</div>
                                    <div className="p-2"><i className="fas fa-golf-ball"></i> Born {profile.dateOfBirth}</div>
                                    <div className="p-2"><i className="fas fa-calendar-alt"></i> Joined {profile.dateJoined}</div>
                                </div>
                                <div className="d-flex flex-row">
                                    <div className="p-2">{profile.followingCount} <span className="text-secondary">Following</span></div>
                                    <div className="p-2">{profile.followersCount} <span className="text-secondary">Followers</span></div>
                                </div>
                            </div>
                        }

                    </div>
                </div>

            </div>

        </>

    )
}

export default ProfileCard;