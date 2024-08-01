import { useState } from "react";
import loadingIcon from '../../src/app/assets/img/loading.svg';


const Loading = () => {

    const [currentLoadState, setCurrentLoadState] = useState();
    return (
        <div>
            <img src={loadingIcon} style={{ width: '50px', height: '50px'}} />
        </div>
    );
};

export default Loading;