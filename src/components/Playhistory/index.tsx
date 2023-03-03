export default function Playhistory(props: { game: string, user: string, bet: string, payout: string }) {
    return (
        <div className="flex flex-row items-center mt-[5.5px] border-[1.33px] border-[#FFFFFF1C] py-4 rounded-[8px]">
            <div className="flex justify-center items-center w-1/4">
                <img className="w-[26px] mr-1" src="/img/dice.png" alt="" />
                <p className="text-[21.3px] text-[#FFFFFFA8] leading-[26px]">{props.game}</p>
            </div>
            <p className="w-[calc(29%)] text-[21.3px] text-[#FFFFFFA8] leading-[26px]">{props.user}</p>
            <p className="w-[calc(13%)] text-[21.3px] text-[#FFFFFFA8] leading-[26px]">{props.bet}</p>
            <p className="w-[calc(15%)] text-[21.3px] text-[#5BDCC6] leading-[26px]">{props.payout}</p>
            <button className="w-[141.5px] text-center py-[7px] border-[1.33px] border-[#FFFFFF1C] text-[13.35px] rounded-[8px] text-[#FFFFFFA8] font-mono">
                VIEW SOLSCAN
            </button>
        </div>
    )
}