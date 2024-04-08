export const getUsers = async (req, res) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    res.send(`<h1 class="text-2xl font-bold my-4">Users</h1>
        <ul>
            ${users.map((user) => `<li>${user.name}</li>`).join("")}
        </ul>
    `);
};
