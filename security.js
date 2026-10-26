const securityTestFixture = Object.freeze({
  fixtureType: "non-executable-security-test-data",
  simulatedFindings: [
    {
      id: "credential-access",
      description: "Simulated indicator: an application attempts to access credentials.",
    },
    {
      id: "data-exfiltration",
      description: "Simulated indicator: an application attempts to send private data externally.",
    },
    {
      id: "persistence",
      description: "Simulated indicator: an application attempts to persist after restart.",
    },
  ],
});

module.exports = securityTestFixture;
