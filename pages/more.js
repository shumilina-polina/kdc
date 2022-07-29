import Head from "next/head";

import cn from "classnames";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Title from "UI/Title/Title";
import Wrapper from "UI/Wrapper/Wrapper";

import s from "styles/pages/MorePage.module.scss";
import { useState } from "react";
import AntiCorruption from "Components/AntiCorruption/AntiCorruption";
import Archive from "Components/Archive/Archive";

const MorePage = () => {
    const [isMainTab, setMainTab] = useState(true);

    return(
        <>
            <Head>
                <title>Дополнительно</title>
            </Head>

            <Header />
            
            <Wrapper borderBottom>
                <Title>Дополнительно</Title>
            </Wrapper>

            <Wrapper borderBottom>
                <div className={s.nav}>
                    <div className={cn(s.navItem, isMainTab ? s.active : '')} onClick={() => setMainTab(true)}>
                        <span>Противодействие коррупции</span>
                    </div>
                    <div className={cn(s.navItem, !isMainTab ? s.active : '')} onClick={() => setMainTab(false)}>
                        <span>Архив мероприятий</span>
                    </div>
                </div>
            </Wrapper>

            <Wrapper>
                {isMainTab ? (
                    <AntiCorruption />
                ) : (
                    <Archive />
                )}
            </Wrapper>

            <Footer />
        </>
    )
}

export default MorePage;