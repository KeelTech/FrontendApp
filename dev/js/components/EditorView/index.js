import React, { useRef, useEffect } from 'react';
import RichTextEditor from 'react-rte';

const EditorView = ({ editorState, onChange, saveNotes})=>{
    const notesCtaRef = useRef();

    useEffect(()=>{
        notesCtaRef.current.scrollIntoView();
    })

    return <div>
        <RichTextEditor
            value={editorState}
            onChange={onChange}
        />
        <button onClick={saveNotes} ref={notesCtaRef}>Save</button>
    </div>
}

export default EditorView; 