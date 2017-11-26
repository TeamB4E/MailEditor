import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import * as CONSTANTS from '_constants';

// components
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import PageContainer from 'components/PageContainer';

// sections
import EmailTemplates from './EmailTemplates';
import TemplateConfig from './TemplateConfig';
import TemplateViewer from './TemplateViewer';

import './index.css';

export default class Editor extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <PageContainer>
        <Navbar />
        <div className="ee-main-editor-wrapper">
          <EmailTemplates />
          <TemplateViewer />
          <TemplateConfig />
        </div>
        <Footer />
      </PageContainer>
    );
  }
}

// export default withRouter(connect(state => ({
//   activeProject: state.activeProject
// }))(StudioScreen));


// const _LastOpenedScreens = ({ activeScreen, screens, lastOpenedScreens, dispatch }) => (
//   <div className="sd-studio-open-screens">
//     {lastOpenedScreens.map((uid, index) => {
//       const screen = screens[uid];
//       return (
//         <p key={uid} className={classnames({'selected': activeScreen === uid})} onClick={e => {
//           dispatch({
//             type: CONSTANTS.SET_ACTIVE_SCREEN,
//             screenUID: uid
//           });
//         }} style={{
//           paddingRight: lastOpenedScreens.length === 1 ? 20 : 5
//         }}>
//           {screen.name}
//           {false && <b />}
//           {lastOpenedScreens.length > 1 && <span className="zmdi zmdi-close" onClick={e => {
//             e.stopPropagation();
//             if(uid === activeScreen) {
//               // we're closing the activeScreen
//               dispatch({
//                 type: CONSTANTS.SET_ACTIVE_SCREEN,
//                 screenUID: lastOpenedScreens[index - 1]
//               });
//             }
//             dispatch({
//               type: CONSTANTS.CLOSE_SCREEN,
//               screenUID: uid
//             })
//           }}></span>}
//         </p>
//       )
//     })}
//   </div>
// )

// const LastOpenedScreens = connect(({
//   activeScreen, screens, lastOpenedScreens
// }) => ({
//   activeScreen, screens, lastOpenedScreens
// }))(_LastOpenedScreens);
