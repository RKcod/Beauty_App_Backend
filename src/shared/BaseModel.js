const { Model } = require("objection");

class BaseModel extends Model {
  /**
   * Définir une relation HasMany (1:N)
   * @param {Class} relatedModel - Le modèle lié
   * @param {string} from - Clé étrangère du modèle actuel
   * @param {string} to - Clé primaire du modèle lié
   * @returns {Object} - Relation Objection.js
   */
  static hasMany(relatedModel, from, to) {
    return {
      relation: Model.HasManyRelation,
      modelClass: relatedModel,
      join: { from, to },
    };
  }

  /**
   * Définir une relation BelongsTo (N:1)
   * @param {Class} relatedModel - Le modèle lié
   * @param {string} from - Clé étrangère du modèle actuel
   * @param {string} to - Clé primaire du modèle lié
   * @returns {Object} - Relation Objection.js
   */
  static belongsTo(relatedModel, from, to) {
    return {
      relation: Model.BelongsToOneRelation,
      modelClass: relatedModel,
      join: { from, to },
    };
  }

  /**
   * Définir une relation ManyToMany (N:N)
   * @param {Class} relatedModel - Le modèle lié
   * @param {string} from - Clé primaire du modèle actuel
   * @param {string} to - Clé primaire du modèle lié
   * @param {string} throughFrom - Clé étrangère dans la table pivot
   * @param {string} throughTo - Clé étrangère de l'autre table dans la table pivot
   * @param {Class} pivotTable - Nom de la table pivot
   * @returns {Object} - Relation Objection.js
   */
  static belongsToMany(relatedModel, from, to, throughFrom, throughTo, pivotTable) {
    return {
      relation: Model.ManyToManyRelation,
      modelClass: relatedModel,
      join: {
        from,
        through: {
          from: throughFrom,
          to: throughTo,
          modelClass: pivotTable,
        },
        to,
      },
    };
  }

  /**
   * Définir une relation HasOne (1:1)
   * @param {Class} relatedModel - Le modèle lié
   * @param {string} from - Clé primaire du modèle actuel
   * @param {string} to - Clé étrangère du modèle lié
   * @returns {Object} - Relation Objection.js
   */
  static hasOne(relatedModel, from, to) {
    return {
      relation: Model.HasOneRelation,
      modelClass: relatedModel,
      join: { from, to },
    };
  }

  /**
   * Définir une relation HasOneThrough (1:1 via une table pivot)
   * @param {Class} relatedModel - Le modèle lié
   * @param {string} from - Clé primaire du modèle actuel
   * @param {string} to - Clé primaire du modèle lié
   * @param {string} throughFrom - Clé étrangère dans la table pivot
   * @param {string} throughTo - Clé étrangère de l'autre table dans la table pivot
   * @param {Class} pivotTable - Nom de la table pivot
   * @returns {Object} - Relation Objection.js
   */
  static hasOneThrough(relatedModel, from, to, throughFrom, throughTo, pivotTable) {
    return {
      relation: Model.HasOneThroughRelation,
      modelClass: relatedModel,
      join: {
        from,
        through: {
          from: throughFrom,
          to: throughTo,
          modelClass: pivotTable,
        },
        to,
      },
    };
  }
}

module.exports = BaseModel;
