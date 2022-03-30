import { render, screen } from '@testing-library/react';
import React from 'react';
import api from './api';
import App from './App';


describe('Requiscoes para API', () => {
    it('Exibir lista de transacoes atraves da API', () => {
        api.listaTransacoes()= [
            {
                "valor": 10,
                "transacao": "saque",
                "data": "10/08/2020",
                "id": 1
              },
              {
                "transacao": "deposito",
                "valor": 20,
                "data": "26/09/2020",
                "id": 2
              },
        ];

        render(<App />);

        expect(screen.findByText('saque')).toBeInTheDocument()
        expect(screen.getByTestId('transacoes').children.lenght).toBe(2);
    })
})