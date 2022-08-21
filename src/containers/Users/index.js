import React from "react";
import { useHistory } from "react-router-dom"

import { useState, useEffect } from "react";
import H1 from '../../components/Title';
import ContainerItens from '../../components/containerItens';

import axios from 'axios'
// import './styles.css' // essa é uma forma
import Avatar from "..//../Assets/avatar.svg"
import Arrow from "..//../Assets/arrow.svg"
import Trash from "..//../Assets/trash.svg"

import Button from "../../components/Button";

import { Container, Image, User } from './styles';


//JSX
function App() {


  const [users, setUsers] = useState([]);
  const history = useHistory()




  // recuperando usuários
  useEffect(() => {
    async function fetchUsers() { // isso pq useEffect não aceita async
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }
    fetchUsers()

  }, [])



  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);
    // aqui estou criando um novo array removendo o usuário - pego todo mundo que tem um id diferente daquele
    setUsers(newUsers);
  }

    function goBackPage(){
      history.push('/');
    }
  
  return (<Container>
    <Image alt="logo-imagem" src={Avatar} />
    <ContainerItens isBlur={true}>
      <H1> Users </H1>
       

      <ul>
        {users.map(user => ( // map intera item por item do array - toda vez que for iterar itens precisa colocar o key
          <User key={user.id}>
            <p>{user.name}</p> <p>{user.age} </p>
            <button onClick={() => deleteUser(user.id)}>
              <img src={Trash} alt="lata-de-lixo" />
            </button>
          </User>
        ))
          //coloquei uma arrow function para o delete só ser chamado quando clicar o botão
        }


      </ul>

      <Button isBack={true} onClick={goBackPage}>
      <img alt="seta" src={Arrow} /> Back 
      </Button>
    </ContainerItens>

  </Container>
  );
}

export default App