$(document).ready(function(){
    $("#pdfChoice").change(function(){
        $("#iframepdf").attr("src", $(this).val());
    });
});