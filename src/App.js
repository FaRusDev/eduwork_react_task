import Button from './components/Button/Button';

import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Products from './containers/Products';
import Partner from './components/Partner/Partner';
import BannerLeft from './containers/BannerLeft';
import Bg1 from './assets/images/Illustrator.png'
import Bg2 from './assets/images/Illustrator (1).png'
import Bg3 from './assets/images/Image (1).png'


import BannerRight from './containers/BannerRight';
import WorkProduct from './containers/WorkProduct';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='font-hind'>
      <Navbar/>
      <Container>
        <Header/>
      </Container>

     <Products/>
     <Partner/>
     <BannerLeft htext='Real-time support with cloud' ptext='Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.' tag='Alwalys online' image={Bg1} />
     <BannerRight htext='Save cost for you and family' ptext={'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.'} tag='free some cost' image={Bg2}/>
     <BannerLeft htext='Use anytime when you need' ptext='Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.' tag='Use anytime' image={Bg3} />
     <WorkProduct/>
     <Products/>
      <Footer/>
    </div>
    
  );
}

export default App;
