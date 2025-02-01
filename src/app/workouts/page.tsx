"use client";

import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import  Link  from "next/link";
import { AnimatedModalDemo } from "@/components/animatedModal";

const Workouts = () => {
  const slideData = [
    {
      title: "Customize your workout plan",
      button: "Create Workout Plan ",
      src: "/assets/workout/add.jpg",
      link: "/create_workout", // Add link for the "Create Workout Plan" button
    },
    {
      title: "Push Pull Legs",
      button: "View Program",
      src: "/assets/workout/biceps.jpg",
      link: "/ppl", // Link for the second button
    },
    {
      title: "Bro Split",
      button: "View Program",
      src: "/assets/workout/deadlift.jpg",
      link: "/bro-split", // Link for the third button
    },
    {
      title: "Full Body",
      button: "View Program",
      src: "/assets/workout/squat.jpg",
      link: "/full-body", // Link for the fourth button
    },
    {
      title: "Upper Lower Split",
      button: "View Program",
      src: "/assets/workout/failure.jpg",
      link: "/upper-lower-split", // Link for the fifth button
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 flex">
      {/*<AnimatedModalDemo/>*/}
      
      <Carousel slides={slideData} />
      

    </div>
  );
};

export default Workouts;
