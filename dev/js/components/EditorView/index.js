import React, { useRef, useEffect } from 'react';
import RichTextEditor from 'react-rte';

import { container } from './style.js';

const EditorView = ({ editorState, onChange, saveNotes})=>{
    const notesCtaRef = useRef();

    useEffect(()=>{
        notesCtaRef.current.scrollIntoView();
    },[])

    return <div className={container}>
        <RichTextEditor
            value={editorState}
            onChange={onChange}
            editorClassName="demo-editor"
        />
        <button className='edtrSave' onClick={saveNotes} ref={notesCtaRef}>Save</button>
    </div>
}

export default EditorView; 
