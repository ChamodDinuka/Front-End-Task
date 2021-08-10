import './App.css';
import ViewBook from './components/viewBook'
import {BrowserRouter,Route} from 'react-router-dom'
import Test from './components/test/test'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={ViewBook}/>
      <Route exact path="/test" component={Test}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
