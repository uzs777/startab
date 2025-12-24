import Cleaning_services from '../schemas/cleaning_services.schema.js';
import { BaseController } from './base.controller.js';

class Cleaning_servicesController extends BaseController {
}

export default new Cleaning_servicesController(Cleaning_services, 'cleaning_services');
