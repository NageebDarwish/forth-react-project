import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Before.css";

export default function BeforeTopRated() {
  return (
    <div className="before-top-rated">
      <Container>
        <div className="d-flex align-items-center justify-content-between py-5 flex-wrap row-gap-4">
          <div className="col-lg-5 col-md-8 col-12 text-md-start text-center">
            <h1 className=" fw-bold">Shampoo Nice</h1>
            <h5 style={{ color: "gray" }} className="fw-normal">
              Another Nice Thing Which is used by someone i don't know (just
              random text)
            </h5>

            <Link
              to="/shop"
              className="btn btn-primary mt-3 py-3 px-4 fw-bold text-light"
            >
              Shop Now
            </Link>
          </div>
          <div className="col-lg-6 col-md-3 col-12 d-flex align-items-center justify-content-md-end justify-content-center">
            <img
              src={require("../../../Assets/images/shampoo.png")}
              alt="shampoo"
              width="75px"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
