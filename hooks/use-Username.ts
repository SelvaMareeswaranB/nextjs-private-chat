import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const NAMES = [
  "wolf",
  "hawk",
  "satan",
  "luffy",
  "shark",
  "deku",
  "bakugo",
  "vecna",
  "yato",
  "butcher",
  "eren",
];
const STORAGE_KEY = "chat_username";

const generateUserName = () => {
  const word = NAMES[Math.floor(Math.random() * NAMES.length)];
  return `anonymous-${word}-${nanoid(5)}`;
};

export const useUsername = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const getName = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUsername(stored);
        return;
      } else {
        const generatedName = generateUserName();
        localStorage.setItem(STORAGE_KEY, generatedName);
        setUsername(generatedName);
      }
    };

    getName();
  }, []);

  return { username };
};
