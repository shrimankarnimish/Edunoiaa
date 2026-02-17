export const ALL_THINKING5 = `
  query AllPosts {
    posts(
      first: 3
      where: {
        categoryName: "Thinking"
        orderby: { field: DATE, order: DESC }
      }
    ) {
      nodes {
        id
        title
        excerpt
        date
        slug
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

export const RELATED_EDUNOIA = `
  query AllPosts {
    posts(
      first: 3
      where: {
        categoryName: "Edunoia"
        orderby: { field: DATE, order: DESC }
      }
    ) {
      nodes {
        id
        title
        excerpt
        date
        slug
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;
