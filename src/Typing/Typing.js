import React, {PropTypes} from 'react';

const getStyles = ({color, dotDiameter}) => {
  return {
    dot: {
      MozBorderRadius: '40px/40px',
      WebkitBorderRadius: '40px 40px',
      borderRadius: '40px/40px',
      border: 'solid',
      borderWidth: dotDiameter || '3px',
      borderColor: color || '#435AD9',
      float: 'left',
      marginRight: '2%',
    },
  };
};
const Typing = (props) => {
  const styles = getStyles(props);
  return (<div>
    <style>{`
      ._chat_template_dot:nth-child(2) {
        animation: _chat_template_updown1 linear 1.5s infinite;
      }

      ._chat_template_dot:nth-child(3)  {
        animation: _chat_template_updown2 linear 1.5s infinite;
      }

      ._chat_template_dot:nth-child(4)  {
        animation: _chat_template_updown3 linear 1.5s infinite;
      }

      @keyframes _chat_template_updown1 {
        0% {
          transform: translateY(5px);
        }
        25% {
          transform: translateY(10px);
        }
        50% {
          transform: translateY(15px);
        }
        75% {
          transform: translateY(10px);
        }
        100% {
          transform: translateY(5px);
        }
      }

      @keyframes _chat_template_updown2 {
        from {
          transform: translateY(10px);
        }
        25% {
          transform: translateY(15px);
        }
        50% {
          transform: translateY(10px);
        }
        75% {
          transform: translateY(5px);
        }
        to {
          transform: translateY(10px);
        }
      }

      @keyframes _chat_template_updown3 {
        from {
          transform: translateY(15px);
        }
        25% {
          transform: translateY(10px);
        }
        50% {
          transform: translateY(5px);
        }
        75% {
          transform: translateY(10px);
        }
        to {
          transform: translateY(15px);
        }
      }
      `}</style>
    <div className={'_chat_template_dot'} style={styles.dot} ></div>
    <div className={'_chat_template_dot'} style={styles.dot} ></div>
    <div className={'_chat_template_dot'} style={styles.dot} ></div>
  </div>);
};

Typing.propTypes = {
  color: PropTypes.string,
  dotDiameter: PropTypes.string,
};

export default Typing;
