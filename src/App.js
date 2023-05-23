import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Editor from "./components/Editor.jsx";
import Footer from './components/Footer.js';
function App() {
  return (
    <div>
    <Header />
      <Editor />
      <Footer />
    </div>
  );
}

export default App;
