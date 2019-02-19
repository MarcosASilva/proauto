import React, { Component } from 'react';
import api from '../services/api'
import './Edit.css'
export default class Edit extends Component {
 //Inicialização dos Estados
  state = {  
    rua: '',
    cidade: '',
    bairro: '',
    uf: '' 
  }
  //Funções 
  async componentDidMount(){
    const id = localStorage.getItem("userId")
    const res = await api.get('/user/'+id)
    console.log(res.data)
  
    

    this.setState({
      rua: res.data.end.rua,
      cidade: res.data.end.cidade,
      bairro: res.data.end.bairro,
      uf: res.data.end.uf
    })

  }


  handleSubmit = async (e) => {
    e.preventDefault()
    const id = localStorage.getItem("userId")
    const {rua, bairro, cidade, uf} = this.state
   const res = await api.post('/updateUser/'+id ,{rua, bairro, cidade, uf} )
   console.log(res)
   this.props.history.push('/user')
  }


  handleInputChange = (e) => {
    
    const name = e.target.name
    this.setState({      
      [name]: e.target.value      
    })
 }
  onHandleBack = (e) => {
    this.props.history.push('/user')
  }

  //Renderização da View  
  render() {
    return (
        <> 
        <form onSubmit={this.handleSubmit}>
            {/* <div className="form-group">
            <label htmlFor="Nome">Nome</label>
            <input type="text" className="form-control"  value={this.state.user.nome} name="nome" placeholder="Nome" disabled></input>
            </div>
            <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <input type="number" className="form-control" value={this.state.user.cpf} name="cpf" placeholder="CPF" disabled></input>
            </div>
            <div className="form-group">
            <label htmlFor="placa">Placa</label>
            <input type="text" className="form-control" value={this.state.user.placa} name="placa" placeholder="Placa" disabled></input>
            </div> */}
            <div className="form-group">
            <label htmlFor="rua">Rua</label>
            <input type="text" className="form-control"  name="rua" value={this.state.rua} onChange={this.handleInputChange} placeholder="Rua" ></input>
            </div>
            <div className="form-group">
            <label htmlFor="bairro">Bairro</label>
            <input type="text" className="form-control" name="bairro"  value={this.state.bairro} onChange={this.handleInputChange} placeholder="Bairro" ></input>
            </div>
            <div className="form-group">
            <label htmlFor="cidade">Cidade</label>
            <input type="text" className="form-control" name="cidade" value={this.state.cidade} onChange={this.handleInputChange}  placeholder="Cidade" ></input>
            </div>
            <div className="form-group">
            <label htmlFor="estado">Estado</label>
            <input type="text" className="form-control"name="uf" value={this.state.uf} onChange={this.handleInputChange}  placeholder="Estado"  ></input>
            </div>
            {/* <div className="form-group">
            <label htmlFor="tel">Telefone</label>
            <input type="number" className="form-control" name="tel" placeholder="Telefone" value={this.state.user.tel} disabled></input>
            </div> */}
            <button className="btn btn-primary" type="submit">Atualizar</button>
                
            <button className="btn btn-link" onClick={this.onHandleBack}>Voltar</button>
        </form>
        
</>

    );
  }
}
