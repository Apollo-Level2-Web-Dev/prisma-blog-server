import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createPost = async (data: Omit<Post, 'id' | 'createdAt' | 'updatedAt' | 'authorId'>, userId: string) => {
    const result = await prisma.post.create({
        data: {
            ...data,
            authorId: userId
        }
    })
    return result;
}

const getAllPost = async (payload: { search: string | undefined }) => {
    const allPost = await prisma.post.findMany({
        where: {
            title: {
                contains: payload.search as string,
                mode: "insensitive"
            }
        }
    });
    return allPost;
}

export const postService = {
    createPost,
    getAllPost
}