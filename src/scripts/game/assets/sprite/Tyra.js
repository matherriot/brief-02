const Tyranausor = {
  "meta": {
    "name": "Tyrannosaurus",
    "scale": 3,
    "dimensions": {
      "idle": {
        "height": 22,
        "width": 24
      },
      "run": {
        "height": 22,
        "width": 24
      },
      "run_down": {
        "height": 15,
        "width": 30
      },
      "ko": {
        "height": 22,
        "width": 24
      }
    }
  },
  "sprite": {
    "idle": [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAMAAADJYP15AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURff391NTU////wAAACV6xQ8AAAAEdFJOU////wBAKqn0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAcklEQVQoU6XQUQ6AIAwDUHT3v7Pd1pVq+LOJEp4NAit2lhLGa13Mm4kI+gr4PvPkL2uL/OL7y0kxCk1VHVa1sOdZoCJieAuiNTlnbBFPIdhPIc0bdDc2n6P1fY9Lyel4Ppz1/LdUjPHE1d5OzsPVqxLxAKZeA3w7CwoHAAAAAElFTkSuQmCC",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAMAAADJYP15AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURff391NTUwAAAAmSMZkAAAADdFJOU///ANfKDUEAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABtSURBVChTtdBRDoAgDAPQufsf2m7rSjX+2kQJzwaByJNQ0jjiYp5MRNBX/mdtkV98fzVpRmGoq8uqNs68ClREDB9BtCbnjC3iaQT7KaR1g+7G5nu0ue91Kbkcz4urXv+WijF+cbePk+tw/epk3rgGApKTAJ47AAAAAElFTkSuQmCC"
    ],
    "run": [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAMAAADJYP15AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURff391NTU////wAAACV6xQ8AAAAEdFJOU////wBAKqn0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAcElEQVQoU6XQUQ6AMAgDUJT739kCpVbjn/0w2VtdNiLvhJLGEQfzZCKCvgI+v3nzl3VF7vj9atGMwlBXl1VtnHUVqIgYPoLoTK4ZO8TTCPZXSGuC7sbm+7SZ97qUXF6fZ7vqNZxXGyyYWNtDtv+RzAuniwOTCrs0XAAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAMAAADJYP15AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURff391NTU////wAAACV6xQ8AAAAEdFJOU////wBAKqn0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAc0lEQVQoU6XQUQ6AMAgDUJT739kCpdbon01MxpMtbJF3QknjiIN5MhFBvwI+v3nzlzUi//h8VTSjYahbl9XaOHU1UBExfATRmawZO8TTCPZbSOsF3Y3N92rz3utSMny+NmQWdCkZXiO9uFI7uHwwb5iZeQGnAgONqS0Q8gAAAABJRU5ErkJggg=="
    ],
    "run_down": [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAPCAMAAADEZI+uAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURff391NTU////wAAACV6xQ8AAAAEdFJOU////wBAKqn0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAaUlEQVQoU3WQAQ7AIAgD5/j/n9ezTFG3i4nQgqiXiA00o7CxFUm0JOMqKclAVL1w5770nXj6L75VJif9VZ8+Y4UfmlpnZEzGVsEr8A3jE6TbRcWmziea2c2isLrDFrg7U3L3RrHXYyHiAc1aAofjJ8UIAAAAAElFTkSuQmCC",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAPCAMAAADEZI+uAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURff391NTU////wAAACV6xQ8AAAAEdFJOU////wBAKqn0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAZ0lEQVQoU3WQgRKAIAhDM/7/n9tgEki9OxU2EfUCdkAtQLi4FAksobhKSBSAqhdura1uEt1/iVspmfirPn22BfFQaU5m7EwbG7bAb8hPgB4ubU4xXHPeau7dRUnaTU1a9WTb/Uxh9gDNIgKJ3SPlAwAAAABJRU5ErkJggg=="
    ],
    "ko": [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAMAAADJYP15AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURff391NTUwAAAAmSMZkAAAADdFJOU///ANfKDUEAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABySURBVChTldDbDoAwCANQ5P8/2pZBV81eVqOGM7Jb5E4oaRzxdL6MuofQr5DxnPjcPbnmGfH9sSjeiyFitRaumg2tiBi+BNGcXXdsEk8h2Lcr5Q26G5vP0dZ9j0ub6Xh/zHauLRXjf+Lq3t7Mw9WnkvkCsKoCj3MC4lwAAAAASUVORK5CYII="
    ]
  }
}
export default Tyranausor;