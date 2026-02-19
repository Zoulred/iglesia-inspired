import React, { useState, useRef, useEffect } from 'react';
import { profileData } from '../data/portfolio';

interface Message {
  id: number;
  text: string | React.ReactNode;
  sender: 'user' | 'bot';
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm Zoul. Are you looking for a collaboration?", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isOnline = true; // Showing Zoul as online

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newUserMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: (
          <span>
            Awesome! I’d love to discuss how we can work together. Could you share a bit about your ideas or what you’re looking for in this collaboration? I’m offline right now, but you can email me directly at{' '}
            <a href={`mailto:${profileData.email}`} className="underline text-blue-600 dark:text-blue-400 [.cyberhacker_&]:text-cyan-300">{profileData.email}</a>.
          </span>
        ),
        sender: 'bot',
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black hover:bg-gray-900 text-white rounded-full px-6 py-3 shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 [.cyberhacker_&]:bg-gray-900 [.cyberhacker_&]:hover:bg-black [.cyberhacker_&]:border [.cyberhacker_&]:border-cyan-500 [.cyberhacker_&]:shadow-cyan-500/50"
          aria-label="Open Chat"
        >
          <span className="font-semibold text-sm">Chat with Zoul</span>
          <div className="relative">
            <img src={profileData.avatar} alt="Chat with Zoul" className="w-6 h-6 rounded-full" />
            <span className={`absolute bottom-0 right-0 block h-2 w-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-500'} ring-1 ring-white [.cyberhacker_&]:${isOnline ? 'bg-lime-400' : 'bg-red-500'} [.cyberhacker_&]:ring-gray-900`} title={isOnline ? 'Online' : 'Offline'}></span>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-none shadow-xl w-80 sm:w-96 flex flex-col h-[500px] border border-gray-200 dark:border-gray-700 [.cyberhacker_&]:bg-gray-900 [.cyberhacker_&]:border-cyan-500 [.cyberhacker_&]:shadow-cyan-500/20">
          <div className="p-4 bg-blue-600 dark:bg-blue-800 rounded-none flex justify-between items-center [.cyberhacker_&]:bg-gray-900 [.cyberhacker_&]:border-b [.cyberhacker_&]:border-cyan-500">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={profileData.avatar}
                  alt="Zoul"
                  className="w-10 h-10 rounded-full"
                />
                <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-500'} ring-2 ring-white [.cyberhacker_&]:${isOnline ? 'bg-lime-400' : 'bg-red-500'} [.cyberhacker_&]:ring-gray-900`} title={isOnline ? 'Online' : 'Offline'}></span>
              </div>
              <div>
                <h3 className="text-white font-semibold [.cyberhacker_&]:text-cyan-400">Chat with Zoul</h3>
                <p className="text-xs text-white/80 [.cyberhacker_&]:text-cyan-300/70">{isOnline ? 'Online' : 'Currently offline'}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 focus:outline-none [.cyberhacker_&]:text-cyan-400 [.cyberhacker_&]:hover:text-cyan-200"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <img
                    src={profileData.avatar}
                    alt="Zoul"
                    className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-600 [.cyberhacker_&]:border-cyan-500"
                  />
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none [.cyberhacker_&]:bg-cyan-600 [.cyberhacker_&]:shadow-cyan-500/20'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none [.cyberhacker_&]:bg-gray-800 [.cyberhacker_&]:text-cyan-400 [.cyberhacker_&]:border [.cyberhacker_&]:border-cyan-500'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-4">
            <div
              className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 py-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 [.cyberhacker_&]:bg-gray-900 [.cyberhacker_&]:text-cyan-300"
              aria-live="polite"
            >
              <span
                className={`inline-block h-2.5 w-2.5 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-400'} ring-1 ring-white dark:ring-gray-800`}
                aria-hidden="true"
              ></span>
              <span className="truncate">
                {isOnline ? 'Zoul is online' : 'Zoul is currently offline'}
              </span>
              {!isOnline && (
                <a href={`mailto:${profileData.email}`} className="ml-auto underline text-blue-600 dark:text-blue-400">{profileData.email}</a>
              )}
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700 [.cyberhacker_&]:border-cyan-500 bg-white dark:bg-gray-800 rounded-none [.cyberhacker_&]:bg-gray-900">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white [.cyberhacker_&]:bg-gray-800 [.cyberhacker_&]:border-cyan-500 [.cyberhacker_&]:text-cyan-400 [.cyberhacker_&]:placeholder-cyan-700 [.cyberhacker_&]:focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors [.cyberhacker_&]:bg-cyan-600 [.cyberhacker_&]:hover:bg-cyan-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};