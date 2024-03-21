// Import css
import "../../assets/css/homePage.css"

// Import components
import Notes from "../../components/Notes";

// Home page Loader
export const homePageLoader = () =>{
    return null;
}
// Home page actions
export const homePageAction = ({response}) =>{
    const data = response.formData();

    console.log({data, response})
}
export default function Home() {
  return (
    <div className="pages">
      <Notes />
    </div>
  )
}
