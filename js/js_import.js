if (typeof js === 'undefined') {
    js = {};
}
js.import = (fileUrl) => {
    var importerAdded = false;
    for (let i = 0; i < document.getElementsByTagName('script').length; i++) {
        var doc = document.getElementsByTagName('script')[i];
        if (doc.getAttribute('src') === fileUrl) {
            importerAdded = true;
        }
    }
    if (!importerAdded) {
        var head = document.head;
        var link = document.createElement('script');
        link.setAttribute('src',fileUrl);
        head.append(link);
    } else {
        console.error('File Already Added');
    }
}
