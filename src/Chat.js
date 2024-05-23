import { useState, useRef } from 'react';
import style from './index.module.css';

function Chat({ messages, addMessage }) {
    const [input, setInput] = useState('');
    const textareaRef = useRef(null);

    const handleChangeInput = (e) => {
        setInput(e.target.value);
        autoResizeTextarea(e.target);
    };

    const handleAdderInput = () => {
        if (input.trim()) {
            addMessage({ text: input, output: "" });
            setInput('');
            textareaRef.current.style.height = 'auto';
        }
    };

    const autoResizeTextarea = (textarea) => {
        textarea.style.height = 'auto'; 
        textarea.style.height = textarea.scrollHeight + 'px'; 
    };

    return (
        <div className={style.chat_container}>
            <div className={style.adder}>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <div className={style.msg}>
                            <p>User:</p><br/>
                            <p>{msg.text}</p>
                        </div>
                        {msg.output && (
                           <div className={style.msg1}>
                           <p>Bot's :</p><br/>
                           <p>{msg.output}</p>
                           </div>
                        )}
                        
                    </div>
                ))}
            </div>
            <div className={style.input}>
                <textarea
                    ref={textareaRef}
                    type='text'
                    value={input}
                    onChange={handleChangeInput}
                    placeholder='Message Me'
                />
                <button type='submit' onClick={handleAdderInput}>Send</button>
            </div>
        </div>
    );
}

export default Chat;
