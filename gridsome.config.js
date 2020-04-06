// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    use: 'gridsome-source-storyblok',
    options: {
      client: {
        accessToken: process.env.STORYBLOOK_API_KEY
      },
      version: 'published',
      typeName: 'StoryblokEntry',
      downloadImages: true, // Optional. default false,
      imageDirectory: 'storyblok_images',
      additionalTypes: [{
        type: 'datasources',
        name: 'StoryblokDatasource'
      }, {
        type: 'tags',
        name: 'StoryblokTag'
      }]
    }
  }]
}