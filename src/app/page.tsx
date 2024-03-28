"use client";
import Image from "next/image";
import MattPic from "../../public/matt1.jpg";
import FlyingBalloons from "./FlyingBaloons";
import { useEffect, useState } from "react";
export default function Home() {
  const [audio] = useState(new Audio("Murica.mp3")); // Replace 'your_music_file.mp3' with the path to your music file
  audio.volume = 0.5; // Adjust the volume as needed

  const handlePlay = () => {
    audio.play();
  };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <header className="mt-64 flex flex-col gap-2  justify-center items-center">
          <span className="font-bold text-2xl text-center">
            Happy Birthday to my favorite brat Matt, coming from Mateusz ❤
          </span>
          <Image
            alt="Matt Face"
            src={MattPic}
            width={300}
            height={300}
            className="border-2 border-black border-dashed p-2"
          />
        </header>
        <section className="mt-4 text-2xl bg-white shadow-lg p-2 rounded-xl font-bold max-w w-1/3 flex justify-center flex-col">
          <div className="flex justify-center items-center p-4 text-green-400">
            Reasons why i love You! (not gay)
          </div>
          <ol className="text-lg font-normal list-disc ml-4 text-center py-2">
            <li>
              You are a good fella always sending me these food pics that look
              tasty 🤤 and want me these food pics that make me hungry 🍔🍕🍟.
            </li>
            <li>
              You were always there for me when I was down and in light
              depression since Maria days and prison times, always helpful,
              always listening. Thank you for that! 🙏
            </li>
            <li>
              You send me Bober Kurwa and tag me under all these Facebook posts,
              lol 😂
            </li>
            <li>
              It still seems kinda crazy to me that we are separated by the
              ocean 🌊 but when we create our groundbreaking technology of
              teleportation 🚀 we will be together forever like some besties 👯‍♂️
            </li>
          </ol>
          <button
            className="bg-red-600 p-2 rounded-xl"
            onClick={(e) => {
              alert(
                "Im sorry sir i think i have no reason to hate you hahahahahahah! Happy Birhday dude!"
              );
              handlePlay();
            }}
          >
            REASONS WHY I HATE YOU
          </button>
        </section>
      </main>
      <FlyingBalloons />
    </>
  );
}
