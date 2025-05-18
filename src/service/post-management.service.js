const Post = require('../models/post.entity');

class PostManagementService {
    constructor() {
        this.postModel = Post;
    }

    async create(payload) {
        const { body, author } = payload;
        const { title, content, status, seo } = body;

        const post = await this.postModel.create({
            title,
            content,
            status,
            author: author,
            seo: seo || null,
        });

        if (!post) {
            console.log('createPost:: post creation failed');
            throw new Error('Post creation failed');
        }

        console.log('createPost:: post created successfully:', post);
        return post;
    }

    async getPost(payload) {
        const { id, author } = payload;
        const post = await this.postModel.findOne({ _id: id, author: author }).populate({ path: 'author', model: 'User', select: 'username' });

        if (!post) {
            console.log('getPost:: post not found or you are not authorized to view this post');
            throw new Error('Post not found or you are not authorized to view this post');
        }

        console.log('getPost:: post retrieved successfully:', post);
        return post;
    }

    async getAllPosts(payload) {
        const { author } = payload;
        const posts = await this.postModel.find({ author: author }).populate({ path: 'author', model: 'User', select: 'username' });

        console.log('getAllPosts:: posts fetched successfully:', posts.length);
        return posts;
    }

    async updatePost(payload) {
        const { id, body, author } = payload;
        const { title, content, status, seo } = body;
        const updatedPost = await this.postModel.findOneAndUpdate(
            { $and: [{ _id: id }, { author: author }] },
            {
                $set:
                {
                    title: title,
                    content: content,
                    status: status,
                    author: author,
                    seo: seo || null
                }
            },
            { new: true }
        );

        if (!updatedPost) {
            console.log('updatePost:: post not found or you are not authorized to update this post');
            throw new Error('Post not found or you are not authorized to update this post');
        }

        return updatedPost;
    }

    async deletePost(payload) {
        const { id, author } = payload;
        const post = await this.postModel.deleteOne({ $and: [{ _id: id }, { author: author }] });

        if (post.deletedCount === 0) {
            console.log('deletePost:: post not found or you are not authorized to delete this post');
            throw new Error('Post not found or you are not authorized to delete this post');
        }

        console.log('deletePost:: post deleted successfully:', post);
        return post.deletedCount;
    }
}

module.exports = { PostManagementService };