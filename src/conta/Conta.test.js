import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import Conta from './Conta';

describe('Componente de conta', () => {
  it('Exibir o saldo da conta com valor monetário', () => {
    render(<Conta saldo={1000} />);

    const saldo = screen.getByTestId('saldo-conta');

    expect(saldo.textContent).toBe('R$ 1000');
  });
  it('Chama a funcao de realizar transacao quando o botao é clicado', () => {
    const funcaoRealizarTransacao = jest.fn(); //Passa uma funcao que nao faz nada, mas checa se a funcaopelo nome dela se esta funcionando

    render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />);

    fireEvent.click(screen.getByText('Realizar operação'));

    expect(funcaoRealizarTransacao).toHaveBeenCalled(); //Queremos saber se ela foi chamada
  });
});
