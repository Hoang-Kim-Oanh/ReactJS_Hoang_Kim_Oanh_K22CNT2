import './App.css';
import Func_jsx_HoangKimOanh from './componetns/Func_jsx_HoangKimOanh';
import Class_hoangkimoanh from './componetns/Class_hoangkimoanh';

function App() {
  return (
    <section className="App">
      <h1> Demo jsx</h1>
      {/*Function component Demo*/}
      <Func_jsx_HoangKimOanh />
      <Func_jsx_HoangKimOanh fullname ="Hoang Kim Oanh" age="20" />

      <Class_hoangkimoanh />
      <hr/>
      <Class_hoangkimoanh info="Hoc reactJS" time = "11"/>
    </section>
  );
}

export default App;
