'use strict';

// had enabled by egg
// exports.static = true;
// module.exports = {
// const plu = exports = {};
// exports.nunjucks = {
//     enable: true,
//     package: 'egg-view-nunjucks'
// };
module.exports = {
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  // redis: {
  //   enable: true,
  //   package: 'egg-redis',
  // },
  // sessionRedis: {
  //   enable: true,
  //   package: 'egg-session-redis',
  // },
  cors: {
    enable: true,
    package: 'egg-cors',
  },


};

// }
// module.exports = { plu }
