"use client"

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";


const NAMES =["wolf","hawk","satan","luffy","shark","deku","bakugo","vecna","yato","butcher","eren"]
const STORAGE_KEY = "chat_username"

const generateUserName = ()=>{
  const word = NAMES[Math.floor(Math.random()*NAMES.length)]
  return `anonymous-${word}-${nanoid(5)}`
}
export default function Home() {
  const[username,setUsername]=useState("")
  useEffect(()=>{
    const getName= ()=>{
      const stored = localStorage.getItem(STORAGE_KEY)
      if(stored){
        setUsername(stored)
        return
      }
      else{
        const generatedName = generateUserName()
        localStorage.setItem(STORAGE_KEY,generatedName)
        setUsername(generatedName)
      }
    }

    getName()
  },[])
  
  return (
    <main className="flex min-h-screen justify-center items-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-center tracking-tight text-2xl  text-green-500">{">"}private_chat</h1>
          <p className="text-zinc-500 text-sm">A private,self-destructing chat room</p>
        </div>
        <div className="border border-zinc-800 p-6 bg-zinc-900/40 backdrop-blur-md">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="flex items-center text-zinc-500">
                Your Identity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-zinc-950 border border-zinc-800 text-sm text-zinc-400 font-mono p-3">
                  {username}
                </div>
              </div>
            </div>
            <button className="w-full bg-zinc-100 text-black p-3 text-sm font-bold hover:text-gray-600 transition-colors   cursor-pointer disabled:opacity-50">
              CREATE SECURE ROOM
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
