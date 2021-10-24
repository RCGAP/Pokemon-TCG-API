import React from 'react';
import { Card, Image } from 'semantic-ui-react';

// exemple de destructuration sur plusieurs niveaux, ainsi avatar_url et login sont utilisables directement
// const Repo = ({
//   name,
//   description,
//   owner: { avatar_url, login }
// }) =>

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
