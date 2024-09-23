import { useState, useEffect } from "react";

export default function Friends({ userNickname }: { userNickname: string }) {
    const [friends, setFriends] = useState<string[]>([]);
  
    useEffect(() => {
        const getFriends = async () => {
          const response = await fetch(`http://localhost:3000/getfriends/${userNickname}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          });
          const friendsData = await response.json();
          setFriends(friendsData);
        };
        getFriends();
      }, [userNickname]);
  
    return (
      <div>
        <h2>Friends of {userNickname}</h2>
        <ul>
          {friends.map((friend: string, index: number) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
      </div>
    );
  }