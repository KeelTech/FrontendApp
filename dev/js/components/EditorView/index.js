import React from 'react';
import RichTextEditor from 'react-rte';

const EditorView = ({ editorState, onChange, saveNotes})=>{

    return <div>
        <RichTextEditor
            value={editorState}
            onChange={onChange}
        />
        <button onClick={saveNotes}>Save</button>
    </div>
}

export default EditorView; 