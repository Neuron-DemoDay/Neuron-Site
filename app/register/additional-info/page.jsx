'use client'

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/LoginLabel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/LoginSelect";
import { useRegister } from '../../../context/RegisterContext';
import api from '../../../services/api';

export default function AdditionalInfoPage() {
  const router = useRouter();
  const { formData, setFormData } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure genero is a number
    const dataToSend = {
      ...formData,
      genero: Number(formData.genero)
    };

    console.log('Dados sendo enviados:', dataToSend);

    try {
      const response = await api.post('api/account/register', dataToSend);
      
      if (response.status === 201 || response.status === 200) {
        alert('Registro realizado com sucesso!');
        router.push('/dashboard');
      } else {
        alert('Erro inesperado ao se registrar. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro detalhado:', error);

      if (error.response) {
        console.error('Resposta do servidor:', error.response.data);
        if (error.response.status === 400) {
          let errorMessage = 'Erro nos dados enviados. Por favor, verifique todas as informações e tente novamente.';
          if (error.response.data.errors) {
            errorMessage += '\n\nDetalhes:\n';
            for (let field in error.response.data.errors) {
              errorMessage += `${field}: ${error.response.data.errors[field].join(', ')}\n`;
            }
          }
          alert(errorMessage);
        } else {
          alert(`Erro ao se registrar: ${error.response.data.message || 'Tente novamente mais tarde.'}`);
        }
      } else if (error.request) {
        alert('Erro de conexão. Por favor, verifique sua internet e tente novamente.');
      } else {
        alert('Erro ao processar a requisição. Por favor, tente novamente.');
      }
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 flex flex-col justify-between">
        <div className="text-white text-3xl font-bold">Neuron</div>
        <div className="flex justify-center items-center h-full">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Additional info illustration"
            className="max-w-md rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="bg-[#fdfdf6] p-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-blue-600">Complete seu cadastro</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Data de nascimento</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Escolaridade</Label>
                <Select
                  onValueChange={(value) => setFormData({ ...formData, education: value })}
                >
                  <SelectTrigger id="education">
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
                  onValueChange={(value) => setFormData({ ...formData, genero: Number(value) })}
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
                <Label htmlFor="phoneNumber">Telefone</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Digite seu telefone"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  required
                />
              </div>

              <div className="flex justify-between space-x-4">
                <Button
                  type="button"
                  onClick={handleBack}
                  className="w-full bg-gray-500 hover:bg-gray-600"
                >
                  Voltar
                </Button>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Finalizar cadastro
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

