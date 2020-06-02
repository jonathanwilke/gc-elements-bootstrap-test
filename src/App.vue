<template>
  <div id="gc-element">
    <b-card class="rounded-lg" style="background-color: #111;">
      <div class="pa-6">
        <b-row align-v="center">
          <b-col cols="12" md="6" lg="5" class="text-center">
            <div class="mx-auto w-auto">
              <b-img
                style="max-width:250px"
                src="https://images.prismic.io/jonathan-wilke/6dde37c3-42c7-4a5d-9aa9-49b6862ee9c4_work-finally-friday-logo.png?auto=compress,format&amp;w=300&amp;auto=compress"
                alt="Finally Friday"
                loading="lazy"
                fluid
              />
            </div>
            <div
              class="mt-4 text-primary font-weight-bold text-uppercase tag-list font-sm"
            >
              <span class="d-inline-block">#Design</span>
              <span class="d-inline-block pl-2">#Wordpress</span>
            </div>
            <b-btn pill variant="primary" class="mt-4" v-b-modal.modal-1
              >Seite ansehen</b-btn
            >
          </b-col>
          <b-col cols="12" md="6" lg="7">
            <b-img
              class="max-w-full"
              src="https://images.prismic.io/jonathan-wilke/6812cb85-387d-4140-ab17-c09518d6eb27_work-finally-friday.png?auto=compress,format&amp;w=800&amp;auto=compress"
              alt="Finally Friday"
              loading="lazy"
              fluid
            />
          </b-col>
        </b-row>
      </div>
    </b-card>
    <b-modal id="modal-1" title="Toller Dialog" ok-only>
      Das hier ist ein wunderbarer Dialog zum Testen des Elements und der
      Komponenten-Bibliothek!
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.tag-list {
  font-size: 0.875rem;
}
</style>
