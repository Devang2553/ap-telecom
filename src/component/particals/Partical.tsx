// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const TsParticlesComponent = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <div className="">
//       <Particles
//         id="tsparticles"
//         // init={particlesInit}
//         options={{
//           fullScreen: { enable: false },
//           particles: {
//             number: { value: 50, density: { enable: true, area: 800 } },
//             color: { value: "red" },
//             shape: { type: "circle" },
//             opacity: { value: 0.5, random: true },
//             size: { value: 5, random: true },
//             move: {
//               enable: true,
//               speed: 2,
//               direction: "none",
//               random: false,
//               straight: false,
//               outModes: { default: "out" },
//             },
//           },
//         }}
//         className="absolute w-full h-full"
//       />
//     </div>
//   );
// };

// export default TsParticlesComponent;
