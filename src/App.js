import React, {useState} from 'react'
import Header from './components/Header'
import {Text1, Text2, PickUp, Agathe, DiCaprio, Zendaya, Kadash} from './components/Text'
import Image from './images/Sample.jpg'
import Image2 from './images/Kadash.jpg'
import Logo from './images/Logo.jpeg'
import {FiHeart} from 'react-icons/fi';
import {BiShoppingBag,BiMoney} from 'react-icons/bi';
import {GiThreeFriends} from 'react-icons/gi';


function App() {
  const [Agree, Setagree] = useState(true)
  return (
    <div className="App font-serif mr-2 ml-2">

      <div className='flex justify-center'><img src={Logo} alt="" className='w-24'/></div>
      <Header/>
      <div className='grid grid-cols-3 grid-flow-row-3 h-full mt-3'>
      {Agree&&<div className='absolute w-full h-screen flex justify-center items-center backdrop-blur-xl'>
      <div className=' bg-white relative w-1/3 h-1/3'>
        <h1 className='text-center text-2xl font-bold underline p-2 font-sans'>We will sell your data. Alright?</h1>
        <div className='flex justify-around p-5'>
          <button className='p-5 bg-red-600 rounded-sm w-1/3 text-white outline-none' onClick={()=>Setagree(false)}>Yes</button>
          <button className='p-5  bg-red-600 rounded-sm w-1/3 text-white outline-none' onClick={()=>Setagree(false)}>Yes, of course</button>
        </div>
      </div>  
      </div>}
        <div className=' col-span-2 m-2 p-2'>
          <h1 className=' border-b-2 border-black font-bold pl-2 text-xl'>DiCaprios new girlfriend!</h1>
          <div className='grid grid-cols-3'>
            <img src={Image} alt="" className='w-full h-full p-2 grid-rows-1'/>
            <div className='break-words text-justify col-span-2'>
              <div>{DiCaprio}</div>
              <a href="/" className='underline font-bold'>Click here for Page 9</a>
            </div>
            <a className=' text-xs ml-2' href="https://cdn2.estamosrodando.com/biografias/8/13/leonardo-dicaprio-350938.jpg">Image source: https://cdn2.estamosrodando.com/biografias/8/13/leonardo-dicaprio-350938.jpg</a>
          </div>
        </div>
        <div className='border-l-4 border-black p-2 m-2'>
        <h1 className=' border-b-2 border-black font-bold text-xl'>5 best PickUp lines</h1>
          <div>
            <div className='text-justify'>{PickUp}</div>
            <a href="/" className='font-bold underline'>Click here for Page 5...</a>
          </div>
        </div>
        <div className=' col-span-2 m-2 p-2'>
          <h1 className=' border-b-2 border-black font-bold pl-2 text-xl'>Drama with the Kardashians</h1>
          <div className='grid grid-cols-6 grid-rows-1'>
            <div className='w-full p-2 col-span-3'><img src={Image2} alt="" className='w-full'/>
            <a className='col-span-3 text-xs ml-2' href="https://i.dailymail.co.uk/i/pix/2017/08/31/15/43BFE41000000578-0-image-a-18_1504188970741.jpg">Image source: https://i.dailymail.co.uk/i/pix/2017/08/31/15/43BFE41000000578-0-image-a-18_1504188970741.jpg</a>
            </div>
            <div className='break-words col-span-3 row-span-1 text-justify'>
              <div>{Kadash}</div>
              <a href="/" className='underline font-bold'>Click here for Page 2</a>
            </div>
          </div>
          
        </div>
        <div className='border-l-4 border-black p-2 m-2 '>
        <h1 className=' border-b-2 border-black font-bold text-xl'>Agathe looking for the love of her life</h1>
        <div>
            <div className='text-justify'>{Agathe}</div>
            <a href="/" className='font-bold underline'>Click here for Page 7...</a>
        </div>
        </div>
        <div className='col-span-3 flex flex-row'>
          <div className=' w-full border-r-4 m-2 border-black pr-2'>
            <h1 className=' border-b-2 border-black font-bold text-xl'>Horoscope of the week for pisces!</h1>
            <div className='grid grid-rows-2 grid-cols-2 p-4 gap-2'>
                <div className='flex flex-row justify-center'>
                  <FiHeart size={50}/>
                  <div className='font-bold text-center p-5 w-1/2  bg-red-700 rounded-full text-white hover:animate-pulse'><h1>98%</h1></div>
                </div>
                <div  className='flex flex-row justify-center'>
                  <BiShoppingBag size={50}/>
                  <div className='font-bold text-center p-5 w-1/2  bg-red-700 rounded-full text-white hover:animate-pulse'><h1>37%</h1></div>
                </div>
                <div  className='flex flex-row justify-center'>
                  <BiMoney size={50}/>
                  <div className='font-bold text-center p-5 w-1/2  bg-red-700 rounded-full text-white hover:animate-pulse'><h1>52%</h1></div>
                </div>
                <div  className='flex flex-row justify-center'>
                  <GiThreeFriends size={50}/>
                  <div className='font-bold text-center p-5 w-1/2  bg-red-700 rounded-full text-white hover:animate-pulse'><h1>12%</h1></div>
                </div>
            </div>
            <div><a a href="/" className='font-bold underline'>Get yout weekly horoscope on Page 9...</a></div>
          </div>
          <div className=' w-full m-2'>
            <h1 className=' border-b-2 border-black font-bold overflow-hidden'>Shocking truth about Zendaya and Tom Holland</h1>
            <div className='text-justify'>
              {Zendaya}
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold flex justify-center items-center mt-2 border-t-4 border-b-4 border-black">
      <div className=" w-full h-full text-xl p-2 text-center ">
        <h1 className='flex flex-row justify-center'>THE DAILY SUN</h1>
      </div>
    </div>
    </div>
  );
}

export default App;
