import React, { Component } from 'react';
import Resizable from 're-resizable';

export default class IframeCanvas extends Component {

  componentDidMount() {
    this._updateIframe(this.props);
  }

  state = { w: 650, h: 720 }

  componentWillReceiveProps(nextProps) {
    this._updateIframe(nextProps);
  }

  _updateIframe = (props) => {
    const iframe = this.refs.iframe;
    iframe.contentDocument.open();
    iframe.contentDocument.write(props.content);
    iframe.contentDocument.close();
    // const document = iframe.contentDocument;
    // document.body.innerHTML = props.content;
    // const head = document.getElementsByTagName('head')[0];
    // head.innerHTML = `
    //   <style>
    //     html, body {
    //       margin: 0;
    //     }
    //   </style>
    // `;
    // this.props.stylesheets.forEach(url => {
    //     const ref = document.createElement('link');
    //     ref.rel = 'stylesheet';
    //     ref.type = 'text/css';
    //     ref.href = url;
    //     head.appendChild(ref);
    // });
  }

  render() {
    const { w: width, h: height } = this.state;
    return (
      <iframe ref="iframe" />
    )
    return (
      <Resizable
        style={{ margin: 40 }}
        size={{ width, height }}
        enable={{
          right: false, left: true,
          top: false, bottom: true,
          topRight: false, bottomRight: false,
          bottomLeft: false, topLeft: false
        }}
        onResizeStart={e => {
          // this.props.dispatch({ type: CONSTANTS.SET_SCREEN_RESIZING, isResizing: true })
        }}
        onResize={(e, direction, ref, d) => {
        }}
        onResizeStop={(e, direction, ref, d) => {
          // this.setState({ w: width + d.width, h: height + d.height });
          if(d.width > 0 || d.height > 0)
            this.setState({ w: width + d.width, h: height + d.height });
          // this.props.dispatch({ type: CONSTANTS.SET_SCREEN_RESIZING, isResizing: false })
        }}>
        <iframe ref="iframe" />
      </Resizable>
    )
  }
}

IframeCanvas.defaultProps = {
  content: ""
}
