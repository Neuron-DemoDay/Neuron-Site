import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function App() {
    const baseUrl = "https://localhost:7268/api/alunos";

    const [modalIncluir, setModalIncluir] = useState(false);

    const abrirFecharModalIncluir = () => {
        setModalIncluir(!modalIncluir);
    }

    const [data, setData] = useState([]);

    const pedidoGet = async () => {
        try {
            const response = await axios.get(baseUrl);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const pedidoPost = async () => {
        delete alunoSelecionado.id;
        alunoSelecionado.idade = parseInt(alunoSelecionado.idade);
        await axios.post(baseUrl, alunoSelecionado)
            .then(response => {
                setData(data.concat(response.data));
                abrirFecharModalIncluir();
            }).catch(error => {
                console.log(error);
            })

    }


    useEffect(() => {
        pedidoGet();
    });

    const [alunoSelecionado, setAlunoSelecionado] = useState({
        id: '',
        nome: '',
        email: '',
        idade: '',
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setAlunoSelecionado({
            ...alunoSelecionado,
            [name]: value
        });
        console.log(alunoSelecionado);
    }

    return (
        <Modal isOpen={modalIncluir}>
            <ModalHeader>Incluir alunos</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Nome:</label>
                    <br />
                    <input type="text" className="form-control" name="nome" onChange={HandleChange} />
                    <br />
                    <label>Email: </label>
                    <br />
                    <input type="Text" className="form-control" name="email" onChange={HandleChange} />
                    <br />
                    <label>Idade: </label>
                    <br />
                    <input type="text" className="form-control" name="idade" onChange={HandleChange} />
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-secondary" onClick={() => abrirFecharModal()}>Fechar</button>{"  "}
                <button className="btn btn-primary" onClick={() => pedidoPost()}>Salvar</button>
            </ModalFooter>
        </Modal>
    );
}

export default App;
