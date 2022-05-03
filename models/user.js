const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserModel extends Model {}

UserModel.init(
    {
     
      id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },


      user_name: {
          type: DataTypes.INTEGER,
          references: {
          model: 'user',
          key: 'id'
        }
      },
      

      email: {
          type: DataTypes.INTEGER,
          references: {
          model: 'email',
          key: 'id'
        }
      },

      password: {
          type: DataTypes.INTEGER,
          references: {
          model: 'password',
          key: 'id'
        }
      } ,

        first_name: {
              type: DataTypes.INTEGER,
              references: {
              model: 'first_name',
              key: 'id'
            }
          },


          last_name: {
              type: DataTypes.INTEGER,
              references: {
              model: 'last_name',
              key: 'id'
            }
          },

          phonne_number: {
              type: DataTypes.INTEGER,
              references: {
              model: 'phone_number',
              key: 'id'
            }
          },
          
          pic_url: {
              type: DataTypes.INTEGER,
              references: {
              model: 'pic_url',
              key: 'id'
            }
          },

      },
  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_model',
  }

);

module.exports = UserModel;