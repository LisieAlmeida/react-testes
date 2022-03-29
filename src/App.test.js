import React from 'react';
import App, { calcularNovoSaldo } from './App';
import { fireEvent, render, screen } from '@testing-library/react'; //Na doc do testinglibrary cliecando em fireEvent, tem um linki que leva ele vai pra um lista de eventos. A docmentacao é no github

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
    it('que é um saque, a transacao será realizada', () => {
      render(<App />);
      // Com o screen podemos apenas renderizar o componente e as propriedades passamos com o creen
      const saldo = screen.getByText('R$ 1000');
      const transacao = screen.getByLabelText('Saque');
      const valor = screen.getByTestId('valor');
      const botaoTransacao = screen.getByText('Realizar operação');

      expect(saldo.textContent).toBe('R$ 1000');

      fireEvent.click(transacao, { target: { value: 'saque' } });
      fireEvent.change(valor, { target: { value: 10 } });
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe('R$ 990');
    });
  });
});
