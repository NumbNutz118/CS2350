function submitWords()
{
    var name1, name2, name3, adjective, adjective2, verb, verb2, verb3, noun1,noun2, noun3, noun4, adverb1, adverb2;

    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;
    name3 = document.getElementById("name3").value;
    adjective = document.getElementById("adjective").value;
    adjective2 = document.getElementById("adjective2").value;
    verb = document.getElementById("verb").value;
    verb2 = document.getElementById("verb2").value;
    verb3 = document.getElementById("verb3").value;
    noun1 = document.getElementById("noun1").value;
    noun2 = document.getElementById("noun2").value;
    noun3 = document.getElementById("noun3").value;
    noun4 = document.getElementById("noun4").value;
    adverb1 = document.getElementById("adverb1").value;
    adverb2 = document.getElementById("adverb2").value;

    document.getElementById("image1").innerHTML = "<img src=\"resources/beach.jpeg\" alt=\"image of a beach\" width=\"400\" height=\"266\">"

    document.getElementById("par1").innerHTML = "As you slowly wake up on the <span>" + adjective + "</span> beach, you look left and see <span>" + name1 + "</span>. You sit up and look to the right and see <span>" + name2 + "</span> face down on the beach. You wake both <span>" + name1 + "</span> and <span>" + name2 + "</span> up and ask what's going on. None of you have any memory and you all start to <span>" + verb + "</span>. After your <span>" + verb + "</span>, you get together and plan out what to do. As you <span>" + verb2 + "</span> you find <span>" + name3 + "</span>. <span>" + name3 + "</span> has already built <span>" + noun1 + "</span>. You use <span>" + noun1 + "</span> to make a(n) <span>" + adjective2 + "</span> <span>" + noun2 + "</span>. \n\n";

    document.getElementById("image2").innerHTML = "<img src=\"resources/distant_boat.webp\" alt=\"image of a beach\" width=\"400\" height=\"266\">"

    document.getElementById("par2").innerHTML = "After having <span>" + noun1 + "</span> and <span>" + noun2 + "</span> the 4 of you explore the <span>" + adjective + "</span> beach. You find <span>" + noun3 + "</span> and <span>" + adverb1 + "</span> <span>" + verb3 + "</span> it. After doing that, you all meet at the beach to determine your next move. You decide to <span>" + verb + "</span> and hope it will attract someone who is out at sea. <span>" + adverb2 + "</span>, a boat sees and starts heading towards you. Thankfully, you're saved. When on the boat you find <span>" + noun4 + "</span>. And then....";
}
