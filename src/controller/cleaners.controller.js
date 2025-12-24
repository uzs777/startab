import Cleaners from '../schemas/cleaners.schema.js';
import { BaseController } from './base.controller.js';

class CleanersController extends BaseController {
}

export default new CleanersController(Cleaners, 'cleaners');
