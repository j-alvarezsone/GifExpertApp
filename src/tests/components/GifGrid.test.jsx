import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test de <GifGrid />', () => {
  const category = 'Dragon Ball';

  test('debe de mostrar el componente correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://google.com',
        title: 'ABC Title',
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
