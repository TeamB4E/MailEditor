import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Dialog, Button, Intent, Toaster, Position } from '@blueprintjs/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import _MorningBrief from '_STORE_/templates/morning-brief';

import './index.css';

import IframeCanvas from './IframeCanvas';
import CodeEditor from './CodeEditor';

class TemplateViewer extends Component {

  state = {
    isExportHTMLDialogOpen: false
  }

  parseAndGenerateNewContent = () => {
    const { activeTemplate, templates } = this.props;
    const selectedTemplate = templates[activeTemplate];

    const stringifiedContent = _MorningBrief.render(selectedTemplate.meta);
    return stringifiedContent;
  }

  render() {
    const content = this.parseAndGenerateNewContent();
    const { isExportHTMLDialogOpen } = this.state;
    return (
      <div className="ee-editor-template-preview">
        <div className="ee-editor-template-preview-tab">
          Template Preview
        </div>
        <div className="ee-editor-template-preview-buttons">
          <p onClick={e => this.setState({ isExportHTMLDialogOpen: true })}>
            <span>Export HTML</span>
            <b className="zmdi zmdi-view-web" />
          </p>
          <p className="disabled">
            <span>Export PDF</span>
            <b className="zmdi zmdi-collection-pdf" />
          </p>
        </div>
        <div className="ee-editor-template-preview-canvas">
          <IframeCanvas content={content} />
        </div>
        <HTMLExportDialog content={content} isOpen={isExportHTMLDialogOpen}
          onClose={e => this.setState({ isExportHTMLDialogOpen: false })} />
      </div>
    )
  }
}

const mapState = ({ activeTemplate, templates }) => ({ activeTemplate, templates });

export default connect(mapState)(TemplateViewer);

class HTMLExportDialog extends Component {
  render() {
    const { isOpen, onClose, content } = this.props;
    return (
      <Dialog
        iconName="inbox"
        isOpen={isOpen}
        onClose={onClose}
        title="HTML Export" className="ee-editor-html-export-dialog">
        <div className="ee-editor-html-export">
          <div className="pt-dialog-body">
            <CodeEditor content={content} />
          </div>
        </div>
        <div className="pt-dialog-footer">
          <div className="pt-dialog-footer-actions">
            <Button text="Cancel" onClick={e => onClose()} />
            <CopyToClipboard text={content}
              onCopy={() => {
                Toaster.create({
                  className: "my-toaster",
                  position: Position.TOP,
                }).show({ message: "Copied!", timeout: 800 });
              }}>
              <Button
                intent={Intent.PRIMARY}
                onClick={e => {}}
                text="Copy content" />
            </CopyToClipboard>
          </div>
        </div>
      </Dialog>
    )
  }
}
