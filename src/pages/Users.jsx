import UserRoles from "./UserRoles";

export default function Users() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <p>Welcome to the Users page.</p>
      <UserRoles />
    </div>
  );
}

// const { data: userRoles, isLoading } = useGet({
//   endpoint: `${baseUrl}/userRole`,
//   queryKey: ["userRoles"],
//   transformData: (data) =>
//     createListCollection({
//       items: data.map((role) => ({
//         label: role.roleName,
//         value: role.id.toString(),
//       })),
//     }),
// });
