#!/usr/bin/env node

const weights = {
  seo: 15,
  performance: 15,
  accessibility: 10,
  security: 15,
  conversion: 15,
  architecture: 15,
  observability: 10,
  business: 5
};

function parseArgs(argv) {
  const scores = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const raw = argv[i + 1];
    if (!Object.hasOwn(weights, key) || raw === undefined) continue;
    const value = Number(raw);
    if (!Number.isFinite(value) || value < 0 || value > 100) {
      throw new Error(`Invalid score for ${key}: use a number from 0 to 100.`);
    }
    scores[key] = value;
    i += 1;
  }
  return scores;
}

function band(score) {
  if (score >= 90) return "production-strong";
  if (score >= 75) return "usable";
  if (score >= 60) return "prototype-risk";
  if (score >= 40) return "high-risk";
  return "not-ready";
}

function main() {
  const scores = parseArgs(process.argv.slice(2));
  const missing = Object.keys(weights).filter((key) => scores[key] === undefined);
  if (missing.length) {
    console.error(`Missing scores: ${missing.join(", ")}`);
    console.error("Example: node scripts/score_website_audit.mjs --seo 72 --performance 65 --accessibility 80 --security 70 --conversion 58 --architecture 74 --observability 50 --business 60");
    process.exit(1);
  }

  const totalWeight = Object.values(weights).reduce((sum, value) => sum + value, 0);
  const weighted = Object.entries(weights).reduce((sum, [key, weight]) => {
    return sum + scores[key] * weight;
  }, 0);
  const overall = Math.round((weighted / totalWeight) * 10) / 10;
  const weakest = Object.entries(scores)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 3)
    .map(([key, value]) => ({ category: key, score: value, band: band(value) }));

  console.log(JSON.stringify({
    overall,
    band: band(overall),
    weakest,
    scores
  }, null, 2));
}

main();
