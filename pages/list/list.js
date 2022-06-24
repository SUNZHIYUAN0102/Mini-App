// pages/list/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info: 'hello world',
        imgSrc: 'https://picsum.photos/200',
        randomNum: Math.random() * 10,
        randomNum2: Math.random().toFixed(2),
        count: 0,
        msg: 'hello',
        type: 1,
        flag: true
    },

    btnTapHandler(e) {
        console.log(e);
    },

    countChange() {
        this.setData({
            count: ++this.data.count
        })
    },

    btnTap2(e){
        this.setData({
            count: this.data.count + e.target.dataset.info
        })
    },

    inputHandler(e){
        this.setData({
            msg: e.detail.value
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})