"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Exercise data
const exercises = [
  {
    title: "Push",
    src: "/assets/push/benchpress.jpg",
    description: "Chest, Shoulders, Triceps workout routine.",
    exercises: [
      { name: "Bench Press", src: "/assets/workout/bench_press.jpg", sets: "4", reps: "12" },
      { name: "Shoulder Press", src: "/assets/workout/shoulder_press.jpg", sets: "4", reps: "10" },
      { name: "Tricep Dips", src: "/assets/workout/tricep_dips.jpg", sets: "3", reps: "15" },
    ],
  },
  {
    title: "Pull",
    src: "/assets/pull/latpulldown.jpg",
    description: "Back, Biceps workout routine.",
    exercises: [
      { name: "Deadlifts", src: "/assets/workout/deadlifts.jpg", sets: "4", reps: "8" },
      { name: "Pull-ups", src: "/assets/workout/pullups.jpg", sets: "3", reps: "10" },
      { name: "Bicep Curls", src: "/assets/workout/bicep_curls.jpg", sets: "4", reps: "12" },
     
    ],
  },
  {
    title: "Legs",
    src: "/assets/legs/squat.jpg",
    description: "Legs and Glutes workout routine.",
    exercises: [
      { name: "Squats", src: "/assets/workout/squats.jpg", sets: "4", reps: "10" },
      { name: "Lunges", src: "/assets/workout/lunges.jpg", sets: "3", reps: "12" },
      { name: "Leg Press", src: "/assets/workout/leg_press.jpg", sets: "4", reps: "12" },
    ],
  },
];

export function ThreeDCardDemo() {
  const [selectedExercise, setSelectedExercise] = useState<typeof exercises[number] | null>(null);

  return (
    <div className="min-h-screen w-full flex justify-center items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {exercises.map((exercise, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="w-full cursor-pointer" onClick={() => setSelectedExercise(exercise)}>
                <CardContainer className="w-full">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
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
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{selectedExercise?.title} Exercises</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {selectedExercise?.exercises.map((ex, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <Image src={ex.src} height="500" width="500" className="h-40 w-auto object-cover rounded-md" alt={ex.name} />
                    <p className="text-lg font-semibold mt-2">{ex.name}</p>
                    <p className="text-sm">Sets: {ex.sets} | Reps: {ex.reps}</p>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}