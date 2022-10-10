import Card from "./components/card/Card";
import data from "./data";

function App() {
  return (
    <>
    
    
    {data.map((item) => {
      console.log(item);
      const {id, language, btn, img} = item
        return (
          <Card key={id} Language={language} img={img} btn={btn}/>
        )


    })}
    </>

  ) ;
}

export default App;
