<script lang="ts">
    export let checked = false;
</script>

<button type="button" role="switch" aria-checked="false" class="skia-switch">
    <div class="skia-switch__track">
        <div class="skia-switch__handle">
        </div>
    </div>
</button>
<input type="checkbox" value="on" class="skia-switch__input" bind:checked />

<style>
  :global(:root) {
      --skia-switch--enabled---track---color: "";
  }
</style>
