import { useGetAllVideos } from "@/lib/hook"

export default function Videos(){
  const { data, isPending } = useGetAllVideos();
  
  return(
    <div>
      videos 
      <div>
        {isPending && "loading ..."}
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
      
    </div>
  )
}