import React, { Component } from 'react';
/*eslint-disable no-alert, no-console, no-unused-vars */
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/html';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';

export default class CodeEditor extends Component {
  _getValue = () => {
    return this.props.content || "";
  }

  render() {
    return (
      <AceEditor
        className={"ee-code-editor"}
        style={{ flex: 1, width: 850, height: 514 }}
        mode="html"
        theme="github"
        name="HTML_CODE_EDITOR"
        fontSize={12}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={this._getValue()}
        readOnly={true}
        setOptions={{
          enableLiveAutocompletion: true,
          enableBasicAutocompletion: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        editorProps={{
          $blockScrolling: Infinity
        }}
      />
    )
  }
}
