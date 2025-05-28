export default function handler(req, res) {
  // Set the correct content type for Apple App Site Association
  res.setHeader('Content-Type', 'application/json');
  
  // Return the Apple App Site Association JSON content
  res.status(200).json({
    applinks: {
      apps: [],
      defaults: {
        caseSensitive: false
      },
      details: [
        {
          appID: "2PH89S8YQM.com.pushpushgo.iOS-example-integration",
          paths: [
            "/live/*/*",
            "/pakiety/*",
            "/program-tv/*/*",
            "/kanaly-tv/*/*",
            "/kolekcje/*"
          ]
        }
      ]
    }
  });
}
