"use client"; // Required for Next.js App Router

import React from "react";

type MyButtonProps = {
  label?: string;
  onClick?: () => void;
};

export default function MyButton({ label = "Click Me", onClick }: MyButtonProps) {
  return (
    <button 
      onClick={onClick} 
      style={{ padding: "10px 20px", background: "blue", color: "white", borderRadius: "5px" }}
    >
      {label}
    </button>
  );
}
