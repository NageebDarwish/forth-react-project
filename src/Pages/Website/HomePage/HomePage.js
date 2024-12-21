import "./Home.css";

import Landing from "../../../Components/Website/Landing/Landing";

import { Container } from "react-bootstrap";

import BeforeTopRated from "../../../Components/Website/BeforTopRated/BeforeTopRated";
import ShowTopRated from "../../../Components/Website/Product/TopRated/ShowTopRated";
import ShowLatestSaleProducts from "../../../Components/Website/Product/SaleProducts/ShowLatestSaleProducts";
import { ShowLatestProducts } from "../../../Components/Website/Product/LatestProducts/ShowLatestProducts";

export default function HomePage() {
  return (
    <div>
      <Landing />
      <ShowLatestSaleProducts />
      <BeforeTopRated />
      <Container>
        <div className="d-flex align-items-start flex-wrap mt-5">
          <ShowTopRated />
          <ShowLatestProducts />
        </div>
      </Container>
    </div>
  );
}
