import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import SignInSide from './SignInside';
import SignUp from './Signuppage';
function Router() {
 return (
<div>
    <BrowserRouter>

                <Routes>
                <Route path="/" element={<SignInSide/>} />
                <Route path="/Signuppage" element={<SignUp/>} />
                </Routes>
    </BrowserRouter>
 </div>
 );
}
export default Router; 