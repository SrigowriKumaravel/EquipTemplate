import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import WorkHistoryList from './components/WorkHistory/WorkHistoryList';
import Sidebar from './components/Sidebar/Sidebar';
import PatientsListCard from './components/Cards/PatientsListCard';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Router>
        <div>
          <Switch>
            <Route path="/WorkHistory">
              <WorkHistoryList />
            </Route>
            <Route path="/PatientCard">
              <PatientsListCard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
