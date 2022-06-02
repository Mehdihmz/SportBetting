const matches = [
    {
        live: true,
        status: "Live",
        teamA: {
            name: "Portugal",
            src: "photo/Portugal.png",
            score: 3,
        },
        teamB: {
            name: "USA",
            src: "photo/USA.png",
            score: 0,
        },
    },
    {
        live: false,
        matchDate: "10 May",
        teamA: {
            name: "France",
            src: "photo/France.png",
        },
        teamB: {
            name: "Denmark",
            src: "photo/Denmark.png",
        },
    },
    {
        live: false,
        matchDate: "09 September",
        teamA: {
            name: "Brazil",
            src: "photo/Brazil.png",
        },
        teamB: {
            name: "Spain",
            src: "photo/Spain.png",
        },
    },
    {
        live: false,
        matchDate: "21 November",
        teamA: {
            name: "England",
            src: "photo/England.png",
        },
        teamB: {
            name: "Ecuador",
            src: "photo/Ecuador.png",
        },
    },
];

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const matchId = params.get("id");
    const selectedMatch = matches[matchId - 1];
    if (matchId && selectedMatch) {
        document.querySelector("#teamAName").innerText = selectedMatch.teamA.name;
        document.querySelector("#teamBName").innerText = selectedMatch.teamB.name;
        document.querySelector("#teamAImage").src = "../" + selectedMatch.teamA.src;
        document.querySelector("#teamBImage").src = "../" + selectedMatch.teamB.src;
        if (selectedMatch.live) {
            document.querySelector("#teamAScore").innerText = selectedMatch.teamA.score;
            document.querySelector("#teamBScore").innerText = selectedMatch.teamB.score;
        } else {
            document.querySelector("#matchScore").remove();
            document.querySelector("#matchCurent").remove();
            document.querySelector("#matchDate").innerText = selectedMatch.matchDate;
        }
    }
});

delDisableSub = (e)=>{
    if($(e).prop("checked")){
      $("#submitBet").removeAttr('disabled')
    }
  }

  function submitBet() {
    window.location.href = "../index.html?bet=true";
}
