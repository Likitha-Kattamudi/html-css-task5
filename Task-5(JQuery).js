var personName;
var email;
var mobile;
var landLine;
var webSite;
var address;
var currentDiv = null;
var currentId = null;
var controlVariable1 = 0;
var allowVariable = 1;
var controlVariable2 = 0;
jQuery(document).ready(function ($) {
  $("#homeButton").removeClass("hoverOnDivision2");
  $("#addNewMember").click(function () {
    allowVariable = 0;
    $("#addNewMember").addClass("homeButtonStyling");
    $("#homeButton").addClass("hoverOnDivision2");

    $("#homeButton").removeClass("homeButtonStyling");

    $("#addNewMember").removeClass("hoverOnDivision2");

    $("#flexItem4-2").css("display", "block");
    $("#flexItem4-4").css("display", "none");

    $("#flexItem4-3").html("");
    currentDiv = null;
    currentId = null;
  });
  $("#button1").click(function (e) {
    personName = $("#name").val();
    email = $("#email").val();
    mobile = $("#mobile").val();
    landLine = $("#landLine").val();
    webSite = $("#webSite").val();
    address = $("#address").val();
    if (controlVariable1 == 1) {
      editCancel();
    }
    allowVariable = 1;
    e.preventDefault();
    formValidation();
  });
  function formValidation() {
    if (allowVariable == 1) {
      var count = 0;
      if (personName == "" || webSite == "" || address == "") {
        $("#validationMessage").html(
          "Please fill all the required fields below"
        );
      } else {
        $("#validationMessage").html("");
        count += 1;
      }
      if (email == "") {
        $("#validationMessage").html(
          "Please fill all the required fields below"
        );
        $("#labelText1").html("Email is Required");
        $("#labelText1").css({ visibility: "visible", color: "red" });
      } else {
        var regx1 = /^([a-z])([a-z 0-9]+)@([a-z]+)\.([a-z]+)$/;
        if (!regx1.test(email)) {
          $("#labelText1").html("Email is InValid");
          $("#labelText1").css({ visibility: "visible", color: "red" });
        } else {
          $("#labelText1").css("visibility", "hidden");
          count += 1;
        }
      }
      if (mobile == "") {
        $("#validationMessage").html(
          "Please fill all the required fields below"
        );
        $("#labelText2").html("Mobile is required and should be 10 digits");
        $("#labelText2").css({
          visibility: "visible",
          color: "red",
          "font-size": "8px",
        });
      } else {
        var regx2 = /^[7-9][0-9]{9}$/;
        if (!regx2.test(mobile)) {
          $("#labelText2").html("Mobile is required and should be 10 digits");
          $("#labelText2").css({
            visibility: "visible",
            color: "red",
            "font-size": "8px",
          });

          $("#labelText2").css({ visibility: "visible", color: "red" });
        } else {
          $("#labelText2").css("visibility", "hidden");
          count += 1;
        }
      }
      if (landLine == "") {
        $("#validationMessage").html(
          "Please fill all the required fields below"
        );
        $("#labelText3").html(
          "LandLine is required and should be 12 digits and should start with 0"
        );
        $("#labelText3").css({
          visibility: "visible",
          color: "red",
          "font-size": "8px",
        });
      } else {
        var regx3 = /^[0][0-9]{11}$/;
        if (!regx3.test(landLine)) {
          $("#labelText3").html(
            "LandLine is required and should be 12 digits and should start with 0"
          );
          $("#labelText3").css({
            visibility: "visible",
            color: "red",
            "font-size": "8px",
          });
          $("#labelText3").css("visibility", "visible");
          $("#labelText3").css("color", "red");
        } else {
          $("#labelText3").css("visibility", "hidden");
          count += 1;
        }
      }
      if (count == 4) {
        $(".hoverOnDivision1"[1]).css("backgroundColor", null);

        $("#homeButton").addClass("homeButtonStyling");
        $("#homeButton").removeClass("hoverOnDivision2");

        $("#addNewMember").addClass("hoverOnDivision2");
        $("#addNewMember").removeClass("homeButtonStyling");
        acceptData();
      }
    }
  }

  let data = [];
  function acceptData() {
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
  }
  function createTasks() {
    $("#flexItem4-1").html("");

    data.map((x, y) =>
      $("#flexItem4-1").append(
        `<div id=${y} onclick="displayData(id,this)">
  <div style="padding-bottom:5px;">
  <span id="nameStyling">${x.personName}</span>
  </div>
  <div>
  <span id="emailStyling">
   ${x.email}
  </span><br>
  <span id="mobileNumberStyling">+91 ${x.mobile}</span>
  </div>
  </div>`
      )
    );
    resetForm();
  }
  function resetForm() {
    $("#name").val("");
    $("#email").val("");
    $("#mobile").val("");
    $("#landLine").val("");
    $("#webSite").val("");
    $("#address").val("");
    $("#flexItem4-2").css("display", "none");
    $("#flexItem4-4").css("display", "block");
  }
  function displayData(id, e) {
    if (allowVariable == 1) {
      currentId = id;
      currentDiv = e;
      $("#" + id)
        .siblings()
        .css("background-color", "white");
      $("#" + id).css("background-color", "#ADD8E6");

      $("#flexItem4-3").html("");
      data.map((x, y) => {
        if (y == id) {
          $("#flexItem4-3")
            .html(`<label id="headingStyling">${x.personName}</label><table class="tableStyling3">
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

</table>`);
        }
      });
    }
  }
  window.displayData = displayData;

  function deleteData() {
    if (currentDiv == null && currentId == null) {
    } else {
      currentDiv.remove();

      $("#flexItem4-3").html("");
      data.splice(currentId, 1);
      localStorage.clear();
      localStorage.setItem("data", JSON.stringify(data));
      data = JSON.parse(localStorage.getItem("data"));
      createTasks();
      currentDiv = null;
      currentId = null;
    }
  }
  window.deleteData = deleteData;
  function editData() {
    if (currentDiv == null && currentId == null) {
    } else {
      $(".flexItem4-2").css("display", "block");
      $(".flexItem4-4").css("display", "none");
      $(".flexItem4-3").html("");
      data.map((x, y) => {
        if (y == currentId) {
          controlVariable1 += 1;
          $("#name").val(x.personName);
          $("#email").val(x.email);
          $("#mobile").val(x.mobile);
          $("#landLine").val(x.landLine);
          $("#webSite").val(x.webSite);
          $("#address").val(x.address);
        }
      });
    }
  }
  window.editData = editData;

  let editCancel = () => {
    currentDiv.remove();
    data.splice(currentId, 1);
    localStorage.clear();
    controlVariable1 = 0;
    currentDiv = null;
    currentId = null;
  };
  window.editCancel = editCancel;
  $("#button2").click(function () {
    if (controlVariable1 == 1) {
      $(".flexItem4-2").css("display", "none");
      $(".flexItem4-4").css("display", "block");
      controlVariable1 = 0;
    } else if (controlVariable1 == 0 && controlVariable2 == 1) {
      $(".flexItem4-2").css("display", "none");
      $(".flexItem4-4")[0].css("display", "block");
      controlVariable2 = 0;
    }
  });

  $("#button2").click(function () {
    $("#flexItem4-2").css("display", "none");
    $("#flexItem4-4").css("display", "block");
  });
  function loading() {
    data = JSON.parse(localStorage.getItem("data")) || [];
    createTasks();
  }
  loading();
});
