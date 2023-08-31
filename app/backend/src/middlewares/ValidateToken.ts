import { Request, Response, NextFunction } from 'express';
import JWT from '../utils/JWT';

export default class ValidateToken {
  static async token(req: Request, res: Response, next: NextFunction) {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const token = bearerToken.split(' ')[1];

    const verifyToken = JWT.verify(token);

    req.body.user = verifyToken;

    if (verifyToken === 'Token must be a valid token') {
      return res.status(401).json({ message: verifyToken });
    }

    next();
  }
}
