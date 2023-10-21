const renderHomePage = (req, res) => {
  res.render("home");
};

const renderSuccesPage = (req, res) => {
  res.render("succes");
};

module.exports = {
  renderHomePage,
  renderSuccesPage,
};
