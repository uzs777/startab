import { compare, hash } from "bcrypt"

class hash_data {
    async decode(data) {
        const newData = await hash(data, 7);
        return newData
    }

    async encode(data, hashedData) {
        const isMatch = await compare(data, hashedData);
        return isMatch
    }
}

export default new hash_data()