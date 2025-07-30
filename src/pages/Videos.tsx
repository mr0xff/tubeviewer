import { useGetAllVideos } from "@/lib/hook"
import Video from "@/components/Video";

export default function Videos(){
  const { data, isPending } = useGetAllVideos();
  
  return(
    <div>
      <h2 className="uppercase">Vidoes em destaques</h2> 
      <div className="flex flex-col items-center">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3">
          {data?.map(props =>(
            <li><Video {...props}/></li>
          ))}
        </ul>
      </div>
    </div>
  )
}