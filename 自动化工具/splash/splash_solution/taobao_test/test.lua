function main(splash, args)
  splash.images_enabled = false
-- 添加淘宝的cookie
  assert(splash:go(args.url))
  splash:init_cookies({
    {name="thw", value="us"},
    {name="t", value="3f67e5167347da1dd1edcce6a6d4f268"},
    {name="_tb_token_", value="710be73131be3"},
    {name="xlly_s", value="1"},
    {name="_m_h5_tk", value="69d92e21c0414c12ea5a6c4565e7298e_1679214651967"},
    {name="_m_h5_tk_enc", value="447d582985e6f4d75a9a55b540802863"},
    {name="mt", value="ci=0_0"},
    {name="cna", value="su2QHDAXHR4BASQJiijj0y+z"},
    {name="isg", value="BMbGrXI23seqdo3f0dWZxyyeF7xIJwrhhXp9Y7DvsunEs2bNGLda8axBj-9_AAL5"},
    {name="l", value="fBElX6hPT7nkkGUSBOfaFurza77OSIRYYuPzaNbMi9fP_25B5wQPW1MPkmL6C3GVF6ypR3o-P8F6BeYBqQAonxv92j-la_kmndLHR35.."},
    {name="tfstk", value="cwRCBFXnEkqCCphutMgZzSoR8Q1RwAm1SvspRDbpZpTh1i1cVSSbb-vuj_7R5"}
  })

  assert(splash:go(args.url))
  assert(splash:wait(1))

  return {
    html = splash:html(),
    png = splash:png(),
    cookie=splash:get_cookies(),
  }
end