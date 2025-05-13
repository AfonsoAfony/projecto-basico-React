import { ChevronsLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom"
import Title from "../components/Title";


function DetailsTask(){
   const navigate=useNavigate()

   const [searchParams]=useSearchParams();
   const title=searchParams.get("title")
   const description=searchParams.get("description")

return(
   <div className="h-screen w-screen p-2 flex justify-center">
      
      <div className="w-[500px] space-y-4 ">   
            <div className="flex justify-center relative">
            <button
            onClick={()=>navigate(-1)}
             className="absolute left-0 top-0 bottom-0 text-green-600">
               <ChevronsLeftIcon/>
            </button>
            <Title>Detalhes da Tarefa</Title>
            </div>
               <div className="bg-slate-100 text-start p-4 rounded-md">
                     <h2 className="text-xl font-bold text-green-600">{title}</h2>
                     <p className="text-gray-950">{description}</p>
               </div>       
             </div>        
   </div>
   
);
}
export default DetailsTask