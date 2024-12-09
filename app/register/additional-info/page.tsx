'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/LoginLabel"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/LoginSelect"

export default function AdditionalInfoPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    birthDate: '',
    education: '',
    gender: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle final registration step
    router.push('/dashboard') // or wherever you want to redirect after registration
  }

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
                <Label htmlFor="birthDate">Data de nascimento</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Escolaridade</Label>
                <Select 
                  onValueChange={(value) => setFormData({...formData, education: value})}
                >
                  <SelectTrigger id="education">
                    <SelectValue placeholder="Selecione sua escolaridade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fundamental">Ensino Fundamental</SelectItem>
                    <SelectItem value="medio">Ensino Médio</SelectItem>
                    <SelectItem value="superior">Ensino Superior</SelectItem>
                    <SelectItem value="pos">Pós-graduação</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gênero</Label>
                <Select
                  onValueChange={(value) => setFormData({...formData, gender: value})}
                >
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Selecione seu gênero" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="feminino">Feminino</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                    <SelectItem value="nao_informar">Prefiro não informar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Digite seu telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Finalizar cadastro
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

