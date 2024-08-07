/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|css|js|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
