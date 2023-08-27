module.exports = {
  ci: {
    collect: {
      // url: ["http://localhost:3000/"],
      // startServerCommand: "yarn start",
      staticDistDir: "./out",
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "uses-long-cache-ttl": "off",
        "uses-http2": "off",
      },
    },
  },
};
