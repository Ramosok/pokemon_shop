import {useState} from "react";

import {HeaderLayout} from "../components/HeaderLayout";

import {LOCAL_STORAGE_USERNAME} from "../../../constants/localStorageData";


export const HeaderManagerContainer = () => {
    const [display, setDisplay] = useState(false)

    const onLogin = () => {
        setDisplay(!display)
    }

    const onLogOut =() => {
        localStorage.clear();
        window.location.reload();

    }

    const userName = localStorage.getItem(LOCAL_STORAGE_USERNAME.USER_NAME);

    return <HeaderLayout
        display={display}
        userName={userName}
        onLogin={onLogin}
        onLogOut={onLogOut}
    />
};
