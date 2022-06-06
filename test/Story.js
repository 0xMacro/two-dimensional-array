const { expect } = require("chai")

describe("Story contract", function () {

    let story
    
    beforeEach(async function () {
        storyFactory = await ethers.getContractFactory("Story")
        story = await storyFactory.deploy()
        await story.deployed()
    })

    it("word at x[2][1] is what?", async function () {
        expect(await story.getWord(2, 1)).to.equal(?)
    })

})

// Question 1. What should replace ? on line 14 above to make the test pass?
