import { Downarrow } from "../Svglist"
export default function Chat(props: { name: string, time: string, messgae: string }) {
    return (
        <div className="flex flex-col rounded-[8px] mt-7">
            <div className="flex flex-row items-center p-4 bg-[#04134A] justify-between rounded-t-[9px]">
                <div className="flex items-center">
                    <img className="w-10 h-10" src="/img/bear.png" alt="" />
                    <div className="flex flex-col ml-2">
                        <p className="text-[10px] text-[#FFFFFFA8] ">{props.name}</p>
                        <p className="text-[10px] text-[#FFFFFFA8] ">{props.time}</p>
                    </div>
                </div>
                <button>
                    <Downarrow />
                </button>
            </div>
            <div className="p-4 bg-[#03144E] rounded-b-[9px]">
                <p className="text-[16px] text-white">{props.messgae}</p>
            </div>
        </div>
    )
}