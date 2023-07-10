import { doggoServices } from "../services/DoggoServices.js"
import BaseController from "../utils/BaseController.js"


export class DoggoController extends BaseController {
    constructor() {
        super('api/doggo')
        this.router

            .get('', this.getDoggos)
            .get('/:doggoId', this.getDoggoById)
            .post('', this.createDoggo)
            .delete('/:doggoId', this.deleteDoggo)
            .put('/doggoId', this.updateDoggo)
    }

    async getDoggos(req, res, next) {
        try {
            const doggos = await doggoServices.getDoggos()
            res.send(doggos)
        } catch (error) {
            next(error)
        }
    }

    async getDoggoById(req, res, next) {
        try {
            const doggoId = req.params.doggoId
            const doggo = await doggoServices.getDoggoById(doggoId)

            res.send(doggo)
        } catch (error) {
            next(error)
        }
    }

    async createDoggo(req, res, next) {
        try {
            const doggoData = req.body
            const doggo = await doggoServices.createDoggo(doggoData)

            res.send(doggo)
        } catch (error) {
            next(error)
        }
    }

    async deleteDoggo(req, res, next) {
        try {
            const doggoId = req.params.doggoId
            await doggoServices.deleteDoggo(doggoId)
            res.send('Doggo go bye-bye')
        } catch (error) {
            next(error)
        }
    }

    async updateDoggo(req, res, next) {
        try {
            const doggoId = req.params.doggoId
            const doggoData = req.body
            const updatedDoggo = await doggoServices.updateDoggo(doggoId, doggoData)
            res.send(updatedDoggo)
        } catch (error) {
            next(error)
        }
    }
}