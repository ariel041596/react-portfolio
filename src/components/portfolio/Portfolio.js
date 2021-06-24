import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";

import { useHistory } from "react-router-dom";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  // designPortfolio,
  // allProjects,
} from "../../data";
import "./portfolio.scss";

const Portfolio = () => {
  // Variables
  const history = useHistory();
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "all",
    //   title: "All Project",
    // },
  ];

  // Methods
  const handleclick = (id) => {
    history.push(`projects/${id}`);
  };

  // UseEffect
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      // case "design":
      //   setData(designPortfolio);
      //   break;
      // case "all":
      //   setData(allProjects);
      //   break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
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
          // <Link to={`/projects/${d.id}`}>
          <div onClick={() => handleclick(d.id)} key={d.id} className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
          // </Link>
        ))}
      </div>
      <a href="#work">
        <img src="assets/down.png" alt="" />
      </a>
    </div>
  );
};

export default Portfolio;
