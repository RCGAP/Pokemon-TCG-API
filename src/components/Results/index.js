import React from 'react';
import { Card } from 'semantic-ui-react';


import Repo from 'src/components/Repo';

/*
  on instancie les composants fournis par semantic ui et on les configure via des props
*/

const Results = ({ repos }) => (
  <Card.Group itemsPerRow={3} stackable>
    {repos.map((repo) => {
      return <Repo key={repo.id} {...repo} />;
    })}
  </Card.Group>
);

export default Results;
