
import ProdectList from "./react_composition/ProdectList";
import TopComp from "./react_composition/TopComp";
import ButtomComp from "./react_composition/ButtomComp";

function App() {
  return (
    <div>
     <ProdectList top={<TopComp title="Top Component"/>} buttom={<ButtomComp  title='Buttom Component'/>}/>
    </div>
  );
}

export default App;
