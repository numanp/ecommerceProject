var db = require('./db');
const Sequelize = require('sequelize');
var crypto = require('crypto');

const User = db.define('user', {
    nombre: {
        type: Sequelize.STRING,
    },
    apellido: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            isUnique: function (value, next) {
                User.find({
                    where: { email: value },
                })
                    .then(function (user, error) {
                        if (error) return next('ESO NO SE PUEDE HACER');
                        if (user) return next('El mail ya existe');
                        next();
                    })
                    .catch(error => console.log(error));
            },
        },
    },
    carrito: {
        type: Sequelize.ARRAY(Sequelize.TEXT),

    },
    admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    password: {
        type: Sequelize.STRING,
        validate: {
            /* allowNull: false, */
        }
    },
    salt: {
        type: Sequelize.STRING,
    },
    telefono: {
        type: Sequelize.INTEGER,
    }
});


User.pSalt = function () {
    return crypto.randomBytes(20).toString('hex');
}

User.prototype.passHash = function (password, salt) {
    var pass = crypto.createHmac('sha1', salt).update(password).digest('hex')
    return pass
}

User.hook('beforeCreate', (user, options) => {
    user.salt = User.pSalt();
    user.password = user.passHash(user.password, user.salt)
});

User.prototype.checkPassword = function (password) {
    var pass = crypto.createHmac('sha1', this.salt).update(password).digest('hex')
    if (pass == this.password) return true
    return false
}

module.exports = User;
