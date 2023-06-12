import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        flowers: Model,
        users: Model
    },

    seeds(server) {
        server.create("flower", { key: "1", name: "Modest Explorer", price: 60, description: "des", imageUrl: 'Bouquet_1.jpeg', category: "blossom", type: "bouquet"})
        server.create("flower", { key: "2", name: "Beach Bum", price: 80, description: "des", imageUrl: 'Bouquet_2.jpeg', ategory: "blossom", type: "bouquet"})
        server.create("flower", { key: "3", name: "Reliable Red", price: 100, description: "des", imageUrl: 'Bouquet_3.jpeg', category: "blossom", type: "bouquet"})
        server.create("flower", { key: "4", name: "Dreamfinder", price: 65, description: "des", imageUrl: 'Bouquet_4.jpeg', category: "blossom", type: "bouquet"})
        server.create("flower", { key: "5", name: "The Cruiser", price: 120, description: "des", imageUrl: 'Bouquet_5.jpeg', category: "blossom", type: "bouquet"})
        server.create("flower", { key: "6", name: "Green Wonder", price: 70, description: "des", imageUrl: 'Bouquet_6.png', category: "blossom", type: "bouquet"})
        server.create("flower", { key: "7", name: "Green Wonder", price: 70, description: "des", imageUrl: 'Flowerpot_1.png', category: "flowerpot", type: "orchid"})
        server.create("flower", { key: "8", name: "Green Wonder", price: 70, description: "des", imageUrl: 'Flowerpot_2.png', category: "flowerpot", type: "orchid"})
        server.create("flower", { key: "9", name: "Green Wonder", price: 70, description: "des", imageUrl: 'Flowerpot_3.png', category: "flowerpot", type: "orchid"})
        server.create("flower", { key: "11", name: "Green Wonder", price: 70, description: "des", imageUrl: 'Flowerpot_4.png', category: "flowerpot", type: "1"})
        server.create("flower", { key: "12", name: "Green Wonder", price: 70, description: "des", imageUrl: 'Flowerpot_5.png', category: "flowerpot", type: "1"})
        server.create("flower", { key: "13", name: "Green Wonder", price: 70, description: "des", imageUrl: 'Flowerpot_6.png', category: "flowerpot", type: "1"})
        server.create("flower", { key: "14", name: "Green Wonder", price: 70, description: "des", imageUrl: 'Flowerpot_7.png', category: "flowerpot", type: "1"})
        // server.create("flower", { id: "15", name: "Green Wonder", price: 70, description: "", imageUrl: 'Flowerpot_6.png', type: {category: "flowerpot", type: "1"}})
        // server.create("flower", { id: "16", name: "Green Wonder", price: 70, description: "", imageUrl: 'Flowerpot_6.png', type: {category: "flowerpot", type: "1"}})

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
            //return new Response(400, {}, {error: "Error fetching data"})
            const id = request.params.id
            return schema.flowers.find(id)
        })
        this.get("/FlowerpotAndBouquet", (schema, request) => {
            return schema.flowers.where((flower) => flower.category === "flowerpot");
        });
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