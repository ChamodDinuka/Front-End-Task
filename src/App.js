import './App.css';
import ViewBook from './components/viewBook'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={ViewBook}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
