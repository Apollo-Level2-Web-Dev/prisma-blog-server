import express, { Router } from 'express';
import { CommentController } from './comment.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();
router.get(
    "/author/:authorId",
    CommentController.getCommentsByAuthor
)
router.get(
    "/:commentId",
    CommentController.getCommentById
)

router.post(
    "/",
    auth(UserRole.USER, UserRole.ADMIN),
    CommentController.createComment
)


export const commentRouter: Router = router;