import React, { Component } from 'react';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { firebaseAuthentication } from '../config/firebase';
import NavbarMenu from './NavbarMenu';

export default class Login extends Component {
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
        firebaseAuthentication.signInWithEmailAndPassword(email, password)
        .then(res => {
            if(res.user.emailVerified) {
                this.props.history.push('/home')
            }else {
                alert('Verifikasi email anda terlebih dahulu!!')
                firebaseAuthentication.signOut()
            }
        })
        .catch(error => {
            alert(error.message)
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
                            <h2>Halaman Login</h2>
                            <form onSubmit={this.handleSubmit}>
                                <TextField type="email" fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="Email" required />
                                <TextField type="password" fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="Password" required />
                                <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
                            </form>
                            <p>Belum punya Akun? <Link to="/registrasi">Registrasi</Link></p>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}