import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import data from './datas/admin'

const mock = new MockAdapter(axios);


export default mock.onGet('/api/admin').reply(config => {
    // console.log(config);
    const count = config.count
    const pStart = (config.pageIndex - 1) * count
    const newDatas = data.slice(pStart, count+pStart)

    return new Promise((resolve, reject) => {
        resolve([200, newDatas])
    })
});
