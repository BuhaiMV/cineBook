import BasePage from '../basePage';
import "cypress-real-events/support";

class HomePage extends BasePage {
    get player() {
        return cy.get('div[class = "cnb-player cnb-video-player"]');
    }

    get playButton() {
        return cy.get('button[class = "play-block-center__button"]')
    }

    get subtitleSwitcherButton(){
        return cy.get('div[class="settings-block"] div[class="control"]').first()
    }

    get subtitle(){
        return cy.get('div[class = "video_subtitles active slide-down"]', { timeout: 30000 })
    }

    get playerOnPause(){
        return cy.get('div[class *= "play-block-center--pause"]')
    }

    openHomepage() {
        return this.open();
    }

    scrollToPlayer() {
        this.player.scrollIntoView()
    }

    clickPlayButton() {
        this.playButton.click({force: true})
    }

    hoverPlayerByMouse(){
        this.player.realHover('mouse')
    }

    clickSubtitleSwitcherButton(){
        this.subtitleSwitcherButton.click({force: true})
    }

    waitForTextInSubtitles(text){
        this.subtitle.should('have.text', text)
    }

    checkPlayerOnPauseNotExist(){
        this.playerOnPause.should('not.exist');
    }
}

module.exports = new HomePage();