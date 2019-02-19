import React, { Component } from 'react';
import api from '../services/api'

import {isAuth} from '../services/auth'
import './Login.css'

import proautoLogo from '../assets/logoProauto.jpg'
export default class Login extends Component {
  //Inicialização dos Estados
  state = {
    cpf:'',
    placa: '',
    msg: ''

  }

  //Funções
  componentDidMount(){
    if(isAuth())
    this.props.history.push('/user')

  }
  handleSubmit = async (e) => {
    e.preventDefault()

    const cpf = this.state.cpf
    const placa = this.state.placa
    const res =  await api.post('/login', {cpf, placa})
     console.log(res.status)
    if(res.data.msg==='NotUser'){
        this.setState({
          cpf:'',
          placa: '',
          msg: 'CPF e/ou placa inválidos '
        })
    }

    else{
      
      localStorage.setItem("userId",res.data.user._id )
      localStorage.setItem('token:JWT',res.data.token)
      this.props.history.push('/user')
    }
    

  }
  handleInputChange = (e) => {
    
     const name = e.target.name
     this.setState({
       [name]: e.target.value
     })
  }

  //Renderização da View
  render() {
    return (
      <>
      
      <form onSubmit={this.handleSubmit} className="form-group">
      <div className="img" >
      <img src={proautoLogo} height={150}  alt="Pro Auto" />
      </div>
        <h1>Login</h1>
        <label htmlFor="placa">CPF</label>
        <input type="text" id="user" className="form-control" name="cpf" value={this.state.cpf} onChange={this.handleInputChange} placeholder="CPF"/>
        <label htmlFor="placa">Placa</label>
        <input type="text" id="pass" name="placa" className="form-control" value={this.state.placa} onChange={this.handleInputChange} placeholder="Placa" />
        <p> {this.state.msg} </p>
        <br />
        <button className="btn btn-primary"  type="submit" value="Login" >Entrar</button>
        {/* <button className="btn btn-link">Cadastrar novo usuário</button> */}
      </form>
      <br />
     
      </>
    )
  }
}
