const slugify = require("slugify");

exports.seed = async function (knex) {
  // Nettoyer les tables
  await knex("role_permissions").del();
  await knex("permissions").del();


  const permissions = [
    { slug: "create_shop", name: "Create a shop", category: "shops" },
    { slug: "view_shop", name: "View a shop", category: "shops" },
    { slug: "update_shop", name: "Update a shop", category: "shops" },
    { slug: "delete_shop", name: "Delete a shop", category: "shops" },
    { slug: "add_staff", name: "Add staff to a shop", category: "staff" },
    { slug: "view_staff", name: "View staff in a shop", category: "staff" },
    { slug: "update_staff", name: "Update staff information", category: "staff" },
    { slug: "remove_staff", name: "Remove staff from a shop", category: "staff" },
    { slug: "view_users", name: "View users", category: "users" },
    { slug: "manage_roles", name: "Manage roles and permissions", category: "users" },
    { slug: "access_admin_panel", name: "Access admin panel", category: "admin" },
    { slug: "view_analytics", name: "View analytics", category: "admin" },
  ];

  await knex("permissions").insert(
    permissions.map((permission) => ({
      ...permission,
      slug: slugify(permission.slug, { lower: true, strict: true }),
      created_at: new Date(),
      updated_at: new Date(),
    }))
  );

}