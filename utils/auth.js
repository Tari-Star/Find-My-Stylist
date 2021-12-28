const withAuth = (req, res, next) => {
  if (!req.session.stylist_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;