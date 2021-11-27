import React from "react";
// import who from "./who.json"

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
        const halfSizeFont = {"fontSize": "0.5em"}
    return (
        <>
            <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle float-start" src={who.avatarIcon} width="48"/>
                </div>

                <div className="col-8">
                    <div className="fw-bold">{who.userName}
                    <span className="fa-stack" style={halfSizeFont}>
                    <i className="fas fa-circle fa-stack-2x"/>
                    <i className="fas fa-check fa-stack-1x fa-inverse"/>
                    </span>
                    </div>
                    <div>@{who.handle}</div>
                    
                </div>

                <div className="col-2">
                    <button className="rounded-pill float-end btn btn-primary mt-1">Follow</button>
                </div>
            </div>
            </li>
        </>
    );
}

export default WhoToFollowListItem;