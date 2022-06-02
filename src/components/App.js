import {BrowserRouter  , Routes , Route} from "react-router-dom" ;
import { StyleRoot } from "radium";
import {Navbar,  Home, CreatePost, PostDetail} from './index';

function App() {
  return (
    <StyleRoot>
      <BrowserRouter>
          <div className="container">
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/post/:postId' element={<PostDetail/>} />
            <Route exact path='/create-post' element={<CreatePost/>} />
          </Routes>   
      </div>
      </BrowserRouter >
</StyleRoot>
  );
}


export default App;