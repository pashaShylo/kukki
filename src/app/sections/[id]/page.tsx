"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Skeleton,
  Button,
} from "@nextui-org/react";
import Thumb from "@/components/Thumb";
import NextImage from "next/image";

const list = [
  {
    id: 1,
    title: "Футбол",
    description:
      "Футбол - це спортивна гра, в якій дві команди змагаються за м'ячем і намагаються забити його ворожі ворота. Це популярний вид спорту, який грають на стадіонах та в інших місцях з участю мільйонів гравців по всьому світу.",
    img: "/football.jpg",
    likes: 40,
  },
  {
    id: 2,
    title: "Баскетбол",
    description:
      "Баскетбол - це командна спортивна гра, в якій дві команди, складені з п'яти гравців кожна, змагаються за кидками м'яча в баскетбольне кільце суперника. Цей вид спорту є одним з найпопулярніших на світі.",
    img: "/basketballCard.jpg",
    likes: 30,
  },
  {
    id: 3,
    title: "Теніс",
    description:
      "Теніс - це індивідуальна або командна гра, в якій гравці використовують ракетки, щоб відбивати м'яч через мережу на поле суперника. Це популярний вид спорту як для професійних гравців, так і для любителів.",
    img: "/tennis.webp",
    likes: 10,
  },
  {
    id: 4,
    title: "Плавання",
    description:
      "Плавання - це спортивна діяльність, в якій люди рухаються в воді за допомогою рухів рук і ніг. Це не тільки вид спорту, але і важлива навичка, яка може врятувати життя в небезпечних ситуаціях на воді.",
    img: "/swim.jpg",
    likes: 54,
  },
  {
    id: 5,
    title: "Біг",
    description:
      "Біг - це один з найпоширеніших видів спорту, при якому людина працює м'язами та витрачає енергію, рухаючись швидко вперед. Це часто використовується для підтримки фізичної форми та здоров'я.",
    img: "/running.jpg",
    likes: 15,
  },
  {
    id: 6,
    title: "Гольф",
    description:
      "Гольф - це спортивна гра, в якій гравці намагаються попасти м'ячем у лунки на спеціальному полі, використовуючи найменше кількість ударів. Це гра, що вимагає точності та стратегії.",
    img: "/golf.jpeg",
    likes: 83,
  },
  {
    id: 7,
    title: "Волейбол",
    description:
      "Волейбол - це командний спорт, в якому дві команди змагаються за м'яч, рухаючись вздовж мережі на спеціальному майданчику. Це популярний вид спорту як серед аматорів, так і серед професіоналів.",
    img: "/valleyball.webp",
    likes: 71,
  },
  {
    id: 8,
    title: "Велосипед",
    description:
      "Велосипед - це засіб пересування та вид спорту, в якому гравець використовує двоколісний велосипед для їзди на відкритому повітрі або в спеціальних велотреках. Це ефективний спосіб зберегти форму та розважитися.",
    img: "/cycling.jpg",
    likes: 122,
  },
];

export default function App({ params: { id } }: { params: { id: string } }) {
  const item = list.find((item) => item.id === Number(id));
  const [liked, setLiked] = React.useState(false);
  return (
    <div className="w-full h-full bg-[#fff]">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[1024px] mx-auto mt-12 mb-12"
        shadow="lg"
      >
        <CardBody>
          <div className="grid grid-cols-2 gap-4">
            <Image
              as={NextImage}
              alt="Card background"
              src={item!.img}
              width={500}
              height={400}
            />
            <div className="flex flex-col gap-6">
              <h4 className="text-2xl font-bold">{item!.title}</h4>
              <p>{item!.description}</p>
            </div>
          </div>

          <CardFooter className="flex justify-between items-center">
            <div></div>
            <Button
              isIconOnly
              className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
              radius="full"
              variant="light"
              onPress={() => setLiked((v) => !v)}
            >
              <Thumb />
            </Button>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
}
