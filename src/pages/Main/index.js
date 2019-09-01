import React from 'react';
import BounceMessage from '../../components/BounceMessage'
import Pokemon from '../../components/Pokemon'
import StatusPlayer from "../../components/StatusPlayer";


const Main = () => {
    return (
        <div>
            <StatusPlayer/>
            {/*<BounceMessage message="Olha la como vai"/>*/}
            <Pokemon/>
        </div>
    );
};

export default Main;