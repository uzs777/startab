import Payements from '../schemas/payements.schema.js';
import { BaseController } from './base.controller.js';

class PayementsController extends BaseController {
}

export default new PayementsController(Payements, 'payements');
