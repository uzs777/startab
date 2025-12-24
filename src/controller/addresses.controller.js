import Address from '../schemas/addresses.schema.js';
import { BaseController } from './base.controller.js';

class AddressController extends BaseController {
}

export default new AddressController(Address, 'addresses');
