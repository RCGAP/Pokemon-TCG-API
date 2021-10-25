import React, { useEffect, useRef } from 'react';
import { Segment, Input, Form } from 'semantic-ui-react';

const Search = ({
  doSearch,
  searchedValue,
  setSearchedValue,
  loading,
}) => {
  const inputElement = useRef(null);
  useEffect(() => {
    inputElement.current.focus();
  }, []); 

  return (
    <Segment>
      <Form
        onSubmit={doSearch}
      >
        <Input
          ref={inputElement}
          loading={loading}
          placeholder="Veuillez saisir une recherche"
          icon="search"
          iconPosition="left"
          fluid
          value={searchedValue}
          onChange={(event) => {
            setSearchedValue(event.target.value);
          }}
        />
      </Form>
    </Segment>
  );
};


export default Search;
