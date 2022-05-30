import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import Eye from './Components/eye.svg'
import React , {useState}from "react";
function App() {
  const [count , setcount] = useState(1)

   const hadal= (e)=>{
       setcount(e)
   }
  return (
    <div className="container">
      <Input  rightLogo={Eye}  variant='outline' />

      <Image  src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" 
      borderRadius="50%"
      width="70px"
      height="70px"
      fit="cover"
      alt="sagar"
      />

      <Pagination  total={8}  selected={count}  key={1}   onPageChange={(e)=>{hadal(e)} }/>
    </div>
  );
}

export default App;
