export const getUsers = (req, res) => {
    const users = [
        {id:1, name: "John Doe"},
        {id:2, name: "Bob Williams"},
        {id:3, name: "Hillary Clinton"},
        {id:4, name: "Philip Stones"}
    ];
    res.send(`<h1 class="text-2xl font-bold my-4">Users</h1>
        <ul>
            ${users.map((user) => `<li>${user.name}</li>`).join("")}
        </ul>
    `);
};
