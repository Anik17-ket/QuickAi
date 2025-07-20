import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiToolsData } from '../assets/assets'

const AiTools = () => {

    const navigate = useNavigate()
    const { user } = useUser()


    return (
        <div className='px-4 sm:px-20 xl:px-32 my-24'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Powerful AI Tools</h2>
                <p className='text-gray-500 max-w-lg mx-auto'>Everthing you need to create, enhance, and optimize your content with cutting-edge AI technology.</p>
            </div>

            <div className="flex flex-wrap mt-10 justify-center">
                {AiToolsData.map((tool, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 lg:w-1/3 px-2 py-4 flex justify-center"
                    >
                        <div
                            className="p-8 max-w-md w-full rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            onClick={() => user && navigate(tool.path)}
                        >
                            <tool.Icon
                                className="w-14 h-14 p-3 text-white rounded-xl"
                                style={{
                                    background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
                                }}
                            />
                            <h3 className="mt-6 mb-3 text-xl font-semibold">{tool.title}</h3>
                            <p className="text-gray-400 text-base max-w-[95%]">
                                {tool.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default AiTools