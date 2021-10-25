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

  const [repos, setRepos] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('Veuillez saisir une recherche');
  const [hasError, setHasError] = useState(false);
  const [messageIsVisible, setMessageIsVisible] = useState(true);
  

  const changeMessageContent = (content, error = false) => {
    setMessage(content);
    setHasError(error);
    setMessageIsVisible(true);
  };


  const doSearch = () => {
    setLoading(true);
    changeMessageContent('Recherche en cours');

    axios
      .get(`https://api.pokemontcg.io/v2/cards?q=name:${searchedValue}`)
      .then((response) => {
        console.log(response);
        setRepos(response.data.data);
        console.log(setRepos);
      })
      .catch((error) => {
        console.error(error);
        changeMessageContent("La requête n'a pas aboutie", true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const timerID = setTimeout(() => {
      setMessageIsVisible(false);
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };

  }, [message]);

  return (
    <div className="app">
      <Header />
      <Search
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
