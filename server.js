const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using MongoDB Atlas connection string
const dbURI = "mongodb+srv://db_user:1234@cluster0.uilrrga.mongodb.net/notes";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define Note model
const Note = mongoose.model("Note", {
    title: String,
    content: String,
});

// Handle MongoDB connection success
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB Atlas");
});

// Handle MongoDB connection errors
mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

// Routes
app.get("/", (req, res) => {
    res.send("Hello, this is the root!");
});

app.get("/api/notes", async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Error fetching notes" });
    }
});

// Update Note by ID
app.put("/api/notes/:id", async (req, res) => {
    const { title, content } = req.body;
    const noteId = req.params.id;

    try {
        const updatedNote = await Note.findByIdAndUpdate(
            noteId,
            { title, content },
            { new: true }
        );
        res.json(updatedNote);
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ message: "Error updating note" });
    }
});

// Delete Note by ID
app.delete("/api/notes/:id", async (req, res) => {
    const noteId = req.params.id;

    try {
        await Note.findByIdAndDelete(noteId);
        res.json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ message: "Error deleting note" });
    }
});

app.post("/api/notes", async (req, res) => {
    const { title, content } = req.body;

    const note = new Note({ title, content });

    try {
        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ message: "Error creating note" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

