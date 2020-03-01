import Vue from 'vue'
import axios from 'axios';

export default {
  // 登陆
  denglu: (data) => {
    return axios.post('/login', data)
  },
  // 验证token
  homes: () => {
    return axios.get('/login/test');
  },
  // 列表
  lists: () => {
    return axios.get('/lists');
  },
  // 添加用户
  adduser: (data) => {
    return axios.post('/adduser', data)
  },
  // 获取新闻
  news: () => {
    return axios.get('/news');
  },
  //  图形化数据
  // hchar: () => {
  //   return axios.get('/hchar');
  // },
  // 编辑用户
  edit: (data) => {
    return axios.post('/edit', data)
  },
  // 删除用户
  dalete: (data) => {
    return axios.delete('/delete', {
      data
    })
  },
  //  批量删除用户
  removeall: (data) => {
    return axios.post('/rmall', data)
  },
  getOption: () => {
    return axios.get('/getOption')
  },
  getOption2: () => {
    return axios.get('/getOption2')
  },
  getfchart: (data) => {
    return axios.post('/getfchart', {
      data
    })
  },
  getchart: (data, data2) => {
    return axios.post('/getchart', {
      data,
      data2
    })
  },
  choose: (data) => {
    return axios.post('/choose', {
      data
    })
  },
  change: (data) => {
    return axios.post('/change', data)
  },
  getperdatas: (data) => {
    return axios.post('/getperdatas', {
      data
    })
  },
  setdatay: (data1, data2) => {
    return axios.post('/setdatay', {
      data1,
      data2
    })
  },
  uChart1: () => {
    return axios.get('/uChart/1')
  },
  uChart2: () => {
    return axios.get('/uChart/2')
  },
  uChart3: () => {
    return axios.get('/uChart/3')
  },
  uChart4: () => {
    return axios.get('/uChart/4')
  },
  uChart5: () => {
    return axios.get('/uChart/5')
  },
  uChart6: () => {
    return axios.get('/uChart/6')
  },
  uChart7: () => {
    return axios.get('/uChart/7')
  },
  uChart8: () => {
    return axios.get('/uChart/8')
  },
  uChart9: () => {
    return axios.get('/uChart/9')
  },
  uChart10: () => {
    return axios.get('/uChart/10')
  },
  uChart11: () => {
    return axios.get('/uChart/11')
  },
  uChart12: () => {
    return axios.get('/uChart/12')
  },
  getOption3: (data) => {
    return axios.post('/getOption3', { data })
  },
  /**宝马一系 */
  getbaoma1: (data) => {
    return axios.post('/getbaoma1/1', { data })
  },
  getbaoma2: (data) => {
    return axios.post('/getbaoma1/2', { data })
  },
  getbaoma3: (data) => {
    return axios.post('/getbaoma1/3', { data })
  },
  getbaoma4: (data) => {
    return axios.post('/getbaoma1/4', { data })
  },
  getbaoma5: (data) => {
    return axios.post('/getbaoma1/5', { data })
  },
  getbaoma6: (data) => {
    return axios.post('/getbaoma1/6', { data })
  },
  getbaoma7: (data) => {
    return axios.post('/getbaoma1/7', { data })
  },
  getbaoma8: (data) => {
    return axios.post('/getbaoma1/8', { data })
  },
  getbaoma9: (data) => {
    return axios.post('/getbaoma1/9', { data })
  },
  getbaoma10: (data) => {
    return axios.post('/getbaoma1/10', { data })
  },
  getbaoma11: (data) => {
    return axios.post('/getbaoma1/11', { data })
  },
  getbaoma12: (data) => {
    return axios.post('/getbaoma1/12', { data })
  },
  getbaoma13: (data) => {
    return axios.post('/getbaoma1/13', { data })
  },
  getbaoma14: (data) => {
    return axios.post('/getbaoma1/14', { data })
  },
  getbaoma15: (data) => {
    return axios.post('/getbaoma1/15', { data })
  },
  getbaoma16: (data) => {
    return axios.post('/getbaoma1/16', { data })
  },

}
