import { Rating } from "@mui/material";
import {
  RedBox,
  BlueBox,
  GreenBox,
  YellowBox,
  GrayBox,
  Box,
  Boxes,
} from "@/components/Boxes";

export function DefaultRating() {
  return <Rating value={4} />;
}
const isLoading = false;
export default function Home() {
  return (
    <div className="h-screen bg-gray-950 flex justify-center gap-1">
      {/* {isLoading ? <>Loading</> : <>belen bolson</>} */}

      <Boxes shape="dorwoljin" />

      {/* <div className="grid grid-rows-1 grid-cols-4  m-auto gap-24 p-2">
        <div className="grid-rows-2 grid-cols-1 w-[360px] h-[497px]">
          <div className="rounded-t-xl h-2/4 bg-[url('/top.svg')]"></div>
          <div className="h-2/4 rounded-b-xl bg-[#F7F6FA]">
            <div className="w-full h-[217px]">
              <h1 className=" px-3 pt-2 font-inter text-2xl font-semibold leading-[29px] tracking-tight text-left">
                Constructive and destructive waves
              </h1>
              <h1 className="px-3 mt-2 font-inter text-base font-semibold leading-[29px] tracking-tight text-left text-[#625F68]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </h1>
              <h1 className="px-3 mt-2 font-inter text-sm font-semibold leading-[29px] tracking-tight text-left text-[#A8A6AC]">
                2 hours 40 minutes
              </h1>
              <div className="px-3 mt-8 h-1 justify-between">
                <DefaultRating />
                <img src="bookmark.svg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[360px] h-[476px] border-solid bg-[#FFFFFF] rounded-xl">
          <div className="w-full h-[87px] flex justify-between gap-[10px]">
            <div className="w-[120px] h-[37px] font-roboto font-medium text-[28px] border-solid border-2  border-black">
              <img src="bx-cloud.svg.svg" alt="" srcset="" />
              Cloud
            </div>
            <div className="w-[60px] h-[22px] border-solid border-2 border-black">
              42 min
            </div>
          </div>
          <div className="w-full h-[313px]"></div>
          <div className="w-full h-[76px]"></div>
        </div>
        <div className="w-[360px] h-[505.96px] bg-[#FFFFFF] rounded-xl"></div>
        <div className="w-[360px] h-[323px] bg-[#FFFFFF] rounded-xl"></div>
      </div> */}
      {/* <RedBox />
      <YellowBox />
      <GreenBox />
      <BlueBox />
      <GrayBox /> */}
      {/* color */}
      {/* <div className="flex gap-3">
        <Box number={22} color="red" />
      </div> */}
    </div>
  );
}
