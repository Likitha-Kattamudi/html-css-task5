if (typeof window !== "undefined") {
  interface DataInput {
    personName: string;
    email: string;
    mobile: string;
    landLine: string;
    webSite: string;
    address: string;
  }
  var duplicateId: any;
  var personName: string;
  var email: string;
  var mobile: string;
  var landLine: string;
  var webSite: string;
  var address: string;
  var highlightedDiv: Array<string> = [];
  var currentDiv: any = null;
  var currentId: any = null;
  var controlVariable1 = 0;
  var allowVariable = 1;
  var controlVariable2 = 0;
  var deleteHighlighted = 0;
  var addButton = document.getElementById("addNewMember") as HTMLButtonElement;
  var homeButton = document.getElementById("homeButton") as HTMLButtonElement;
  window.addEventListener("load", () => {
    homeButton.classList.remove("hoverOnDivision2");
  });
  addButton.addEventListener("click", () => {
    if (deleteHighlighted == 1) {
      var id1 = document.getElementById(duplicateId) as HTMLDivElement;
      id1.style.backgroundColor = "white";
      deleteHighlighted = 0;
      highlightedDiv = [];
    }
    allowVariable = 0;
    var hoverOnDivision: any =
      document.getElementsByClassName("hoverOnDivision1")[1];
    hoverOnDivision.style.backgroundColor = "orange";
    homeButton.classList.add("hoverOnDivision2");
    homeButton.classList.remove("homeButtonStyling");
    addButton.classList.remove("hoverOnDivision2");

    var flexItem4_2 = document.getElementsByClassName(
      "flexItem4-2"
    )[0] as HTMLDivElement;
    flexItem4_2.style.display = "block";
    var flexItem4_4 = document.getElementsByClassName(
      "flexItem4-4"
    )[0] as HTMLDivElement;
    flexItem4_4.style.display = "none";
    // document.getElementById(highlightedDiv[0]).style.backgroundColor = "white";
    document.getElementsByClassName("flexItem4-3")[0].innerHTML = "";
    currentDiv = null;
    currentId = null;
  });
  var button1 = document.getElementById("button1") as HTMLButtonElement;
  button1.addEventListener("click", (e) => {
    var nameTs = document.getElementById("name") as HTMLInputElement;
    personName = nameTs.value;
    var emailTs = document.getElementById("email") as HTMLInputElement;
    email = emailTs.value;
    var mobileTs = document.getElementById("mobile") as HTMLInputElement;
    mobile = mobileTs.value;
    var landLineTs = document.getElementById("landLine") as HTMLInputElement;
    landLine = landLineTs.value;
    var webSiteTs = document.getElementById("webSite") as HTMLInputElement;

    webSite = webSiteTs.value;
    var addressTs = document.getElementById("address") as HTMLTextAreaElement;
    address = addressTs.value;
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
      var validationMessage: any = document.getElementById("validationMessage");
      var labelText1: any = document.getElementById("labelText1");
      var labelText2: any = document.getElementById("labelText2");
      var labelText3: any = document.getElementById("labelText3");
      if (personName == "" || webSite == "" || address == "") {
        validationMessage.innerHTML =
          "Please fill all the required fields below";
      } else {
        validationMessage.innerHTML = "";
        count += 1;
      }
      if (email == "") {
        validationMessage.innerHTML =
          "Please fill all the required fields below";
        labelText1.innerHTML = "Email is Required";
        labelText1.style.visibility = "visible";
        labelText1.style.color = "red";
      } else {
        var regx1 = /^([a-z])([a-z 0-9]+)@([a-z]+)\.([a-z]+)$/;
        if (!regx1.test(email)) {
          labelText1.innerHTML = "Email is InValid";
          labelText1.style.visibility = "visible";
          labelText1.style.color = "red";
        } else {
          labelText1.style.visibility = "hidden";
          count += 1;
        }
      }
      if (mobile == "") {
        validationMessage.innerHTML =
          "Please fill all the required fields below";
        labelText2.innerHTML = "Mobile is required and should be 10 digits";
        const labelText2Styling: any = document.querySelector("#labelText2");
        labelText2Styling.style.cssText =
          "visibility:visible; color:red; font-size:8px";
      } else {
        var regx2 = /^[7-9][0-9]{9}$/;
        if (!regx2.test(mobile)) {
          labelText2.innerHTML = "Mobile is required and should be 10 digits";
          const labelText2Styling: any = document.querySelector("#labelText2");
          labelText2Styling.style.cssText =
            "visibility:visible; color:red; font-size:8px";
          labelText2.style.visibility = "visible";
          labelText2.style.color = "red";
        } else {
          labelText2.style.visibility = "hidden";
          count += 1;
        }
      }
      if (landLine == "") {
        validationMessage.innerHTML =
          "Please fill all the required fields below";
        labelText3.innerHTML =
          "LandLine is required and should be 12 digits and should start with 0";
        const labelText3Styling: any = document.querySelector("#labelText3");
        labelText3Styling.style.cssText =
          "visibility:visible; color:red; font-size:8px;";
        /*document.getElementById("labelText3").style.visibility = "visible";
          document.getElementById("labelText3").style.color = "red";
          document.getElementById("labelText3").style.fontSize = "11px";
          document.getElementById("labelText3").style.fontSize = "11px";*/
      } else {
        var regx3 = /^[0][0-9]{11}$/;
        if (!regx3.test(landLine)) {
          labelText3.innerHTML =
            "LandLine is required and should be 12 digits and should start with 0";
          const labelText3Styling: any = document.querySelector("#labelText3");
          labelText3Styling.style.cssText =
            "visibility:visible; color:red; font-size:8px;";
          labelText3.style.visibility = "visible";
          labelText3.style.color = "red";
        } else {
          labelText3.style.visibility = "hidden";
          count += 1;
        }
      }
      if (count == 4) {
        var hoverOnDivision1: any =
          document.getElementsByClassName("hoverOnDivision1")[1];
        hoverOnDivision1.style.backgroundColor = null;

        addButton.classList.add("hoverOnDivision2");
        homeButton.classList.remove("hoverOnDivision2");
        homeButton.classList.add("homeButtonStyling");

        acceptData();
      }
    }
  };
  let data: Array<DataInput> = [];
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
    var flexItem4_1 = document.getElementsByClassName(
      "flexItem4-1"
    )[0] as HTMLDivElement;
    flexItem4_1.innerHTML = "";
    data.map(
      (x, y) =>
        (flexItem4_1.innerHTML += `<div id=${y} onclick="displayData(id,this)">
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
    var flexItem4_2 = document.getElementsByClassName(
      "flexItem4-2"
    )[0] as HTMLDivElement;
    flexItem4_2.style.display = "none";
    var flexItem4_4 = document.getElementsByClassName(
      "flexItem4-4"
    )[0] as HTMLDivElement;
    flexItem4_4.style.display = "block";
  };
  let displayData = (id, e) => {
    deleteHighlighted = 1;
    duplicateId = id;
    if (allowVariable == 1) {
      currentId = id;
      currentDiv = e;
      highlightedDiv.push(id);

      if (highlightedDiv[0] == id) {
        if (typeof id !== "undefined") {
          var id1 = document.getElementById(id) as HTMLDivElement;
          id1.style.backgroundColor = "#ADD8E6";
        }
      } else {
        if (typeof id !== "undefined") {
          var highLightedDivTs = document.getElementById(
            highlightedDiv[0]
          ) as HTMLDivElement;
          highLightedDivTs.style.backgroundColor = "white";
          var id1 = document.getElementById(id) as HTMLDivElement;
          id1.style.backgroundColor = "#ADD8E6";
          highlightedDiv = [];
          highlightedDiv.push(id);
        }
      }
      var flexItem4_3 = document.getElementsByClassName(
        "flexItem4-3"
      )[0] as HTMLDivElement;
      flexItem4_3.innerHTML = "";
      data.map((x, y) => {
        if (y == id) {
          flexItem4_3.innerHTML = `<label id="headingStyling">${x.personName}</label><table class="tableStyling3">
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
      data = JSON.parse(localStorage.getItem("data")!);
      createTasks();
      currentDiv = null;
      currentId = null;
    }
  };
  let editData = () => {
    if (currentDiv == null && currentId == null) {
    } else {
      var flexItem4_2 = document.getElementsByClassName(
        "flexItem4-2"
      )[0] as HTMLDivElement;
      flexItem4_2.style.display = "block";
      var flexItem4_4 = document.getElementsByClassName(
        "flexItem4-4"
      )[0] as HTMLDivElement;
      flexItem4_4.style.display = "none";
      var flexItem4_3 = document.getElementsByClassName(
        "flexItem4-3"
      )[0] as HTMLDivElement;
      flexItem4_3.innerHTML = "";
      data.map((x, y) => {
        if (y == currentId) {
          controlVariable1 += 1;
          var nameTs = document.getElementById("name") as HTMLInputElement;
          nameTs.value = x.personName;
          var emailTs = document.getElementById("email") as HTMLInputElement;
          emailTs.value = x.email;
          var mobileTs = document.getElementById("mobile") as HTMLInputElement;
          mobileTs.value = x.mobile;
          var landLineTs = document.getElementById(
            "landLine"
          ) as HTMLInputElement;
          landLineTs.value = x.landLine;
          var webSiteTs = document.getElementById(
            "webSite"
          ) as HTMLInputElement;
          webSiteTs.value = x.webSite;
          var addressTs = document.getElementById(
            "address"
          ) as HTMLTextAreaElement;
          addressTs.value = x.address;
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
  var button2 = document.getElementById("button2") as HTMLButtonElement;
  button2.addEventListener("click", () => {
    if (controlVariable1 == 1) {
      var flexItem4_2 = document.getElementsByClassName(
        "flexItem4-2"
      )[0] as HTMLDivElement;
      flexItem4_2.style.display = "none";
      var flexItem4_4 = document.getElementsByClassName(
        "flexItem4-4"
      )[0] as HTMLDivElement;
      flexItem4_4.style.display = "block";
      controlVariable1 = 0;
    } else if (controlVariable1 == 0 && controlVariable2 == 1) {
      var flexItem4_2 = document.getElementsByClassName(
        "flexItem4-2"
      )[0] as HTMLDivElement;
      flexItem4_2.style.display = "none";
      var flexItem4_4 = document.getElementsByClassName(
        "flexItem4-4"
      )[0] as HTMLDivElement;
      flexItem4_4.style.display = "block";
      controlVariable2 = 0;
    }
  });
  (() => {
    data = JSON.parse(localStorage.getItem("data")!) || [];
    createTasks();
  })();
}
