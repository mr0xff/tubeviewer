import { useState } from "react";
import { useGetAllVideos } from "@/lib/hook"
import Video from "@/components/Video";

export default function Videos(){
  const [ count, setCount ] = useState(6);
  const { data, isPending } = useGetAllVideos(count);
  const showMore = ()=> setCount(count + 6);

  return(
    <div className="py-3">
      <h2 className="uppercase text-2xl font-bold">Vidoes em destaques</h2> 
      <div className="flex flex-col items-center my-3">
        {isPending && <p className="font-medium animate-pulse">Carregando Videos ...</p>}
        <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {data?.map(props => (
            <li key={props.videoId}><Video {...props}/></li>
          ))}
        </ul>

        <button onClick={showMore} className="rounded-xl uppercase font-bold my-3 text-orange-500 hover:ring hover:ring-orange-200 px-3 py-2">Ver mais</button>
      </div>
    </div>
  )
}