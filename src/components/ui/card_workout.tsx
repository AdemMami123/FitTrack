"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

// Exercise data
const exercices = [
  {
    title: "Lat Pulldown",
    src: "/assets/workout/add.jpg",
    description: "4x12 reps for all exercises",
  },
  {
    title: "Push Pull Legs",
    src: "/assets/workout/biceps.jpg",
    description: "A workout program that alternates push, pull, and legs exercises.",
  },
  {
    title: "Full Body",
    src: "/assets/workout/squat.jpg",
    description: "A workout routine designed to target all major muscle groups in one session.",
  },
  {
    title: "Upper Lower Split",
    src: "/assets/workout/deadlift.jpg",
    description: "A workout program that alternates between upper body and lower body workouts.",
  },
  {
    title: "Bro Split",
    src: "/assets/workout/failure.jpg",
    description: "A bodybuilding workout split where each muscle group is worked on a separate day.",
  },
];

export function ThreeDCardDemo() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {exercices.map((exercise, index) => (
          <div key={index} className="w-full">
            <CardContainer className="w-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {exercise.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {exercise.description}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Image
                    src={exercise.src}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={exercise.title}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
