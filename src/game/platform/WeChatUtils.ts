export default class WeChatUtils {
    private static _instance: WeChatUtils;

    constructor() {
    }

    public static get instance(): WeChatUtils {
        !WeChatUtils._instance && (WeChatUtils._instance = new WeChatUtils());
        return WeChatUtils._instance;
    }

    public login() {
        wx.login({
            pkgName: "testPackage",
            success(res) {
                console.log(res);
                wx.request({
                    url: 'https://login.xueyan.online/cgi-bin/auth',
                    data: res.code,
                    method: 'POST',
                    header: { 'content-type': 'application/json' },
                    dataType: 'json',
                    responseType: 'text',
                    success(res) {
                        console.log(res);
                    },
                    fail() { },
                    complete() { }

                });
            },
            fail() { },
            complete() { }
        });
    }
}