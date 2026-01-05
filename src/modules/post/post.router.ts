import express, { Router } from 'express';
import { PostController } from './post.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();

router.get(
    "/",
    PostController.getAllPost
)

router.get(
    "/my-posts",
    auth(UserRole.USER, UserRole.ADMIN),
    PostController.getMyPosts
)

router.get(
    "/:postId",
    PostController.getPostById
)

router.post(
    "/",
    auth(UserRole.USER, UserRole.ADMIN),
    PostController.createPost
)

router.patch(
    "/:postId",
    auth(UserRole.USER, UserRole.ADMIN),
    PostController.updatePost
)

export const postRouter: Router = router;