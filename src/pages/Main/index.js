import React from 'react';
import BounceMessage from '../../components/BounceMessage'
import Pokemon from '../../components/Pokemon'


const Main = () => {
    return (
        <div>
            <BounceMessage message="Olha la como vai"/>
            <Pokemon/>
        </div>
    );
};

export default Main;