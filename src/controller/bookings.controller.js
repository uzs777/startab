import Bookings from '../schemas/bookings.schema.js';
import { BaseController } from './base.controller.js';

class BookkingsController extends BaseController {
}

export default new BookkingsController(Bookings, 'bookings');
