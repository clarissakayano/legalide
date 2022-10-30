import React from 'react';
import Banner from './components/Banner';
import OurPracticeAreas from './components/OurPracticeAreas';
import WhoWeAre from './components/WhoWeAre';
import PracticeAdvice from './components/PracticeAdvice';
import Subscribe from './components/Subscribe';
import GetInTouch from './components/GetInTouch';
import RequestCons  from './components/Request';

import './styles/GlobalStyles.js';
import Footer from './components/Footer';


// o Card não pode ser o col
//row já é d-flex


const App = () => (
  <>
    <div>
      <Banner />
      <OurPracticeAreas />
      <PracticeAdvice />
      <WhoWeAre />
      <Subscribe/>
      <GetInTouch />
      <RequestCons />
      <Footer />
    </div>
  </>
);

export default App;

