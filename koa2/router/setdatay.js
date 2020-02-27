const router = require('koa-router')();
const db = require('../sql/sql');

router.post('/', async ctx => {
    let params = ctx.request.body;

    if (params.data1 === '1') {
        await db.query(`replace into getfchart(pid,id,name,y) 
        values 
        (1,1,'空库',?),
        (2,1,'前后油封',?),
        (3,1,'连杆',?),
        (4,1,'活塞',?),
        (5,1,'曲轴',?),
        (6,1,'轴瓦',?),
        (7,1,'活塞销',?),
        (8,1,'活塞环',?),
        (9,1,'飞轮',?),
        (10,1,'连杆螺栓',?),
        (11,1,'缸体',?),
        (12,1,'油底壳',?)`, params.data2).then(res => {
            if (res) {
                ctx.body = {
                    code: '111',
                    msg: '修改成功'
                }
            } else {
                ctx.body = {
                    code: '000',
                    msg: '修改失败'
                }
            }
        })
    } else if (params.data1 === '2') {
        await db.query(`replace into getfchart(pid,id,name,y) 
        values 
        (13,2,'空气滤清器',?),
        (14,2,'消声器吊胶',?),
        (15,2,'空滤器缓冲胶',?),
        (16,2,'进气管',?),
        (17,2,'消声器',?),
        (18,2,'排气管弹簧',?),
        (19,2,'排气管螺栓',?),
        (20,2,'消声器夹',?),
        (21,2,'怠速控制阀',?),
        (22,2,'废气再循环阀',?),
        (23,2,'涡轮增压器',?),
        (24,2,'节气门',?),
        (25,2,'气门挺杆',?),
        (26,2,'气门摇臂',?),
        (27,2,'气门导管',?),
        (28,2,'时规导轨',?),
        (29,2,'正时链条',?),
        (30,2,'正时齿轮',?),
        (31,2,'进气门',?),
        (32,2,'排气门',?),
        (33,2,'三元催化器',?),
        (34,2,'凸轮轴',?),
        (35,2,'空库',?)`, [params.data2['0'], params.data2['1'], params.data2['2'], params.data2['3'], params.data2['4'], params.data2['5'], params.data2['6'], params.data2['7'], params.data2['8'], params.data2['9'], params.data2['10'], params.data2['11'], params.data2['12'], params.data2['13'], params.data2['14'], params.data2['15'], params.data2['16'], params.data2['17'], params.data2['18'], params.data2['19'], params.data2['20'], params.data2['21'], params.data2['22']]).then(res => {
            if (res) {
                ctx.body = {
                    code: '111',
                    msg: '修改成功'
                }
            } else {
                ctx.body = {
                    code: '000',
                    msg: '修改失败'
                }
            }
        })
    } else if (params.data1 === '3') {
        await db.query(`replace into getfchart(pid,id,name,y) 
        values 
        (36,3,'空库',?),
        (37,3,'散热器',?),
        (38,3,'节温器',?),
        (39,3,'散热风扇',?),
        (40,3,'水泵',?),
        (41,3,'副水箱',?)`, params.data2).then(res => {
            if (res) {
                ctx.body = {
                    code: '111',
                    msg: '修改成功'
                }
            } else {
                ctx.body = {
                    code: '000',
                    msg: '修改失败'
                }
            }
        })
    } else if (params.data1 === '4') {
        await db.query(`replace into getfchart(pid,id,name,y) 
        values 
        (42,4,'空库',?),
        (43,4,'机油滤清器',?),
        (44,4,'机油泵',?),
        (45,4,'机油尺导管',?),
        (46,4,'机油冷却器',?),
        (47,4,'排油塞',?),
        (48,4,'机油泵驱动链条',?),
        (49,4,'机油滤芯',?)`, params.data2).then(res => {
            if (res) {
                ctx.body = {
                    code: '111',
                    msg: '修改成功'
                }
            } else {
                ctx.body = {
                    code: '000',
                    msg: '修改失败'
                }
            }
        })
    } else if (params.data1 === '5') {
        await db.query("replace into getfchart(pid,id,name,y) values (50,5,'空库',?),(51,5,'永磁起动机',?),(52,5,'自励起动机',?),(53,5,'它励起动机',?),(54,5,'启动保险',?),(55,5,'启动接线',?)", params.data2).then(res => {
            if (res) {
                ctx.body = {
                    code: '111',
                    msg: '修改成功'
                }
            } else {
                ctx.body = {
                    code: '000',
                    msg: '修改失败'
                }
            }
        })
    } else if (params.data1 === '6') {
        await db.query(`replace into getfchart(pid,id,name,y) 
        values 
        (56,6,'汽油滤清器',?),
        (57,6,'燃油传感器',?),
        (58,6,'汽油泵',?),
        (59,6,'油箱盖',?),
        (60,6,'油管',?),
        (61,6,'喷嘴',?),
        (62,6,'燃油压力调节器',?),
        (63,6,'滤网',?),
        (64,6,'空库',?)`, params.data2).then(res => {
            if (res) {
                ctx.body = {
                    code: '111',
                    msg: '修改成功'
                }
            } else {
                ctx.body = {
                    code: '000',
                    msg: '修改失败'
                }
            }
        })
    } else if (params.data1 === '7') {
        await db.query(`replace into getfchart(pid,id,name,y) 
        values 
        (65,7,'点火模块',?),
        (66,7,'点火缸线',?),
        (67,7,'独立点火模块',?),
        (68,7,'火花塞',?),
        (69,7,'点火控制模块',?),
        (70,7,'凸轮轴位置传感器',?),
        (71,7,'曲轴位置传感器',?),
        (72,7,'爆震传感器',?),
        (73,7,'空库',?)`, params.data2).then(res => {
            if (res) {
                ctx.body = {
                    code: '111',
                    msg: '修改成功'
                }
            } else {
                ctx.body = {
                    code: '000',
                    msg: '修改失败'
                }
            }
        })
    } else if (params.data1 === '8') {
        await db.query(`replace into getfchart(pid,id,name,y) 
        values 
        (74,8,'车桥',?),
        (75,8,'车架',?),
        (76,8,'悬架',?),
        (77,8,'斜截式轮胎',?),
        (78,8,'子午线轮胎',?),
        (79,8,'阻尼器',?),
        (80,8,'悬架弹簧',?),
        (81,8,'主销',?),
        (82,8,'上摆臂',?),
        (83,8,'下摆臂',?),
        (84,8,'元宝梁',?),
        (85,8,'H梁',?),
        (86,8,'空库',?)`, params.data2).then(res => {
            if (res) {
                ctx.body = {
                    code: '111',
                    msg: '修改成功'
                }
            } else {
                ctx.body = {
                    code: '000',
                    msg: '修改失败'
                }
            }
        })
    } else if (params.data1 === '9') {
        await db.query(`replace into getfchart(pid,id,name,y) 
        values 
        (87,9,'方向盘',?),
        (88,9,'转向电机',?),
        (89,9,'转向助力泵',?),
        (90,9,'转向轴',?),
        (91,9,'转向万向节',?),
        (92,9,'转向横拉杆',?),
        (93,9,'空库',?)`, params.data2).then(res => {
            if (res) {
                ctx.body = {
                    code: '111',
                    msg: '修改成功'
                }
            } else {
                ctx.body = {
                    code: '000',
                    msg: '修改失败'
                }
            }
        })
    } else if (params.data1 === '10') {
        await db.query(`replace into getfchart(pid,id,name,y) 
        values 
        (94,10,'制动钳',?),
        (95,10,'制动盘',?),
        (96,10,'制动鼓',?),
        (97,10,'制动总泵',?),
        (98,10,'制动片',?),
        (99,10,'制动蹄片',?),
        (100,10,'制动分泵',?),
        (101,10,'制动助力泵',?),
        (102,10,'制动软管',?),
        (103,10,'真空泵修理包',?),
        (104,10,'制动总泵修理包',?),
        (105,10,'制动分泵修理包',?),
        (106,10,'压力真空罐',?),
        (107,10,'制动阀',?),
        (108,10,'制动助力器',?),
        (109,10,'ABS总成',?),
        (110,10,'空库',?)`, params.data2).then(res => {
            if (res) {
                ctx.body = {
                    code: '111',
                    msg: '修改成功'
                }
            } else {
                ctx.body = {
                    code: '000',
                    msg: '修改失败'
                }
            }
        })
    } else if (params.data1 === '11') {
        await db.query(`replace into getfchart(pid,id,name,y) 
        values 
        (111,11,'离合器压盘',?),
        (112,11,'离合器片',?),
        (113,11,'分离轴承',?),
        (114,11,'离合总泵',?),
        (115,11,'离合分泵',?),
        (116,11,'变速箱滤清器修包',?),
        (117,11,'变速器操纵杆头',?),
        (118,11,'换挡杆',?),
        (119,11,'变速箱摩擦片',?),
        (120,11,'变速箱制动片',?),
        (121,11,'变速箱制动皮带',?),
        (122,11,'十字轴',?),
        (123,11,'半轴',?),
        (124,11,'驱动轴',?),
        (125,11,'球笼防尘罩',?),
        (126,11,'驱动轴支撑轴承',?),
        (127,11,'传动轴',?),
        (128,11,'差速器',?),
        (129,11,'空库',?)`, params.data2).then(res => {
            if (res) {
                ctx.body = {
                    code: '111',
                    msg: '修改成功'
                }
            } else {
                ctx.body = {
                    code: '000',
                    msg: '修改失败'
                }
            }
        })
    }


});

module.exports = router.routes();