import { Spotlight } from "../../components/ui/Spotlight";
import { SparklesCore } from "../../components/ui/sparkles";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />
            <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-700 to-purple-400 bg-opacity-50">
          VisualX <br /> Technologies.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">Technologically Blind We Will Make You See</p>
      </div>
    </div>
      </div>
    </div>
  );
}
