import React from 'react';
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';
import PropTypes from 'prop-types'

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation} infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const bounceMessage = (props) => {
    return (
        <BouncyDiv>
            <h1>{props.message}</h1>
        </BouncyDiv>
    )
};

bounceMessage.propTypes = {
    message: PropTypes.string.isRequired
}
export default bounceMessage
