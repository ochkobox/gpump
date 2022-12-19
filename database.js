const mongoose = requiere("mongoose");
const Schema = mongoose.Schema;

const DatabaseSchema = new Schema({
    product_id: String,
    product_name: String,
    category: String,
    brand: String,
    grafic_series: String,
    type_of_grafic: String,
    memory_size: String,
    type_of_memory: String,
    product_description: String,
    price: String
});

const Database = mongoose.model("database", DatabaseSchema);

module.exports = Database;