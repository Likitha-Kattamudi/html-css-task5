var personName;
var email;
var mobile;
var landLine;
var webSite;
var address;
var highlightedDiv = [];
var currentDiv = null;
var currentId = null;
var controlVariable1 = 0;
var allowVariable = 1;
var controlVariable2 = 0;
var addButton = document.getElementById("addNewMember");
var homeButton = document.getElementById("homeButton");
window.addEventListener("load", () => {
  homeButton.classList.remove("hoverOnDivision2");
});
document.getElementById("addNewMember").addEventListener("click", () => {
  allowVariable = 0;
  document.getElementsByClassName("hoverOnDivision1")[1].style.backgroundColor =
    "orange";
  homeButton.classList.add("hoverOnDivision2");
  homeButton.classList.remove("homeButtonStyling");
  addButton.classList.remove("hoverOnDivision2");

  document.getElementsByClassName("flexItem4-2")[0].style.display = "block";
  document.getElementsByClassName("flexItem4-4")[0].style.display = "none";
  // document.getElementById(highlightedDiv[0]).style.backgroundColor = "white";
  document.getElementsByClassName("flexItem4-3")[0].innerHTML = "";
  currentDiv = null;
  currentId = null;
});
document.getElementById("button1").addEventListener("click", (e) => {
  personName = document.getElementById("name").value;
  email = document.getElementById("email").value;
  mobile = document.getElementById("mobile").value;
  landLine = document.getElementById("landLine").value;
  webSite = document.getElementById("webSite").value;
  address = document.getElementById("address").value;
  controlVariable2 += 1;
  if (controlVariable1 == 1) {
    editCancel();
  }
  allowVariable = 1;
  e.preventDefault();
  formValidation();
});
let formValidation = () => {
  if (allowVariable == 1) {
    var count = 0;
    if (personName == "" || webSite == "" || address == "") {
      document.getElementById("validationMessage").innerHTML =
        "Please fill all the required fields below";
    } else {
      document.getElementById("validationMessage").innerHTML = "";
      count += 1;
    }
    if (email == "") {
      document.getElementById("validationMessage").innerHTML =
        "Please fill all the required fields below";
      document.getElementById("labelText1").innerHTML = "Email is Required";
      document.getElementById("labelText1").style.visibility = "visible";
      document.getElementById("labelText1").style.color = "red";
    } else {
      var regx1 = /^([a-z])([a-z 0-9]+)@([a-z]+)\.([a-z]+)$/;
      if (!regx1.test(email)) {
        document.getElementById("labelText1").innerHTML = "Email is InValid";
        document.getElementById("labelText1").style.visibility = "visible";
        document.getElementById("labelText1").style.color = "red";
      } else {
        document.getElementById("labelText1").style.visibility = "hidden";
        count += 1;
      }
    }
    if (mobile == "") {
      document.getElementById("validationMessage").innerHTML =
        "Please fill all the required fields below";
      document.getElementById("labelText2").innerHTML =
        "Mobile is required and should be 10 digits";
      const labelText2Styling = document.querySelector("#labelText2");
      labelText2Styling.style.cssText =
        "visibility:visible; color:red; font-size:8px";
    } else {
      var regx2 = /^[7-9][0-9]{9}$/;
      if (!regx2.test(mobile)) {
        document.getElementById("labelText2").innerHTML =
          "Mobile is required and should be 10 digits";
        const labelText2Styling = document.querySelector("#labelText2");
        labelText2Styling.style.cssText =
          "visibility:visible; color:red; font-size:8px";
        document.getElementById("labelText2").style.visibility = "visible";
        document.getElementById("labelText2").style.color = "red";
      } else {
        document.getElementById("labelText2").style.visibility = "hidden";
        count += 1;
      }
    }
    if (landLine == "") {
      document.getElementById("validationMessage").innerHTML =
        "Please fill all the required fields below";
      document.getElementById("labelText3").innerHTML =
        "LandLine is required and should be 12 digits and should start with 0";
      const labelText3Styling = document.querySelector("#labelText3");
      labelText3Styling.style.cssText =
        "visibility:visible; color:red; font-size:8px;";
      /*document.getElementById("labelText3").style.visibility = "visible";
      document.getElementById("labelText3").style.color = "red";
      document.getElementById("labelText3").style.fontSize = "11px";
      document.getElementById("labelText3").style.fontSize = "11px";*/
    } else {
      var regx3 = /^[0][0-9]{11}$/;
      if (!regx3.test(landLine)) {
        document.getElementById("labelText3").innerHTML =
          "LandLine is required and should be 12 digits and should start with 0";
        const labelText3Styling = document.querySelector("#labelText3");
        labelText3Styling.style.cssText =
          "visibility:visible; color:red; font-size:8px;";
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
      homeButton.classList.remove("hoverOnDivision2");
      homeButton.classList.add("homeButtonStyling");

      acceptData();
    }
  }
};
let data = [];
let acceptData = () => {
  data.push({
    personName: personName,
    email: email,
    mobile: mobile,
    landLine: landLine,
    webSite: webSite,
    address: address,
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
  <div style="padding-bottom:5px;">
  <span id="nameStyling">${x.personName}</span>
  </div>
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
  personName = "";
  email = "";
  mobile = "";
  landLine = "";
  webSite = "";
  address = "";
  document.getElementsByClassName("flexItem4-2")[0].style.display = "none";
  document.getElementsByClassName("flexItem4-4")[0].style.display = "block";
};
let displayData = (id, e) => {
  if (allowVariable == 1) {
    currentId = id;
    currentDiv = e;
    highlightedDiv.push(id);

    if (highlightedDiv[0] == id) {
      document.getElementById(id).style.backgroundColor = "#ADD8E6";
    } else {
      document.getElementById(highlightedDiv[0]).style.backgroundColor =
        "white";
      document.getElementById(id).style.backgroundColor = "#ADD8E6";
      highlightedDiv = [];
      highlightedDiv.push(id);
    }

    document.getElementsByClassName("flexItem4-3")[0].innerHTML = "";
    data.map((x, y) => {
      if (y == id) {
        document.getElementsByClassName(
          "flexItem4-3"
        )[0].innerHTML = `<label id="headingStyling">${x.personName}</label><table class="tableStyling3">
  <tr>
  <td class="tableDataStyling1">Email:</td>
    <td class="tableDataStyling1">${x.email}</td>
  </tr>
  <tr>
  <td id="tableDataStyling2">Mobile:</td>
    <td id="tableDataStyling2">${x.mobile}</td>
  </tr>
  <tr><td class="tableDataStyling1">LandLine:</td>
    <td class="tableDataStyling1">${x.landLine}</td>
  </tr>
  <tr>
  <td class="tableDataStyling1">Website:</td>
    <td class="tableDataStyling1">${x.webSite}</td>
  </tr>
  <tr>
  <td class="tableDataStyling1" id="addressStyling1">Address:</td>
    <td class="tableDataStyling1" id="addressStyling2"><span>${x.address}<span/></td>

  </tr>

</table>`;
      }
    });
  }
};

let deleteData = () => {
  if (currentDiv == null && currentId == null) {
  } else {
    highlightedDiv.pop();
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
        controlVariable1 += 1;
        document.getElementById("name").value = x.personName;
        document.getElementById("email").value = x.email;
        document.getElementById("mobile").value = x.mobile;
        document.getElementById("landLine").value = x.landLine;
        document.getElementById("webSite").value = x.webSite;
        document.getElementById("address").value = x.address;
      }
    });
  }
};
let editCancel = () => {
  currentDiv.remove();
  //localStorage.removeItem("data[p]");
  data.splice(currentId, 1);
  localStorage.clear();
  controlVariable1 = 0;
  currentDiv = null;
  currentId = null;
};
document.getElementById("button2").addEventListener("click", () => {
  if (controlVariable1 == 1) {
    document.getElementsByClassName("flexItem4-2")[0].style.display = "none";
    document.getElementsByClassName("flexItem4-4")[0].style.display = "block";
    controlVariable1 = 0;
  } else if (controlVariable1 == 0 && controlVariable2 == 1) {
    document.getElementsByClassName("flexItem4-2")[0].style.display = "none";
    document.getElementsByClassName("flexItem4-4")[0].style.display = "block";
    controlVariable2 = 0;
  }
});
(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  createTasks();
})();
