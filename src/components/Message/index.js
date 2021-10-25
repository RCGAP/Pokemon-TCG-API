import React from 'react';
import { Message as MessageSemanticUI } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Message = ({ sentence, hasError }) => (
  <MessageSemanticUI error={hasError}>
    {sentence}
  </MessageSemanticUI>
);

Message.propTypes = {
  sentence: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
};

Message.defaultProps = {
  hasError: false,
};

export default Message;
