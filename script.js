let loadData = {
  tableId: "main-table",
  load: function (jsonData) {
    this.createHeader(Object.keys(jsonData.services[0]));
    this.insertRows(jsonData.services);
  },
  createHeader: function (titles) {
    const el = document.getElementById(this.tableId);
    if (el) {
      const header = el.querySelector("thead tr");
      if (header) {
        titles.forEach(element => {
          let el = document.createElement("th");
          el.innerHTML = element;
          header.appendChild(el);
        });
      }
    }
  },
  insertRows: function (items) {
    const el = document.getElementById(this.tableId);
    if (el) {
      const body = el.querySelector("tbody");
      if (body) {
        items.forEach(element => {
          let elTr = document.createElement("tr");

          let titles = Object.keys(element);
          titles.forEach(title => {
            let elTd = document.createElement("td");
            if (title == "Status") {
              elTd.innerHTML = element[title]["title"];
              elTd.className = element[title]["class"];
            } else {
              elTd.innerHTML = element[title];
            }
            elTr.appendChild(elTd);
          });
          body.appendChild(elTr);
        });
      }
    }
  }

}

let loader = {
  show: function () {
    document.getElementById("loader").style.display = "block";
  },
  hide: function () {
    document.getElementById("loader").style.display = "none";
  }
}

window.addEventListener('load', function (event) {
  loader.show();
  setTimeout(function (event) {
    loadData.load(jsonData);
    loader.hide();
  }, 2000);
});
