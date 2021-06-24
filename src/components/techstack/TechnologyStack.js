import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";

// import {
//   featuredPortfolio,
//   webPortfolio,
//   mobilePortfolio,
//   designPortfolio,
//   // contentPortfolio,
// } from "../../data";
import "./technologystack.scss";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
} from "../../data/images";

const TechnologyStack = () => {
  // Variables
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "web",
      title: "Web Development",
    },
    {
      id: "mobile",
      title: "Mobile Development",
    },
    {
      id: "design",
      title: "Design",
    },
  ];

  // UseEffect
  useEffect(() => {
    switch (selected) {
      case "all":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      // case "content":
      //   setData(contentPortfolio);
      //   break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="teckstack" id="teckstack">
      <h1>Tech Stack</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.image} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <a href="#events">
        <img src="assets/down.png" alt="" />
      </a>
    </div>
  );
};

export default TechnologyStack;
