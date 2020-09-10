# vue02

## 课堂目标

### 掌握组件化思想

- 页面拆分成一个个模块类似于函数

### 掌握 vue 组件基础知识点

## 组件的概念

### 开发思想

### 优势

- 封装性
- 复用性
- 单一职责

### 对比函数

## 基础 api

### 注册组件

- 命名规范

	- 1，component里面用驼峰命名，html要用烤肉串命名
	- 2，vue对象对外放开的接口template 就直接用驼峰就可以 ***

- 全局注册

	- 规范

		- vue.comonent("id",..)
		- template : `` 视图层
		- props and etc

- 局部注册

	- const  ComponentB { template: `` } 声明
	- 注册在父组件的  components:{ ComponentB } 这个接口，并且渲染进 父组件的视图里面

- 坑：

	- data

		- 如果要用到的话，要用函数的方式，防止变量污染，和对象共用

	- 一定要有一个根元素例如 div

### 生命周期

就是生命周期各个时期，需要用到那个时期就调用那个函数，例如挂载之前需要ajax请求等等

- beforeCreate
- created
- beforeMount
- mounted

	- 挂载，就是你能看见东西

- beforeUpdate
- updated
- beforeDestroy
- destroyed
- 子组件和父组件的生命周期

	- 如图 父组件挂载以前去创建并且挂载子组件

### props

类型：数组，对象

- 组件接收数据

	- props 对象，数组等

- 单项数据流

	- 因为这个特性所以我们直接修改父节点传过来的数据就会有错误

- 验证

	- 类型检测：type
	- default 默认值
	- required 是否必须
	- 参数校验 validator

### 自定义事件

- 组件发出数据 emit

  组件之间的通信就是
  函数的return Output

	- 1.组件向外发出东西 格式this.$emit("id", 参数);
	- 2. Vue实例接受参数 ,click 里面 $emti id = 一个接受参数的函数
	- 3. vue实例里面定义这个接受参数一个函数，要有形参接收这个值

- 自定义组件的 v-model

	- 默认

		- 1.emit 的 id 默认是 “input”, props 默认接受一个value值
		- 2. vue实例 v-model=count 定义这个参数，并且在data 里面声明

	- 自定义

		-  1.1 用model对象自定义 ，prop 等于value ， event 等于 input ,然后进行相应的替换 id 等于 event 的参数

- .sync

  场景：我想想更改传进来的value值，但是又不能更改原本的参数

	- update:myPropName

		- 1. :titleApp="title" 绑定 一个title 让组件接收
		- 2. 组件里面 接受参数 + 固定格式： "update:title" title 改成你需要的参数名
		- 3. :title.sync="title"  "title" 这里是写你要对应改那个title值 就是 data -> title ，:title 是updated后面跟的参数。 

### 插槽

场景：在组件<> </>里面插入一些值

- 插入内容

	- vue实例组件里面写入内容
	- 组件template <slot></slot> 插到你想要的地方。如果这个便签里面有内容，这个内容就是默认值

- 具名插槽

	-  <slot name="header"></slot>给插槽起名字
	- 在vue 实例中利用template 便签 <template v-slot:header>header</template>插入内容

- 作用域插槽

  给子组件暴露一些数据在vue实例中使用

	- <slot name="header" :count=count></slot> 在插槽中绑定数据
	-  在模板标签中拿到数据，他是一个对象用对象方法拿数据<template v-slot:header="data">

- 缩写

	- #

- 复用性

	- 只需要传递参数，循环逻辑在组件插槽里面声明就可以，vue实例只需要传递参数而已

### 动态组件 & 异步组件

- component
- keep-alive
- 异步组件

### 复用性

- mixin

  组件复用逻辑
  vue3被废弃

	- 缺点

		- 来源不明确
		- 命名冲突

			- 导致函数，或者方法被覆盖

	- 做法 

		- 1，抽离相同的逻辑声明

			-  const mixinC = {
    mounted() {
      console.log("hello from mixin!");
},}

		- 2. 在组件中使用 mixins: [声明的对象名称],

- extends

	- Vue.extends

- 自定义指令

  要拿到真实的dom

	- Vue.directive

		- 生命周期
		- 参数，el binding (真实的dom --el)

			- 参数binding //v-focus.a.b="123"></input>  这样可以在参数binding里面拿到一些数据 

### render流程

- init

	- template

		- render 函数

			- vnode

				- dom element

- update

	- diff

## 案例

### qq空间

- 使用组件化思想重构其逻辑

*XMind: ZEN - Trial Version*