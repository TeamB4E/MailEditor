import _ from 'lodash';
import IMG from './img.png';

const basicMeta = {
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

const _transform = (meta = {}) => {
  const _meta = _.merge(basicMeta, meta);
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    <html lang="en">

    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">

      <title>Grids Master Template</title>

      <style type="text/css">
        /* Outlines the grids, remove when sending */

        table td {
          border: 0px solid cyan;
        }

        /* CLIENT-SPECIFIC STYLES */

        body,
        table,
        td,
        a {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }

        table,
        td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }

        img {
          -ms-interpolation-mode: bicubic;
        }

        /* RESET STYLES */

        img {
          border: 0;
          outline: none;
          text-decoration: none;
        }

        table {
          border-collapse: collapse !important;
        }

        body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
        }

        /* iOS BLUE LINKS */

        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }

        /* ANDROID CENTER FIX */

        div[style*="margin: 16px 0;"] {
          margin: 0 !important;
        }

        /* MEDIA QUERIES */

        @media all and (max-width:639px) {
          .wrapper {
            width: 320px!important;
            padding: 0 !important;
          }
          .container {
            width: 300px!important;
            padding: 0 !important;
          }
          .mobile {
            width: 300px!important;
            display: block!important;
            padding: 0 !important;
          }
          .img {
            width: 100% !important;
            height: auto !important;
          }
          *[class="mobileOff"] {
            width: 0px !important;
            display: none !important;
          }
          *[class*="mobileOn"] {
            display: block !important;
            max-height: none !important;
          }
        }

        @font-face {
          font-family: DINBold;
          src: url('www.beyond4edges.com/bullsandlions/fonts/DINBold.ttf');
        }

        @font-face {
          font-family: DINMedium;
          src: url('www.beyond4edges.com/bullsandlions/fonts/DINMedium.ttf');
        }

        @font-face {
          font-family: DIN;
          src: url('www.beyond4edges.com/bullsandlions/fonts/DINRegular.ttf');
        }

        @font-face {
          font-family: Myriad Pro;
          src: url('www.beyond4edges.com/bullsandlions/fonts/Myriad Pro Regular.ttf');
        }

        @font-face {
          font-family: MyriadPro-Bold;
          src: url('www.beyond4edges.com/bullsandlions/fonts/MyriadPro-Bold.otf');
        }
        @font-face {
          font-family: Verdana;
          src: url('www.beyond4edges.com/bullsandlions/fonts/Verdana.ttf');
        }
      </style>
    </head>

    <body style="margin:0; padding:0; background-color:#F2F2F2;">

      <span style="display: block; width: 640px !important; max-width: 640px; height: 1px" class="mobileOff"></span>

      <center>
        <table width="100%" cellpadding="0" border="0" bgcolor="#FFFFFF" cellspacing="0">
          <tbody>
            <tr>
              <td valign="top" align="center">

                <table class="wrapper" width="640" cellpadding="0" border="0" bgcolor="#FFFFFF" cellspacing="0">
                  <tbody>
                    <tr>
                      <td style="font-size:10px; line-height:10px;" height="10">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="top" align="center">

                        <table class="container" width="600" cellpadding="0" border="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td valign="top" align="center">
                                <img src="https://i.imgur.com/gFOpnIA.png" style="margin:0; padding:0; border:none; display:block;" alt="" border="0">
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:14px; line-height:10px; padding-right: 10px; font-family: 'Verdana'; color: #505777" height="10" align="right">&nbsp;
                        ${_meta.header.date.day} <span style="font-weight: bold;">${_meta.header.date.dayNum}</span> ${_meta.header.date.month} ${_meta.header.date.year}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table class="wrapper" width="640" cellpadding="0" border="0" bgcolor="#FFFFFF" cellspacing="0">
                  <tbody>
                    <tr>
                      <td style="font-size:10px; line-height:10px;" height="10">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="top" align="center">

                        <table class="container" width="600" cellpadding="0" border="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td class="mobile" style="padding: 10px;" width="30" valign="top" align="center">
                                <img src="https://i.imgur.com/4berLNS.png" style="margin:0; padding:0; border:none; display:block;" alt="" border="0" align="left">
                              </td>
                              <td class="mobile" style="color: #880e4a; font-size: 14px; font-family: 'DINBold'; height: 25px;" align="left">
                                ${_meta.body.header.text}
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:20px; line-height:20px;" height="20">&nbsp; </td>
                    </tr>
                  </tbody>
                </table>

                <table class="wrapper" width="640" cellpadding="0" border="0" bgcolor="#FFFFFF" cellspacing="0">
                  <tbody>
                    <tr>
                      <td style="font-size:10px; line-height:10px;" height="10">&nbsp;
                        <font style=" padding-left:72px ;color: #880e4a; font-size: 17px; font-family: 'DINBold';"> | ${_meta.body.title.text} | </font>
                        <font style="font-size: 17px; color: #505777; font-family: 'DINBold';"> ${_meta.body.title.text2}</font>
                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:10px; line-height:10px;" height="10">&nbsp; </td>
                    </tr>
                    <tr>
                      <td valign="top" align="center">

                        <table class="container" style="margin-left: 18px;" width="500" cellpadding="0" border="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td class="mobile" width="475" valign="top">
                                <table>
                                  <thead>
                                    <tr>
                                      <th style="color: #880e4a; font-family: 'MyriadPro-Bold'; font-size: 12px; line-height:20px;background-image:url(https://i.imgur.com/aJHZpQu.png);background-repeat:no-repeat;background-size:160px 20px; padding-left: 10px;" width="200" align="left">${_meta.table.rows[0][0]}</th>
                                      <th style="color: #880e4a; font-family: 'MyriadPro-Bold'; font-size: 12px; line-height:20px;background-image:url(https://i.imgur.com/68K7kZj.png);background-repeat:no-repeat;background-size:114px 20px; text-align: center;" width="200">${_meta.table.rows[0][1]}</th>
                                      <th style="color: #880e4a; font-family: 'MyriadPro-Bold'; font-size: 12px; line-height:20px;background-image:url(https://i.imgur.com/68K7kZj.png);background-repeat:no-repeat;background-size:114px 20px; text-align: center;" width="200">${_meta.table.rows[0][2]}</th>
                                      <th style="color: #880e4a; font-family: 'MyriadPro-Bold'; font-size: 12px; line-height:20px;background-image:url(https://i.imgur.com/jFNXJkn.png);background-repeat:no-repeat;background-size:120px 20px; text-align: center;" width="200">${_meta.table.rows[0][3]}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; padding-left: 10px;" width="300" align="left">${_meta.table.rows[1][0]}</th>
                                      <td style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[1][1]}</td>
                                      <td style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[1][2]}</td>
                                      <td style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[1][3]}</td>
                                    </tr>
                                    <tr>
                                      <th style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; padding-left: 10px;" width="300" align="left">${_meta.table.rows[2][0]}</th>
                                      <td style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[2][1]}</td>
                                      <td style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[2][2]}</td>
                                      <td style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[2][3]}</td>
                                    </tr>
                                    <tr>
                                      <th style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; padding-left: 10px;" width="300" align="left">${_meta.table.rows[3][0]}</th>
                                      <td style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[3][1]}</td>
                                      <td style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[3][2]}</td>
                                      <td style="color: #30b7c7; font-family: 'DINBold'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[3][3]}</td>
                                    </tr>
                                    <tr>
                                      <th style="color: #505777; font-family: 'DINMedium'; font-size: 10px; line-height:20px; padding-left: 10px;" width="300" align="left">${_meta.table.rows[4][0]}</th>
                                      <td style="color: #505777; font-family: 'DINMedium'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[4][1]}</td>
                                      <td style="color: #505777; font-family: 'DINMedium'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[4][2]}</td>
                                      <td style="color: #505777; font-family: 'DINMedium'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[4][3]}</td>
                                    </tr>
                                    <tr>
                                      <th style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; padding-left: 10px;" width="300" align="left">${_meta.table.rows[5][0]}</th>
                                      <td style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[5][1]}</td>
                                      <td style="color: #505777; font-family: 'DINBold'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[5][2]}</td>
                                      <td style="color: #30b7c7; font-family: 'DINBold'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[5][3]}</td>
                                    </tr>
                                    <tr>
                                      <th style="color: #505777; font-family: 'DIN'; font-size: 10px; line-height:20px; padding-left: 10px;" width="300" align="left">${_meta.table.rows[6][0]}</th>
                                      <td style="color: #505777; font-family: 'DIN'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[6][1]}</td>
                                      <td style="color: #505777; font-family: 'DIN'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[6][2]}</td>
                                      <td style="color: #505777; font-family: 'DIN'; font-size: 10px; line-height:20px; text-align: center;" width="200">${_meta.table.rows[6][3]}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:10px; line-height:10px;" height="10">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>

                <table class="wrapper" width="640" cellpadding="0" border="0" bgcolor="#FFFFFF" cellspacing="0">
                  <tbody>
                    <tr>
                      <td style="font-size:10px; line-height:10px;" height="10">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="top" align="center">

                        <table class="container" width="600" cellpadding="0" border="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td class="mobile" style="padding: 10px;" width="30" valign="top" align="center">
                                <img src="https://i.imgur.com/8LKwBm4.png" style="margin:0; padding:0; border:none; display:block;" alt="" border="0" align="left">
                              </td>
                              <td class="mobile" style="color: #880e4a; font-size: 14px; font-family: 'DINBold'; height: 25px;" align="left">
                                ${_meta.body2.header.text}
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:20px; line-height:20px;" height="20">&nbsp; </td>
                    </tr>
                  </tbody>
                </table>

                <table class="wrapper" width="640" cellpadding="0" border="0" bgcolor="#FFFFFF" cellspacing="0">
                  <tbody>
                    <tr>
                      <td style="font-size:10px; line-height:10px;" height="10">&nbsp;

                        <font style=" padding-left:72px ;color: #880e4a; font-size: 16px; font-family: 'DINBold';"> | ${_meta.body2.title.text} | </font>
                        <font style="font-size: 16px; color: #505777; font-family: 'DINBold';"> ${_meta.body2.title.text2}</font>
                      </td>
                    </tr>
                    <tr>
                      <td valign="top" align="center">

                        <table class="container" width="480" cellpadding="0" border="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td style="font-size:20px; line-height:20px;" height="20">&nbsp;</td>
                            </tr>
                            <tr>
                              <td class="mobile" width="48 0" valign="top" align="left">
                                <font style="font-size: 13px; color: #505777; font-family: 'DIN';">${_meta.body2.content.text}</font>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:10px; line-height:10px;" height="10">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>

                <table class="wrapper" width="640" cellpadding="0" border="0" bgcolor="#FFFFFF" cellspacing="0">
                  <tbody>
                    <tr>
                      <td style="font-size:10px; line-height:10px;" height="10">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="top" align="center">

                        <table class="container" width="600" cellpadding="0" border="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td class="mobile" width="160" valign="top" align="center">
                                <img src="https://i.imgur.com/F9Rtnoz.png" style="margin:0; padding:0; border:none; display:block;width: 100%;" alt="" border="0">
                              </td>
                              <td class="mobile" width="120" valign="top" align="center">
                              </td>
                              <td class="mobile" width="120" valign="top" align="center">
                              </td>
                              <td class="mobile" width="120" valign="top" align="center">
                              </td>
                              <td class="mobile" width="180" valign="top" align="center">
                                <a href="file:///Users/nabil.s.alaoui/B4E/Projects%20&amp;%20ideas/bulls&amp;lions/Customemail/html/Email-Framework-master/www.ati.com" style="font-family: 'MyriadPro-Bold'; color: #505777; float: right;">www.ati.com</a>
                                <a href="tel:+212%205%2029%2003%2068%2001" style="font-family: 'Myriad Pro'; font-size:12px; color: #505777; float: right;"> Tél: +212 5 29 03 68 01 </a>
                                <a href="tel:+212%205%2022%2020%2025%2015" style="font-family: 'Myriad Pro'; font-size:12px; color: #505777; float: right;"> Fax:+212 5 29 03 68 01 </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:10px; line-height:10px;" height="10">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>

              </td>
            </tr>
          </tbody>
        </table>
      </center>


    </body>

    </html>
  `;
};

const template = {
  title: 'morning-brief',
  family: 'info',
  meta: {
    ...basicMeta
  },
  img: IMG,
  render: (meta) => {
    try {
      return _transform(meta);
    } catch (e) {
      debugger
    }
  }
};

export default template;
