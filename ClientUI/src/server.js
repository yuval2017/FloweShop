import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        flowers: Model,
        users: Model
    },

    seeds(server) {
        server.create("flower", { id: "1", name: "Modest Explorer", price: 60, description: "", imageUrl: 'flowerpot_1.jpeg', type: "flowerpot" })
        server.create("flower", { id: "2", name: "Beach Bum", price: 80, description: "", imageUrl: 'flowerpot_2.jpeg', type: "flowerpot"})
        server.create("flower", { id: "3", name: "Reliable Red", price: 100, description: "", imageUrl: 'flowerpot_3.jpeg', type: "flowerpot"})
        server.create("flower", { id: "4", name: "Dreamfinder", price: 65, description: "", imageUrl: 'flowerpot_4.jpeg', type: "flowerpot"})
        server.create("flower", { id: "5", name: "The Cruiser", price: 120, description: "", imageUrl: 'flowerpot_5.jpeg', type: "flowerpot"})
        server.create("flower", { id: "6", name: "Green Wonder", price: 70, description: "", imageUrl: 'flowerpot_6.png', type: "flowerpot"})
        server.create("flower", { id: "7", name: "Green Wonder", price: 70, description: "", imageUrl: 'orchid_1.png', type: "orchid"})
        server.create("flower", { id: "8", name: "Green Wonder", price: 70, description: "", imageUrl: 'orchid_2.png', type: "orchid"})
        server.create("flower", { id: "9", name: "Green Wonder", price: 70, description: "", imageUrl: 'orchid_3.png', type: "orchid"})
        server.create("user", { id: "123", email: "b@b.com", password: "p123", name: "Bob" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        this.timing = 1000

        this.get("/flowers", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.flowers.all()
        })

        this.get("/flowers/:id", (schema, request) => {
            return new Response(400, {}, {error: "Error fetching data"})
            const id = request.params.id
            return schema.flowers.find(id)
        })

        this.get("/host/flowers", (schema, request) => {
            
            // Hard-code the hostId for now
            return schema.flowers.where({ hostId: "123" })
        })

        this.get("/host/flowers/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.flowers.findBy({ id, hostId: "123" })
        })

        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            // This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😇
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            // At the very least, don't send the password back to the client 😅
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})