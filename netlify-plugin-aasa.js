// Netlify plugin to copy Apple App Site Association file to the correct location
module.exports = {
  onPostBuild: async ({ utils }) => {
    console.log('Copying Apple App Site Association file...');
    
    // Create .well-known directory if it doesn't exist
    await utils.run.command('mkdir -p .next/.well-known');
    
    // Copy the AASA file with no extension (required by Apple)
    await utils.run.command('cp public/.well-known/apple-app-site-association .next/.well-known/');
    
    // Also create a version with .json extension for our redirect rule
    await utils.run.command('cp public/.well-known/apple-app-site-association .next/.well-known/apple-app-site-association.json');
    
    console.log('Successfully copied Apple App Site Association files!');
  }
}
