import { mount } from 'enzyme'
import StarRating from '../../../src/components/ui/StarRating'

describe("<StarRating /> UI Component", () => {

    let wrapper

    describe("Rendering the UI", () => {

        beforeAll(() => wrapper = mount(<StarRating starsSelected={4} totalStars={7} />))

        it("renders a div with the class .star-rating", () =>
            expect(wrapper.find("div.star-rating").length)
                .toEqual(1)
        )

        it("renders the correct number of selected stars", () =>
            expect(wrapper.find(".selected").length)
                .toEqual(4)
        )

        it("renders the corrent number of totalStart", () =>
            expect(wrapper.find('div.star').length)
                .toEqual(7)
        )

        it("has only one paragraph node", () =>
            expect(wrapper.find('p').length)
                .toEqual(1)
        )

        it("display {starsSelected} of {totalStars}", () =>
            expect(wrapper.find('p').text())
                .toEqual('4 of 7')
        )

        it("rating does cause error", () => {
            wrapper.childAt(3).simulate("click")
        })

    })

})