import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const aboutUs = () => {
  return (
    <>
      <div className="text-3xl text-center font-bold mb-10 text-neutral-500 p-3">
        About US
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/mascot-2.png"}
          alt="about-us"
          height={400}
          width={400}
          className="rounded-xl "
        ></Image>
        <br />
        <div className="rounded-xl shadow-xl w-1/2 p-5 text-center text-xl">
          BhashaBuddy is a revolutionary platform dedicated to supporting
          individuals coping with stuttering. At its core, our platform features
          cutting-edge technology, including a sophisticated stutter detection
          model, personalized speech practice modules, and a specialized LLM
          chatbot.
          <br></br>
          Our team's goal is to empower individuals with stuttering to overcome
          their challenges by providing them with accurate diagnosis,
          comprehensive speech practice tools, and personalized support. We aim
          to create a supportive community where users can connect, share
          experiences, and receive encouragement on their journey to improved
          speech fluency. Through innovation, dedication, and compassion, we
          strive to make a meaningful impact in the lives of those affected by
          stuttering.
        </div>
      </div>
    </>
  );
};
export default aboutUs;
