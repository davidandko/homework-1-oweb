const likesArr = [12,13,16,32,32,56,70,20];
const commentsArr = [15,13,15,65,43,21,34,12];
const commentsStringArr = [];



function addLike() {
    const contentContainers = document.getElementsByClassName("content-element");
    var likesCountElement = document.querySelector('.likes-count');
    var currentLikes = parseInt(likesCountElement.textContent) || 0;
    likesCountElement.innerHTML = "<h3>" + (currentLikes + 1) + "</h3>";
}
function addListing(){
    var name = window.prompt("Please enter the name of the listing");
    var category = window.prompt("Please input one of the following categories(case sensitive): Electronics, Vehicles, Guitars");
    var priceProduct = window.prompt("Please enter price in format xxx,xxx.xx:");
    
var mainContainer = document.createElement("div");
mainContainer.classList.add("content-element");


var imgWrapper = document.createElement("div");
imgWrapper.classList.add("content-element-img-wrapper");
var imgElement = document.createElement("img");
imgElement.src = "https"
imgWrapper.appendChild(imgElement);
mainContainer.appendChild(imgWrapper);
var infoContainer = document.createElement("div");
infoContainer.classList.add("content-element-info");


var titleContainer = document.createElement("div");
titleContainer.classList.add("content-element-info-desc");
var titleElement = document.createElement("h3");
titleElement.textContent = name;
titleContainer.appendChild(titleElement);
infoContainer.appendChild(titleContainer);


var categoryElement = document.createElement("div");
categoryElement.classList.add("content-element-info-category");
categoryElement.textContent = "Electronics";


infoContainer.appendChild(categoryElement);


var priceElement = document.createElement("div");
priceElement.classList.add("content-element-info-price");
var priceContainer = document.createElement("div");
priceContainer.classList.add("price-container");
var priceValueElement = document.createElement("div");
priceValueElement.classList.add("price-container-value");
priceValueElement.textContent = "15$";
priceContainer.appendChild(priceValueElement);
priceElement.appendChild(priceContainer);


infoContainer.appendChild(priceElement);


var reviewsElement = document.createElement("div");
reviewsElement.classList.add("content-element-info-reviews");
var reviewsContainer = document.createElement("div");
reviewsContainer.classList.add("reviews-container");
reviewsContainer.appendChild(reviewsContentElement);
reviewsElement.appendChild(reviewsContainer);


infoContainer.appendChild(reviewsElement);


var viewsElement = document.createElement("div");
viewsElement.classList.add("content-element-info-views");


var commentsLikesContainer = document.createElement("div");
commentsLikesContainer.classList.add("comments-likes-container");

var likesContainer = document.createElement("div");
likesContainer.classList.add("likes-container");
likesContainer.appendChild(likesCountElement);
var likesLikeElement = document.createElement("div");
likesLikeElement.classList.add("likes-like");
var likeButton = document.createElement("button");
likeButton.classList.add("likes-like-button");
likeButton.textContent = "Like";
likeButton.addEventListener("click", addLike);
likesLikeElement.appendChild(likeButton);
likesContainer.appendChild(likesLikeElement);


commentsLikesContainer.appendChild(likesContainer);
commentsLikesContainer.appendChild(commentsContainer);
var commentsInputContainer = document.createElement("div");
commentsInputContainer.classList.add("comments-input");
var commentsInputElement = document.createElement("input");
commentsInputElement.type = "text";
commentsInputElement.placeholder = "Comment";
commentsInputElement.id = "comments-input";
commentsInputContainer.appendChild(commentsInputElement);
commentsLikesContainer.appendChild(commentsInputContainer);


viewsElement.appendChild(commentsLikesContainer);
infoContainer.appendChild(viewsElement);


var dateAddedElement = document.createElement("div");
dateAddedElement.classList.add("dateAdded");
var dateContent = new Date.now;
dateAddedElement.appendChild(toString(dateContent));
infoContainer.appendChild(dateAddedElement);

document.getElementById("content-container").appendChild(mainContainer);



var orderContainer = document.createElement("div");
orderContainer.classList.add("content-element-order");


var addToCartButton = document.createElement("button");
addToCartButton.id = "order-add-to-cart";
addToCartButton.textContent = "Add To Cart";


var buyNowButton = document.createElement("button");
buyNowButton.id = "order-buy-now";
buyNowButton.textContent = "Buy Now";


orderContainer.appendChild(addToCartButton);
orderContainer.appendChild(buyNowButton);


mainContainer.appendChild(orderContainer);


document.getElementById("content-container").appendChild(mainContainer);

}

    

function start(){
    
    const contentContainers = document.getElementsByClassName("content-element");
    var likesCount= document.getElementsByClassName("likes-count");
    for(var i=0;i<contentContainers.length;i++){
        var createCount = document.createElement("h3");
        createCount.setAttribute("id","likes"+i);
        createCount.innerHTML = likesArr[i];
        likesCount[i].appendChild(createCount);
    }
    
    var commentsCount= document.getElementsByClassName("comments-count");
    for(var i=0;i<contentContainers.length;i++){
        var createCount = document.createElement("h3");
        createCount.setAttribute("id","comments"+i);
        createCount.innerHTML = commentsArr[i];
        commentsCount[i].appendChild(createCount);
    }
    

}


window.addEventListener("load",start,false);