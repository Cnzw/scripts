console.log(` 序号 ID 昵称 关注时间戳(s) 截止时间戳(ms) `) // 列表全部字段

let putData = () => {

    for (let num = 0; num < 20; num++) {

        let data0 = { name: $('.fans-name')[num].innerHTML, id: $('.up-cover-components').eq(num).attr('href').match(/\/\/space.bilibili.com\/(\d+)/)[1] } // ID用户名

        let data2 = $.ajax({ url: `https://api.bilibili.com/x/relation?fid=${data0.id}&jsonp=jsonp&callback`, async: false, xhrFields: { withCredentials: true } }) // 关注时间戳

        user27 = JSON.parse(data2.responseText).data.mtime; // 关注时间戳(s)

        user28 = new Date().getTime() // 截止时间戳(ms)

        console.log(` ${num + 1} ${data0.id} ${data0.name} ${user27} ${user28} `)

    }
}

putData();
