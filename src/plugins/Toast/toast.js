let Toast = {}

let toastVM = null, // 存储toast vm
	showToast = false // 存储toast显示状态

Toast.install = function (Vue) {

	Vue.prototype.$toast = function (msg, type) {// 方法挂载在vue内
		let nowType
		// eslint-disable-next-line no-undef
		let tmp = '<div class="Success" v-show="visible"><div class="top" ><img src="' + require('../../assets/common_icon_ok@2x.png') + '" v-if="type==1" /><img src="' + require('../../assets/common_btn_close3@2x.png') + '" v-if="type==2" /></div><p >{{message}}</p></div>'
		if (type === 'success') {
			nowType = 1

		}
		if (type === 'error') {
			nowType = 2

		}

		if (showToast) {// 之前toast还未消失
			return

		}

		if (!toastVM) {// 判断如果页面内无toast对象  创建一个新的 挂载在vue内
			let instance = Vue.extend({
				data: function () {
					return {
						visible: showToast,
						message: msg,
						type: nowType
					}
				},
				template: tmp
			})

			// eslint-disable-next-line new-cap
			toastVM = new instance()
			let tpl = toastVM.$mount().$el// 挂载到vue
			document.body.appendChild(tpl) // 添加元素

		}

		// eslint-disable-next-line no-multi-assign
		toastVM.visible = showToast = true // toast 显示
		toastVM.message = msg // 改变toast 文字
		toastVM.type = nowType
		setTimeout(function () {
			// eslint-disable-next-line no-multi-assign
			toastVM.visible = showToast = false // toast 消失
		}, 1500)

	}

}

export default Toast