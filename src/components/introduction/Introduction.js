import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./introduction.scss";

const Introduction = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Mobile Developer"],
    });
  }, []);

  return (
    <div className="introduction" id="introduction">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/logo.png" alt="logo"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          >
            Hi there, I'm
          </h2>
          {/* <h1>Ariel Espinoza</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3> */}
          <div className="title">
            <span className="block"></span>
            <h1>Ariel Espinoza</h1>
          </div>
          <div className="role">
            <div className="block"></div>
            <h3>
              I'm a <span ref={textRef}></span>
            </h3>
          </div>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Introduction;

// import { useEffect, useRef } from "react";
// import { init } from "ityped";
// import "./introduction.scss";

// const Introduction = () => {
//   // Variables
//   const textRef = useRef();

//   // UseEffect
//   useEffect(() => {
//     init(textRef.current, {
//       showCursor: true,
//       backDelay: 1500,
//       backSpeed: 60,
//       strings: ["Web Developer", "Mobile Developer"],
//     });
//   }, []);

//   return (
//     <div className="introduction" id="introduction">
//       <div className="left">
//         <div className="imgContainer">
//           <img src="assets/logo.png" alt="logo"></img>
//         </div>
//       </div>
//       <div className="right">
//         <div className="wrapper">
//           <h2
//             data-aos="fade-right"
//             data-aos-offset="200"
//             data-aos-delay="50"
//             data-aos-easing="ease-in-out"
//           >
//             Hi there, I'm
//           </h2>
//           <div class="title">
//             <span class="block"></span>
//             <h1>
//               Ariel Espinoza
//               {/* <span></span> */}
//             </h1>
//           </div>
//           <div class="role">
//             <div class="block"></div>
//             <h3>
//               I'm a <span ref={textRef}></span>
//             </h3>
//           </div>
//         </div>
//         <a href="#portfolio">
//           <img src="assets/arrow.png" alt="" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Introduction;
