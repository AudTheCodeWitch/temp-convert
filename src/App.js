import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className='flex flex-col h-screen bg-primary'>
      <Header />
      <div className={'flex-grow'}>
        <Calculator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
