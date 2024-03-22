// Import css
import { useParams, Navigate } from "react-router-dom";
import "../../assets/css/homePage.css"

// Import components
import Notes from "../../components/Notes";
import { useEffect, useState } from "react";


export default function Home() {
  const { action, label } = useParams();
  const [ Loading, setLoading ] = useState(false);

  useEffect (()=>{
    setLoading(true);
    if (Loading){
      if (action === undefined && label === undefined) {
        console.log(`Fetch all notes`);
      }else if (action === 'archive' || action === 'trash') {
        console.log(`Fetch all notes in ${action}`);
      }else if (action === undefined && label !== undefined) {
        console.log(`Fetch notes with label "${label}"`);
      } else {
        throw Error (`Invalid action "${action}"`);
      }
    }
    return () => {
      setLoading(false);
    };
  },[action, Loading, label]);
  
  return (
    <div className="pages">
      <Notes />
    </div>
  )
}
