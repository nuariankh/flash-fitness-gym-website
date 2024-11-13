import { useState } from "react";
import loadingIcon from '../../src/app/assets/img/loading.svg';


const Loading = () => {

    const [currentLoadState, setCurrentLoadState] = useState();
    return (
        <div>
            <img src={loadingIcon} style={{ width: '50px', height: '50px'}} />
            <p>May take 30 seconds to 1 minute for our API to spin up</p>
            <p>Thank you for your patience :)</p>
        </div>
    );
};

export default Loading;