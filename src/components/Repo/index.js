import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Repo = ({ name, rarity, set, number }) => (
  <Card>
    <Image src={`https://images.pokemontcg.io/${set.id}/${number}.png`} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>Rarity: {rarity}</Card.Meta>
      <Card.Description>Series : {set.series}</Card.Description>
    </Card.Content>
  </Card>
);

export default Repo;
