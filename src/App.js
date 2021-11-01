import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch,withRouter} from "react-router-dom";
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Studentsignup_one from './components/Signup/Studentsignup_one';
import Studentsignup_two from './components/Signup/Studentsignup_two';
import Studentsignup_three from './components/Signup/Studentsignup_three';
import Studentsignup_four from './components/Signup/Studentsignup_four';
import Studentsignup_five from './components/Signup/Studentsignup_five';
import Studentdashboard from './components/Dashboard/Studentdashboard';
import TermsandCondition from './components/Terms/TermsandCondition';
import StudentHowitswork from './components/Home/StudentHowitswork';
import Cookie from './components/Terms/Cookie';
import Aboutus from './components/Home/Aboutus';
import Company from './components/Company/Company';
import Universites from './components/Universities/Universites';
import Signin from './components/Signin/Signin';
import Code from './components/Home/Code';
import Inclusion from './components/Home/Inclusion';
import Privacy from './components/Home/Privacy';
import Companysignup from './components/Company/Companysignup';
import Companysignuptwo from './components/Company/Companysignuptwo';
import Companysignupthree from './components/Company/Companysignupthree';
import Reset from './components/Signin/Reset';
import Cookiepolicy from './components/Terms/Cookiepolicy';
function App() {
  return (
    <div>
      
     <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/signup" component={Signup} />
        <Route  path="/studentsignup_one" component={Studentsignup_one} />
        <Route  path="/studentsignup_two" component={Studentsignup_two} />
        <Route  path="/studentsignup_three" component={Studentsignup_three} />
        <Route  path="/studentsignup_four" component={Studentsignup_four} />
        <Route  path="/studentsignup_five" component={Studentsignup_five} />
        <Route  path="/studentdashboard" component={Studentdashboard} />
        <Route  path="/termsandcondition" component={TermsandCondition} />
        <Route  path="/studentHowitswork" component={StudentHowitswork} />
        <Route  path="/cookie" component={Cookie} />
        <Route  path="/aboutus" component={Aboutus} />
        <Route  path="/company" component={Company} />
        <Route  path="/universites" component={Universites} />
        <Route  path="/signin" component={Signin} />
        <Route  path="/code" component={Code} />
        <Route  path="/inclusion" component={Inclusion} />
        <Route  path="/privacy" component={Privacy} />
        <Route  path="/companysignup" component={Companysignup} />
        <Route  path="/companysignuptwo" component={Companysignuptwo} />
        <Route  path="/companysignupthree" component={Companysignupthree} />
        <Route  path="/reset" component={Reset} />
        <Route  path="/cookiepolicy" component={Cookiepolicy} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
