const koa = require("koa"),
    router = require("koa-router")(),
    views = require('koa-views'),
    render = require("koa-art-template"),
    path = require("path"),
    static = require('koa-static'),
    app = new koa();

// 配置静态资源
app.use(static(__dirname + "/static"));

// 配置template模板引擎(这是公式，要记住)
render(app, {
    root: path.join(__dirname, 'views'), // 视图的位置
    extname: ".html", // 后缀名
    debug: process.env.NODE_ENV !== 'production' // 是否开启调试模式
})

router.get("/", async (ctx, next) => {
    await ctx.render("index");
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(80, () => {
    console.log('http://127.0.0.1');
})