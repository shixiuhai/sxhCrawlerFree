function main(splash, args)
    splash:set_user_agent("Mozilla/5.0 Chrome/111.0.5563.65 Safari/537.36")
    splash.resource_timeout = 15
    splash:autoload("http://api.map.baidu.com/api?v=3.0&amp;ak=2SErRV2hp5F7dfI2qvKaGZzkf57CidPN")
    splash:autoload("http://api.map.baidu.com/getscript?v=3.0&amp;ak=2SErRV2hp5F7dfI2qvKaGZzkf57CidPN&amp;services=&amp;t=20230105101157")
    splash:autoload("http://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js")
    splash:autoload("http://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.async-validator.7d8e149e.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.axios.62b39a59.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.babel.299ea28c.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.babel-runtime.c6eab494.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.buffer.48741124.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.core-js.5e32599c.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.element-ui.7414a079.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.flv.js.52d4f0ea.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.jiaminghi.5dc363f2.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.lodash.b721f39f.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.m3u8-parser.7acf0203.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.moment.9be704ac.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.mpd-parser.0329055e.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.regenerator-runtime.59fa7da5.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.resize-observer-polyfill.bccee26e.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.svg-sprite-loader.09d4a0b8.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.video.js.d64884bd.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.videojs.c22b9152.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.videojs-contrib-hls.e31e2426.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.videojs-contrib-media-sources.b21d8bbc.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.videojs-vtt.js.91327d29.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.vue.a19247bb.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.vue-router.8478eeec.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.vuex.4ddb6028.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.xmldom.0619ae22.js")
    splash:autoload("http://wenhua.gttx.com/js/chunk.zrender.92cd5a3d.js")
    splash:autoload("http://wenhua.gttx.com/js/vendors-app.107df505.js")
    splash:autoload("http://wenhua.gttx.com/js/app.dcae9c9b.js")
    assert(splash:go(args.url))
    assert(splash:wait(1))
    return {
      html = splash:html(),
      png = splash:png(),
      har = splash:har(),
      cookies=splash:get_cookies(),
    }
  end