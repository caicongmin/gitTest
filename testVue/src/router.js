/**
 * Created by ccm on 2016/12/9.
 */
import routeConfig from './route.json'

const routes = []
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// routes.push({ path: '/', component: Foo })
// routes.push({ path: '/foo', component: Foo })
// routes.push({ path: '/bar', component: Bar })
const pageList = {
  home: r => require(['./pages/home.vue'], r),
  foo: Foo,
  bar: Bar,
  hello: r => require.ensure([], () => { r(require('./components/Hello.vue')) }, 'grop_test'),
  testFile: r => require.ensure([], () => { r(require('./pages/testFile.vue')) }, 'grop_test'),
  testHtml: r => require.ensure([], () => { r(require('./pages/testHtml.vue')) }, 'grop_test')
}

routeConfig.map((val, index) => {
  console.log('val => ', val)
  routes.push(Object.assign({component: pageList[val.name]}, val))
})
routes.push({component: r => require(['./pages/home.vue'], r), path: '/'})
console.log('@@@@@@@@@@@@@@ routes', routeConfig)
routes.push({path: '*', redirect: '/home'}) //  将未定义的地址重定向

export default routes
