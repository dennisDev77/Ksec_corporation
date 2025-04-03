import React from 'react'

interface ButtonProps{
    children: React.ReactNode;
    className?: string;
    [x:string]: unknown; // Add this line to allow any other props
}
export default function Button({ children, className, ...props }: ButtonProps) {

  // Destructure the props to get children and className
  return (
    <>
      <button className={`text-lg text-zinc-200 px-4 py-2 rounded-sm ${className}`} {...props}>
      {children}
      </button>
    </>
)
}         