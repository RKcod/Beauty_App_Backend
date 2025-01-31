const slugify = require("slugify");
const Role = require("../../modules/user/infrastructure/models/RoleModel");
exports.seed = async function (knex) {
  // Nettoyer la table roles avant de réinsérer des données
  await knex("roles").del();

  const roles = [
    {
      name: "Owner",
      description: "User who owns a shop and manages it.",
      permissions: ["shops", "users", "staff"],
    },
    {
      name: "Admin",
      description: "Administrator with full access to the system.",
      permissions: ["shops", "admin", "users", "staff"],
    },
    {
      name: "Visitor",
      description: "Regular user visiting the platform.",
      permissions: [],
    },
  ];

  // Insérer les rôles
  const insertedRoles = await knex("roles")
    .insert(
      roles.map((role) => ({
        name: role.name,
        description: role.description,
        slug: slugify(role.name, { lower: true, strict: true }),
        created_at: new Date(),
        updated_at: new Date(),
      }))
    )
    .returning("*");

    const permissions = await knex("permissions").select("*");

    // Associer les rôles aux permissions en fonction des catégories
    for (const role of insertedRoles) {
      const roleConfig = roles.find((r) => r.name === role.name);
      if (!roleConfig) continue;
  
      // Filtrer les permissions appartenant aux catégories du rôle
      const permissionsForRole = permissions
        .filter((perm) => roleConfig.permissions.includes(perm.category))
        .map((perm) => perm.id);
  
      if (permissionsForRole.length > 0) {
        await Role.attachPermissions(role.id, permissionsForRole);
      }
    }
};
