import React, { Component } from 'react';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { firebaseAuthentication } from '../config/firebase';
import NavbarMenu from './NavbarMenu';

export default class Registrasi extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeField = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        firebaseAuthentication.createUserWithEmailAndPassword(email, password)
        .then(res => {
            firebaseAuthentication.currentUser.sendEmailVerification()
            .then(() => {
                alert('Mohon Verifikasi Email Anda');
                this.props.history.push('/login');
            })
            .catch((error) => {
                alert(error.message);
            })
        })
        .catch(err => {
            alert(err.message)
        })
    }

    render() {
        const { email, password } = this.state;
        return(
            <>
                <NavbarMenu />
                <Container>
                    <Grid container style={{justifyContent: 'center'}}>
                        <Grid xs="4">
                            <h2>Halaman Registrasi</h2>
                            <form onSubmit={this.handleSubmit}>
                                <TextField type="email" fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="Email" required />
                                <TextField type="password" fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="Password" required />
                                <Button type="submit" fullWidth variant="contained" color="primary">Registrasi</Button>
                            </form>
                            <p>Sudah punya Akun? <Link to="/login">Login</Link></p>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}