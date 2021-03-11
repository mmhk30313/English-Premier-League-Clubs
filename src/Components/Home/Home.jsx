import { CircularProgress } from '@material-ui/core';
import React, { useContext} from 'react';
import { UserContext } from '../../App';
import Clubs from '../Clubs/Clubs';
import './Home.css';

const Home = ({flag}) => {
    const [selectedClub, setSelectedClub, clubs] = useContext(UserContext);
    // console.log(clubs, selectedClub);
    
    return (
        <div id="home" className="m-0">
            <div className="header">
                <img className="ground" src="https://i.pinimg.com/564x/9b/44/2f/9b442fc336ff0bbeb046de63fad6a736.jpg" alt=""/>
                {
                    flag ? <div className="w-25 text-center club-logo mx-auto text-light justify-content-center">
                        <img className="w-50 club mx-auto" src={selectedClub.strTeamBadge} alt=""/>
                        <h4 className="font-weight-bold">{selectedClub.strAlternate ? selectedClub.strAlternate : selectedClub.strTeam}</h4>
                    </div>
                    : <div className='league-title text-light font-italic'>
                        <h1 >EPL Fantastic Clubs</h1>
                    </div>
                }
                
            </div>
            {
                !flag && <div className="container-fluid bg-special p-2">
                    {
                        <div className="container row w-100 mx-auto justify-content-center">
                            {
                                clubs.length === 0 ? <CircularProgress color="secondary"/>
                                : clubs.map(club => <Clubs key={club.strTeam} club={club} setSelectedClub={setSelectedClub}/>)
                            }
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default Home;