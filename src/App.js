import bootstrap from "bootstrap";
import "./App.css";
import { useAtom } from "jotai";
import { formDetailsAtom } from "./jotai/formDetails";
import { useState } from "react";
import { Form } from "./components/Form";

function App() {
  const [data, setData] = useAtom(formDetailsAtom);
  const [summary, setSummary] = useState(false);

  const handleName = (e) => {
    setData({ ...data, name: e });
  };
  const handleAge = (e) => {
    setData({ ...data, age: e });
  };
  const handleAddress = (e) => {
    setData({ ...data, address: e });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSummary(true);
  };

  return (
    <div className="container">
      <h1 style={{ margin: 20 }}>jotai</h1>

      <Form
        handleSubmit={handleSubmit}
        handleName={handleName}
        handleAge={handleAge}
        handleAddress={handleAddress}
      />
      {summary && (
        <div className="card">
          <h2>Summary</h2>
          <h3>name:{data.name}</h3>
          <h3>Age:{data.age}</h3>
          <h3>Address:{data.address}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
