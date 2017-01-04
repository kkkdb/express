import {api} from '../../config/config'

export default{
	login: api + 'user/login', //登录 post
	getMenuList: api + 'user/getMenuList', //获取菜单列表 get
	getAllGoodsList: api + 'shop/items/goodsName', //获取所有商品商品名称和ID get
	getGoodsList: api + 'shop/items/onsale/get', //获取商品列表 get
}