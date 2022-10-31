const express = require("express");
const { type } = require("os");
const app = express();
const path = require("path");
const { albums } = require("./data");
const { logger, auth } = require("./middlewares/logger");

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

(req) => (middlewares) => res;

app.get("/about", logger, (req, res) => {
  console.log(__dirname);
  res.send("Welcome About");
});

app.get("/api/getAlbums", logger, (req, res) => {
  const newAlbums = albums.slice(0, 10).map((album) => {
    return { title: album.title, id: album.id };
  });
  res.send(newAlbums);
});

app.get("/api/getUserAlbum", logger, auth, (req, res) => {
  const userAlbums = albums?.filter(
    (item) => item.userId === parseInt(req.query.userId)
  );
  if (userAlbums.length === 0) {
    return res.send("No User albums found");
  }
  res.send(userAlbums);
});

app.get("/api/getAlbum/:albumId", logger, auth, (req, res) => {
  const { albumId } = req.params;
  console.log(typeof albumId);
  const albumData = albums.find((item) => item.id === parseInt(albumId));
  console.log(albumData);
  if (!albumData) {
    return res.send(`No Album found by id ${albumId}`);
  }
  return res.send(albumData);
});

app.all("*", (req, res) => {
  res.send("Resource not found");
});

app.listen("4000", () => {
  console.log("Server running at port 4000");
});
