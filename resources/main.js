
var chart = Highcharts.chart('pie', {
	chart: {
        spacing : [40, 0 , 40, 0],
        backgroundColor:'#37474F',
        borderWidth:'0px',
	},
	title: {
		floating:true,
        text: '已完成78%',
        style: {
            color:'white',
            fontFamily:'Microsoft JhengHei',
        }
	},
	tooltip: {
		pointFormat: '<b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
		pie: {
			allowPointSelect: false,
			cursor: 'pointer',
			dataLabels: {
				enabled: false,
				format: '<b>{point.name}</b>: {point.percentage:.1f} %',
				style: {
					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white'
				}
			},
			point: {
				events: {
					mouseOver: function(e) {  // 鼠标滑过时动态更新标题
						// 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
						chart.setTitle({
							text: e.target.name+ '\t'+ e.target.y + ' %'
						});
					}
					//, 
					// click: function(e) { // 同样的可以在点击事件里处理
					//     chart.setTitle({
					//         text: e.point.name+ '\t'+ e.point.y + ' %'
					//     });
					// }
				}
			},
		}
	},
	series: [{
		type: 'pie',
		innerSize: '80%',
		name: '完成度',
		data: [
            {name:'已完成',   y: 45.0, url : 'http://bbs.hcharts.cn',
            color:'#2BBBAD',
            selected:true},
			
			{
				name: '待完成',
                y: 12.8,
                color:'#4B515D',
                url: 'http://www.hcharts.cn',
                borderWidth:'0px',
			},
			
		]
	}]
}, function(c) { // 图表初始化完毕后的会掉函数
	// 环形图圆心
	var centerY = c.series[0].center[1],
		titleHeight = parseInt(c.title.styles.fontSize);
	// 动态设置标题位置
	c.setTitle({
		y:centerY + titleHeight/2
	});
});

cities = {"北京":50,'上海':39,'深圳':28,'广州':25,'杭州':25,'天津':15,'石家庄':10,'青岛':5,'合肥':5,'武汉':4,'郑州':0}


var options = {
    chart: {
        type: 'bar',                       //指定图表的类型，默认是折线图（line）
        backgroundColor:'#37474F',

    },
    title: {
        text:'本周机构榜单',
        style: {
            color:'white',
        }
    },
    xAxis: {
        categories: Object.keys(cities)
           // x 轴分类
    },
    yAxis: {
        title: {
            text: '成单量（单）',
            style: {
                color:'white',
            }                // y 轴标题
        }
    },
    
    series: [{                              // 数据列
        name: '成单量',                        // 数据列名
        data: Object.values(cities),                     // 数据
    }],
};
// 图表初始化函数
var chart = Highcharts.chart('bar', options);

