'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Brain, Gamepad2, PenTool, Star, Sparkles, Zap, Globe } from 'lucide-react'
import { Navbar } from "../components/Navbar"
import { useTheme } from "../components/ThemeContext"
import { Input } from "@/components/ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  const { isDarkMode } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-[url('/FundoDiaSemSol.png')] dark:bg-[url('/FundoNoturno.png')] bg-cover bg-center py-20 md:py-32 pb-36 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                  Transforme Sua Educação com a Neuron
                </h1>
                <p className="text-xl text-white drop-shadow-md">
                  Tecnologia avançada, oportunidades globais e aprendizado personalizado para impulsionar seu futuro!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300">
                      Comece Já
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-white border-2 border-white text-purple-600 hover:bg-white hover:text-purple-600 transition-colors duration-300 shadow-lg backdrop-blur-sm font-semibold"
                    >
                      Saiba mais
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px]"
              >
                {!isDarkMode && (
                  <div className="absolute top-[-170px] right-[400px] w-80 h-80">
                    <Image
                      src="/SolHome.png"
                      alt="Sun illustration"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="absolute inset-0">
                  <Image
                    src="/AviaoCima.png"
                    alt="Educational Illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg 
              viewBox="0 0 1440 120" 
              className="w-full h-auto preserve-3d"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                className="fill-white dark:fill-gray-900"
                d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              >
                <animate 
                  attributeName="d" 
                  dur="10s" 
                  repeatCount="indefinite" 
                  values="
                    M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z;
                    M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z;
                    M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
                />
              </path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Funcionalidades que Transformam o Aprendizado
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Brain, title: "IA Personalizada", description: "Suporte adaptativo em suas atividades" },
                { icon: Gamepad2, title: "Gamificação", description: "Aprenda com métodos divertidos e envolventes" },
                { icon: PenTool, title: "Auxílio em Redação", description: "Melhore suas habilidades de escrita" },
                { icon: Globe, title: "Oportunidades Globais", description: "Conecte-se com programas internacionais" },
                { icon: Zap, title: "Aprendizado Acelerado", description: "Técnicas para absorver conteúdo rapidamente" },
                { icon: Sparkles, title: "Projetos Inovadores", description: "Aplique seu conhecimento em desafios reais" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 space-y-4">
                      <feature.icon className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              O que nossos alunos dizem
            </h2>
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {[
                  {
                    name: "Ana Silva",
                    role: "Estudante do 2º ano",
                    content: "A Neuron transformou minha forma de estudar. Consegui melhorar minhas notas e me sinto mais confiante para o vestibular!",
                    avatar: "/avatars/ana.jpg"
                  },
                  {
                    name: "Pedro Santos",
                    role: "Estudante do 3º ano",
                    content: "Graças à plataforma, consegui uma bolsa de estudos para um intercâmbio nos EUA. Uma experiência incrível!",
                    avatar: "/avatars/pedro.jpg"
                  },
                  {
                    name: "Juliana Oliveira",
                    role: "Ex-aluna, atual universitária",
                    content: "A Neuron foi fundamental para minha aprovação em Medicina. O suporte e os recursos oferecidos fizeram toda a diferença.",
                    avatar: "/avatars/juliana.jpg"
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="rounded-full mr-4"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.content}</p>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 dark:bg-purple-800">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Pronto para Transformar sua Educação e Realizar Seus Sonhos?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Junte-se à Neuron hoje e descubra como podemos revolucionar sua jornada de aprendizado!
                Acesse agora e explore oportunidades personalizadas que te ajudarão a
                alcançar seus objetivos acadêmicos e profissionais.
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
                Experimente Gratuitamente
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold">Neuron</h4>
                <p className="text-sm text-gray-400 dark:text-gray-300">
                  Transformando a educação através da tecnologia e oportunidades globais.
                </p>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                    <Link
                      key={social}
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={social}
                    >
                      <div className="w-6 h-6">
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.1952.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Recursos</h4>
                <ul className="space-y-2">
                  {['Plataforma de Estudos', 'Simulados Online', 'Videoaulas', 'Material Didático'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Suporte</h4>
                <ul className="space-y-2">
                  {['Central de Ajuda', 'Comunidade', 'Tutoriais', 'Contato'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Newsletter</h4>
                <p className="text-sm text-gray-400">Receba novidades e dicas de estudo</p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input 
                    type="email" 
                    placeholder="Seu e-mail" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                    Inscrever
                  </Button>
                </form>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
              © 2024 Neuron. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

