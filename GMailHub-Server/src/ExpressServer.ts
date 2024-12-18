import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import _express, { NextFunction, Request, Response } from "express";
import helmet from 'helmet';

import { SendResponseToUser, UserResponseMiddWare } from './middleware/UserResponse';
import router from './routes';
import { UserResponse } from './common/Response';

export const _app = _express();

export class Express {
  public port: number

  constructor() {
    this.middleware()

    this.route()
  }

  private middleware() {
    _app.use(
      cors({
        credentials: true,
        methods: 'GET,POST',
        optionsSuccessStatus: 201,
        origin: [process.env.FRONTEND_URL],
      })
    );

    _app.use(helmet());

    _app.use(bodyParser.json({ limit: '50mb' }));

    _app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 2 }));

    _app.use(_express.json({ limit: '50mb' }));

    _app.use(cookieParser());

    _app.use(bodyParser.raw({ type: 'application/json' }));

  }

  private route() {
    _app.use('/GMailHub/api', router);


    _app.all('*', (req: Request, res: Response, next: NextFunction) => {
      let objUserResponse = new UserResponse();
      objUserResponse.Message = 'API error / Path not found.';
      objUserResponse.isError = true;
      objUserResponse.statusCode = 404;
      SendResponseToUser(objUserResponse, next);
    });

    _app.use(UserResponseMiddWare); // sending data to user middle ware
  }

  public listen() {
    try {
      _app.listen(this.port, () => {
        console.log('Server started on Port' + this.port);
      });
    } catch (error) {
      console.log('Error while Starting Server -> ' + error);
    }
  }
}