import React, { useContext } from 'react';
import founded from '../../images/Icon/found 1.png';
import flag from '../../images/Icon/flag (1) 1.png';
import football from "../../images/Icon/football (1) 1.png"
import gender from '../../images/Icon/male-gender-sign 1.png';
import facebook from '../../images/Icon/Facebook.png';
import twitter from '../../images/Icon/Twitter.png'
import youTube from '../../images/Icon/YouTube.png';
import fakeClubs from '../../FakeData/fakeData';
import { UserContext } from '../../App';
import './ClubDetails.css';
// import { useParams } from 'react-router';

const ClubDetails = () => {
    const [selectedClub] = useContext(UserContext);
    // console.log(selectedClub);
    const name = selectedClub.strTeam;
    // console.log(name);
    // const {page} = useParams();
    const allClubs = fakeClubs;
    const selectClubImg = allClubs.find(ac => ac.id === name);
    // if(!selectClubImg){
    //     // history.push(`/${page}`);
    //     window.location.replace(`/${page}`)
    //     // return;
    // }
    if(selectClubImg){
        selectedClub.imgPlayersUrl = selectClubImg.imgUrl;
    }
    // console.log(selectedClub);
    const {strTeam, strCountry, strGender, strDescriptionEN, strStadiumDescription, imgPlayersUrl, intFormedYear, strTwitter, strFacebook, strYouTube} = selectedClub;
    return (
        <div className="container-fluid bg-special p-2">
            <div className='container w-100 mx-auto text-justify'>
                <div style={{height: "fit-content"}} className="row w-75 mx-auto bg-primary text-light p-3 justify-content-center text-justify rounded my-3">
                    <div className="col-md-6 mx-auto my-auto ">
                        <div className="w-75 mx-auto">
                            <h5>{strTeam}</h5>
                            <div className="info">
                                <img src={founded} alt=""/> 
                                <b><small>Founded: {intFormedYear}</small></b>
                            </div>
                            <div className="info">
                                <img src={flag} alt=""/>
                                <b><small>Country: {strCountry}</small></b>
                            </div>
                            <div className="info">
                                <img src={football} alt=""/>
                                <b><small>Sport Type: Football</small></b>
                            </div>
                            <div className="info">
                                <img src={gender} alt=""/>
                                <b><small>Gender: {strGender}</small></b>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mx-auto club-player-img">
                        <img style={{height: '240px'}} className="w-100 mt-2 d-flex justify-content-center rounded" src={imgPlayersUrl} alt=""/>
                    </div>
                </div>
                <p className="text-light">{strDescriptionEN}</p>
                <p className="text-light">{strStadiumDescription}</p>
                <div className="d-flex justify-content-center social-link">
                    
                    <a href={`${strTwitter}`} target="_blank" rel="noreferrer"> <img src={twitter} alt=""/></a>
                    <a href={`${strFacebook}`} target="_blank" rel="noreferrer"><img src={facebook} alt=""/></a>
                    <a href={`${strYouTube}`} target="_blank" rel="noreferrer"><img src={youTube} alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default ClubDetails;