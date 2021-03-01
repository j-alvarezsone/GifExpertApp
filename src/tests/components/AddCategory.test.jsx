import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components';

describe('Pruebas en <AddCategory/>', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';

    input.simulate('change', { target: { value } });
  });

  test('no debe de poestear la información en submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar setCategories y limpiar la caja de texto', () => {
    const value = 'Hola mundo';

    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('');
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
  });
});
