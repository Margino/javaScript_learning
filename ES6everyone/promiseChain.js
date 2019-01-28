const posts = [
  { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
  { title: 'CSS!', author: 'Chris Coyier', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
  { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
  { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
  { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

function getPostById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find(post => {
                return post.id === id
            });

            if (post) {
                resolve(post);
            } else {
                reject(Error('No post was found'));
            }
        }, 1000);
    });
}

function hydrateAuthor(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const authorDetales = authors.find(author => {
                return author.name === post.author
            });
            
            if (authorDetales) {
                post.author = authorDetales
                resolve(post);
            } else {
                reject(Error('No author was found'));
            }
        }, 1000);
    });
}


getPostById(3)
    .then(post => {
        console.log(post);
        return hydrateAuthor(post);
    })
    .then(author => {
        console.log(author);
    })
    .catch(err => {
        console.log(err);
    });
