//Con solución
function calcVelocity(snapshot) {
    var distance, time, velocity;

    distance = snapshot.val().distance;
    time = snapshot.val().time;

    return distance / time;
}

function getVelocity() {
return firebaseRef.once('value').then(calcVelocity(snapshot));
}

getVelocity().then(function(vel) { $("#velocity").html(vel); });



//Con problema
function calcVelocity() {
    var distance, time, velocity;

    firebaseRef.once('value', function(snapshot) {
        distance = snapshot.val().distance;
        time = snapshot.val().time;

        velocity = distance / time;
    });
    return velocity;
}

$("#velocity").html(calcVelocity());