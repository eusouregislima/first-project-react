import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from 'axios'
// import './styles.css' // essa é uma forma
import People from "..//../Assets/people.svg"
import Arrow from "..//../Assets/arrow.svg"

import  H1  from '../../components/Title'
import  ContainerItens  from '../../components/containerItens'
import  Button  from '../../components/Button'

import {Container, InputLabel, Image, Input } from './styles';


//JSX
function Users() {


  const [users, setUsers] = useState([]);
  const history = useHistory();
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {
    // criando usuários

    const { data: newUsers } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    setUsers([...users, newUsers]);

    history.push('/usuarios');

  }




  return (<Container>
    <Image 
    alt="logo-imagem" 
    src={People} />

    <ContainerItens>
      <H1> Hello! </H1>
    
      <InputLabel>Name</InputLabel>
      <Input
        ref={inputName}
        placeholder="Name" />

      <InputLabel>Age</InputLabel>
      <Input
        ref={inputAge}
        placeholder="Age" />

      <Button onClick={addNewUser}>
        Registrer <img alt="seta" src={Arrow} />
      </Button>



    </ContainerItens>

  </Container>
  );
}

export default Users