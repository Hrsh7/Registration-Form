import { Fragment, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import ShowData from "./components/ShowData";
function App() {
  const [currentdata, setcurrentdata] = useState([]);
  const userData = (username, userage, useremail, userphn, usergender) => {
    setcurrentdata([
      {
        name: { username },
        age: { userage },
        gender: { usergender },
        email: { useremail },
        phone: { userphn },
      },
    ]);
  };
  return (
    <Fragment>
      <h1>SignUp</h1>
      <FormInput onAdduser={userData} />;
      <ShowData data={currentdata} />
    </Fragment>
  );
}

export default App;
