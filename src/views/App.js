import logo from './logo.svg';
import './App.css';
import NavbarComponent from '../components/navbar';
import IntroComponent from '../components/intro';
import FooterComponent from '../components/footer';
import CollectionVideo from '../components/collection';
import TeamCollections from '../components/teamcollection';
import EmailComponent from '../components/email';

function App() {
  return (
    <div>
      <NavbarComponent />
      <IntroComponent />
      <hr></hr>
      <TeamCollections />
      <hr></hr>
      <CollectionVideo />
      <EmailComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
