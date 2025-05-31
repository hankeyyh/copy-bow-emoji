'use client';

import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const bowEmoji = '🎀';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bowEmoji);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-16">
          Copy the Bow Emoji
        </h1>
        
        <div 
          className="cursor-pointer hover:bg-gray-50 p-8 rounded-lg transition-colors duration-200"
          onClick={copyToClipboard}
        >
          <div className="text-8xl font-mono text-black leading-none select-none">
            {bowEmoji}
          </div>
        </div>
        
        <button
          onClick={copyToClipboard}
          className="mt-12 px-6 py-2 bg-pink-200 hover:bg-pink-300 rounded-lg text-pink-600 transition-colors duration-200"
        >
          {copied ? 'Copy Success!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
