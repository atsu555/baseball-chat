import { useState } from 'react';
import { ChatArea } from '../components/ChatArea';
import { InputBox } from '../components/InputBox';
import { SendButton } from '../components/SendButton';

export default function Home() {
  const [message, setMessage] = useState('');

  // メッセージ送信時に実行される関数
  const handleSendMessage = () => {
    // ここにメッセージ送信時のロジックを記述
  };

  return (
    <>
      <div className="container">
        <h1>野球チャットボット</h1>
        <ChatArea />
        <div className="input-area">
          <InputBox />
          <SendButton onClick={handleSendMessage} />
        </div>
      </div>
    </>
  )
}
