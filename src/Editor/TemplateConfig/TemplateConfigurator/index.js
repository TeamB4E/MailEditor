import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CONSTANTS from '_constants';
import _ from 'lodash';

import './index.css';

class TemplateConfigurator extends Component {

  renderSubSection = (parentKey, key, subSection, i, selectedTemplate) => {
    if(_.isArray(subSection)) {
      return [
        <p key={`${i}_1_1`} onClick={e => {
          e.target.classList.toggle('open');
        }}>
          <span>{key}</span>
          <b className="zmdi zmdi-chevron-right" />
        </p>,
        <div key={`${i}_1_2`} className="ee-editor-template-entry">
          {subSection.map((subs, j) => (
            <p key={j} className="array">
              <label>{j === 0 ? 'table header' : `row ${j - 1}`}</label>
              {subs.map((su, m) => (
                <input key={`${j}_${m}`} value={su} onChange={e => {
                  const newVal = e.target.value;
                  const rowsArray = selectedTemplate.meta[parentKey][key];
                  const newRowsArray = _.cloneDeep(rowsArray);
                  newRowsArray[j][m] = newVal;
                  this.props.dispatch({
                    type: CONSTANTS.UPDATE_ACTIVE_TEMPLATE,
                    newMeta: {
                      [parentKey]: {
                        [key]: [
                          ...newRowsArray
                        ]
                      }
                    }
                  })
                }} />
              ))}
            </p>
          ))}
        </div>
      ]
    }
    return [
      <p key={`${i}_1_1`} onClick={e => {
        e.target.classList.toggle('open');
      }}>
        <span>{key}</span>
        <b className="zmdi zmdi-chevron-right" />
      </p>,
      <div key={`${i}_1_2`} className="ee-editor-template-entry">
        {Object.keys(subSection).map((k, j) => (
          <p key={j}>
            <label>{k}</label>
            <input value={subSection[k]} onChange={e => {
              const newVal = e.target.value;
              this.props.dispatch({
                type: CONSTANTS.UPDATE_ACTIVE_TEMPLATE,
                newMeta: {
                  [parentKey]: {
                    [key]: {
                      [k]: newVal
                    }
                  }
                }
              })
            }} />
          </p>
        ))}
      </div>
    ]
  }

  render() {
    const { activeTemplate, templates } = this.props;
    const selectedTemplate = templates[activeTemplate];

    return (
      <div className="ee-editor-template-config-ui">
        {Object.keys(selectedTemplate.meta).map((key, i) => {
          return [
            <h3 key={`${i}_1`} onClick={e => {
              e.target.classList.toggle('open');
            }}>
              <span>{key}</span>
              <b className="zmdi zmdi-chevron-right" />
            </h3>,
            <div key={`${i}_2`} className="ee-editor-template-section">
              {Object.keys(selectedTemplate.meta[key]).map((kk, j) => {
                return this.renderSubSection(key, kk, selectedTemplate.meta[key][kk], j, selectedTemplate)
              })}
            </div>
          ]
        })}
      </div>
    ); // return
  }
}

const mapState = ({ activeTemplate, templates }) => ({ activeTemplate, templates });

export default connect(mapState)(TemplateConfigurator);
