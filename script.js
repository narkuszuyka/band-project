function addComment() {
    // Get the values of the name and comment fields
    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;
  
    // Create a new comment element
    let newComment = document.createElement("div");
    newComment.classList.add("comment");
    let commentText = document.createTextNode(name + "" + comment);
    newComment.appendChild(commentText);
  
    // Add the new comment element to the comments section
    let commentsSection = document.getElementById("comments");
    commentsSection.appendChild(newComment);
  
    // Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  }


  let totalDonation = 0;

function donate(amount) {
  // Get the value of the amount field
  let customAmount = parseInt(document.getElementById("amount").value);

  // If a custom amount is entered, use that instead of the fixed amount
  if (customAmount) {
    amount = customAmount;
  }

  // Add the donation to the total and update the display
  totalDonation += amount;
  document.getElementById("total").innerHTML = totalDonation;

  // Clear the input field
  document.getElementById("amount").value = "";
}




  