import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { ReactComponent as Emil } from "../../assets/svg/emailLogin.svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebookLogin.svg";
import { ReactComponent as Google } from "../../assets/svg/googleLogin.svg";
import { ReactComponent as ManageAds } from "../../assets/svg/manageAds.svg";
import { ReactComponent as MarkAds } from "../../assets/svg/markAds.svg";
import { ReactComponent as OwnAds } from "../../assets/svg/ownAds.svg";
import { LoginBtn } from "./LoginBtn";

type LoginModalProps = {
  show: boolean;
  onHide: () => void;
};

export const LoginModal: FC<LoginModalProps> = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Row className="p-4">
        <Col lg={6} md={6} xs={12} className="border-end">
          <h5 className="fw-semibold">Welcome to Xfox.com</h5>
          <p className="text-muted fs-0">Log in to manage your account.</p>
          <div className="d-flex py-4">
            <OwnAds />{" "}
            <span className="ms-4 text-muted">Start posting your own ads.</span>
          </div>
          <div className="d-flex py-4">
            <MarkAds />{" "}
            <span className="ms-4 text-muted">
              Mark ads as favorite and view them later
            </span>
          </div>
          <div className="d-flex py-4">
            <ManageAds />{" "}
            <span className="ms-4 text-muted">
              View and manage your ads at your convenience.
            </span>
          </div>
        </Col>
        <Col lg={6} md={6} xs={12} className="ps-4 mb-3">
          <Modal.Header
            closeButton
            className="border-bottom-0 my-0 py-0 pe-0"
          />
          <h6 className="fw-semibold mt-4">
            Continue with mobile number & OTP
          </h6>
          <p className="d-flex">
            <select
              name=""
              id=""
              className="border focus:border-success p-1 rounded-1"
            >
              <option
                value="0"
                className=" text-success py-1 hover:bg-white border-none"
              >
                +880
              </option>
            </select>
            <input
              style={{ width: "80%" }}
              placeholder="Enter your mobile number"
              type="text"
              className="border focus:border-success py-1 rounded-1 px-2"
            />
          </p>
          <LoginBtn
            styles={{
              backgroundColor: "#149777",
              width: "100%",
              color: "white",
              border: "0px",
            }}
          >
            Countinue
          </LoginBtn>
          <div className="text-center my-3 text-muted">
            <h6>OR</h6>
          </div>

          <LoginBtn
            styles={{
              backgroundColor: "white",
              width: "100%",
              border: "1px solid #d4ded9",
              color: "#707676",
            }}
          >
            <span className="me-2">
              <Google />
            </span>{" "}
            Continue with Google
          </LoginBtn>

          <LoginBtn
            styles={{
              backgroundColor: "#3B5999",
              width: "100%",
              border: "0px",
              color: "white",
            }}
          >
            <span className="me-2">
              <Facebook />
            </span>
            Continue with Facebook
          </LoginBtn>

          <LoginBtn
            styles={{
              backgroundColor: "#149777",
              width: "100%",
              border: "0px",
              color: "white",
            }}
          >
            <span className="me-2">
              <Emil />
            </span>
            Continue with Email
          </LoginBtn>

          <p className="text-center">
            <small>By signing up for an account you agree to our</small>
          </p>
          <p className="text-center">
            <a className="text-decoration-none" href="#">
              <small>Terms and Conditions</small>
            </a>
          </p>
        </Col>
      </Row>
    </Modal>
  );
};
