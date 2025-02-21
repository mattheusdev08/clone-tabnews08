test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  console.log("status:", response.status);
  console.log("response:", await response.text());

  expect(response.status).toBe(200);
});
