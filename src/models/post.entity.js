const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const PostSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        trim: true,
    },
    content: { 
        type: String, 
        required: true 
    },
    author: { 
        type: ObjectId, 
        ref: 'User', 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['draft', 'published'], 
        default: 'draft' 
    },
    seo: {
        metaTitle: String,
        metaDescription: String,
        featuredImageUrl: String,
        featuredImageAlt: String,
        ogTitle: String,
        ogDescription: String,
        ogImageUrl: String,
    },

}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
