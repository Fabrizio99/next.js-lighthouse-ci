module.exports = {
  ci: {
    collect: {
      // url: ["http://localhost:3000/"],
      // startServerCommand: "yarn start",
      staticDistDir: "./out",
      url: ["http://localhost"],
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "bf-cache": "off",
        "csp-xss": "off",
        "unused-javascript": "off",
        "first-contentful-paint": [
          "warn",
          {
            maxNumericValue: 2500,
            aggregationMethod: "optimistic",
          },
        ],
        interactive: [
          "warn",
          {
            maxNumericValue: 5000,
            aggregationMethod: "optimistic",
          },
        ],
        "uses-long-cache-ttl": "off",
        "uses-http2": "off",
      },
    },
  },
};
