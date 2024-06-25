import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './index';

export const User = sequelize.define('user', {
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'Email cannot be empty',
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    unique: false,
    validate: {
      notEmpty: {
        msg: 'Password cannot be empty',
      },
      len: {
        args: [6, 50],
        msg: 'Password must be between 3 and 50 characters',
      },
    },
  },
});

// interface UserAttributes {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   password: string;
//   createdAt?: Date;
//   updatedAt?: Date;
// }

// interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// class User
//   extends Model<UserAttributes, UserCreationAttributes>
//   implements UserAttributes
// {
//   public id!: number;
//   public name!: string;
//   public username!: string;
//   public email!: string;
//   public password!: string;
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: new DataTypes.STRING(128),
//       allowNull: true,
//       validate: {
//         notEmpty: {
//           msg: 'Name cannot be empty',
//         },
//       },
//     },
//     username: {
//       type: new DataTypes.STRING(128),
//       allowNull: false,
//       unique: true,
//       validate: {
//         notEmpty: {
//           msg: 'Username cannot be empty',
//         },
//       },
//     },
//     email: {
//       type: new DataTypes.STRING(128),
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: {
//           msg: 'Must be a valid email address',
//         },
//       },
//     },
//     password: {
//       type: new DataTypes.STRING(128),
//       allowNull: false,
//       validate: {
//         notEmpty: {
//           msg: 'Name cannot be empty',
//         },
//         len: {
//           args: [6, 50],
//           msg: 'Password must be between 3 and 50 characters',
//         },
//       },
//     },
//   },
//   {
//     sequelize,
//     tableName: 'users',
//   }
// );

// export default User;
