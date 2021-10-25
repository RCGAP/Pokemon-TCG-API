import React from 'react';
import { Card } from 'semantic-ui-react';

import Repo from 'src/components/Repo';

const Results = ({ repos }) => (
  <Card.Group itemsPerRow={3} stackable>
    {repos.map((repo) => {
      return <Repo key={repo.id} {...repo} />;
    })}
  </Card.Group>
);

export default Results;
