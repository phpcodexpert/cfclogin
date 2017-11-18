import React from 'react';
import { ChatBubbleTextEditor, } from './chatBubbleTextEditor';
import './DeviceEditor.css';

const DeviceEditor = (props) => {
  return (
    <section className='device-editor-container'>
      <div className='device-editor-wrapper'>
        <div className='device-editor-heading'>
          <h4>Sequence Name</h4>
        </div>
        <div className='device-editor-editor'>
          <ChatBubbleTextEditor
            value={'Test'}
          />
        </div>
      </div>
    </section>
  );
};

export {
  DeviceEditor,
};
