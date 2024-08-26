export const Boxes = ({ shape }) => {
  return (
    <div className="gap-4 p-3">
      {shape === "booronhii" ? (
        <div className="w-10 h-10 bg-red-400 rounded-[50px]"></div>
      ) : shape === "dorwoljin" ? (
        <div className="w-10 h-10 bg-blue-400"></div>
      ) : (
        <>alin ch bish baina</>
      )}
    </div>
  );
};

// color
// export const Box = ({ number, color }) => {
//   return (
//     <div className={`w-[200px] h-[200px] bg-${color}-400`}>Box {number}</div>
//   );
// };

// export const RedBox = (text) => {
//   return <div className="bg-red-400 w-80"></div>;
// };

// export const YellowBox = () => {
//   return <div className="bg-yellow-400 w-80"></div>;
// };

// export const GreenBox = () => {
//   return (
//     <div className="bg-green-400 w-80">
//       <div className="bg-green-400 w-80"></div>;
//     </div>
//   );
// };

// export const BlueBox = () => {
//   return <div className="bg-blue-400 w-80"></div>;
// };

// export const GrayBox = () => {
//   return <div className="bg-gray-400 w-80"></div>;
// };

// const colors = [
//   { className: "bg-red-400", key: "red" },
//   { className: "bg-yellow-400", key: "yellow" },
//   { className: "bg-green-400", key: "green" },
//   { className: "bg-blue-400", key: "blue" },
// ];

// export const ColorBoxes = () => {
//   return (
//     <div>
//       {colors.map((color, index) => (
//         <div
//           key={color.key}
//           className={`${color.className} w-10 h-10`} // Added height to make boxes visible
//         />
//       ))}
//     </div>
//   );
// };
