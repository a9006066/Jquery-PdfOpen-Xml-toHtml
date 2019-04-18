//取得匯率
(function () {
    $.get("https://aegonrwdtest.moneydj.com/w/djxml/RateData.djxml", (xml) => {
        let datas = [];
        let datasTemp = [];
        let xmlStr = $(xml).find("CotaRate Row");

        xmlStr.each((i, elemt) => {
            let doc = $(elemt)[0];
            let key = doc.getAttribute("V2");
            let date = doc.getAttribute("V3");
            let buy = doc.getAttribute("V4");
            let sell = doc.getAttribute("V5");

            $('#rightTable_2 tbody')
                .append("<tr></tr>")
                .append("<td>" + key + "</td>")
                .append("<td>" + date + "</td>")
                .append("<td>" + buy + "</td>")
                .append("<td>" + sell + "</td>")

        })

    })
})()




$("#openPDF").click(function() {

    PDFJS.getDocument('https://cdn.rawgit.com/mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf').then(function(pdf) {
        for (var pageNum = 1; pageNum < pdf.numPages; ++pageNum) {
          pdf.getPage(pageNum).then(function(page) {
            // you can now use *page* here
      
            var scale = 1.5;
            var viewport = page.getViewport(1);
      
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
      
            var renderContext = {
              canvasContext: context,
              viewport: viewport
            };
            page.render(renderContext);
      
            document.getElementById('pdf-container').appendChild(canvas);
          });
        }
      })


})



