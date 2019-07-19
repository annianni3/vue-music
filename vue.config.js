const path = require('path');
const express = require('express')
const axios = require('axios')
const app = express()
const apiRoutes = express.Router()

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'common': path.join(__dirname, 'src/assets'),
                'components': path.join(__dirname, 'src/components'),
                'api': path.join(__dirname, 'src/api'),
                'base': path.join(__dirname, 'src/base'),
            },
        }
    },
    devServer: {
        //添加一个before方法
        before(apiRoutes){
            apiRoutes.get('/api/getDiscList',(req,res)=>{ //将对本api请求进行转发
                const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'; //转发的目的url
                axios.get(url, {
                    headers: {
                        referer: 'https://c.y.qq.com/',
                        host: 'c.y.qq.com'
                    },
                    params: req.query  //请求的query
                }).then((response) => {
                    res.json(response.data)
                }).catch((e) => {
                    console.log(e)
                })
            });
        }
    }
}
