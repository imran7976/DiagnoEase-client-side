import jsPDF from "jspdf";

export const handleUserTestReportPdf = (test) => {
	console.log(test);
	const doc = new jsPDF();
	// Adding the text
	doc.setFontSize(25);
	doc.text("DiagnoEase", 20, 20);

	doc.setFontSize(12);
	doc.text("Accurate | Caring | Instant", 20, 27);

	doc.setFontSize(10);
	doc.text("105-108, SMART VISION COMPLEX, HEALTHCARE ROAD,", 20, 35);
	doc.text("OPPOSITE HEALTHCARE COMPLEX, MUMBAI - 689578", 20, 41);

	// Adding contact information
	doc.setFontSize(10);
	doc.text(" 9123456789 / 8912345678", 150, 20);
	doc.text(" smartpatholab@gmail.com", 150, 25);

	// Break Line
	doc.setLineWidth(1);
	doc.line(5, 45, 205, 45);

	// User Test Info
	doc.setFontSize(15);
	doc.text(`${test.user.name}`, 20, 55);
	doc.setFontSize(12);
	doc.text(`Blood Group: ${test.user.bloodGroup}`, 20, 60);
	doc.text(`Address: ${test.user.upazila}, ${test.user.district}`, 20, 65);

	// Break Line
	doc.setLineWidth(1);
	doc.line(5, 70, 205, 70);

	// Test Report Heading
	doc.setFontSize(20);
	doc.text("Test Report", 110, 80, { align: "center" });
	doc.setLineWidth(0.5);
	doc.line(10, 85, 195, 85);

	// Test Report Data
	doc.setFontSize(15);
	doc.text(`${test.testData.name}`, 20, 95);
	doc.setFontSize(12);
	// doc.text(`${test.testData.description}`, 20, 100);
	doc.text(`Price: $ ${test.testData.price}`, 20, 100);
	doc.text(`Transaction ID: ${test.transactionId}`, 20, 105);
	doc.text(`Report:`, 20, 110);
	doc.text(`${test.result}`, 25, 115);
	// doc.save(`User Test Report`);

	// doc.autoPrint();
	// Open PDF in new window
	const string = doc.output("bloburl");
	const iframe = `<iframe width='100%' height='100%' src='${string}'></iframe>`;
	const x = window.open();
	x.document.open();
	x.document.write(iframe);
	x.document.close();
};