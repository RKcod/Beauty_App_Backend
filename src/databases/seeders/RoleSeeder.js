const slugify = require('slugify');

exports.seed = async function (knex) {
  // Nettoyer la table roles avant de réinsérer des données
  await knex('roles').del();


  const roles = [
    {
      name: 'Visitor',
      description: 'Basic user with limited access.',
    },
    {
      name: 'Owner',
      description: 'User who owns a shop and manages it.',
    },
    {
      name: 'Staff',
      description: 'User who works for a shop.',
    },
    {
      name: 'Admin',
      description: 'Administrator with full access to the system.',
    },
  ];

  // Ajouter un slug à chaque rôle
  const rolesWithSlug = roles.map((role) => ({
    ...role,
    slug: slugify(role.name, { lower: true, strict: true }),
    created_at: new Date(),
    updated_at: new Date(),
  }));

  await knex('roles').insert(rolesWithSlug);
};
