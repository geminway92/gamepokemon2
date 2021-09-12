import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( PokemonPage )
    })

    test('debe de hacer match con el snapshot', () => {

        expect( wrapper.html() ).toMatchSnapshot()

    })
    
    test('debe de llamar mixPokemonArray al montar', () => {

        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        const wrapper = shallowMount( PokemonPage )

        expect( mixPokemonArraySpy ).toHaveBeenCalled()
    })

    test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {

        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                pokemonArr: pokemons,
                pokemon: pokemons[0],
                showPokemon: false,
                showAnswer: false,
                message: '',
                pokemonPoint1: 0,
                pokemonPoint2: 0,
                activeColor: '',
                disabledOptions: false
              }  
            } 

        })

        expect( wrapper.html()).toMatchSnapshot()

    })

    test('debe de mostrar los componentes de PokemonPicture, PokemonOption, PokemonAlert y PokemonPoint', () => {

        const wrapper = shallowMount( PokemonPage, {

            data() {
                return {
                pokemonArr: pokemons,
                pokemon: pokemons[0],
                showPokemon: false,
                showAnswer: true,
                message: '',
                pokemonPoint1: 0,
                pokemonPoint2: 0,
                activeColor: '',
                disabledOptions: false
              }  
            }, 

        })

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')
        const point   = wrapper.find('pokemon-point-stub')
        const alert   = wrapper.find('pokemon-alert-stub')

        expect( point ).toBeTruthy()
        expect( picture ).toBeTruthy()
        expect( options ).toBeTruthy()
        expect( alert ).toBeTruthy()

        expect( picture.attributes('pokemonid')).toBe('1')
        expect( options.attributes('pokemons')).toBeTruthy()
        expect( point.attributes('pokemonscore1')).toBeTruthy()
        expect( point.attributes('pokemonscore2')).toBeTruthy()
        expect( alert.attributes('message')).toEqual('')
    })


    test('pruebas con checkAnswer', async() => {

        const wrapper = shallowMount( PokemonPage, {

            data() {
                return {
                pokemonArr: pokemons,
                pokemon: pokemons[0],
                showPokemon: false,
                showAnswer: false,
                message: '',
                activeColor: '',
                disabledOptions: false
              }  
            }, 
        })

        await wrapper.vm.checkAnswer(1)

        expect( wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.vm.message).toBe(`Correcto, era ${ pokemons[0].name}`)
        
        await wrapper.vm.disabledOptionsWrapper()
    
        await wrapper.vm.checkAnswer(4)
        expect( wrapper.vm.message).toBe(`Oops, era ${ pokemons[0].name}`)
        console.log(wrapper.vm.message)
        
    })
})