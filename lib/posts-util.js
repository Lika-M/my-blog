import fs from 'fs';
import path from 'path';
import * as matter from 'gray-matter';


const postsDirectoryPath = path.join(process.cwd(), 'store', 'posts')

function getPostData(file) {
    const filePath = path.join(postsDirectoryPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // split .md  to metadata and content 
    const { data, content } = matter(fileContent);

    const fileName = file.replace(/\.md$/, '');
    const postData = {
        slug: fileName,
        ...data,
        content
    };

    return postData;
}

export function getAllPosts() {
    const postFiles = fs.readdirSync(postsDirectoryPath);
    const postFilesContentArray = postFiles.map(file => getPostData(file));
    const allPosts = postFilesContentArray.sort((a, b) => b.date - a.date);
    return allPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const filteredPosts = allPosts.filter(post => post.isFeatured);
    return filteredPosts;
}