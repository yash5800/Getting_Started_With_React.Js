import {useState} from 'react';


function Components(){
   const [name,setName] = useState('Guest');
   const [rank,setRank] = useState('S');

   const updateName = () => {
      setName('Gojo');
   }
   const updateRank = () => {
      setRank('SSS+');
   }

   return(
       <div>
        <p>Name:{name}</p>
        <p>Rank:{rank}</p>
        <button onClick={updateName}>setName</button>
        <button onClick={updateRank}>setRank</button>

       </div>
   );

}


export default Components;