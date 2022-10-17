var PersonName = document.getElementById("name");
var email = document.getElementById("email");
var mobile = document.getElementById("mobile");
var landLine = document.getElementById("landLine");
var webSite = document.getElementById("webSite");
var address = document.getElementById("address");
var x = [];
var currentDiv = null;
var currentId = null;
var controlVariable = 0;
var allowVariable = 1;
var addButton = document.getElementById("addNewMember");
var homeButton = document.getElementById("homeButton");
document.getElementById("addNewMember").addEventListener("click", () => {
  allowVariable = 0;
  document.getElementsByClassName("hoverOnDivision1")[1].style.backgroundColor =
    "orange";
  addButton.classList.remove("hoverOnDivision2");
  homeButton.classList.remove("hoverOnDivision2");

  document.getElementsByClassName("flexItem4-2")[0].style.display = "block";
  document.getElementsByClassName("flexItem4-4")[0].style.display = "none";
  document.getElementById(x[0]).style.backgroundColor = "white";
  document.getElementsByClassName("flexItem4-3")[0].innerHTML = "";
  currentDiv = null;
  currentId = null;
});
document.getElementById("button1").addEventListener("click", (e) => {
  allowVariable = 1;
  e.preventDefault();
  formValidation();
});
let formValidation = () => {
  if (allowVariable == 1) {
    var count = 0;
    if (PersonName.value == "" || webSite.value == "" || address.value == "") {
      document.getElementById("validationMessage").innerHTML =
        "Please fill all the required fields below";
    } else {
      document.getElementById("validationMessage").innerHTML = "";
      count += 1;
    }
    if (email.value == "") {
      document.getElementById("validationMessage").innerHTML =
        "Please fill all the required fields below";
      document.getElementById("labelText1").innerHTML = "Email is Required";
      document.getElementById("labelText1").style.visibility = "visible";
      document.getElementById("labelText1").style.color = "red";
    } else {
      var regx1 = /^([a-z])([a-z 0-9]+)@([a-z]+)\.([a-z]+)$/;
      if (!regx1.test(email.value)) {
        document.getElementById("labelText1").innerHTML = "Email is InValid";
        document.getElementById("labelText1").style.visibility = "visible";
        document.getElementById("labelText1").style.color = "red";
      } else {
        document.getElementById("labelText1").style.visibility = "hidden";
        count += 1;
      }
    }
    if (mobile.value == "") {
      document.getElementById("validationMessage").innerHTML =
        "Please fill all the required fields below";
      document.getElementById("labelText2").innerHTML = "Mobile is Required";
      document.getElementById("labelText2").style.visibility = "visible";
      document.getElementById("labelText2").style.color = "red";
    } else {
      var regx2 = /^[7-9][0-9]{9}$/;
      if (!regx2.test(mobile.value)) {
        document.getElementById("labelText2").innerHTML = "Mobile is InValid";
        document.getElementById("labelText2").style.visibility = "visible";
        document.getElementById("labelText2").style.color = "red";
      } else {
        document.getElementById("labelText2").style.visibility = "hidden";
        count += 1;
      }
    }
    if (landLine.value == "") {
      document.getElementById("validationMessage").innerHTML =
        "Please fill all the required fields below";
      document.getElementById("labelText3").innerHTML = "LandLine is Required";
      document.getElementById("labelText3").style.visibility = "visible";
      document.getElementById("labelText3").style.color = "red";
    } else {
      var regx3 = /^[0][0-9]{11}$/;
      if (!regx3.test(landLine.value)) {
        document.getElementById("labelText3").innerHTML = "LandLine is InValid";
        document.getElementById("labelText3").style.visibility = "visible";
        document.getElementById("labelText3").style.color = "red";
      } else {
        document.getElementById("labelText3").style.visibility = "hidden";
        count += 1;
      }
    }
    if (count == 4) {
      document.getElementsByClassName(
        "hoverOnDivision1"
      )[1].style.backgroundColor = null;
      addButton.classList.add("hoverOnDivision2");
      homeButton.classList.add("hoverOnDivision2");

      acceptData();
    }
  }
};
let data = [];
let acceptData = () => {
  data.push({
    PersonName: PersonName.value,
    email: email.value,
    mobile: mobile.value,
    landLine: landLine.value,
    webSite: webSite.value,
    address: address.value,
  });
  createTasks();
  localStorage.setItem("data", JSON.stringify(data));
};
let createTasks = () => {
  document.getElementsByClassName("flexItem4-1")[0].innerHTML = "";
  data.map(
    (x, y) =>
      (document.getElementsByClassName(
        "flexItem4-1"
      )[0].innerHTML += `<div id=${y} onclick="displayData(id,this)">
  <div>
  <span id="nameStyling">${x.PersonName}</span>
  </div>
  <br>
  <div>
  <span id="emailStyling">
   ${x.email}
  </span><br>
<span id="mobileNumberStyling">+91 ${x.mobile}</span>
</div>
</div>`)
  );
  resetForm();
};
let resetForm = () => {
  PersonName.value = "";
  email.value = "";
  mobile.value = "";
  landLine.value = "";
  webSite.value = "";
  address.value = "";
  document.getElementsByClassName("flexItem4-2")[0].style.display = "none";
  document.getElementsByClassName("flexItem4-4")[0].style.display = "block";
};
let displayData = (id, e) => {
  if (allowVariable == 1) {
    currentId = id;
    currentDiv = e;
    x.push(id);

    if (x[0] == id) {
      document.getElementById(id).style.backgroundColor = "#ADD8E6";
    } else {
      document.getElementById(x[0]).style.backgroundColor = "white";
      document.getElementById(id).style.backgroundColor = "#ADD8E6";
      x = [];
      x.push(id);
    }

    document.getElementsByClassName("flexItem4-3")[0].innerHTML = "";
    data.map((x, y) => {
      if (y == id) {
        document.getElementsByClassName(
          "flexItem4-3"
        )[0].innerHTML = `<table class="tableStyling3">
  <tr>
  <th id="headingStyling">${x.PersonName}</th>
  <td></td></tr>
  <tr>
    <td>Email:${x.email}</td>
  </tr>
  <tr><td></td></tr>
  <tr>
    <td>Mobile:${x.mobile}</td>
  </tr>
  <tr>
    <td>landline:${x.landLine}</td>
  </tr>
  <tr><td></td></tr>
  <tr>
    <td>Website:${x.webSite}</td>
  </tr>
  <tr><td></td></tr>
  <tr>
    <td width="5px"><span id="addressStyling">Address:${x.address}<span/></td>

  </tr>

</table>`;
      }
    });
  }
};

let deleteData = () => {
  if (currentDiv == null && currentId == null) {
  } else {
    x.pop();
    currentDiv.remove();
    //localStorage.removeItem("data[p]");
    document.getElementsByClassName("flexItem4-3")[0].innerHTML = "";
    data.splice(currentId, 1);
    localStorage.clear();
    localStorage.setItem("data", JSON.stringify(data));
    data = JSON.parse(localStorage.getItem("data"));
    createTasks();
    currentDiv = null;
    currentId = null;
  }
};
let editData = () => {
  if (currentDiv == null && currentId == null) {
  } else {
    document.getElementsByClassName("flexItem4-2")[0].style.display = "block";
    document.getElementsByClassName("flexItem4-4")[0].style.display = "none";
    document.getElementsByClassName("flexItem4-3")[0].innerHTML = "";
    data.map((x, y) => {
      if (y == currentId) {
        controlVariable += 1;
        document.getElementById("name").value = x.PersonName;
        document.getElementById("email").value = x.email;
        document.getElementById("mobile").value = x.mobile;
        document.getElementById("landLine").value = x.landLine;
        document.getElementById("webSite").value = x.webSite;
        document.getElementById("address").value = x.address;
      }
    });

    if (controlVariable == 1) {
      currentDiv.remove();
      //localStorage.removeItem("data[p]");
      data.splice(currentId, 1);
      localStorage.clear();
      controlVariable = 0;
      currentDiv = null;
      currentId = null;
    }
  }
};
(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  createTasks();
})();
