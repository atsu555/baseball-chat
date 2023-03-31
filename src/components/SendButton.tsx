import React from 'react';

interface SendButtonProps {
  onClick: () => void;
}

export const SendButton: React.FC<SendButtonProps> = ({onClick}) => {
  return <button className="send-button" onClick={onClick}>送信</button>
}