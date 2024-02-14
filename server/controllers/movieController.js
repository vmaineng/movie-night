const { default: mongoose } = require("mongoose");
const Movie = require("../models/Movie");

const getMovies = async (req, res, next) => {
  const movies = await Movie.find({}).sort({ createdAt: -1 });
  res.status(200).json(movies);
};

const getMovie = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }

  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(404).json({ error: "Not found" });
  }
  res.status(200).json(movie);
};

const createMovie = async (req, res, next) => {
  const { title, description } = req.body;
  try {
    const movie = await Movie.create({ title, description });
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a single movie
const deleteMovie = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }

  const movie = await Movie.findOneAndDelete({ _id: id });

  if (!movie) {
    return res.status(404).json({ error: "Not found!" });
  }

  res.status(200).json({ movie });
};

//update a single habit
const updateMovie = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not found!" });
  }
  // const habit = await Habit.findOneAndUpdate( - old sql method; trying new one
  const movie = await Movie.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!movie) {
    return res.status(404).json({ error: "Not found!" });
  }

  res.status(200).json({ movie });
};

module.exports = { createMovie, getMovies, getMovie, deleteMovie, updateMovie};