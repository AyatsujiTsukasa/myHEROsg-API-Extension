$('#send').on('click', function () {
	console.log("Hi")
	$.ajax({
		type: "POST",
		url: "https://symptom-checker-api.herokuapp.com/api/symptom_checker",
		data: JSON.stringify({"complaint": $("#complaint").val()}),
		success: function (data) {$('#result').val("Diagnoses: " + data.diagnoses + "\nDirection: " + data.direction)},
		contentType: 'application/json'
	});
})