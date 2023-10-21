const pool = require("./query");

const upload = async (req, res) => {
  pool.query(`INSERT INTO files (file_name, upload_on) VALUES ($1, NOW())`, [
    req.file.path,
  ]),
    (error, results) => {
      console.log(req.file);
      if (error) {
        throw error;
      }
      res.redirect("/succes");
    };
};

module.exports = upload;
