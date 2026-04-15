#!/usr/bin/env node

/**
 * Build Script - Generate games.html from config
 * Run: node build-games.js
 */

const fs = require('fs');
const path = require('path');

// Read games config
const { games } = require('./games-config.js');

console.log(`Found ${games.length} games in config`);

// Generate HTML for each game card
function generateGameCard(game) {
    const buttonHtml = game.button.type === 'link'
        ? `<a href="${game.button.url}"
                               target="_blank"
                               class="btn btn-primary btn-small">
                                ${game.button.text}
                            </a>`
        : `<button class="btn btn-secondary btn-small" disabled>
                                ${game.button.text}
                            </button>`;

    return `                <div class="game-card" data-category="${game.category}">
                    <div class="game-card-header">
                        <div class="game-icon">
                            <img src="${game.image}" alt="${game.title}" class="game-icon-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="game-icon-placeholder" style="display: none;">${game.emoji}</div>
                            <iframe class="game-icon-iframe" src="https://www.youtube.com/embed/${game.video}?autoplay=1&mute=1&controls=0&loop=1&start=30&playlist=${game.video}&enablejsapi=1" allow="autoplay" loading="lazy"></iframe>
                        </div>
                        <span class="game-category ${game.category}">${game.categoryLabel}</span>
                        <span class="game-status ${game.status}">${game.status.toUpperCase()}</span>
                    </div>
                    <div class="game-card-content">
                        <h3 class="game-card-title">${game.title}</h3>
                        <p class="game-card-description">
                            ${game.description}
                        </p>
                        <div class="game-card-footer">
                            ${buttonHtml}
                        </div>
                    </div>
                </div>

`;
}

// Generate all game cards HTML
const gamesHtml = games.map(generateGameCard).join('');

// Read template
const templatePath = path.join(__dirname, 'games.template.html');
let template;

if (fs.existsSync(templatePath)) {
    template = fs.readFileSync(templatePath, 'utf-8');
} else {
    // Create template from current games.html
    const currentGamesPath = path.join(__dirname, 'games.html');
    if (!fs.existsSync(currentGamesPath)) {
        console.error('games.html not found');
        process.exit(1);
    }

    template = fs.readFileSync(currentGamesPath, 'utf-8');

    // Replace games grid content with placeholder
    template = template.replace(
        /(<div class="games-grid" id="gamesGrid">)([\s\S]*?)(<\/div>\s*<\/div>\s*<\/section>\s*<!-- Installation Tips -->)/,
        '$1\n                <!-- GAMES_PLACEHOLDER -->\n            $3'
    );

    // Save template
    fs.writeFileSync(templatePath, template);
    console.log('Created games.template.html');
}

// Replace placeholder with generated games
const output = template.replace(
    /<!-- GAMES_PLACEHOLDER -->/,
    gamesHtml
);

// Write output
const outputPath = path.join(__dirname, 'games.html');
fs.writeFileSync(outputPath, output);

console.log(`✅ Generated games.html with ${games.length} games`);
console.log('   To add/edit games: modify games-config.js and run: node build-games.js');
