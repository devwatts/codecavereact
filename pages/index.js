import ParticleBackground from "../components/particles";
import CodeArea from "../components/codeArea";
import Head from "next/head";
import LoadingScreen from "../components/loader";
import { useEffect, useState } from "react";
import { wakeApp } from "../actions/request";

export default function Home() {
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    async function wakeUp(){
      await wakeApp();
      setLoading(false);
    }
    wakeUp();
  },[]);

  return (
    <div>
      <Head>
        <title>| Code Cave | </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticleBackground></ParticleBackground>
      <div className="flex flex-col items-center mt-[50px]">
          <span className="text-white text-center text-[35px] font-bold">Code Cave</span>
          <span className="mt-[20px] text-center text-white bg-[#111111]/[0.40] p-[20px] lg:w-[70%] rounded-lg">Code Cave is a simple code sharing platform.<br/><br/>Just paste your code below and choose the type of language you are sending and get a instant link for your code!<br/>Code Cave is completely FREE!</span>
      </div>
      <CodeArea></CodeArea>
      <LoadingScreen loading={loading}></LoadingScreen>
    </div>
      )
}
