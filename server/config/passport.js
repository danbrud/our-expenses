const JwtStrategy = require("passport-jwt").Strategy
const extractJwt = require("passport-jwt").ExtractJwt
const mongoose = require("mongoose")
const { secretOrKey } = require("./config")

const Account = require('../models/Account')

const opts = {}
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = secretOrKey

const useStrategy = passport => {
    passport.use(
        new JwtStrategy(opts, (jwtPayload, done) => {
            Account.findById(jwtPayload._id)
                .then(account => {
                    if (account) {
                        return done(null, account)
                    }
                    return done(null, false)
                })
                .catch(err => console.log(err))
        })
    )
}

module.exports = useStrategy