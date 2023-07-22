    var canvasElement = document.getElementById("cookieChart");

    var config = {
        type: "bar",
        data: {
            labels: ["$0", "$100", "$200", "$300"],
            datasets: [
                {
                    label: "Contributions Overtime",
                    data: [20, 25, 30, 35], // Remove the extra data points since labels and data should have the same length
                    backgroundColor: [
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                    ],
                    borderColor: ["rgba(99, 99, 222, 1)"],
                },
            ],
        },
    };

    var cookieChart = new Chart(canvasElement, config);
