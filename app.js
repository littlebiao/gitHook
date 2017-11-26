const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

app.use(async (ctx, next) => {
	// console.log(ctx.request.path)
	// if (ctx.request.path === '/') {
	// 	ctx.body = "臭傻逼!!"
	// } else {
	// 	await next()
	// }
	console.log(`Process ${ctx.request.method} ${ctx.request.url}....`);
	await next();

})

router.get('/', async (ctx, next) => {
	ctx.response.body = `<h1>Index</h1>`
	await next()
})

router.get('/hello/:name', (ctx, next) => {
	var name = ctx.params
	console.log(name)
})

app.use(router.routes())

// app.use(async (ctx, next) => {
// 	if (ctx.request.path === '/test') {
// 		ctx.body = 'Test'
// 	} else {
// 		await next()
// 	}
// })


app.listen(3000)