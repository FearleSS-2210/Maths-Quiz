function addTHEuser() {
 user1 = document.getElementById("player_1_input").value
 user2 = document.getElementById("player_2_input").value

 localStorage.setItem("Player 1", user1);
 localStorage.setItem("Player 2", user2);

 window.location="game_page.html";
}