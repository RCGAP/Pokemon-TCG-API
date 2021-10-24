// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// == Import
import Header from 'src/components/Header';
import Search from 'src/components/Search';
import Message from 'src/components/Message';
import Results from 'src/components/Results';

import data from 'src/data/repos';

import './style.scss';

// == Composant
const App = () => {
  // avec useState je définis des variables d'états = des données brut représentant l'état de l'application = la source de vérité qui determine ce qui sera affiché dans l'appli
  // useState prend en argument une valeur initiale et retourne un tableau contenant en 1er l'accès en lecture à ma donnée, toujours vrai dans le temps, en 2ème une fonction pour modifier cette donnée et déclencher un nouveau rendu 
  const [repos, setRepos] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('Veuillez saisir une recherche');
  const [hasError, setHasError] = useState(false);
  const [messageIsVisible, setMessageIsVisible] = useState(true);
  
  // console.log('Rendu : valeur actuelle de mon state searchValue', searchedValue);

  // on construit une fonction pour éviter de se répéter
  const changeMessageContent = (content, error = false) => {
    setMessage(content);
    setHasError(error);
    setMessageIsVisible(true);
  };

  // je définis une fonction traduisant mon intension de faire une recherche
  const doSearch = () => {
    // je dis qu'on commence à charger
    setLoading(true);
    changeMessageContent('Recherche en cours');
    // je fais la requete axios
    axios
      .get(`https://api.pokemontcg.io/v2/cards?q=name:${searchedValue}`)
      // dès que j'ai la réponse je range les infos dans mon state
      .then((response) => {
        console.log(response);
        // j'ai l'info retournée par l'api,
        // je veux l'utiliser dans mon application ->
        // je modifie le state = la donnée brute qui représente la vérité dans mon application
        // ça déclenche un nouveau rendu, les composants reçoivent l'infos à jour et l'interface évolue
        setRepos(response.data.data);
        console.log(setRepos);
      })
      // on peut gérer le cas d'erreur
      .catch((error) => {
        console.error(error);
        changeMessageContent("La requête n'a pas aboutie", true);
      })
      .finally(() => {
        // quand la requete est finie on a fini de charger qu'il y ai eu une erreur ou non
        setLoading(false);
      });
  };


  // via la fonction setTimeout on peut retarder l'execution d'instructions, on passe 2 argument une fonction de rappel et un delai
  // je place mon setTimeout dans useEffect pour pouvoir le déclencher seulement après certains rendus
  useEffect(() => {


    // je déclenche un nouveau timeout
    const timerID = setTimeout(() => {
      setMessageIsVisible(false);
    }, 1000);

    // window.addEventListener('scroll')

    // on peut retourner une fonction de nettoyage dans la fonction de rappel de useEffect
    // Elle sera appelé par react automatiquement justement avant que mon application fasse un nouveau rendu
    return () => {
      // je veux nettoyer le timeout précédent
      clearTimeout(timerID);
      // window.removeEventListener()
    };
    //
  }, [message]); // -> notre effet s'appliquera uniquement aux rendus pour lesquels message change

  return (
    <div className="app">
      <Header />
      <Search
        // je transmet une définition de fonction via les props
        doSearch={doSearch}
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
        loading={loading}
      />
      {messageIsVisible && <Message sentence={message} hasError={hasError} />}
      <Results repos={repos} />
    </div>
  );
};

// == Export
export default App;
