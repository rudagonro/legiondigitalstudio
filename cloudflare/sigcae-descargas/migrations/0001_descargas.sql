CREATE TABLE releases (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 platform TEXT NOT NULL CHECK(platform IN ('servidor','cliente','android')),
 version TEXT NOT NULL, filename TEXT NOT NULL, object_key TEXT NOT NULL UNIQUE,
 size INTEGER NOT NULL CHECK(size>0), sha256 TEXT NOT NULL, notes TEXT NOT NULL,
 created_at INTEGER NOT NULL, available INTEGER NOT NULL DEFAULT 1, purged INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX releases_platform ON releases(platform,available,id DESC);
CREATE TABLE shares (
 id TEXT PRIMARY KEY, token_hash TEXT NOT NULL UNIQUE, release_id INTEGER NOT NULL REFERENCES releases(id),
 expires_at INTEGER NOT NULL, max_uses INTEGER NOT NULL CHECK(max_uses BETWEEN 1 AND 20),
 uses INTEGER NOT NULL DEFAULT 0, revoked INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL
);
CREATE TABLE downloads (
 id INTEGER PRIMARY KEY AUTOINCREMENT, release_id INTEGER NOT NULL REFERENCES releases(id),
 share_id TEXT, actor TEXT NOT NULL, created_at INTEGER NOT NULL
);
