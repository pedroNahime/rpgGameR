import React from 'react';
import {Container, Wrapper} from "./styles";
import {lighten, makeStyles, withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const LifeBar = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#ff6c5c',
    },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    lifeBar: {
        width: '100%',
        marginTop: 5
    },
}));

function StatusPlayer() {
    const classes = useStyles();
    return (
        <Container>
            <span>Nome Do Jogador</span>
            <LifeBar
                className={classes.lifeBar}
                variant="determinate"
                color="secondary"
                value={100}
            />
            <Wrapper>
                <span>Money: $100</span>
                <span>Fame: 1</span>
            </Wrapper>

        </Container>
    );
}

export default StatusPlayer

