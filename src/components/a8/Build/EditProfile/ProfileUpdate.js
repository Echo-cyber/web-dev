import React from "react";
import  "./profile.css";

const ProfileUpdate = ({
     profile = {
         firstName:'Jose',
         lastName: "Annunziato",
         handle: "jannunzi",
         profilePicture: "jose.png",
         bannerPicture: "../../../../../public/images/profilebg.jpg",
         bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast.",
         website: "youtube.com/webdevtv",
         location: "Boston, MA",
         dateOfBirth: "7/7/1968",
         dateJoined: "4/2009",
         followingCount: 312,
         followersCount: 180
     }
}) => {
    const halfSizeFont = {"fontSize": "0.8em", "color":"gray"};
    const bgImage = {"background-image": `url(${profile.bannerPicture})`};
    return (
        <>
        <div className="container text-white bg-black">

            <div className="row justify-content-start">
                <div className="col-2">
                    <i className="fas fa-arrow-left p-3"/>
                </div>

                <div className="col-8">
                    <div className="fw-bold">
                        {profile.firstName + " " + profile.lastName}
                    </div>
                    <div style={halfSizeFont}>1,000 Tweets</div>

                </div>
            </div>

            <div className="row user-info-wrapper">
                <div className="user-cover" style={bgImage}>
                </div>
                <div className="user-info">
                    <div className="row d-flex justify-content-between">
                    <div className="col-10 user-avatar">
                        <a className="edit-avatar" href="#"/>
                        <img src={profile.profilePicture} alt="User" />
                    </div>

                        <div className="col-4 align-self-end">
                            <button className="rounded-pill float-end btn btn-outline-primary mt-1">Edit profile</button>
                        </div>
                    </div>

                    <div className="user-data">
                        <h5>{profile.firstName + " " + profile.lastName}</h5>
                        <span>@{profile.handle}</span>
                    </div>
                </div>
            </div>




        </div>
        </>
    )
}
export default ProfileUpdate;