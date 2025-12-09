"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function RoomPage() {
  const params = useParams();
  const roomId = params.roomId as string;
  const [copyStatus, setCopyStatus] = useState("COPY");
  const [timeRemaining, setTimeRemaining] = useState<number | null>(121);
  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopyStatus("COPIED!");
    setTimeout(() => setCopyStatus("COPY"), 2000);
  };

  const formatTimeRemaining = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  return (
    <main className="flex flex-col h-screen max-h-screen overflow-hidden">
      <header className="border-b border-zinc-800 p-4 flex items-center justify-between bg-zinc-900/30">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 uppercase">Room ID</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-green-500">{roomId}</span>
              <button
                onClick={copyLink}
                className="text-[10px] bg-zinc-800 hover:bg-zinc-700 px-2 py-0.5 rounded text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
              >
                {copyStatus}
              </button>
            </div>
          </div>
          <div className="h-8 w-px bg-zinc-800" />
          <div className="flex flex-col ">
            <span className="text-xs text-zinc-500 uppercase">
              Self-Destruct
            </span>
            <span
              className={`text-sm font-bold flex items-center ${
                timeRemaining !== null && timeRemaining < 60
                  ? "text-red-500"
                  : "text-amber-500"
              }`}
            >
              {timeRemaining !== null
                ? formatTimeRemaining(timeRemaining)
                : "--:--"}
            </span>
          </div>
        </div>
        <button className="text-xs bg-zinc-800 hover:bg-red-600 px-3 py-1.5 text-zinc-400 hover:text-white font-bold transition-all group flex items-center gap-2 disabled:opacity-50 ">
          <span className="group-hover:animate-pulse">💣</span>
          DESTROY NOW
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin"></div>

      <div className="p-4 border-t border-zinc-800 bg-zinc-900/30"></div>
      
      <div></div>
    </main>
  );
}
