import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ResultCard from "./ResultCard";

function ResultContainer({ selectedResultData }) {
  let entriesPerRow = 4;
  return (
    <Container>
      {selectedResultData.map((result, rowIndex) => {
        if (rowIndex % entriesPerRow === 0) {
          return (
            <Row>
              {/* We're making a fake array with the length of 3 and mapping the column index into divs */}
              {Array.from({ length: entriesPerRow }).map((x, colIndex) => {
                if (selectedResultData[colIndex + rowIndex] !== undefined) {
                  return (
                    <ResultCard
                      key={`Resultcard-${colIndex + rowIndex}`}
                      data={selectedResultData[colIndex + rowIndex]}
                    />
                  );
                }
              })}
            </Row>
          );
        }
      })}
    </Container>
  );
}
export default ResultContainer;
