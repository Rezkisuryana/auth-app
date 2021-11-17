import React, { Component } from 'react';
import { Container, Paper } from '@material-ui/core';
import { firebaseAuthentication } from '../config/firebase';
import Button from '@mui/material/Button';
import Tmdb from './tmdb/Tmdb';

export default class Home extends Component {
    componentDidMount() {
        firebaseAuthentication.onAuthStateChanged((user) => {
            if(!user) {
                this.props.history.push('/login')
            }
        })
    }

    handleLogOut = () => {
        firebaseAuthentication.signOut()
    }

    render() {
        return(
          <>
            <Container>
                <Paper>
                    <Button variant="outlined" onClick={this.handleLogOut}>Logout</Button>
                    <h1>Selamat Datang Bro</h1>
                </Paper>
            </Container>
            <Tmdb />
          </>
        )
    }
}