import { NextPage } from "next";
import { useEffect, useState } from "react";
import DataBar from "../components/DataBar";
import Divisor from "../components/Divisor";
import FollowMe from "../components/FollowMe";
import Footer from "../components/Footer";
import Modal from "../components/FormModal";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhoAmI from "../components/WhoAmI";

const Home: NextPage = () => {
    const [show, setShow] = useState<boolean>(true);
    const [hide, setHide] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [show]);

    return (
        <>
            <Modal show={show} setShow={v => {
                setHide(false);
                setShow(v);
            }}/>
            {hide ? null : (
                <>
                    <Header setShow={v => {
                        setHide(true);
                        setShow(v);
                    }} />
                    <Hero setShow={v => {
                        setHide(true);
                        setShow(v);
                    }} />
                    <DataBar/>
                    <WhoAmI setShow={v => {
                        setHide(true);
                        setShow(v);
                    }} />
                    {/* <AboutTalk setShow={setShow} /> */}
                    <Divisor/>
                    <FollowMe/>
                    <Footer/>
                </>
            )}
        </>
    );
};

export default Home;
