const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');


module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
      return {
        env: {
            mongodb_username: "Lika",
            mongodb_pass: "IjgLt66bNZKsn0Z3",
            mongodb_db: "my-blog-dev"
        }
      }
    }
   
    return {
        env: {
            mongodb_username: "Lika",
            mongodb_pass: "IjgLt66bNZKsn0Z3",
            mongodb_db: "my-blog"
        }
    }
}