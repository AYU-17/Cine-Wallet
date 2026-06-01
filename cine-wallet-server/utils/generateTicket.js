import PDFDocument from "pdfkit";
import fs from "fs";

const generateTicket = (booking) => {
  const doc = new PDFDocument();

  const path = `tickets/${booking._id}.pdf`;

  doc.pipe(fs.createWriteStream(path));

  doc.fontSize(25);

  doc.text(booking.movieTitle);

  doc.text(booking.showDate);

  doc.text(booking.showTime);

  doc.end();

  return path;
};

export default generateTicket;
