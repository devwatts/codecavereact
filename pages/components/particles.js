import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../config/particle-config";


export default function ParticleBackground() {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        //console.log(container);
      };
    
      return (
        <Particles id="tsparticles" options={particlesConfig} init={particlesInit} loaded={particlesLoaded} />
      );
}
