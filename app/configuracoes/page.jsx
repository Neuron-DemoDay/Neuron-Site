'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/ThemeContext'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Lock, User, ArrowLeft } from 'lucide-react'

export default function Configuracoes() {
  const { isDarkMode } = useTheme()
  const [nome, setNome] = useState('João Silva')
  const [email, setEmail] = useState('joao.silva@exemplo.com')
  const [notificacoesEmail, setNotificacoesEmail] = useState(true)
  const [notificacoesPush, setNotificacoesPush] = useState(false)
  const [autenticacaoDoisFatores, setAutenticacaoDoisFatores] = useState(false)
  const [activeTab, setActiveTab] = useState('perfil')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Configurações salvas')
  }

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
  }

  const tabButtonVariants = {
    inactive: { color: "#6B7280", backgroundColor: "transparent" },
    active: { color: "#7C3AED", backgroundColor: "#EDE9FE", scale: 1.05 }
  }

  const TabButton = ({ value, icon: Icon, label }) => (
    <motion.button
      onClick={() => setActiveTab(value)}
      className={`flex items-center justify-center p-2 rounded-md w-full ${
        activeTab === value ? 'text-purple-600' : 'text-gray-500'
      }`}
      variants={tabButtonVariants}
      animate={activeTab === value ? "active" : "inactive"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4 mr-2" />
      {label}
    </motion.button>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-6 text-purple-600 dark:text-purple-400">Configurações</h1>
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
        className="mb-4 flex items-center text-purple-600 dark:text-purple-400"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar
      </Button>
      <div className="w-full mb-8">
        <div className="grid grid-cols-3 gap-4">
          <TabButton value="perfil" icon={User} label="Perfil" />
          <TabButton value="notificacoes" icon={Bell} label="Notificações" />
          <TabButton value="seguranca" icon={Lock} label="Segurança" />
        </div>
        <motion.div
          className="h-1 bg-purple-600 mt-2"
          initial={false}
          animate={{
            x: activeTab === 'perfil' ? '0%' : activeTab === 'notificacoes' ? '100%' : '200%'
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ width: '33.33%' }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <motion.div
          key={activeTab}
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {activeTab === 'perfil' && (
            <Card>
              <CardHeader>
                <CardTitle>Informações do Perfil</CardTitle>
                <CardDescription>Atualize suas informações pessoais aqui.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </CardContent>
            </Card>
          )}
          {activeTab === 'notificacoes' && (
            <Card>
              <CardHeader>
                <CardTitle>Preferências de Notificação</CardTitle>
                <CardDescription>Gerencie como você recebe notificações.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notificacoes-email">Notificações por Email</Label>
                  <Switch
                    id="notificacoes-email"
                    checked={notificacoesEmail}
                    onCheckedChange={setNotificacoesEmail}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notificacoes-push">Notificações Push</Label>
                  <Switch
                    id="notificacoes-push"
                    checked={notificacoesPush}
                    onCheckedChange={setNotificacoesPush}
                  />
                </div>
              </CardContent>
            </Card>
          )}
          {activeTab === 'seguranca' && (
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Segurança</CardTitle>
                <CardDescription>Mantenha sua conta segura.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="autenticacao-dois-fatores">Autenticação de Dois Fatores</Label>
                  <Switch
                    id="autenticacao-dois-fatores"
                    checked={autenticacaoDoisFatores}
                    onCheckedChange={setAutenticacaoDoisFatores}
                  />
                </div>
                <Button variant="outline" className="w-full">Alterar Senha</Button>
              </CardContent>
            </Card>
          )}
        </motion.div>
        <CardFooter className="flex justify-end mt-6">
          <Button type="submit">Salvar Alterações</Button>
        </CardFooter>
      </form>
    </motion.div>
  )
}

