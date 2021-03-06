module.exports = {
    siteMetadata: {
        title: `Jeffrey Fu`,
        description: `Jeffrey Fu's Personal Website`,
        author: `@jeffreyfu`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Jeffrey Fu's Personal Website`,
                short_name: `Portfolio`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/favicon-32x32.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: `${__dirname}/src/assets/icons`
                }
            }
        },
        {
            resolve: `gatsby-alias-imports`,
            options: {
                aliases: {
                    fonts: `src/assets/fonts`,
                    icons: `src/assets/icons`,
                    images: `src/assets/images`,
                    videos: `src/assets/videos`
                }
            }
        }
    ]
};
