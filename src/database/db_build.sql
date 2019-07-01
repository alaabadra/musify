BEGIN;
DROP TABLE IF EXISTS users , songs, favorite ;
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULl,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    token text NOT NULL
);
CREATE TABLE songs(
    song_id SERIAL PRIMARY KEY ,
    songName VARCHAR(255),
    singerName VARCHAR(255)

);
CREATE TABLE favorite(
    fav_id SERIAL PRIMARY KEY,
    song_id INTEGER REFERENCES songs(song_id),
    user_id INTEGER REFERENCES users(user_id)
);
COMMIT;