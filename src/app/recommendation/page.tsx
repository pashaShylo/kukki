"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image, Skeleton } from "@nextui-org/react";
import Thumb from "@/components/Thumb";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { Progress } from "@nextui-org/react";

const list = [
  {
    id: 1,
    title: "Футбол",
    img: "/football.jpg",
    likes: 40,
  },
  {
    id: 2,
    title: "Баскетбол",
    img: "/basketballCard.jpg",
    likes: 30,
  },
  {
    id: 3,
    title: "Теніс",
    img: "/tennis.webp",
    likes: 10,
  },
  {
    id: 4,
    title: "Плавання",
    img: "/swim.jpg",
    likes: 54,
  },
  {
    id: 5,
    title: "Біг",
    img: "/running.jpg",
    likes: 15,
  },
  {
    id: 6,
    title: "Гольф",
    img: "/golf.jpeg",
    likes: 83,
  },
  {
    id: 7,
    title: "Волейбол",
    img: "/valleyball.webp",
    likes: 71,
  },
  {
    id: 8,
    title: "Велосипед",
    img: "/cycling.jpg",
    likes: 122,
  },
];

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const [loading, setLoading] = React.useState(true);

  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);

  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if(loading) return (
    <Progress
      size="md"
      isIndeterminate
      aria-label="Loading..."
      className="max-w-[1024px] mx-auto mt-40 mb-12"
  />)

  return (
    <div className="max-w-[1024px] mx-auto gap-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-12 mb-12">
      {list.map((item, index) => {
        if(index%2 === 0) return null
        return <Card
          shadow="sm"
          key={index}
          isPressable={isLoaded}
          onPress={() => router.push(`/sections/${item.id}`)}
        >
          <CardBody className="overflow-visible p-0">
            <Skeleton isLoaded={isLoaded} className="rounded-lg m-2">
              <Image
                as={NextImage}
                shadow="sm"
                radius="lg"
                width={200}
                height={200}
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </Skeleton>
          </CardBody>
          <CardFooter className="text-small justify-between">
            <Skeleton isLoaded={isLoaded} className="w-3/5 rounded-lg">
              <b>{item.title}</b>
            </Skeleton>
            <Skeleton isLoaded={isLoaded} className="w-2/5 rounded-lg ml-2">
              <div className="flex flex-row items-center gap-1">
                <Thumb />
                <p className="text-default-500">{item.likes}</p>
              </div>
            </Skeleton>
          </CardFooter>
        </Card>
      }).filter(Boolean)}
    </div>
  );
}
