import Image from "next/image";
import { Card } from "./card";
import { Ellipsis } from "lucide-react";

const InfoCard = ({ type }: { type: string }) => {
  return (
    <Card className="rounded-2xl odd:bg-userCardOdd even:bg-userCardEven p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Ellipsis />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </Card>
  )

};

export default InfoCard;
