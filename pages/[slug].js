import ParticleBackground from "../components/particles";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { useEffect,useState } from "react";
import { getData } from "../actions/request";
import parse from 'html-react-parser';
import LoadingScreen from "../components/loader";
import Image from "next/image";
import {copyToClipboard} from '../helpers/copyToClipboard';
import Link from "next/link";

export default function Code() {
  const [loading,setLoading] = useState(true);
  const { query } = useRouter();
  var id = query.slug;
  const [data,setData] = useState(''); 

  useEffect(() => {
    if(id != undefined){
      const fetchCode = async () =>{
        setData(await getData(id));
      }
      fetchCode();
    }
  },[id]);

  useEffect(() => {
     if(data != ""){
        if(data.status != "No data found for link"){
          setLoading(false);
        }else{
          alert('No code found on this link!! \n Redirecting you to the homepage!');
          window.location.href = '/';
        }
     } 
  },[data]);


  return (
    <div>
      
      <Head>
        <title>| Code Cave | </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ParticleBackground></ParticleBackground>
      <LoadingScreen loading={loading}></LoadingScreen>

      <div className="flex flex-col items-center  mb-[50px] mt-[50px]">
          <Link href={'/'}>
            <span className="text-white text-center text-[35px] font-bold cursor-pointer">Code Cave</span>
          </Link>
          <span className="mt-[20px] text-center text-white bg-[#111111]/[0.40] p-[20px] lg:w-[70%] rounded-lg">
              Here is the output for your code!<br/>Share it via: <br />
              <div className="link">
                  <a className="text-[#7e69ff]" href={`https://code.devwatts.engineer/${id}`}>code.devwatts.engineer/{id}</a>
              </div>
          </span>
      </div>

      <div onClick={() => {copyToClipboard(data)}} className="bg-[#1f1f1f] w-[95%] m-auto flex justify-end pt-[10px] pr-[10px]">
        <Image className="cursor-pointer" src={'/copy.png'} height={'30px'} width={'30px'}></Image>
      </div>

      <div className="w-[95%] m-auto">{data==''||data.status =="No data found for link"?'':parse(data.data.code.formatted_html)}</div>
    
    </div>
      )
}