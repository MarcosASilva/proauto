import React, { Component } from 'react';
import NavBar from '../Navbar'
import api from '../services/api'
export default class User extends Component {

  //Inicialização dos Estados
    state = {
        user : {
          nome: '',
          cpf: '',
          placa: '',
          tel: '',
          end: {
            rua: '',
            cidade: '',
            bairro: '',
            uf: ''
          }
        }
      }
    //Funções
    async componentDidMount(){

        const id = localStorage.getItem("userId")
        const res = await api.get('/user/'+id)  
        
        this.setState({
          user: {
            nome: res.data.nome,
            cpf: res.data.cpf,
            placa: res.data.placa,
            tel: res.data.tel,
            end: {
              rua: res.data.end.rua,
              bairro: res.data.end.bairro,
              cidade: res.data.end.cidade,
              uf: res.data.end.uf
            }
          }
        })
    
    }


    handleClick = (e) => {
        this.props.history.push('/edit')
    }

    handleQuit = (e) => {
      localStorage.clear()
      this.props.history.push('/')
    }
    //Renderização da View
  render() {
    return (
        <>
        <NavBar />

        <div className="card">
        <div className="card-body">
        <p className="card-text">Nome: <strong> {this.state.user.nome} </strong></p> 
        <p className="card-text">CPF:<strong> {this.state.user.cpf} </strong> </p>
        <p className="card-text">Placa do Carro: <strong> {this.state.user.placa} </strong></p>
        <p className="card-text">Endereço:  <strong> {this.state.user.end.rua}, {this.state.user.end.bairro}, {this.state.user.end.cidade}/{this.state.user.end.uf} </strong> </p>
        <p className="card-text">Telefone: <strong> {this.state.user.tel} </strong> </p>
        <button onClick={this.handleClick} className="btn btn-primary">Editar usuário</button> <button  onClick={this.handleQuit} className="btn btn-danger">Sair</button>
        </div>
       
        </div>
        
        </>
    )
  }
}
