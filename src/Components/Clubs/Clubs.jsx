import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';
import fakeClubs from '../../FakeData/fakeData';


const Clubs = ({club, setSelectedClub}) => {
    const history = useHistory();
    const handleSelectedClub = (selectClub)=>{
        // console.log(selectClub);
        const allClubs = fakeClubs;
        const selectClubImg = allClubs.find(ac => ac.id === selectClub.strTeam);
        selectClub.imgPlayersUrl = selectClubImg.imgUrl;
        // console.log(selectClub);
        setSelectedClub(selectClub);
        history.push(`/club-details/${selectClub.strTeam}`);
    }
    // console.log(club);
    return (
        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5 card m-1 text-center px-5 py-3">
            <img className="img-fluid w-75 mx-auto" src={club.strTeamBadge} alt=""></img>
            <p className='font-weight-bold m-0 mt-1'>{club.strTeam}</p>
            <p><small>Sports Type: Football</small> </p>
            <button onClick={() => handleSelectedClub(club)} className="btn btn-primary btn-outline-success text-light">Explore <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon></button>
        </div>
    );
};

export default Clubs;