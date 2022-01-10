import { useEffect, useState } from "react";
import { myPromise } from "./promise";
import DefaulBtn from "./Button";
import Card, { CardTitle, CardText } from "./Card";
import { Card as Card2 } from "./Card2";
import { toUpper } from "lodash";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  const [isToggle, setIsToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Začátek fetch data");
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET",
      });
      console.log("Po zavolání na API");
      const data = await res.json();
      console.log(data);
      setData(data);
      setLoading(false);
    };

    console.log("Start use effect");

    console.log("Před zavoláním fetchData");
    fetchData();
    console.log("Po zavolání fetchData");

    const text = "ahoj jaké byly vánoce";
    console.log(toUpper(text));
  }, []);

  // useEffect(() => {
  //   console.log("Před zavoláním myPromise");
  //   myPromise
  //     .then((msg) => {
  //       console.log("Then block");
  //       console.log(msg);
  //     })
  //     .catch((errorMsg) => {
  //       console.log("Catch block");
  //       console.log(errorMsg);
  //     });
  //   console.log("Po zavoláním myPromise");
  // }, []);

  // useEffect(() => {
  //   console.log("Start use effect");
  //   const testPromise = async () => {
  //     try {
  //       const promis = await myPromise;

  //       console.log(promis);
  //     } catch (error) {
  //       console.log("Error block");
  //       console.log(error);
  //     }
  //   };
  //   testPromise();
  // }, []);

  const handleClick = () => {
    console.log("Btn cliked");
    setCount(count + 1);
  };

  // const data = [
  //   {
  //     title: "SSPS",
  //     content: "MWA",
  //   },
  //   {
  //     title: "SSPS 2",
  //     content: "MWA 2",
  //   },
  //   {
  //     title: "SSPS 2",
  //     content: "MWA 2",
  //   },
  //   {
  //     title: "SSPS 3",
  //     content: "MWA 3",
  //   },
  //   {
  //     title: "SSPS 4",
  //     content: "MWA 4",
  //   },
  // ];

  return (
    <div className="bg-yellow-600 p-4">
      <h1 className="app-headline">hello tailwind</h1>
      <div className="bg-green-400 flex justify-center p-4">
        <Card2 />
        <div className="flex flex-col gap-4 justify-center items-start text-center">
          <h1>{`Počet: ${count}`}</h1>
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-red-200 rounded-lg shadow-md transition-all duration-150 hover:bg-red-600 hover:shadow-2xl hover:text-red-50"
          >
            Přidat 1
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          setIsToggle(!isToggle);
        }}
        className="my-8 px-4 py-2 bg-red-200 rounded-lg shadow-md transition-all duration-150 hover:bg-red-600 hover:shadow-2xl hover:text-red-50"
      >
        {isToggle ? "Skrýt" : "Zobrazit"}
      </button>
      {isToggle && <Card completed={"FEWFew"} content={"GEW"} />}
      <DefaulBtn text={`Počet: ${count}`} className="px-16" />
      <Card completed={"FEWFew"} content={"GEW"} />

      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item, i) => (
          <Card key={i} completed={item.completed} content={item.title} />
        ))
      )} */}

      {data.map((item, i) => {
        return (
          <div>
            <p>
              {i + 1}. {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
