import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ims=326x"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={1} />
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <span>R$1920,28</span>
        </Total>
      </footer>
    </Container >
  );
}