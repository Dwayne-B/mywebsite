import Spline from "@splinetool/react-spline/next";

import dynamic from "next/dynamic";
// import Spline from "@splinetool/react-spline";

const DynamicSpline = dynamic(() => Promise.resolve(Spline), { ssr: false });

export default function SplineElm() {
  return (
    <main className='flex-1'>
      <DynamicSpline scene='https://prod.spline.design/S9dvttkMTwGjuw7V/scene.splinecode' />
    </main>
  );
}
