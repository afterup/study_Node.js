module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING(20), //VARCHAR
            allowNull: false, //NOT NULL
            unique: true,
        },
        age: {
            type: DataTypes.INTEGER.UNSIGNED, //INT UNSIGNED
            allowNull: false,
        },
        married: {
            type: DataTypes.BOOLEAN, //TYNYINT
            allowNull:false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true, // NULL
        },
        created_at:{
            type:DataTypes.DATE, //DATETIME
            allowNull: false,
            defaultValue: DataTypes.NOW, //now()
        },
    }, {
        timestamps: false //true면 createdAt과 updatedAt 컬럼을 추가
    }); //(테이블명, 테이블컬럼, 테이블옵션)
};