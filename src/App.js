import "./App.css";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Menu from "./components/Menu/Menu";
import Tree from "./components/Tree/Tree";
import Zad6 from "./components/Zad6/Zad6";
const data = [
  {
    file: "documents",
    subFiles: [
      {
        file: "27-10-1990",
      },
      {
        file: "invoices",
        subFiles: [
          {
            file: "electricityBills",
            subFiles: [{ file: "invoice1" }, { file: "invoice2" }],
          },
          { file: "invoice12" },
        ],
      },
    ],
  },
  {
    file: "photos",
    subFiles: [
      {
        file: "summer2020",
        subFiles: [{ file: "10.25" }, { file: "10.26" }, { file: "10.27" }],
      },
    ],
  },
];

const menuData = [
  {
    linkName: "Klienci",
    link: "/clients",
    icon: "",
  },
  {
    linkName: "Orders",
    link: "/orders",
    icon: "",
  },
  {
    linkName: "Faktury",
    link: "/invoices",
    icon: "",
  },
  {
    linkName: "Posts",
    link: "/posts",
    icon: "",
  },
];

const cards = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Zigniew",
    surname: "Herbert",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 789",
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Henryk",
    surname: "Sienkiewicz",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 789",
  },
  {
    id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1661869535393-872dea2d9f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    name: "Wisława",
    surname: "Szymborska",
    street: "TestStreet",
    postCode: "00-123",
    town: "Town",
    subRegion: "Region",
    phoneNumber: "+48 123 456 789",
  },
];

function App() {
  return (
    <div className="App">
      <Zad6 cards={cards} />
      <br />

      <Wrapper>
        {cards.map((el) => (
          <Card
            key={el.id}
            avatar={el.imgSrc}
            name={el.name}
            surname={el.surname}
            street={el.street}
            postCode={el.postCode}
            town={el.town}
            subRegion={el.subRegion}
            phoneNumber={el.phoneNumber}
          />
        ))}
      </Wrapper>

      <Menu menu={menuData} />
      <Tree data={data} key={data.file} />
    </div>
  );
}

export default App;
