import { Fragment } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Content from "./Content";
const Patients = () => {
    return (
        <Fragment>
        <Navbar />
        <Content />
        <Footer />
        </Fragment>
    );
}

export default Patients;