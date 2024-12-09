import React, { useState } from 'react'
import { FaUser, FaCalendarAlt, FaEnvelope, FaEye, FaEyeSlash, FaGraduationCap, FaTransgender, FaPhone } from 'react-icons/fa'
import Junin from '../../../public/JuninComputador.png'
import Logo from '../../../public/svg/LogoNeuron.svg'
import './Cadastro.css'

const Cadastro = () => {
  const [date, setDate] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [placeholder, setPlaceholder] = useState("*Digite sua data de nascimento");
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [escolaridade, setEscolaridade] = useState('')
  const [genero, setGenero] = useState('')
  const [telefone, setTelefone] = useState('')

  const handleDateChange = input => {
    const cleanValue = input.replace(/\D/g, '')
    let formattedValue = ''

    if (cleanValue.length > 0) {
      formattedValue += cleanValue.substring(0, 2)
    }
    if (cleanValue.length >= 3) {
      formattedValue += '/' + cleanValue.substring(2, 4)
    }
    if (cleanValue.length >= 5) {
      formattedValue += '/' + cleanValue.substring(4, 8)
    }

    setInputValue(formattedValue)
  }

  return (
    <div className='cadastro-conteudo'>
      <div className='cadastro-forms'>
        <form>
          <div className='cadastro-titulo'>
            <h1>CADASTRO</h1>
          </div>
          {/* Container para os inputs em duas colunas */}
          <div className='cadastro-form-container'>
            {/* Primeira linha */}
            <div className='cadastro-input-container'>
              <FaUser className='cadastro-icon' />
              <input type='text' placeholder='*Digite seu nome completo' />
            </div>
            <div className='cadastro-input-container'>
              <FaCalendarAlt className='cadastro-icon' />
              <input
                id="date-picker"
                value={inputValue}
                onChange={(e) => handleDateChange(e.target.value)}
                placeholder={placeholder}
                onFocus={() => setPlaceholder("*dd/mm/yyyy")}
                onBlur={() => setPlaceholder("*Digite sua data de nascimento")}
            />
            </div>
            {/* Segunda linha */}
            <div className='cadastro-input-container'>
              <FaGraduationCap className='cadastro-icon' />
              <input
                type='text'
                className='cadastro-input'
                placeholder='*Digite sua escolaridade'
                value={escolaridade}
                onChange={e => setEscolaridade(e.target.value)}
              />
            </div>
            <div className='cadastro-input-container'>
              <FaTransgender className='cadastro-icon' />
              <input
                type='text'
                className='cadastro-input'
                placeholder='*Digite seu gênero'
                value={genero}
                onChange={e => setGenero(e.target.value)}
              />
            </div>
            {/* Terceira linha */}
            <div className='cadastro-input-container'>
              <FaPhone className='cadastro-icon' />
              <input
                type='tel'
                className='cadastro-input'
                placeholder='*Digite seu telefone'
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
              />
            </div>
            <div className='cadastro-input-container'>
              <FaEnvelope className='cadastro-icon' />
              <input type='email' placeholder='*Digite seu e-mail' />
            </div>
            {/* Quarta linha */}
            <div className='cadastro-input-container'>
              <FaEnvelope className='cadastro-icon' />
              <input type='email' placeholder='*Confirme seu e-mail' />
            </div>
            <div className='cadastro-input-container'>
              {showPassword1 ? (
                <FaEyeSlash
                  className='cadastro-icon cadastro-icon-eye'
                  onClick={() => setShowPassword1(!showPassword1)}
                />
              ) : (
                <FaEye
                  className='cadastro-icon cadastro-icon-eye'
                  onClick={() => setShowPassword1(!showPassword1)}
                />
              )}
              <input
                type={showPassword1 ? 'text' : 'password'}
                placeholder='*Crie sua senha'
              />
            </div>
            <div className='cadastro-input-container'>
              {showPassword2 ? (
                <FaEyeSlash
                  className='cadastro-icon cadastro-icon-eye'
                  onClick={() => setShowPassword2(!showPassword2)}
                />
              ) : (
                <FaEye
                  className='cadastro-icon cadastro-icon-eye'
                  onClick={() => setShowPassword2(!showPassword2)}
                />
              )}
              <input
                type={showPassword2 ? 'text' : 'password'}
                placeholder='*Confirme sua senha'
              />
            </div>
          </div>
          <div className='cadastro-link-container'>
            <a href='#'>Já possui uma conta?</a>
          </div>
          <div className='cadastro-button-container'>
            <button type='submit' className='cadastro-submit-btn'>
              Finalizar Cadastro
            </button>
          </div>
        </form>
      </div>
      <div className='cadastro-blue-background'>
        <img src={Logo} alt='Logo Branca' className='cadastro-logo' />
        <img src={Junin} alt='Junin' className='cadastro-junin' />
      </div>
    </div>
  )
}

export default Cadastro;
