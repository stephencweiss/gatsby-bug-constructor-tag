exports.createPages = ({graphql, actions}) => {
    return graphql(`
        query allTags {
            allMarkdownRemark{
                group(field: frontmatter___tags){
                    fieldValue
                }
            }
        }
    `)
}