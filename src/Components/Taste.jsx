import React from "react";

function Taste() {
  return (
    <section className=" min-h-screen flex flex-col justify-evenly">
      <div className="flex justify-center ">
        <h1>Hello everyone</h1>
        
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className=" h-96 flex flex-col justify-around">
          <p className="mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            commodi fugit, ea deserunt, reiciendis nam ullam totam iste sed odio
            quibusdam recusandae non earum explicabo eaque tempore vel culpa.
            Quasi.
          </p>

         <div className="flex justify-center mx-4">
            <img src="https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?t=st=1717064292~exp=1717067892~hmac=f5257152bc94c9c253898443fdf897ebef77e589f61ed4e5500a17b772bf842c&w=740" alt="fruits" className="w-52 h-52 rounded-full object-fill" />
         </div>
        </div>

        <div className=" h-96 flex flex-col justify-around">
        <div className="flex justify-center mx-4">
            <img src="https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg?t=st=1717064292~exp=1717067892~hmac=f5257152bc94c9c253898443fdf897ebef77e589f61ed4e5500a17b772bf842c&w=740" alt="fruits" className="w-52 h-52 rounded-full" />
         </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            commodi fugit, ea deserunt, reiciendis nam ullam totam iste sed odio
            quibusdam recusandae non earum explicabo eaque tempore vel culpa.
            Quasi.
          </p>

       
        </div>
      </div>
    </section>
  );
}

export default Taste;
