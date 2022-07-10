import ParticleBackground from "../components/particles";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { useEffect,useState } from "react";
import { getData } from "../actions/request";
import parse from 'html-react-parser';
import LoadingScreen from "../components/loader";

export default function Code() {
  const [loading,setLoading] = useState(true);
  const { query } = useRouter();
  var id = query.slug;
  const [data,setData] = useState(''); 

  useEffect(() => {
    if(id != undefined){
      const fetchCode = async () =>{
        setData(await getData(id));
        setLoading(false);
      }
      fetchCode();
    }
  },[id]);

  return (
    <div>
      <Head>
        <title>| Code Cave | </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticleBackground></ParticleBackground>
      <LoadingScreen loading={loading}></LoadingScreen>
      <div className="flex flex-col items-center  mb-[50px] mt-[50px]">
          <span className="text-white text-center text-[35px] font-bold">Code Cave</span>
          <span className="mt-[20px] text-center text-white bg-[#111111]/[0.40] p-[20px] lg:w-[70%] rounded-lg">
              Here is the output for your code!<br/>Share it via: <br />
          </span>
          
      </div>
      <div className="w-[95%] m-auto">{data==''||data.status =="No data found for link"?'':parse(data.data.code.formatted_html)}</div>
    </div>
      )
}