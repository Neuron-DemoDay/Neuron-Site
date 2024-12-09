'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/LoginLabel";
import { useRegister } from '../../context/RegisterContext';

export default function RegisterPage() {
  const router = useRouter();
  const { formData, setFormData } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/register/additional-info');
  };

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
            <CardTitle className="text-2xl font-bold text-center text-blue-600">Cadastro</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome completo</Label>
                <Input
                  id="fullName"
                  placeholder="Digite seu nome completo"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirme sua senha</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirme sua senha"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Continuar
              </Button>
            </form>
          </CardContent>
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
        </Card>
      </div>
    </div>
  );
}

