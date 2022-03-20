import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import PageHeading from './components/PageHeading/PageHeading';
import ProductInfo from './components/Products/ProductInfo';
import LastProductDb from './components/Products/LastProductDb';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Superhero from './components/Superhero/Superhero';

function App() {
  return (
    <div id='wrapper'>
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar/>
          <div class="container-fluid">
            <PageHeading heading="App Dashboard"/>            
            <ProductInfo/>

            <div class="row">
              <LastProductDb/>            
              <Categories/>
            </div>
          </div>
          <Superhero/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;