const { expect } = require("chai")

describe("Storage contract", function () {

    let storage
    
    beforeEach(async function () {
        storageFactory = await ethers.getContractFactory("Storage")
        storage = await storageFactory.deploy()
        await storage.deployed()
    })

    it("will do what?", async function () {
      await storage.f([4, 5, 6])
      expect(await storage.x(0)).to.equal(4)
      expect(await storage.x(1)).to.equal(6)
      expect(await storage.x(2)).to.equal(6)
    })

})
