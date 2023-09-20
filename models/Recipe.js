const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Recipe extends Model {

}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        allergens: {

        },
        yield: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        preptime: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cooktime: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totaltime: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        instructions: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        calories: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        fat: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        carbs: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        protein: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (recipe) => {
                const urlName = await recipe.name.split(' ').join('-').toLowerCase()
                recipe.urlName = urlName
                return recipe
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe'
    }
)

module.exports = Recipe;