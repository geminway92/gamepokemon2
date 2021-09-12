import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture";

describe("PokemonPicture component", () => {
  test("debe de hacer match con el snapshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false
      }
    });

    expect(wrapper.html()).toMatchInlineSnapshot(
      `<div class="pokemon-container"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" class="hidden-pokemon" alt="pokemon"></div>`
    );
  });

  test("debe mostrar la imagen oculta y el pokemon 100", () => {

    const wrapper = shallowMount( PokemonPicture, {
        props: {
            pokemonId: 100,
            showPokemon: false,
        }

    } )

    const [img1, img2] = wrapper.findAll('img')

    expect( img1.exists()).toBeTruthy()
    expect( img2).toBe(undefined)

    expect( img1.classes('hidden-pokemon')).toBeTruthy

    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.sv
    
    expect( img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')

});


  test("debe mostrar si pokemon si showPokemon:trues ", () => {

    const wrapper = shallowMount( PokemonPicture, {
        props: {
            pokemonId: 100,
            showPokemon: true,
        }

    } )

    const img1 = wrapper.find('img')

    expect( img1.exists()).toBeTruthy()
    expect( img1.classes('hiddem-pokemon')).toBe(false)
    expect( img1.classes('fade-in')).toBe(true)


  });
});
