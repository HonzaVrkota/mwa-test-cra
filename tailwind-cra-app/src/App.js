import { useState } from "react";
import DefaulBtn from "./Button";
import Card from "./Card";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    console.log("Btn cliked");
    setCount(count + 1);
  };

  const data = [
    {
      title: "SSPS",
      content: "MWA",
    },
    {
      title: "SSPS 2",
      content: "MWA 2",
    },
    {
      title: "SSPS 2",
      content: "MWA 2",
    },
    {
      title: "SSPS 3",
      content: "MWA 3",
    },
    {
      title: "SSPS 4",
      content: "MWA 4",
    },
  ];

  return (
    <div className="bg-yellow-600 p-4">
      <h1 className="app-headline">hello tailwind</h1>
      <div className="bg-green-400 flex justify-center p-4">
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
      {isToggle && (
        <div className="w-2/3 bg-white h-auto tracking-wide mb-14 border border-black-800 mx-1 rounded-lg relative">
          <div className="small-banner w-1 h-20 bg-blue-600 absolute rounded-tl-md"></div>
          <h5 className="text-2xl font-semibold pl-6 pt-6 pr-6 pb-2">
            Provide useful services
          </h5>
          <p className="text-md font-regular p-6 pt-2 text-gray-500">
            Partners will be facilitated with our communication system available
            for
          </p>
        </div>
      )}
      <DefaulBtn text={`Počet: ${count}`} className="px-16" />

      {data.map((item, i) => (
        <Card key={i} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default App;
