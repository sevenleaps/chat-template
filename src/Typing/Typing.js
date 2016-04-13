import React from 'react';

var styleDot = {
    mozBorderRadius: '40px/40px',
    webkitBorderRadius: '40px 40px',
    borderRadius: '40px/40px',
    border: 'solid 10px #435AD9',
    width: '0px',
    height: '0px',
    float: 'left'
}


const Typing = () =>
  <div>
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
          transform: translateY(10px);
        }
        25% {
          transform: translateY(20px);
        }
        50% {
          transform: translateY(30px);
        }
        75% {
          transform: translateY(20px);
        }
        100% {
          transform: translateY(10px);
        }
      }

      @keyframes _chat_template_updown2 {
        from {
          transform: translateY(20px);
        }
        25% {
          transform: translateY(30px);
        }
        50% {
          transform: translateY(20px);
        }
        75% {
          transform: translateY(10px);
        }
        to {
          transform: translateY(20px);
        }
      }

      @keyframes _chat_template_updown3 {
        from {
          transform: translateY(30px);
        }
        25% {
          transform: translateY(20px);
        }
        50% {
          transform: translateY(10px);
        }
        75% {
          transform: translateY(20px);
        }
        to {
          transform: translateY(30px);
        }
      }
      `}
    </style>
    <div className={'_chat_template_dot'} style={styleDot} ></div>
    <div className={'_chat_template_dot'} style={styleDot} ></div>
    <div className={'_chat_template_dot'} style={styleDot} ></div>
  </div>

export default Typing;
