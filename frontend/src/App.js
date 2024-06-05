import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Recipes from './pages/Recipes';
import Forum from './pages/Forum';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import RecipePage from './pages/RecipePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Forum />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='recipes' element={<Recipes />} />
        <Route path='profile' element={<Profile />}/>
        <Route path='editprofile' element={<EditProfile/>}/>
        <Route path='*' element={<PageNotFound />}/>
        <Route path='menurecipe' element={<RecipePage />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;


{/* <div className='app-container'> 
{/* <LoginPage /> */}
{/* <SignUpPage />
</div>

ini app-container perlu ditaro di setiap Login sama signup supaya flex kesamping, jangan di app comp nya */} 