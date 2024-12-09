'use client'

import React, { createContext, useContext, useState } from 'react';

const RegisterContext = createContext();

export function RegisterProvider({ children }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    education: '',
    genero: 0,
    phoneNumber: ''
  });

  return (
    <RegisterContext.Provider value={{ formData, setFormData }}>
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(RegisterContext);
  if (context === undefined) {
    throw new Error('useRegister must be used within a RegisterProvider');
  }
  return context;
}

