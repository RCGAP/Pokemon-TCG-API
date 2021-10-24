import React, { useEffect, useRef } from 'react';
import { Segment, Input, Form } from 'semantic-ui-react';

// je récupère une fonction en prop
const Search = ({
  doSearch,
  searchedValue,
  setSearchedValue,
  loading,
}) => {
  // je crée une référence, initialement null
  const inputElement = useRef(null);

  // je veux focus le champ, il faut appeler .focus() sur un élément HTML
  // je dois attendre que le DOM réel soit calculé
  // = je dois réagir APRES un rendu quand le DOM réel est calculé
  // = useEffect
  useEffect(() => {
    // le DOM réel est accessible
    // un moyen d'accéder aux élements du dom réel serait cvia des querySelector ou getElementById
    // un moyen alternatif est fourni par react, les ref
    // https://fr.reactjs.org/docs/refs-and-the-dom.html
    // https://fr.reactjs.org/docs/hooks-reference.html#useref
    // document.querySelector('input').focus();
    inputElement.current.focus();
    // après le rendu la ref contient un pointeur vers mon élement dans le dom réel
    // console.log('après le rendu', inputElement);
  }, []); // -> après le premier rendu

  // avant le rendu la ref est vide, j'ai crée une boite vide
  // console.log('avant le rendu', inputElement);

  return (
    <Segment>
      {/* {console.log('Rendu de search, seachedValue reçue en props,', searchedValue)} */}
      <Form
        // j'associe ma définition de fonction à un évenemt, quand l'événement aura lieu la fonction sera executée
        onSubmit={doSearch}
      >
        <Input
          // via la prop ref je dis "React-dom quand tu vas passer la dessus au moment du rendu, tu dois mémoriser ce que ça a donner dans le DOM réel dans inputElement"
          ref={inputElement}
          loading={loading}
          placeholder="Veuillez saisir une recherche"
          icon="search"
          iconPosition="left"
          fluid
          value={searchedValue}
          onChange={(event) => {
            // console.log('changement de state,', event.target.value);
            setSearchedValue(event.target.value);
          }}
        />
      </Form>
    </Segment>
  );
};


export default Search;
