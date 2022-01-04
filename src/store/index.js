import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          img: "http://adminassets.devops.arabiaweather.com/sites/default/files/field/image/mountains.jpg",
          title: "A trip into the mountains",
          description: "It was a really nice trip",
        },
        {
          id: "m2",
          img: "https://tendencybook.com/wp-content/uploads/2019/05/Surfing.jpg",
          title: "Surfing the sea side",
          description: "Feeling the cool breeze",
        },
        {
          id: "m3",
          img: "https://www.cuerpomente.com/medio/2020/01/21/mindful-eating-alimentacion-consciente_04ba81f0_1200x1200.jpg",
          title: "Good eating",
          description: "Really taste",
        },
      ],
    };
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        img: memoryData.img,
        description: memoryData.description,
      };
      state.memories.unshift(newMemory);
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
});

export default store;
