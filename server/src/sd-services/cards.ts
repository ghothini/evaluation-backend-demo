// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class cards {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'cards';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new cards(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_cards_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: cards');
    //appendnew_flow_cards_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: cards');

    this.app['post'](
      `${this.serviceBasePath}/add-card`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_MuXgJ8djKu9pSLDS(bh, parentSpanInst);
          //appendnew_next_sd_4jjnKmGHwq5lT6qP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4jjnKmGHwq5lT6qP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-cards`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_xfQsEYC4XctFJI9A(bh, parentSpanInst);
          //appendnew_next_sd_pmCf1xzC7AuHG3mA
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pmCf1xzC7AuHG3mA');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update-card`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_7sPMVt4Glg3gKeZJ(bh, parentSpanInst);
          //appendnew_next_sd_bjah9MDbT83JppWP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bjah9MDbT83JppWP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/delete-card`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_sKWztiQaMIgyzYan(bh, parentSpanInst);
          //appendnew_next_sd_vyrSMVlyZLcOWGsF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vyrSMVlyZLcOWGsF');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_cards_HttpIn
  }
  //   service flows_cards

  //appendnew_flow_cards_start

  async sd_MuXgJ8djKu9pSLDS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MuXgJ8djKu9pSLDS',
      parentSpanInst
    );
    try {
      bh.collection = 'cards';
      bh.body = bh.input.body;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3ng2ZH5WpcYuDm1R(bh, parentSpanInst);
      //appendnew_next_sd_MuXgJ8djKu9pSLDS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MuXgJ8djKu9pSLDS',
        spanInst,
        'sd_MuXgJ8djKu9pSLDS'
      );
    }
  }

  async sd_3ng2ZH5WpcYuDm1R(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3ng2ZH5WpcYuDm1R',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_DSW6ELhXvUu7PZkh',
        bh.collection,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jcsnIoiKLqZcT0F7(bh, parentSpanInst);
      //appendnew_next_sd_3ng2ZH5WpcYuDm1R
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3ng2ZH5WpcYuDm1R',
        spanInst,
        'sd_3ng2ZH5WpcYuDm1R'
      );
    }
  }

  async sd_jcsnIoiKLqZcT0F7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jcsnIoiKLqZcT0F7',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.result.acknowledged,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7WYoTjtfDYPK6RSk(bh, parentSpanInst);
      } else {
        bh = await this.sd_u82bcx75oZiJhC4Z(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jcsnIoiKLqZcT0F7',
        spanInst,
        'sd_jcsnIoiKLqZcT0F7'
      );
    }
  }

  async sd_7WYoTjtfDYPK6RSk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7WYoTjtfDYPK6RSk',
      parentSpanInst
    );
    try {
      bh.status = 201;
      bh.result = {
        message: 'Card added successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_oSeAJEdMmoaHhBCf(bh, parentSpanInst);
      //appendnew_next_sd_7WYoTjtfDYPK6RSk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7WYoTjtfDYPK6RSk',
        spanInst,
        'sd_7WYoTjtfDYPK6RSk'
      );
    }
  }

  async sd_oSeAJEdMmoaHhBCf(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oSeAJEdMmoaHhBCf');
    }
  }

  async sd_u82bcx75oZiJhC4Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_u82bcx75oZiJhC4Z',
      parentSpanInst
    );
    try {
      bh.status = 403;
      bh.result = {
        message: 'Something went wrong',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_oSeAJEdMmoaHhBCf(bh, parentSpanInst);
      //appendnew_next_sd_u82bcx75oZiJhC4Z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u82bcx75oZiJhC4Z',
        spanInst,
        'sd_u82bcx75oZiJhC4Z'
      );
    }
  }

  async sd_xfQsEYC4XctFJI9A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xfQsEYC4XctFJI9A',
      parentSpanInst
    );
    try {
      bh.collection = 'cards';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7Ru9Iesmz4oUXju3(bh, parentSpanInst);
      //appendnew_next_sd_xfQsEYC4XctFJI9A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xfQsEYC4XctFJI9A',
        spanInst,
        'sd_xfQsEYC4XctFJI9A'
      );
    }
  }

  async sd_7Ru9Iesmz4oUXju3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7Ru9Iesmz4oUXju3',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_DSW6ELhXvUu7PZkh',
        bh.collection,
        bh.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ApK08MieQZemfwx9(bh, parentSpanInst);
      //appendnew_next_sd_7Ru9Iesmz4oUXju3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7Ru9Iesmz4oUXju3',
        spanInst,
        'sd_7Ru9Iesmz4oUXju3'
      );
    }
  }

  async sd_ApK08MieQZemfwx9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ApK08MieQZemfwx9',
      parentSpanInst
    );
    try {
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_cRC1ouU7UgAoZruh(bh, parentSpanInst);
      //appendnew_next_sd_ApK08MieQZemfwx9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ApK08MieQZemfwx9',
        spanInst,
        'sd_ApK08MieQZemfwx9'
      );
    }
  }

  async sd_cRC1ouU7UgAoZruh(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cRC1ouU7UgAoZruh');
    }
  }

  async sd_7sPMVt4Glg3gKeZJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7sPMVt4Glg3gKeZJ',
      parentSpanInst
    );
    try {
      bh.collection = 'cards';
      bh.filter = { _id: bh.input.body._id };
      // delete bh.input.body['_id'];
      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_E1EYnk5ecf9aJFqW(bh, parentSpanInst);
      //appendnew_next_sd_7sPMVt4Glg3gKeZJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7sPMVt4Glg3gKeZJ',
        spanInst,
        'sd_7sPMVt4Glg3gKeZJ'
      );
    }
  }

  async sd_E1EYnk5ecf9aJFqW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E1EYnk5ecf9aJFqW',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_DSW6ELhXvUu7PZkh',
        bh.collection,
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7xH2agRbXUyHhhd9(bh, parentSpanInst);
      //appendnew_next_sd_E1EYnk5ecf9aJFqW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E1EYnk5ecf9aJFqW',
        spanInst,
        'sd_E1EYnk5ecf9aJFqW'
      );
    }
  }

  async sd_7xH2agRbXUyHhhd9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7xH2agRbXUyHhhd9',
      parentSpanInst
    );
    try {
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_sneugpKd4XNjNdnY(bh, parentSpanInst);
      //appendnew_next_sd_7xH2agRbXUyHhhd9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7xH2agRbXUyHhhd9',
        spanInst,
        'sd_7xH2agRbXUyHhhd9'
      );
    }
  }

  async sd_sneugpKd4XNjNdnY(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sneugpKd4XNjNdnY');
    }
  }

  async sd_sKWztiQaMIgyzYan(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sKWztiQaMIgyzYan',
      parentSpanInst
    );
    try {
      bh.collection = 'cards';
      bh.filter = { _id: bh.input.body._id };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dkvcO7obPALIElBT(bh, parentSpanInst);
      //appendnew_next_sd_sKWztiQaMIgyzYan
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sKWztiQaMIgyzYan',
        spanInst,
        'sd_sKWztiQaMIgyzYan'
      );
    }
  }

  async sd_dkvcO7obPALIElBT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dkvcO7obPALIElBT',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().deleteOne(
        'sd_DSW6ELhXvUu7PZkh',
        bh.collection,
        bh.filter,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Xk32r3ov8ooKKezI(bh, parentSpanInst);
      //appendnew_next_sd_dkvcO7obPALIElBT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dkvcO7obPALIElBT',
        spanInst,
        'sd_dkvcO7obPALIElBT'
      );
    }
  }

  async sd_Xk32r3ov8ooKKezI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Xk32r3ov8ooKKezI',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.result.acknowledged,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_iqn8OCmOWvtkJIGE(bh, parentSpanInst);
      } else {
        bh = await this.sd_7n0fv31Y5NJsVqmA(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Xk32r3ov8ooKKezI',
        spanInst,
        'sd_Xk32r3ov8ooKKezI'
      );
    }
  }

  async sd_iqn8OCmOWvtkJIGE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iqn8OCmOWvtkJIGE',
      parentSpanInst
    );
    try {
      bh.status = 201;
      bh.result = {
        message: 'Card deleted successfully',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EubBmS2IQZKqVREj(bh, parentSpanInst);
      //appendnew_next_sd_iqn8OCmOWvtkJIGE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iqn8OCmOWvtkJIGE',
        spanInst,
        'sd_iqn8OCmOWvtkJIGE'
      );
    }
  }

  async sd_EubBmS2IQZKqVREj(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EubBmS2IQZKqVREj');
    }
  }

  async sd_7n0fv31Y5NJsVqmA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7n0fv31Y5NJsVqmA',
      parentSpanInst
    );
    try {
      bh.status = 403;
      bh.result = {
        message: 'Something went wrong',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EubBmS2IQZKqVREj(bh, parentSpanInst);
      //appendnew_next_sd_7n0fv31Y5NJsVqmA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7n0fv31Y5NJsVqmA',
        spanInst,
        'sd_7n0fv31Y5NJsVqmA'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_cards_Catch
}
