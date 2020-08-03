import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';
import ProducMock from '../../__mocks__/ProducMock';

describe('<Produc/>', () => {
  test('Render de componente Produc', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });
  test('Comprobar el boton de comprar', () => {
    const handleAddToCard = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProducMock} handleAddToCart={handleAddToCard} />
      </ProviderMock>
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCard).toHaveBeenCalledTimes(1);
  });
});
