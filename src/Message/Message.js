import React, { PropTypes } from 'react';

const Message = ({message}) => {
  const divContainerStyle = {
    width: '100%',
    clear: 'both'
  };

  let divStyle = {
    float :message.from,
    backgroundColor: message.backColor,
    maxWidth: '65%',
    wordWrap: 'break-word',
    color: '#262626',
    borderRadius: '10px',
    padding: '2%',
    borderColor: 'grey',
    boxShadow: '1px 5px 10px rgba(0,0,0,.13)'
  };

  const divChildStyle = {
    marginRight: '2%',
    overflow: 'hidden',
    paddingBottom: '2%',
    paddingLeft: '2%',
    paddingRight: '2%'
  };

  return (
    <div style={divContainerStyle}>
      <div style={divChildStyle}>
        <div style={divStyle}>
          <span>{message.message}</span>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    backColor: PropTypes.string.isRequired
  })
}

export default Message;
