import Link from "next/link"
import { Discordimage, Leftslide, Rightarrow, Rightslide, Roundarrow, Slidecenter, Slidewing, Tripledot } from "../components/Svglist"
import type { AppProps } from "next/app"
import { LineSvg } from "../components/Svglist"
import { RightSvg } from "../components/Svglist"
import Playhistory from "../components/Playhistory"
import Chat from "../components/Chat"
export default function Home() {
    return (
        <div className="flex min-h-[100vh] bg-bg bg-cover bg-no-repeat w-full">
            <nav className="w-[316.33px] bg-gradient  flex-col hidden lg:flex">
                <h1 style={{ "color": "transparent" }} className="text-[42.7px] leading-[51.7px] bg-gra_font font-fontInter bg-clip-text pt-[74.74px] pl-[25.36px]">EXP & BET 3</h1>
                <p className=" font-normal text-[18.69px] leading-[22.61px] text-[#ffffff] pt-[33.42px] pl-[28.03px]">Games</p>
                <div className="pt-6 pl-6">
                    <LineSvg />
                </div>
                <Link href="/waiting">
                    <div className="flex mt-[16px] hover:bg-tower hover:border-r-2 hover:border-[#D9D9D9]">
                        <img src="/img/icons8-dice-64 2.png" alt="asdf" className="w-[27px] mr-[17.35px] ml-[29px] py-[13.35px]" />
                        <p className="cursor-pointer font-bold text-[18.69px] leading-[22.61px] text-[#ffffff] py-[15px]">Dice of Royale</p>
                    </div>
                </Link>
                <Link href="/playing">
                    <div className="flex mt-[10px] hover:bg-tower hover:border-r-2 hover:border-[#D9D9D9]">
                        <img src="/img/tower.png" alt="asdf" className="w-[27px] mr-[17.35px] ml-[29px] py-[13.35px]" />
                        <p className="cursor-pointer font-bold text-[18.69px] leading-[22.61px] text-[#ffffff] py-[15px]">Tower Of Power</p>
                    </div>
                </Link>
                <p className="text-[18.69px] text-[#ffffff] leading-[27.67px] mt-[109.45px] ml-7">Support</p>
                <div className="pt-[21px] pl-6">
                    <LineSvg />
                </div>
                <div className="flex mt-[8.5px] pl-[29px] hover:bg-tower hover:border-r-2 hover:border-[#D9D9D9]">
                    <img src="/img/twitter1.png" alt="asdf" className="w-[27px] mr-[17.35px] py-[13.35px]" />
                    <p className="cursor-pointer  font-bold text-[18.69px] leading-[22.61px] text-[#ffffff] py-[15px]">Twitter</p>
                </div>
                <div className="flex mt-[17px] pl-[29px] hover:bg-tower hover:border-r-2 hover:border-[#D9D9D9]">
                    <img src="/img/twitter2.png" alt="asdf" className="w-[27px] mr-[17.35px] py-[13.35px]" />
                    <p className="cursor-pointer  font-bold text-[18.69px] leading-[22.61px] text-[#ffffff] py-[15px]">Twitter</p>
                </div>
                <p className="text-[18.69px] text-[#ffffff] leading-[27.67px] mt-[48px] ml-7">Chat</p>
                <div className="mt-[19px] pl-6">
                    <LineSvg />
                </div>
                <button className="w-[259px] rounded-[8px] flex mt-[44px] ml-6 border-[1.33px] border-[#FFFFFF38] justify-center items-center">
                    <p className=" font-bold text-[18.69px] leading-[22.61px] text-[#ffffff] text-center py-[14px]">Open By Default</p>
                </button>
                <p className="text-[18.69px] text-[#ffffff] leading-[27.67px] mt-[37px] ml-7">Get Social</p>
                <div className="mt-[23.7px] pl-6">
                    <LineSvg />
                </div>
                <div className="flex mt-[8.5px] pl-[29px] hover:bg-tower hover:border-r-2 hover:border-[#D9D9D9]">
                    <img src="/img/twitter1.png" alt="asdf" className="w-[27px] mr-[17.35px] py-[13.35px]" />
                    <p className="cursor-pointer  font-bold text-[18.69px] leading-[22.61px] text-[#ffffff] py-[15px]">Experiments</p>
                </div>
                <div className="flex mt-[8.5px] pl-[29px] hover:bg-tower hover:border-r-2 hover:border-[#D9D9D9]">
                    <img src="/img/twitter2.png" alt="asdf" className="w-[27px] mr-[17.35px] py-[13.35px]" />
                    <p className="cursor-pointer  font-bold text-[18.69px] leading-[22.61px] text-[#ffffff] py-[15px]">BET3</p>
                </div>
                <div className="flex mt-[8.5px] pl-[29px] hover:bg-tower hover:border-r-2 hover:border-[#D9D9D9]">
                    <img src="/img/twitter1.png" alt="asdf" className="w-[27px] mr-[17.35px] py-[13.35px]" />
                    <p className="cursor-pointer  font-bold text-[18.69px] leading-[22.61px] text-[#ffffff] py-[15px]">Youtube</p>
                </div>
                <div className="flex justify-between mt-[52px] ml-7">
                    <p className="text-[18.69px] text-[#ffffff] leading-[27.67px]">Account Details</p>
                    <button className="mr-9">
                        <RightSvg />
                    </button>
                </div>
                <div className="mt-[22px] pl-6">
                    <LineSvg />
                </div>
                <p className="text-[16px] text-[#ffffff] ml-8 mt-[22px] leading-[23.72px]">Connected as:</p>

                <div className="flex mt-[10px] ml-7 items-center">
                    <img src="/img/avatar.webp" className="w-[42.7px] rounded-full" alt="" />
                    <span className="ml-2 flex flex-col text-[#bda8a89c] font-font-mono">
                        <p className=" text-[10.68px] ">asdfjhthdrsdfg</p>
                        <p className=" text-[10.68px] ">asdfjhthdrsdfg</p>
                    </span>
                </div>
                <button className="w-[259px] rounded-[8px] flex mt-[33px] mb-10 ml-6 bg-disconnect border-[1.33px] border-[#FFFFFF38] justify-center items-center">
                    <p className=" font-bold text-[18.69px] leading-[22.61px] text-[#ffffff] text-center py-[14px] font-font-mono">Disconnect Wallet</p>
                </button>
            </nav>
            <main className=" lg:w-[calc(100%-316px)] flex flex-col">
                <div className="w-[calc(100%-140px)] h-[427px] mt-[64px] ml-[64px] flex flex-col bg-dicer  bg-no-repeat bg-cover relative">
                    <p className="uppercase text-[20px] leading-6 text-white-60 pt-[46px] pl-[80px]">game of the month</p>
                    <p className="uppercase text-[44px] leading-[54px] text-white-100 pt-[13px] font-bold pl-[80px]">dice royale</p>
                    <p className="uppercase text-[24px] leading-[29px] text-white-100 pt-[32px] font-bold pl-[80px]">earn up to $20,000</p>
                    <div className="w-[391px] h-[91px] mt-9 pb-[35px] ">
                        <p className="text-[16px] leading-[19px] text-white-100 pl-[80px]">Dive into our wide range in-house games, live tower of power & more</p>
                    </div>
                    <button className=" font-font-mono flex border-[1px] border-[#FFFFFF38] justify-center items-center rounded-[6px] w-[171px] h-[44px] box-border ml-[80px] mt-[22px] bg-[#D9D9D938] text-[#DDDEE2] text-[14px] font-bold leading-5">
                        Get Started&nbsp;&nbsp;
                        <Rightarrow />
                    </button>
                    <button className="absolute w-[42px] h-[42px] bg-[#051350] rounded-[6.67px] border-[1.33px] border-[#FFFFFF0F] flex justify-center items-center top-6 right-[104px]">
                        <Leftslide />
                    </button>
                    <button className="absolute w-[42px] h-[42px] bg-[#051350] rounded-[6.67px] border-[1.33px] border-[#FFFFFF0F] flex justify-center items-center top-6 right-[42px]">
                        <Rightslide />
                    </button>
                    <div className="flex self-center mt-2 gap-[2px] cursor-pointer">
                        <Slidewing />
                        <Slidecenter />
                        <Slidewing />
                    </div>
                </div>

                <div className="w-[calc(100%-140px)] mt-[23px] ml-[64px] px-5 flex flex-col relative">
                    <div className=" mb-[14px] flex justify-between">
                        <p className="font-font-mono text-[26.7px] font-normal text-white-100 leading-10">Browse Games</p>
                        <div className="flex gap-[19px]">
                            <button className="w-[42px] h-[42px] bg-[#04134A] rounded-[6.67px] border-[1.33px] border-[#FFFFFF0F] flex justify-center items-center top-6 right-[104px]">
                                <Leftslide />
                            </button>
                            <button className="w-[42px] h-[42px] bg-[#04134A] rounded-[6.67px] border-[1.33px] border-[#FFFFFF0F] flex justify-center items-center top-6 right-[42px]">
                                <Rightslide />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-[38px]">
                        <div className=" flex flex-col items-center justify-center w-[200px]  rounded-[29.36px] border-[1.33px] border-[#FFFFFF57]">
                            <div className="w-[160px] h-[160px]">
                                <img className="" src="/img/900-9009693_3d-dice 1.png" alt="" />
                            </div>
                            <p className="text-white-100 text-[25.7px] font-bold text-center">Dice Royale</p>
                        </div>
                        <div className=" flex flex-col items-center justify-center w-[200px]  rounded-[29.36px] border-[1.33px] border-[#FFFFFF57]">

                            <div className="w-[160px] h-[160px]">
                                <img className="" src="/img/900-9009693_3d-dice 1.png" alt="" />
                            </div>
                            <p className="text-white-100 text-[25.7px] font-bold text-center">Dice Royale</p>
                        </div>
                        <div className=" flex flex-col items-center justify-center w-[200px]  rounded-[29.36px] border-[1.33px] border-[#FFFFFF57]">

                            <div className="w-[160px] h-[160px]">
                                <img className="" src="/img/900-9009693_3d-dice 1.png" alt="" />
                            </div>
                            <p className="text-white-100 text-[25.7px] font-bold text-center">Dice Royale</p>
                        </div>
                        <div className=" flex flex-col items-center justify-center w-[200px]  rounded-[29.36px] border-[1.33px] border-[#FFFFFF57]">

                            <div className="w-[160px] h-[160px]">
                                <img className="" src="/img/900-9009693_3d-dice 1.png" alt="" />
                            </div>
                            <p className="text-white-100 text-[25.7px] font-bold text-center">Dice Royale</p>
                        </div>

                    </div>
                    <p className="font-font-mono text-[26.7px] font-normal mt-[38px] text-white-100 leading-10">Statistics</p>
                    <div className="flex flex-wrap mt-[18px] rounded-[8px] gap-[13px]">
                        <div className=" relative flex flex-col h-[205px] lg:w-[calc((100%-40px)/3)] w-full rounded-[8px] border-[1.33px] border-[#FFFFFF1A]">
                            <button className="flex justify-center items-center mt-6 ml-6 bg-[#444CE4] rounded-[8px] w-[46px] h-[46px]">
                                <img className="w-[26px]" src="/img/icons8-dice-64 2.png" alt="" />
                            </button>
                            <p className="text-[42.7px] text-white-100 font-bold leading-[52px] mt-[13.35px] ml-6">${(4300).toLocaleString()}</p>
                            <p className="text-[21.36px] text-white-100 font-normal leading-[26px] mt-[10.73px] ml-6">Amount Wagered</p>
                            <button className="absolute top-5 right-2">
                                <Tripledot />
                            </button>
                        </div>
                        <div className=" relative flex flex-col h-[205px] lg:w-[calc((100%-40px)/3)] w-full rounded-[8px] border-[1.33px] border-[#FFFFFF1A]">
                            <button className="flex justify-center items-center mt-6 ml-6 bg-[#F257A0] rounded-[8px] w-[46px] h-[46px]">
                                <img className="w-[26px]" src="/img/icons8-dice-64 2.png" alt="" />
                            </button>
                            <p className="text-[42.7px] text-white-100 font-bold leading-[52px] mt-[13.35px] ml-6">{(123532).toLocaleString()}</p>
                            <p className="text-[21.36px] text-white-100 font-normal leading-[26px] mt-[10.73px] ml-6">Amount Wagered</p>
                            <button className="absolute top-5 right-2">
                                <Tripledot />
                            </button>
                        </div>
                        <div className=" relative flex flex-col h-[205px] lg:w-[calc((100%-40px)/3)] w-full rounded-[8px] border-[1.33px] border-[#FFFFFF1A]">
                            <button className="flex justify-center items-center mt-6 ml-6 bg-[#7A5AF8] rounded-[8px] w-[46px] h-[46px]">
                                <img className="w-[26px]" src="/img/icons8-dice-64 2.png" alt="" />
                            </button>
                            <p className="text-[42.7px] text-white-100 font-bold leading-[52px] mt-[13.35px] ml-6">${(12354).toLocaleString()}</p>
                            <p className="text-[21.36px] text-white-100 font-normal leading-[26px] mt-[10.73px] ml-6">Amount Wagered</p>
                            <button className="absolute top-5 right-2">
                                <Roundarrow />
                            </button>
                        </div>
                    </div>
                    <p className="font-font-mono text-[26.7px] font-normal mt-[29.36px] text-white-100 leading-10">Recent Plays</p>

                    <div className="min-w-[400px] overflow-x-auto">
                        <div className="w-full">
                            <div className="flex flex-row mt-[19px] mb-7">
                                <p className="w-1/4 text-[21.3px] text-[#FFFFFFA8] leading-[26px] pl-10">Game</p>
                                <p className="w-[calc(29%)] text-[21.3px] text-[#FFFFFFA8] leading-[26px]">Username</p>
                                <p className="w-[calc(13%)] text-[21.3px] text-[#FFFFFFA8] leading-[26px]">Bet</p>
                                <p className="w-[calc(15%)] text-[21.3px] text-[#FFFFFFA8] leading-[26px]">Payout</p>
                                <p className="text-[21.3px] text-[#FFFFFFA8] leading-[26px]">TX</p>
                            </div>

                            <Playhistory game="DiceRoyale" user="HostyTheDev@0332" bet=".5 SOL" payout="4.5 SOL" />
                            <Playhistory game="DiceRoyale" user="HostyTheDev@0332" bet=".5 SOL" payout="4.5 SOL" />
                            <Playhistory game="DiceRoyale" user="HostyTheDev@0332" bet=".5 SOL" payout="4.5 SOL" />
                        </div>
                    </div>
                </div>
            </main>
            <div className=" relative w-[300px] flex flex-col px-5 pt-10 border-[1px] border-[#FFFFFF3D]">
                <div className="flex flex-row justify-between items-center">
                    <p className="text-[24px] text-[#FFFFFFA8] font-normal leading-[29px]">Welcome!</p>
                    <button className="flex justify-center w-10 h-10 rounded-[7px] border-[1.34px] border-[#FFFFFF0F] bg-[#03144E] items-center">
                        <RightSvg />
                    </button>
                </div>
                <p className="text-[24px] text-[#ffffff] font-normal pb-3 mt-3 leading-[29px] border-b-[1.33px] border-[#FFFFFF0F]">148 Players Online</p>
                <Chat name="cristiano ronaldo" time="10 Mins age" messgae="This is C.Ronaldo who si super star in Protuguese professional player. I am superior than Lionel Messi." />
                <Chat name="cristiano ronaldo" time="10 Mins age" messgae="This is C.Ronaldo who si super star in Protuguese professional player. I am superior than Lionel Messi." />
                <Chat name="cristiano ronaldo" time="10 Mins age" messgae="This is C.Ronaldo who si super star in Protuguese professional player. I am superior than Lionel Messi." />
                <div className="">
                    <div className="border-t-[1.33px] border-[#FFFFFF0F]"></div>
                    <input type="text" className="w-full mt-5 bg-[#03144E] text-[10px] placeholder:text-[white] text-white-100 border-[1.33px] border-[#FFFFFF21] rounded-[8px] py-4 px-3" placeholder="Say something in chat..." />
                    <div className="flex flex-row mt-6 items-center justify-between">
                        <div className="flex">
                            <Discordimage />
                            <p className="uppercase text-[10px] text-white leading-3">TERMS OS</p>
                        </div>
                        <button className="bg-[#03144E] rounded-[8px] border-[1.34px] border-[#FFFFFF42] w-[100px] h-8 items-center text-center text-[16px] text-white-100 font-bold ">SEND</button>
                    </div>
                </div>

            </div>
        </div>)
}