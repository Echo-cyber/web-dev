import React from "react";
import {useSelector} from "react-redux";
import ProfileCard from "./ProfileCard";


const selectProfile = (state) => state.profile;

const Profile = () => {
    const prof = useSelector(selectProfile);
    return (
        <>

                    <ProfileCard profile={prof}/>


        </>
    )
};

export default Profile;
