import React, { Component } from 'react';
import store from '_STORE_';

import _MorningBrief from '_STORE_/templates/morning-brief';

import './index.css';
// import * as IMAGES from './images';

const TEMPLATES_FAMILIES = getTemplatesFamilies();
const TEMPLATES = getTemplates();

export default class EmailTemplates extends Component {
  state = { searchTerm: '' }

  _filter = (list) => {
    const { searchTerm } = this.state;
    return list.filter(uid => TEMPLATES[uid].title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="ee-editor-tab--ui-resources">
        <div className="ee-editor-tab--ui-top-tab">
          Library
        </div>
        <div className="ee-editor-tab--ui-components-search">
          <input type="text" placeholder="search a template"
            value={searchTerm} onChange={e => this.setState({ searchTerm: e.target.value })} />
          {!searchTerm && <i className="zmdi zmdi-search"></i>}
          {searchTerm && <i className="zmdi zmdi-close" onClick={e => this.setState({ searchTerm: '' })}></i>}
        </div>
        <section className="ee-editor-tab--ui-components">
          {TEMPLATES_FAMILIES.map((family, i) => {
            return [
              <h5 key={`0-${i}`}>
                <span>{family.title}</span>
                <b className="zmdi zmdi-chevron-down"></b>
              </h5>,
              <div key={`1-${i}`} className="ee-dnd-components-list">
                {this._filter(family.list).map((uid, i) => {
                  const Template = TEMPLATES[uid];
                  return (
                    <p key={i} className="ee-editor-tab--ui-component">
                      {false && <span>{Template.title}</span>}
                      <img src={Template.img} alt={Template.title} />
                    </p>
                  );
                })}
              </div>
            ]
          })}
        </section>
      </div>
    )
  }
}

function getTemplatesFamilies() {
  return [
    { title: 'Infos', list: ['MorningBrief'] },
  ]
}

function getTemplates() {
  return {
    MorningBrief: _MorningBrief
  }
}
