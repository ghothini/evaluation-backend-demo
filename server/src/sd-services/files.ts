// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class files {
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
    this.serviceName = 'files';
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
      instance = new files(
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
    //appendnew_flow_files_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: files');
    //appendnew_flow_files_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: files');

    this.app['post'](
      `${this.serviceBasePath}/upload-file`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        options: [{ name: 'file', maxCount: 1 }],
      }),

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
          bh = await this.sd_NUG8COGn8DoLyBL9(bh, parentSpanInst);
          //appendnew_next_sd_3zX0w5XoRUSQXs9J
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3zX0w5XoRUSQXs9J');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_files_HttpIn
  }
  //   service flows_files

  //appendnew_flow_files_start

  async sd_NUG8COGn8DoLyBL9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NUG8COGn8DoLyBL9',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files.file[0];
      console.log(bh.file);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NrSduPdrULbo5weA(bh, parentSpanInst);
      //appendnew_next_sd_NUG8COGn8DoLyBL9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NUG8COGn8DoLyBL9',
        spanInst,
        'sd_NUG8COGn8DoLyBL9'
      );
    }
  }

  async sd_NrSduPdrULbo5weA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NrSduPdrULbo5weA',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().uploadFile(
        'sd_DSW6ELhXvUu7PZkh',
        'files',
        bh.file.path,
        bh.file.filename,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      this.sd_zMCRk5vB41FGcqCK(bh, parentSpanInst);
      //appendnew_next_sd_NrSduPdrULbo5weA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NrSduPdrULbo5weA',
        spanInst,
        'sd_NrSduPdrULbo5weA'
      );
    }
  }

  async sd_zMCRk5vB41FGcqCK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zMCRk5vB41FGcqCK',
      parentSpanInst
    );
    try {
      let logobj: any = bh.result;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_zMCRk5vB41FGcqCK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zMCRk5vB41FGcqCK',
        spanInst,
        'sd_zMCRk5vB41FGcqCK'
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
  //appendnew_flow_files_Catch
}
