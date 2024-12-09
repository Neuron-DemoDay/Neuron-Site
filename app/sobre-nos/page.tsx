'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Target, Eye, Star } from 'lucide-react'
import { Navbar } from "@/components/Navbar"
import { useTheme } from "@/components/ThemeContext"

export default function AboutUs() {
  const { isDarkMode } = useTheme()

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">SOBRE NÓS</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Bem-vindo à nossa plataforma inovadora, que visa democratizar o acesso a educação e intercâmbios internacionais
          para pessoas de baixa renda. Usamos IA, Realidade Aumentada (RA) e Gamificação para criar uma experiência
          educacional personalizada e enriquecidora.
        </p>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">O QUE NOS MOVE</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-600 p-6 h-full">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">MISSÃO</h3>
                <p className="text-white text-lg">Transformar a educação global.</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-purple-700 p-6 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
              <p className="text-white text-center">
                Uma plataforma acessível e inovadora, que utiliza tecnologias avançadas para criar oportunidades
                educacionais personalizadas e inclusivas para todos.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-600 p-6 h-full">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">VISÃO</h3>
                <p className="text-white text-lg">Ser a principal plataforma educacional do mundo.</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-purple-700 p-6 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
              <p className="text-white text-center">
                Reconhecida por sua capacidade de democratizar o aprendizado e conectar estudantes com oportunidades internacionais,
                impactando positivamente o futuro de milhões de jovens.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-600 p-6 h-full">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">VALORES</h3>
                <ul className="text-white text-lg space-y-2">
                  <li>Inclusão</li>
                  <li>Inovação</li>
                  <li>Colaboração</li>
                </ul>
              </div>
            </div>
            <div className="absolute inset-0 bg-purple-700 p-6 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
              <ul className="text-white text-center space-y-2">
                <li>Aprendizado</li>
                <li>Comunicação aberta</li>
                <li>Impacto: Transformação de vidas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 bg-purple-100 dark:bg-purple-800 text-gray-800 dark:text-gray-200 transition-colors duration-200">
          <h2 className="text-3xl font-bold text-center mb-6 text-purple-600 dark:text-purple-400">CONHEÇA A NOSSA EQUIPE</h2>
          <p className="text-center text-lg max-w-3xl mx-auto">
            Somos um grupo de estudantes de escolas públicas, unidos pelo desejo de tornar a educação acessível a todos.
            Compreendemos os desafios enfrentados por nossos colegas e, por isso, desenvolvemos este projeto inovador
            para oferecer oportunidades educacionais e de intercâmbio para estudantes de baixa renda. Nosso objetivo é
            criar um impacto positivo e ajudar outros jovens a alcançar seus sonhos acadêmicos e profissionais.
          </p>
        </Card>
      </section>

      {/* Development Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-12">NOSSO TIME DE DESENVOLVIMENTO</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "LUCAS SANTIAGO",
              role: "P.O/Desenvolvedor Back-end",
              image: "/team/lucas.jpg",
              linkedin: "lucas-santiago-de-oliveira",
              github: "lucassantiago0",
            },
            {
              name: "GUILHERME CAMPELO",
              role: "Desenvolvedor Scrum Master/IA",
              image: "/team/guilherme.jpg",
              linkedin: "guilherme-campelo",
              github: "campelo10",
            },
            {
              name: "JENIFER CARVALHO",
              role: "Desenvolvedora Full Stack/Financeiro",
              image: "/team/jenifer.jpg",
              linkedin: "jenifercarvalhosilva",
              github: "jenifermarques",
            },
            {
              name: "VINICIUS SANTANA",
              role: "Desenvolvedor Back-end",
              image: "/team/vinicius.jpg",
              linkedin: "vinicius-santana-2b385528b",
              github: "viniciuspermec007",
            },
            {
              name: "STEFANY GOMES",
              role: "Desenvolvedora Front-end/UI & UX Designer",
              image: "/team/stefany.jpg",
              linkedin: "stefany-gomes",
              github: "stefanyy",
            },       
            {
              name: "GUILHERME MACEDO",
              role: "Desenvolvedor Front-end/UI & UX Designer",
              image: "/team/guilherme-m.jpg",
              linkedin: "guilherme-macedo-7",
              github: "gui-macedo-7",
            },
            {
              name: "CAIO EDUARDO",
              role: "Desenvolvedor Full Stack",
              image: "/team/caio.jpg",
              linkedin: "caio eduardo de souza",
              github: "caioeduardo",
            },
            {
              name: "GIAN BUENO",
              role: "Desenvolvedor Back-end",
              image: "/team/gian.jpg",
              linkedin: "gian-luigi-bueno",
              github: "gianb",
            }            
          ].map((member, index) => (
            <Card key={index} className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-200">
              <div className="text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-purple-600">
                  <Image
                    src={member.image}  
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-purple-600 dark:text-purple-400">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <Link
                    href={`https://linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    className="text-gray-800 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <Github className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto p-8 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-600 dark:text-purple-400">ENTRE EM CONTATO CONOSCO</h2>
          <form className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Nome completo"
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <Textarea
                placeholder="Mensagem"
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 min-h-[150px]"
              />
            </div>
            <div className="text-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Enviar
              </Button>
            </div>
          </form>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Neuron</h4>
              <p className="text-sm text-gray-400">
                Transformando a educação através da tecnologia e oportunidades globais.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.772-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Recursos</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Plataforma de Estudos</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Simulados Online</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Videoaulas</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Material Didático</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Suporte</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Central de Ajuda</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Comunidade</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Tutoriais</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Contato</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Newsletter</h4>
              <p className="text-sm text-gray-400">Receba novidades e dicas de estudo</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Seu e-mail" className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">Inscrever</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2024 Neuron. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

