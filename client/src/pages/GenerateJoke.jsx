import { Smile, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const GenerateJoke = () => {

  const jokeTypes = [
    {type: 'Short & Punny', text: 'Short & Punny'},
    {type: 'Story-based', text: 'Story-based'},
    {type: 'One-liner', text: 'One-liner'},
    {type: 'Dad Joke Style', text: 'Dad Joke Style'},
  ]

  const [selectedType, setSelectedType] = useState(jokeTypes[0])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')

  const { getToken } = useAuth()

  const onSubmitHandler = async(e) => {
    e.preventDefault()

    // Handle form submission
    try {
      setLoading(true)
      const prompt = `Generate a ${selectedType.type} joke about ${input}`

      const {data} = await axios.post('/api/ai/generate-joke', {prompt, jokeType: selectedType.type}, {
        headers: {Authorization: `Bearer ${await getToken()}`}
      })

      if(data.success) {
        setContent(data.content)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    setLoading(false)
  }


  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700 '>
      {/* left col*/}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg bg-white rounded-lg border border-gray-200 p-4'>
        <div className='flex items-center  gap-3'>
          <Sparkles className='w-6 text-[#4A7AFF]' />
          <h1 className='texl-xl font-semibold'>Joke Configuration</h1>
        </div>
      <p className='mt-6 text-sm font-medium'>Joke Topic</p>

      <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' placeholder='Enter topic like sports, finance, marriage...' required />

      <p className='mt-4 text-sm font-medium'>Joke Type</p>

      <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11 '>
        {jokeTypes.map((item, index)=> (
          <span onClick={()=> setSelectedType(item)}
           className={`text-xs px-4 py-1 border border-gray-700 rounded-full cursor-pointer ${selectedType.type === item.type ? 'bg-blue-50 text-blue-700' : 'text-gray-500 border-r-gray-300'} `}
            key={index}>{item.text}</span>
        ) )}
      </div>

      <br />
      <button disabled={loading} className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
        {
          loading ? <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span>
          : <Smile className='w-5 '/>
        }
        
        Generate joke
      </button>

      </form>
      {/* right col*/}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px] overflow-y-auto'>
        <div className='flex items-center gap-3'>
          <Smile className='w-5 h-5 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Generated Joke</h1>
        </div>


        {!content ? (
          <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
        <Smile className='w-9 h-9' />
        <p>Enter a topic and click "Generate joke" to get started</p>
          </div>
        </div>
        ) : (
          <div className='mt-3 h-full overflow-y-scroll text-sm text-slate-600'>
            <div className='whitespace-pre-wrap'>
              {content}
            </div>
            
          </div>
        )}
        

      </div>

      

    </div>
  )
}

export default GenerateJoke
