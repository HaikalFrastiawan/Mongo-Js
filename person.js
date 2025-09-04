const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

// 1. Koneksi ke MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/middlewareDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ Error connecting MongoDB:", err))

// 2. Buat schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

// 3. Middleware: sebelum simpan (pre save)
userSchema.pre("save", async function(next) {
  console.log("🔹 Middleware: sebelum data disimpan...")

  // kalau password baru / diubah → enkripsi
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10)
  }

  next()
})

// 4. Middleware: setelah simpan (post save)
userSchema.post("save", function(doc, next) {
  console.log("🔹 Middleware: setelah data disimpan:", doc)
  next()
})

// 5. Buat model
const User = mongoose.model("User", userSchema)

// 6. Insert data untuk uji coba
async function run() {
  // hapus semua user lama dulu biar bersih
  await User.deleteMany({})

  const newUser = new User({
    name: "Haikal Frastiawan",
    email: "haikalfrastiawan@gmail.com",
    password: "12345"
  })

  await newUser.save()
  console.log("👉 Data tersimpan ke database")
  console.log("👉 Password terenkripsi:", newUser.password)
}

run()
