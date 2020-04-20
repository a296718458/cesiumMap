import {post} from './../http'
import qs from 'qs';

const testApi = {
  oneApi(data) {
    return post('http://192.168.0.110:9595/api/Torg/selectGroundSpot',qs.stringify(data));
  }
}

export default testApi;