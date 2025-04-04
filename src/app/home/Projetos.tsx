"use client"

import { HoverEffect } from "../../components/ui/card-hover-effect";

export default function Projetos() {
  return (
    <div className=" max-w-5xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Ksecurity",
    description:
      "Lorem A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Ksecurity",
    description:
      "Lorem A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Ksecurity",
    description:
      "Lorem A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
 
];
