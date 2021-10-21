import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    const iconStyle = {"color":"white","font-size":"20px"};
    const roundedLeftBorder = {"borderTopLeftRadius": "25px", "borderBottomLeftRadius": "25px"}
    const roundedRightBorder = {"borderTopRightRadius": "25px", "borderBottomRightRadius": "25px"}
    return (
        <>
            <div className="row mt-2">
                <div className="col-11">
                    <div className="input-group mb-3">
                            <button className="input-group-prepend btn bg-white text-dark " style={roundedLeftBorder}>
                                <i className="fa fa-search"/>
                            </button>
                        <input className="form-control ml-0" type="text" placeholder="Search Twitter" style={roundedRightBorder}/>
                    </div>
                </div>
                    <div className="col-1">
                        <span style={iconStyle}><i className="fas fa-cog"/></span>
                    </div>

            </div>



                <ul className="nav ms-2 nav-tabs mt-2">

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sports</a>
                    </li>
                    <li className="nav-item d-none d-sm-none d-md-block">
                        <a className="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>

                <img src="../../images/spaceX.png" className="img-fluid mt-2" alt="spacex"/>
                    <PostSummaryList/>

        </>
);
}

export default ExploreComponent;
