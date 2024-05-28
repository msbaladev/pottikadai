import React from "react";
import { FaCaretDown } from 'react-icons/fa';
const NavLinks=[
  {
    id:1,
    name:'Home',
    link:'#'
  },
  {
    id:2,
    name:'About',
    link:'#'
  },
  {
    id:3,
    name:'Contact',
    link:'#'
  }
];
const DropdownLinks=[
  {
    id:1,
    name:'vegetable',
    link:'#'
  },
  {
    id:2,
    name:'fruit',
    link:'#'
  },
  {
    id:3,
    name:'carrot',
    link:'#'
  }
]

function Header() {
    
  return (
    <>
    <div className="bg-white shadow-sm">
      <div className="container flex justify-between py-4 sm:py-3 ">
        <div className="font-bold text-3xl">
          Pottikadai
        </div>
        <div>
          <ul className="flex item-center gap-10">
            {
              NavLinks.map(({id,name,link})=>(
                <li key={id}>
                    <a href={link} className="inline-block hover:text-primary text-xl font-semibold">{name}</a>
                </li>
              ))}
              {
                <li className="cursor-pointer group relative">
                  <a href="#" className="inline-block hover:text-primary font-semibold text-xl">
                    <div className="flex items-center gap-[2px]">
                    Categories
                  <span><FaCaretDown className=" "/></span>
                  </div>
                  </a>
                  <div className="absolute z[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2">

                    <ul>
                      {
                        DropdownLinks.map((id,name,link)=>(
                          <li key={id} >
                            <a href={link} className=" text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20 ">
                            {name}
                            </a>
                          </li>
                        ))
                      }
                     
                    </ul>
                  </div>
                </li>
              }
              
                        <li>
                          <button className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                        My Account
                          </button>
                        </li>
                      
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;
