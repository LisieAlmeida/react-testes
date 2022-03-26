import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';

describe('Componente principal', () => {
  describe('Quando eu abro o app do banco', () => {
    it('Mostrar o nome do banco', () => {
      render(<App />);

      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    });
    test('o saldo é exibido', () => {
      render(<App />);

      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    });
    it('o botão realizar transacao é exibio', () => {
      render(<App />);

      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    });
  });
});
