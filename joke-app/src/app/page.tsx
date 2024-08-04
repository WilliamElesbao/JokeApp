import { PhrasesCards } from '@/components/home/card-stack';
import { DescriptionGenerateEffect } from '@/components/home/description-effect';
import { TechStacks } from '@/components/home/flip-words';
import { GlobeDemo } from '@/components/home/globe';
import { Terms } from '@/components/home/use-terms';
import { FloatingNavi } from '@/components/root/floating-navbar';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { SparklesCore } from '@/components/ui/sparkles';
import { Spotlight } from '@/components/ui/spotlight';
import { TracingBeam } from '@/components/ui/tracing-beam';

export default function Page() {
  return (
    <>
    <FloatingNavi />
      <div className="bg-grid-white/[0.02] relative overflow-hidden rounded-md bg-black/[0.96] antialiased">
        <div className="w-full pt-20">
          <div className="flex h-full w-full flex-col items-center overflow-hidden rounded-md bg-transparent">
            <Spotlight className="-top-40 left-0" fill="white" />
            <h1 className="relative z-20 text-center text-3xl font-bold text-white md:text-7xl lg:text-9xl">
              JokeApp
            </h1>

            <div className="relative h-[30rem] w-auto">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
              <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              <div className="absolute inset-x-40 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
              <div className="absolute inset-x-40 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={800}
                className="h-full w-full"
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 flex h-screen w-full flex-col bg-black/75 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]">
                <DescriptionGenerateEffect
                  words={`"O mundo não gira em torno de você, mas se quiseres, pode girar a bolota... deslize-a para alguma direção."`}
                />{' '}
                <GlobeDemo />
              </div>
            </div>
          </div>
        </div>
        <BackgroundGradientAnimation>
          <TracingBeam>
            <PhrasesCards />
            <TechStacks />
            <Terms />
          </TracingBeam>
        </BackgroundGradientAnimation>
      </div>
    </>
  );
}
