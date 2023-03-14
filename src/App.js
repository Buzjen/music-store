import Card from './components/Card';
import Header from './components/Header';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className="wrapper">
        <RightSide/>
        <Header/>
        <div className="content">
          <div className="search">
            <h1 className="content-h1">All Music</h1>
            <div className="search-block">
              <input placeholder="Search..."/>
            </div>
          </div>
          
        <div className="covers">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        </div>
    </div>
  );
}

export default App;
