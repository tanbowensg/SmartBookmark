myapp = new BookmarkManager()
myapp.init()

chrome.webNavigation.onCompleted.addListener(function(details) {
    var url, title, domain, domainNum
        // 先判断frameId，只有当0的时候才是主窗口，其余的都是别的frame
    if (details.frameId === 0) {
        // 通过details里的tabId，拿到tab，再通过tab拿到title
        // chrome.tabs.get(details.tabId,function(tab){
        //     title=tab.title
        // })

        url = details.url

        myapp.updateData(url)

        myapp.saveData('data')

        console.log(domain)
        console.log(myapp.data[domainNum]["times"])
    }
})