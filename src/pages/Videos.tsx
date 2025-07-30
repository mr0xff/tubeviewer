import { useGetAllVideos } from "@/lib/hook"
import Video from "@/components/Video";

export default function Videos(){
  const { data, isPending } = useGetAllVideos();
  
  return(
    <div className="py-3">
      <h2 className="uppercase text-2xl font-bold">Vidoes em destaques</h2> 
      <div className="flex flex-col items-center my-3">
        {isPending && <p className="font-medium animate-pulse">Carregando Videos ...</p>}
        <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {data?.map(props =>(
            <li><Video {...props}/></li>
          ))}
        </ul>
      </div>
    </div>
  )
}