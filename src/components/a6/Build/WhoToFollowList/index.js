import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import who from "./who.json"


const WhoToFollowList = () => {

    return (
        <>
            <ul class="list-group  mt-2">
                {
                    who.map(who => {
                        return(
                            <WhoToFollowListItem who={who}/>
                        );
                    })
                }
            </ul>
        </>
); }

export default WhoToFollowList;
