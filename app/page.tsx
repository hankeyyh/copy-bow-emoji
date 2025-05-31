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

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Copy the Cute Bow Emoji 🎀 !');
    
    // 计算弹窗位置（居中）
    const width = 600;
    const height = 400;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`;
    
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, 'facebook-share', windowFeatures);
  };

  const shareOnX = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Copy the Cute Bow Emoji 🎀 !');
    
    // 计算弹窗位置（居中）
    const width = 600;
    const height = 400;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`;
    
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, 'x-share', windowFeatures);
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

        {/* 社交分享按钮 */}
        <div className="flex gap-30 mt-30 justify-center">
          <button
            onClick={shareOnFacebook}
            className="flex items-center gap-1.5 px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Share
          </button>
          
          <button
            onClick={shareOnX}
            className="flex items-center gap-1.5 px-2 py-1 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 text-xs"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
