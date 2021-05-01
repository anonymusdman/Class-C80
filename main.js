var array_of_cars=[];
function Get_the_answers() {
    for (var i=1; i < 6; i++) {
        var name_of_car=document.getElementById("carname_"+i).value;
        console.log(name_of_car);
        array_of_cars.push(name_of_car);
    }
    console.log(array_of_cars);
    var length_of_cars=array_of_cars.length;
    console.log(length_of_cars);
    var display_car_array=[];
    for (var i1=0; i1<length_of_cars; i1++) {
        display_car_array.push("<h4>Car name: "+array_of_cars[i1]+"</h4>");
    }
    console.log(display_car_array);
    document.getElementById("display_answers").innerHTML=display_car_array;
    var remove_commas=display_car_array.join("");
    console.log(remove_commas);
    document.getElementById("display_without_commas").innerHTML=remove_commas;
    document.getElementById("Get_Answers").style.display="none";
    document.getElementById("sort_answers").style.display="inline-block";
}
function Sort_the_answers() {
    array_of_cars.sort();
    console.log(array_of_cars);
    var display_sorted_array=[];
        var length_of_cars=array_of_cars.length;
    console.log(length_of_cars);
    var display_car_array=[];
    for (var i1=0; i1<length_of_cars; i1++) {
        display_car_array.push("<h4>Car name: "+array_of_cars[i1]+"</h4>");
    }
    console.log(display_car_array);
    document.getElementById("display_answers").innerHTML=display_car_array;
    var remove_commas=display_car_array.join("");
    console.log(remove_commas);
    document.getElementById("display_without_commas").innerHTML=remove_commas;
}