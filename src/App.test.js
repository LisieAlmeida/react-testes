import React from 'react';
import App, { calcularNovoSaldo } from './App';
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
  describe('Quando eu realizao uma transacao', () => {
    it('que é um saque, o valor vai diminuir', () => {
      const valores = {
        transacao: 'saque',
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(100);
    });
  });
});
