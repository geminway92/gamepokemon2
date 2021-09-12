import PokemonAlert from '@/components/PokemonAlert'
import { shallowMount, mount } from '@vue/test-utils'

describe('PokemonAlert Component', () => {
    let wrapper
    
    beforeEach(() => {
       wrapper = shallowMount( PokemonAlert )
    })
    test('pruebas con checkAnswer', () => {

        const wrapper = shallowMount( PokemonAlert, {

            data() {
                return {
                showPokemon: false,
                showAnswer: false,
                message: '',
                activeColor: '',
              }  
            }, 
        })
        console.log(wrapper.vm)
        expect( wrapper.find('h2').exists()).toBeTruthy()
    })



})