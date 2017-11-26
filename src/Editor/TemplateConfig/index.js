import React, { Component } from 'react';

import TemplateConfigurator from './TemplateConfigurator';

import './index.css';

export default class TemplateConfig extends Component {
  render() {
    return (
      <div className="ee-editor-template-config">
        <div className="ee-editor-template-config-tab">
          Config Template
        </div>
        <section>
          <TemplateConfigurator />
        </section>
      </div>
    )
  }
}
