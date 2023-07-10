import { Doggos } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"



class DoggoServices {
    getDoggos() {
        return Doggos
    }

    getDoggoById(doggoId) {
        const foundDoggo = Doggos.find(doggo => doggo.id == doggoId)

        if (!foundDoggo) {
            throw new BadRequest(`${doggoId} not a valid request`)
        }
        return foundDoggo
    }

    createDoggo(doggoData) {
        doggoData.id = Doggos.length + 1

        Doggos.push(doggoData)

        return doggoData
    }

    deleteDoggo(doggoId) {
        const foundIndex = Doggos.findIndex(doggo => doggo.id == doggoId)

        if (foundIndex == -1) {
            throw new BadRequest(`${doggoId} invalid doggo`)
        }

        Doggos.splice(foundIndex, 1)
    }

    updateDoggo(doggoId, doggoData) {
        let OGDoggo = this.getDoggoById(doggoId)

        OGDoggo.name = doggoData.name || OGDoggo.name
        OGDoggo.age = doggoData.age || OGDoggo.age
        OGDoggo.color = doggoData.color || OGDoggo.color
        OGDoggo.hasTail = doggoData.hasTail || OGDoggo.hasTail
        OGDoggo.isMale = doggoData.isMale || OGDoggo.isMale

        return OGDoggo
    }
}

export const doggoServices = new DoggoServices()



