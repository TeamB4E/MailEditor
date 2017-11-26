import * as CONSTANTS from '_constants';
import _ from 'lodash';

const _defaultState = {
  'morning-brief': {
    meta: {
      header: {
        date: {
          day: 'Lundi',
          dayNum: 30,
          month: 'octobre',
          year: 2017
        }
      },
      body: {
        header: {
          text: 'ACTUALITÉS DES MARCHÉS FINANCIERS',
        },
        title: {
          text: 'CRÉDIT DU MAROC',
          text2: 'Résultats consolidés à fin septembre 2017'
        }
      },
      table: {
        rows: [
          [
            "Indicateurs",
            "13/11/2018",
            "13/11/2018",
            "Variation"
          ],
          [
            "Produit Net Bancaire",
            "1562",
            "-0,4%",
            "+34%"
          ],
          [
            "Résultat Brut d’Exploitation",
            "563",
            "983",
            "452"
          ],
          [
            "Résultat d’Exploitation",
            "555",
            "674",
            "323"
          ],
          [
            "Marge Opérationnelle",
            "540",
            "876",
            "982"
          ],
          [
            "RNPG",
            "41",
            "55",
            "234"
          ],
          [
            "Marge Nette",
            "765",
            "642",
            "533"
          ]
        ]
      },
      body2: {
        header: {
          text: "ACTUALITÉS ECONOMIQUES",
        },
        title: {
          text: "RÉSERVES INTERNATIONALES",
          text2: "Recul de 8,6% au 20 octobre"
        },
        content: {
          text: "Selon Bank Al-Maghrib, les réserves internationales nettes du Maroc ont atteint 226,6 MMDh au 20 octobre 2017 affichant ainsi une baisse de 8,6% par rapport à la même période de l’année précédente"
        }
      }
    }
  }
};

const templates = (state = _defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.UPDATE_ACTIVE_TEMPLATE:
      const s = { 'morning-brief': { meta: action.newMeta } }
      const clone1 = _.cloneDeep(state);
      const new1 = _.merge(clone1, s);
      return new1;

    default:
      return state;
  }
}

export default templates;
