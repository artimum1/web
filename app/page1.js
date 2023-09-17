"use client"
import PageTransition from "./pageTransition";
import Slider from "./slider";

export default function Home() {


  return (
    <>
        <div className="page1">
          <Slider />
        </div>
        <PageTransition>
        </PageTransition>


    </>
  );
}
