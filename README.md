# PokeMon-React
Created with CodeSandbox
Dear Mirha and João.
Thank you for your time and attention.

I have started with React this past Thursday,15/12.
I've tried to translate some of my knowledge from state,
reactivity, composables from Javascript and VUE.js into it
by doing and checking the documentation for what I knew
how to do in Vue and JS.
I believe I could do most points fairly quickly.
It was a matter of learning the REACT way to do it.
I have used a separate file with PROPS just for the sake of
seeing and learning PROPS in REACT.
I 've create a RESET name function but I haven't put it to use.
This would serve as an error message for empty field
when searching for a pokemonName


I would still have a few questions regarding REACT but I've managed
to accomplish most points.
Let me address some of them:

1. Have a web page that allows a user to enter a pokemon name;

Done.

2. When submitting, query https://pokeapi.co and display the given
pokemon (at least name, number and sprite), or an error message if no
match is found;

Done. I usually like to keep the ApiCall file separately but this was
a very simple project.

3. Provide “Previous” & “Next” buttons, that switch to the previous/next
pokemons, base on their id number;

Done.

4. Provide a text-based search feature, where inputting a name or partial
name should look for a matching pokemon and show it

I believe this to be the same as number 1. I 've tinkered a bit
with https://pokeapi.co and I could not find where it would
return a big list WITH SPRITES and ID and Name.
It seems to me they want to queries to be specific.

5. Have at least two automated tests, for the two features above.

I have used ESLint. Since It is a small project with heavy browser
interaction, I didn't see a reason to use JEST or write
any Cypress test.
