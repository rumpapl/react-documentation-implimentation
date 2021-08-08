
import ProdectList from "./react_composition/ProdectList";
import TopComp from "./react_composition/TopComp";
import ButtomComp from "./react_composition/ButtomComp";

function App() {
  return (
    <div>
     <ProdectList top={<TopComp/>} buttom={<ButtomComp/>}/>
    </div>
  );
}

export default App;
