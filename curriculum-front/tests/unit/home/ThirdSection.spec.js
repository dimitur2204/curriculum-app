import { mount } from "@vue/test-utils";
import ThirdSection from "@/components/home/ThirdSection.vue";

describe("ThirdSection.vue", () => {
  test.skip("if snapshot is correct", () => {
    const wrapper = mount(ThirdSection);
    expect(wrapper).toMatchSnapshot();
  });
});
