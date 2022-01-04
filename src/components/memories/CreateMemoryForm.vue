<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle"></ion-input>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="" alt="" />
        </ion-thumbnail>
        <ion-button fill="clear" @click="takePhoto" type="button">
          <ion-icon :icon="camera" slot="start"></ion-icon>
          Take photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea
          rows="5"
          required
          v-model="enteredDescription"
        ></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block" fill="outline"> Save </ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonThumbnail,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
const { Camera } = Plugins;
export default {
  emits: ["save-memory"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonThumbnail,
    camera,
  },
  data() {
    return {
      enteredTitle: "",
      enteredUrl: "",
      enteredDescription: "",
      preview: "",
      camera,
    };
  },
  methods: {
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60,
      });
      this.preview = photo.webPath;
    },
    submitForm() {
      const memoryData = {
        title: this.enteredTitle,
        img: this.enteredUrl,
        description: this.enteredDescription,
      };
      this.$emit("save-memory", memoryData);
    },
  },
};
</script>

<style>
</style>