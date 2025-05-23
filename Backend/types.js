const zod = require("zod");

const createschema = zod.object({
    title: zod.string(),
    description : zod.string()
})
const updateSchema = zod.object({
    id : zod.string()
})

module.exports = {
    createschema:createschema,
    updateSchema:updateSchema
}