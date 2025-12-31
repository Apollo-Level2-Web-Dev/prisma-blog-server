import express, { Router } from 'express';
import { PostController } from './post.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();

router.get(
    "/",
    PostController.getAllPost
)

router.post(
    "/",
    auth(UserRole.USER),
    PostController.createPost
)

export const postRouter: Router = router;