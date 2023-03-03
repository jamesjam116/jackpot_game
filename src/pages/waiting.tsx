import Link from 'next/link'
import { text } from 'node:stream/consumers'
import React from 'react'
import { Leftarrow, Progressbar } from '../components/Svglist'
export default function Waiting() {
    return (
        <div className="flex flex-row min-h-[100vh] bg-bg bg-cover bg-no-repeat w-full">
            <div className="w-[600px] flex flex-col">
                <button className="flex items-center justify-center w-[207.5px] h-[59px] mt-[34px] ml-[65px] rounded-[10px] border-[1.33px] border-[#FFFFFF54]">
                    <div className='flex flex-row'>
                        <Leftarrow />
                        <p className='text-[21.28px] leading-[25.76px] text-[#FFFFFF] font-light ml-[27px]'><Link href={'/'}>Back Home</Link></p>
                    </div>
                </button>
                <p className="text-[80px] text-[#FFFFFF] leading-[96.5px] mt-[34px] ml-[65px] mb-[64px]">The Tower</p>


                <div className='flex flex-col border-[1.33px] bg-[#04134A] border-[#FFFFFF24] w-[480px] ml-[65px] rounded-[32px]'>
                    <p className='text-[26.6px] text-white-100 font-bold text-center leading-[32px] mt-5'>Place A bet in SOL</p>
                    <div className='flex flex-row mt-[33px]'>
                        <div className='w-1/3'>
                            <div className='flex flex-col items-center'>
                                <img src="/img/solana.png" alt="" className='w-[42.5px] h-[42.5px]' />
                                <p className='text-[26.6px] text-white-100 leading-8 font-semibold mt-[5px]'>1 Sol</p>
                                <p className='text-[16px] text-[#FFFFFFA8] leading-[19px] font-semibold mt-[5px]'>$20.43USD</p>
                            </div>
                        </div>
                        <div className='w-1/3'>
                            <div className='flex flex-col items-center opacity-30'>
                                <img src="/img/solana.png" alt="" className='w-[42.5px] h-[42.5px]' />
                                <p className='text-[26.6px] text-white-100 leading-8 font-semibold mt-[5px]'>2 Sol</p>
                                <p className='text-[16px] text-[#FFFFFFA8] leading-[19px] font-semibold mt-[5px]'>$20.43USD</p>
                            </div>
                        </div>
                        <div className='w-1/3'>
                            <div className='flex flex-col text-center items-center opacity-30'>
                                <img src="/img/solana.png" alt="" className='w-[42.5px] h-[42.5px]' />
                                <p className='text-[26.6px] text-white-100 leading-8 font-semibold mt-[5px]'>3 Sol</p>
                                <p className='text-[16px] text-[#FFFFFFA8] leading-[19px] font-semibold mt-[5px]'>$20.43USD</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-white-60 text-[16px] leading-[19.32px] mt-7 ml-9'>Custom bet:</p>
                    <div className='flex flex-row ml-9 mt-[13px]'>
                        <input type={'text'} className='w-[237px] border-[1.33px] bg-[#05104C] pl-5 border-white-10 rounded-[16px] text-[16px] text-[#FFFFFF54] leading-[19.32px]'>

                        </input>
                        <button className='ml-[34px] w-[64px] border-[1.33px] border-white-10 rounded-[16px] text-[16px] text-[#FFFFFF54] leading-[19.32px]'>
                            1/2
                        </button>
                        <button className='w-[64px] ml-[17px] border-[1.33px] border-white-10 rounded-[16px] text-[16px] text-[#FFFFFF54] leading-[19.32px]'>
                            <p className='py-[18px]'>2x</p>
                        </button>
                    </div>
                    <button className='ml-9 w-[400px] bg-[#7E49F0] mb-[35px] mt-8 rounded-[16px]'>
                        <p className='text-[20px] text-white-100 font-bold text-center py-[17px]'>Add 1.5 SOL to bet</p>
                    </button>
                </div>
            </div>
            <div className='w-full'>
                <div className='ml-auto mr-auto flex justify-center flex-col drop-shadow-lg w-[calc(100%-100px)] mt-[115.72px] border-[1.33px] rounded-[56px] border-[#FFFFFF73]'>
                    <div className='ml-auto mr-auto relative w-[calc(100%-380px)] rounded-[10px] bg-[#7E49F0] my-[26px]'>
                        <img className='absolute  left-[-24px] top-1' src="/img/select 3.png" alt="" />
                        <img className='absolute  right-[-24px] top-1' src="/img/select 2.png" alt="" />
                        <p className='text-[26px] text-white-100 font-bold leading-8 text-center py-[14px]'>POT:0 SOL</p>
                    </div>
                    <div className=' relative w-[calc(100%-80px)] rounded-[22px] bg-[#04134C] h-[500px] mx-auto opacity-80'>
                        <div className='absolute w-[calc(100%-280px)] top-0 left-[140px] bg-[#573ee267] rounded-[22px]'>
                            <p className='uppercase text-[32px] text-[#FFFFFF] font-bold leading-[38px] text-center mt-[156px]'>waiting for users...</p>
                            <p className='text-[20px] text-[#FFFFFF] font-semibold leading-[24px] text-center mt-[128px]'>Countdown</p>
                            <div className="mx-auto w-[calc(100%-100px)] bg-[#071152] rounded-[55px] h-4 mt-8">
                                <div className="h-4 bg-[#2826A5] w-1/2 rounded-[55px]"></div>
                            </div>
                            <div className='bg-[#3f423d] h-[100px]'></div>
                            <div className='bg-[#3f423d] h-[100px]'></div>
                        </div>
                    </div>
                    <button className='w-[calc(100%-80px)] mx-auto rounded-[12px] border-[2.66px] bg-[#04134A] mt-[200px] mb-[45px]'>
                        <p className='text-[32px] text-[#444CE4] leading-[38px] font-bold text-center my-10'>WIN %:0.00</p>
                    </button>
                </div>
            </div>
        </div>
    )
}