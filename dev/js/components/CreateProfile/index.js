import React from 'react';
import ProgressBar from './ProgressBar.js';
import PersonalDetail from './PersonalDetail.js';
import { container } from './style.js';

const CreateProfile = ()=>{

    return(
        <div className={container}>
            <ProgressBar/>
            {/* <PersonalDetail /> */}
        </div>
    )
}

export default CreateProfile;