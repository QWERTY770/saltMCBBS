/// <reference path="saltMCBBS.d.ts"/>

interface Window {
    saltMCBBSCSS: saltMCBBScss,
    saltMCBBS: saltMCBBS,
    saltMCBBSOriginClass: saltMCBBSOriginClass,
    // jQuery: any, // 有需要的话请自行导入jQuery的定义文件
    /**用户的uid，未登录则为0 */
    discuz_uid: string,
    /**切换编辑器模式( 0纯文本 1所见即所得 )仅在编辑器页面启用*/
    switchEditor?: (type: 0 | 1) => void,
    /**帖子的tid，仅在浏览帖子的页面存在 */
    tid?: string,
    /**切换页面主题 冬季、默认、下界 */
    extstyle: (
        styleType: './template/mcbbs/style/winter' | './template/mcbbs/style/default' | './template/mcbbs/style/nether'
    ) => void,
}
interface HTMLElement {
    /**
     * 批量添加class到元素
     * @param classes 要添加的class用空格隔开
     */
    addClass(classes: string): void,
    /**
     * 切换元素的class，没有switch开关
     * @param classes 
     */
    toggleClass(classes: string): void,
    /**
     * 检查是否包含某个元素
     * @param classes 
     */
    hasClass(OneClass: string): boolean,
    /**
     * 批量移除元素的class
     * @param classes 
     */
    removeClass(classes: string): void,
    /**
     * 返回元素到页面顶部和左边的距离
     * @returns top: 顶部距离; left: 左边距离
     */
    offset(): { top: number, left: number },
}
