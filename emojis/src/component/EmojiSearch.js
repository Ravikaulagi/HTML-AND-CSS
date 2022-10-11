import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
  
export default function EmojiSearch(){
  const [chosenEmoji, setChosenEmoji] = useState(null);
  
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  
  return (
    <div>
      <h3> Emoji Picker</h3>
      {chosenEmoji ? (
        <span>Your Emoji: {chosenEmoji.emoji}</span>
      ) : (
      <h4> <span>No Emoji</span></h4> 
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
      }