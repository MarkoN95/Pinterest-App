const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;

const User = require("../../models/user");

const setupAuthentication = function() {
  passport.use(new LocalStrategy(User.authenticate()));
  passport.use(
    new GithubStrategy({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      passReqToCallback: true
    },
    User.oauth("github", { allowAccountLinking: true }))
  );
  passport.use(
    new TwitterStrategy({
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      passReqToCallback: true
    },
    User.oauth("twitter", { allowAccountLinking: true }))
  );
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
};

module.exports = setupAuthentication;
