function myFunction() {

    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Dino Merlin",
            title: "Fotografija",
            release_year: 1995,
            formats: {
                1: "Digital",
                2: "Cassette",
                3: "Turntable record"
            },
            gold: false
        }
    };
    return myMusic;
}

myFunction()[2];
module.exports = myFunction;