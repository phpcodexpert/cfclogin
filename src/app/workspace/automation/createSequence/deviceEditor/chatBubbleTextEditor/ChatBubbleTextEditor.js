import React, { Component, } from 'react';
import Plain from 'slate-plain-serializer';
import { Editor } from 'slate-react';
import './ChatBubbleTextEditor.css';

class ChatBubbleTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Plain.deserialize(props.value || ''),
    };
  }

  _handleTextChange = ({ value }) => {
    this.setState({ value });
  }

  render() {
    return (
      <div className="bubble-text-editor">
        <Editor
          placeholder="Enter some plain text..."
          value={this.state.value}
          onChange={this._handleTextChange}
        />
      </div>
    )
  }
}

export {
  ChatBubbleTextEditor,
};
