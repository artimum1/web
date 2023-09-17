import Script from "next/script";
export default function Slider(){
  return (
  <>
    <div>
      <div className="jess">
           <h1 class="page1h1">&lt;/Pro<span class="color2"></span>&gt;</h1>
            <h3 class="text1">/*/ my name is artimum , web      full stack developer and UI designer , if you want a perfect site just call me /*/</h3>
            <a  href="#last" class="btn btn-small btn-clear btn-light btn-glitch">Contact</a>
</div>
      <div className="slider">
        <div id="rgbKineticSlider" className="rgbKineticSlider">
          <div className="bgadj">
            
          </div>
        </div>
      </div>
    </div>

    <svg style={{ position: "absolute", width: "0", height: "0" }} width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="svg-sprite">
          <defs>
            <filter id="filter">
              <feTurbulence type="fractalNoise" baseFrequency="0.000001 0.000001" numOctaves="1" result="warp" seed="1"></feTurbulence>
              <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp"></feDisplacementMap>
            </filter>
          </defs>
        </svg>

 <Script src="/script.js" />
  </>
  );
}






