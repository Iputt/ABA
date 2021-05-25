import Mock from 'mockjs'

Mock.mock('/api/list','get',{"data":[
	{
		"id":"1",
		"title":"title"
	}
]})