let homePage = require('../../pageObjects/home/home.page');
let testData = require('../../test-data/home/home.data')

describe(`Home Page test`, () => {
    beforeEach('', () =>{
        homePage.openHomepage()
    })

    it('check subtitle text', () => {
        homePage.scrollToPlayer()
        homePage.clickPlayButton()
        homePage.waitForTextInSubtitles(testData.SUBTITLE)
    });

    it('click subtitle switcher button', () => {
        homePage.scrollToPlayer()
        homePage.clickPlayButton()
        homePage.hoverPlayerByMouse()
        homePage.clickSubtitleSwitcherButton()
    });

    it('run the video in the player and check the player not on the pause', () => {
        homePage.scrollToPlayer()
        homePage.clickPlayButton()
        homePage.checkPlayerOnPauseNotExist()
    });

});