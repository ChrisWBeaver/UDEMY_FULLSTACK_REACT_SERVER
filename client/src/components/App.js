import React from 'react'; 
import { BrowserRouter, Route} from 'react-router-dom'; 

const Header = () => <h2>Header</h2>;
const DashBoard = () => <h2>DashBoard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
    return (
        <div>
          <BrowserRouter>
            <div>
                <Route exact={true} path="/" component={Landing} />
                <Route exact path="/surveys" component={DashBoard} />
                <Route exact path="/surveys/new" component={SurveyNew} />
            </div>
          </BrowserRouter>  
        </div>
    );
};

export default App;