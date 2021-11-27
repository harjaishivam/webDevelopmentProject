function spannerClicked(object) {
    var iFrame = document.getElementById("iFrame");
    iFrame.src = object.value;
    var selectedOption = object.options[object.selectedIndex].id;

    var youtubeVideo = document.getElementById("youtubeVideo");

    var videoSection = document.getElementById("videoSection");

    var workTextHeading = document.getElementById("workTextHeading");
    var workTextContent = document.getElementById("workTextContent");

    if(selectedOption == "mazeMaker") {
        workTextHeading.innerHTML = "Maze Maker";
        workTextContent.innerHTML = "This is a project that I had made just for myself.The Maze Maker block starts from the top left corner and starts building a maze.It randomly travels to any available neighbour of the current cell. If it encounters a position, where there is no neighbour available, it traces it's way back. I have used arrays for this movement.When every cell is traversed, or in other words, the maze is complete, the block returns back";
        youtubeVideo.src = "https://www.youtube.com/embed/HyK_Q5rrcr4";
        videoSection.style.display = "";
    }
    else if(selectedOption == "fractalTree") {
        workTextHeading.innerHTML = "Fractal Tree";
        workTextContent.innerHTML = "This is one of my favourite projects. I had made a bigger, different version of this as a background for a website. As it is visible, it works on a loop, and it expands and contracts accordingly. It is using the concept of fractal trees in mathematics, which I fell in love with, the first time I encountered. It was a little challening for me, figuring out the different angles at which the lines must diverge, but I was really excited having finally made it.";
        youtubeVideo.src = "https://www.youtube.com/embed/0jjeOYMjmDU";
        videoSection.style.display = "";
    }
    else if(selectedOption == "mineCraft") {
        videoSection.style.display = "none";
        workTextHeading.innerHTML = "Mine Craft";
        workTextContent.innerHTML = "This is the classic game of Mine Craft, re-imagined by me. It has the same rules as the original minecraft. If you scroll a little to the right, you will see a button for flagging. I did not take any help, whilst designing this. It was very challenging figuring out how to stop the boxes from oppeining, but once I figured that out, the rest was pretty easy.";
    }

}

function processForm(form) {
    var success = 1;
    success += validateName(form);
    success += validateEmail(form);
    success += validatePhone(form);

    if(success == 4) {
        var label = document.getElementById("formSubmitted");
        label.style.display = "block";
    }
    
}

function validateName(form) {
    var name = form.elements["nameInput"];

    if(name.validity.valueMissing) {
        name.setCustomValidity("Name is required. Please fill in name.");
        return 0;
    }
    else {
        name.setCustomValidity("");
        return 1;
    }

}

function validateEmail(form) {

    var email = form.elements["emailInput"];

    if(email.validity.valueMissing) {
        email.setCustomValidity("Email is required. Please fill in Email.");
        return 0;
    }
    else if(email.validity.patternMismatch) {
        email.setCustomValidity("Please re-check. You might have not correctly entered email");
        return 0;
    }
    else {
        email.setCustomValidity("");
        return 1;
    }
}

function validatePhone(form) {
    var phone = form.elements["phoneInput"];
    if(!phone.validity.valueMissing && isNaN(phone.value)) {
        phone.setCustomValidity("Phone Number should only be digits.");
        return 0;
    }
    else {
        phone.setCustomValidity("");
        return 1;
    }
}