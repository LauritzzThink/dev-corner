module.exports = function (api) {
  api.loadSource(({
    addCollection
  }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({
    graphql,
    createPage
  }) => {
    // load data from Storyblok API
    const {
      data
    } = await graphql(`{
      allStoryblokEntry(filter: { full_slug: { regex: "site" } }) {
        edges {
          node {
            id
            full_slug
          }
        }
      }
    }`)

    // for each content found create a page
    data.allStoryblokEntry.edges.forEach(({
      node
    }) => {

      createPage({
        path: `/${node.full_slug.replace("site/", "")}`,
        component: './src/templates/StoryblokEntry.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}