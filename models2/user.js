const bcrypt = require('bcrypt');


module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'user already exists'
      } 
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: {
        args: true,
      msg: 'user already exists'
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true,
    hooks: {
      beforeValidate: function (user) {
        if (user.changed('password')) {
          return bcrypt.hash(user.password, 10).then((password) => {
            user.password = password;
          });
        }
      }
    }
  });

  user.associate = function (models) {
    user.hasMany(models.emergencyContact, {
      onDelete: 'cascade'
    });
  };

  // This will check if an unhashed password can be compared to the hashed password stored in our database
  user.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Compares passwords
  user.prototype.comparePasswords = function (password, callback) {
    bcrypt.compare(password, this.password, (error, isMatch) => {
      if (error) {
        return callback(error);
      }
      return callback(null, isMatch);
    });
  };

  user.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  };

  return user;
};
