
import axios from 'axios';

export default class DataAccess<T> {
    public async getData(url: string): Promise<ReadonlyArray<T>> {
        const result = await axios.get(url);
        return result.data as ReadonlyArray<T>;
    }
}
