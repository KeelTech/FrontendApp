import React from 'react';
import RichTextEditor from 'react-rte';

const EditorView = ({ editorState, onChange})=>{

    return <RichTextEditor
    value={editorState}
    onChange={onChange}
/>
}

export default EditorView; 