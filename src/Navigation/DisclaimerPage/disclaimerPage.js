import React from "react";
import Disclaimer from "../../Components/Disclaimer/disclaimer";

const DisclaimerPage = ({category}) => {
    return(
        <>
            {category == 'cookies' ? <Disclaimer category='Cookies'></Disclaimer> : null }
            {category == 'privacy' ? <Disclaimer category='Privacidad'></Disclaimer> : null }
            {category == 'legal' ? <Disclaimer category='Legal'></Disclaimer> : null }

        </>
    )
}

export default DisclaimerPage