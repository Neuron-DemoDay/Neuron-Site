'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/LoginLabel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/LoginSelect";
import api from '../../services/api';


export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarsenha: '',
    dataNascimento: '',
    escolaridade: '',
    genero: '',
    telefone: ''
  });

  const navigate = useNavigate();

  const [id, setId] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarsenha, setConfirmarSenha] = useState('');
  const [dataNascimento, setDatanascimento] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [genero, setGenero] = useState(0);
  const [telefone, setTelefone] = useState('');
  const [step, setStep] = useState(1); 

  const { alunoId } = useParams();
  const history = () => {
    navigate('/home');
  };

  const token = localStorage.getItem('token');
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      await saveOrUpdate(e);  // Chama a função saveOrUpdate no final da etapa 2
    }
  };
  const handleSelectChange = (id, value) => {
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  async function saveOrUpdate(event) {
    event.preventDefault();
    
    const data = {
      nome,
      email,
      senha,
      confirmarsenha,
      dataNascimento,
      escolaridade,
      genero,
      telefone
    }
    try {
      if (alunoId === '0') {
        await api.post('api/alunos', data, authorization)
      } else {
        data.id = id;
        await api.put(`api/alunos/${id},data,authorization`)
      }
    } catch (error) {
      alert('Erro ao gravar aluno ' + error)
    }
    navigate('/');
  }

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 flex flex-col justify-between">
        <div className="text-white text-3xl font-bold">Neuron</div>
        <div className="flex justify-center items-center h-full">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Register illustration"
            className="max-w-md rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="bg-[#fdfdf6] p-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-blue-600">
              {step === 1 ? 'Cadastro' : 'Complete seu cadastro'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input
                      id="nome"
                      placeholder="Digite seu nome completo"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                      required
                    />
                    
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu e-mail"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                    
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="senha">Senha</Label>
                    <Input
                      id="senha"
                      type="senha"
                      placeholder="Digite sua senha"
                      value={senha}
                      onChange={e => setSenha(e.target.value)}
                      required
                    />
                    
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmarsenha">Confirme sua senha</Label>
                    <Input
                      id="confirmarsenha"
                      type="senha"
                      placeholder="Confirme sua senha"
                      value={confirmarsenha}
                      onChange={e => setConfirmarSenha(e.target.value)}
                      required
                    />
                    
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="dataNascimento">Data de nascimento</Label>
                    <Input
                      id="dataNascimento"
                      type="date"
                      value={dataNascimento}
                      onChange={e => setDatanascimento(e.target.value)}
                      required
                    />
                    
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="escolaridade">Escolaridade</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange('escolaridade', value)}
                    >
                      <SelectTrigger id="escolaridade">
                        <SelectValue placeholder="Selecione sua escolaridade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ensino Fundamental">Ensino Fundamental</SelectItem>
                        <SelectItem value="Ensino Médio">Ensino Médio</SelectItem>
                        <SelectItem value="Ensino Superior">Ensino Superior</SelectItem>
                        <SelectItem value="Pós-graduação">Pós-graduação</SelectItem>
                      </SelectContent>
                    </Select>
                    
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="genero">Gênero</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange('genero', value)}
                    >
                      <SelectTrigger id="genero">
                        <SelectValue placeholder="Selecione seu gênero" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Masculino</SelectItem>
                        <SelectItem value="2">Feminino</SelectItem>
                        <SelectItem value="3">Outro</SelectItem>
                        <SelectItem value="0">Prefiro não informar</SelectItem>
                      </SelectContent>
                    </Select>
                   
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="Digite seu telefone"
                      value={telefone}
                      onChange={e => setTelefone(e.target.value)}
                      required
                    />
                    
                  </div>
                </>
              )}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {step === 1 ? 'Continuar' : 'Finalizar cadastro'}
              </Button>
              {step === 2 && (
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full mt-2 bg-gray-500 hover:bg-gray-600"
                >
                  Voltar
                </Button>
              )}
            </form>
          </CardContent>
          {step === 1 && (
            <CardFooter className="flex justify-center">
              <div className="text-sm">
                Já tem uma conta?{" "}
                <Link
                  href="/Login"
                  className="text-blue-600 hover:underline"
                >
                  Faça login
                </Link>
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
}

