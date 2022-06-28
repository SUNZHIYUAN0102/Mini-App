// pages/contact/contact.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        colorList: [],
        isLoading: false
    },

    goToInfo() {
        wx.navigateTo({
            url: '/pages/info/info',
        })
    },

    getColors() {
        this.setData({
            isLoading: true
        })
        wx.showLoading({
          title: 'Loading......',
        })
        wx.request({
            url: 'https://www.escook.cn/api/color',
            method: 'GET',
            success: (res) => {
                this.setData({
                    colorList: [...this.data.colorList, ...res.data.data]
                })
            },
            complete: ()=>{
                wx.hideLoading()
                this.setData({
                    isLoading: false
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getColors()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        console.log('onReady');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        console.log('onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
        console.log('onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        console.log('onUnload');
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
        if(!this.data.isLoading){
            this.getColors();
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})