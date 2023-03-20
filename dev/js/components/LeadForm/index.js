import React, { forwardRef, useImperativeHandle, Fragment, useState } from 'react';
import LeadForm from './LeadForm';
import PopupOverlay from '@components/PopupOverlay';

const Index = forwardRef((props, ref)=>{
console.log("sarch", props);
    const [showPopup, setPopup] = useState(false);

    const handleClose = ()=>{
        setPopup(false)
    }

    const togglePopup = ()=>{
        setPopup(val => !val);
    }

    useImperativeHandle(ref, ()=>({
        openPopup: togglePopup
    }))
    
    const search = props.location && props.location.search||'';
    return (
        <Fragment>
        <PopupOverlay showPopup={showPopup} handleCloseClick={handleClose}>
            <LeadForm handleClose={handleClose} {...props} search={search}/>
        </PopupOverlay>
        </Fragment>
    )
})

export default Index;