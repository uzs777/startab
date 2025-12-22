import { isValidObjectId } from "mongoose";
import { catchAsync } from "../middlewares/catch-async.js"
import { ApiError } from "../utils/custom-error.js"
import { succesRes } from "../utils/success-res.js"

export class BaseController {
    constructor(model, relation) {
        this.model = model;
        this.relation = relation;
    }

    create = catchAsync(async (req, res) => {
        const data = await this.model.create(req.body);
        return succesRes(res, data, 201);
    });

    findAll = catchAsync(async (req, res) => {
        const data = await this.model.find().populate(this.relation)
        return succesRes(res, data);
    });

    finById = catchAsync(async (req, res) => {
        const data = await this._getById(req.params?.id);
        return succesRes(res, data)
    });

    update = catchAsync(async (req, res) => {
        const { id } = req.params?.id;
        await this._getById(id);
        const updat = await this.model.findByIdAndUpdate(id, req.body, { new: true });
        return succesRes(res, updat)
    });

    delete = catchAsync(async (req, res) => {
        const { id } = req.params?.id;
        await this._getById(id);
        const delet = await this.model.findByIdAndDelete(id);
        return succesRes(res, delet)
    })

    async _getById(id) {
        if (!isValidObjectId(id)) {
            throw new ApiError("Invalid Object ID", 400);
        }
        const data = await this.model.findById(id).populate(this.relation)
        if (!data) {
            throw new ApiError("not found ", 404)
        }
        return data
    }

    async _isExist(property, mess) {
        const exists = await this.model.findOne(property);
        if (exists) {
            throw new ApiError(`${message} already exists`, 409)
        }
    }

    async _isExistId(id, property, mess) {
        const existsData = await this.model.findOne(property);
        if (existsData && existsData.id != id) {
            throw new ApiError(`${message} exists`, 409)
        }
    }
}