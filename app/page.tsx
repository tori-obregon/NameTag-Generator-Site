'use client';
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('Carrie Bradshaw');
  const [inputValue, setInputValue] = useState('Miranda Hobbs');

  const [tagColorNum, setTagColorNum] = useState(0);

  const tagColorOptions = [
    '#ED583F',
    '#F8B3CC',
    '#C7B65D',
    '#F3A732',
  ];

  
  const generateNametag = (e:any) => {
    e.preventDefault();
    if(tagColorNum >= tagColorOptions.length - 1) {
      setTagColorNum(0);
    }
    else {
      setTagColorNum(tagColorNum + 1);
    }
    setName(inputValue);
  } 
  
  const tagColor = tagColorOptions[tagColorNum];

  return (
   <div className="prose flex flex-col h-full min-w-full justify-center items-center space-y-5">
      <div className=" text-accent flex flex-col justify-center items-center my-4">
        <h1 className="text-inherit m-0">Nametag Generator</h1>
        <h2 className="text-inherit m-0">Create Your Own Nametag</h2>
      </div>
      <div className="grid grid-rows-[30%, 60%, 10%] w-80 h-72	rounded-3xl shadow-xl" style={{backgroundColor: tagColor}}>
            <h2 className="flex justify-center items-end row-start-1 text-2xl">
              Hello, My Name Is
            </h2>
            <p className="font-handwriting flex justify-center items-center row-start-2 mx-4 h-full text-4xl bg-white rounded-sm ">
              {name}
            </p>
            <div>
              {/* empty div */}
            </div>
      </div>
            <div className="flex flex-col space-y-2 items-center">
              <h3>Enter your name</h3>
              <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Miranda Hobbs" onChange={(e) => setInputValue(e.target.value)} />
              <button className="btn btn-primary" onClick={generateNametag}>Generate Nametag</button>
            </div>
   </div>
  );
}
