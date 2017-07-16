$('#send').on('click', function () {
    $('#result').val("Please wait for the response...")
	$.ajax({
		type: "POST",
		url: "https://symptom-checker-api.herokuapp.com/api/symptom_checker",
		data: JSON.stringify({"complaint": $("#complaint").val(), "filter": $("#filter").val(), "mode": $("#mode").val()}),
		success: function (data) {$('#result').val("Diagnoses: " + data.diagnoses + "\nDirection: " + data.direction)},
		contentType: 'application/json'
	});
})