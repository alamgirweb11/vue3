<template>
    <div class="card">
     <div class="card-header">
       <slot name="card-header"><h4>Card Header</h4></slot>
     </div>
     <div class="card-body">
      <slot name="card-body"><p>Default body text</p></slot>
     </div>
     <div class="card-footer">
        <slot name="card-footer"><h4>Card Footer</h4></slot>
     </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['cardHeader', 'cardFooter']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
          @mixin header-footer($margin-top, $margin-bottom){
                    min-height: 20px;
                    text-align: center;
                    padding: 2px;
                    background: #c2c2c2;
                    color: #0f0f0f;
                    margin-top: $margin-top;
                    margin-bottom: $margin-bottom;
          }
          .card{
             width: 320px;
             min-height: 120px;
             border-radius: 8px;
             border: 2px solid #330203;
             margin: 10px 0;
          }

          .card-body{
                padding: 5px;
          }

          .card-header{
                   @include header-footer($margin-top: 0, $margin-bottom: 0);
                   border-top-left-radius: 7px;
                   border-top-right-radius: 7px;
          }
          .card-footer{
                   @include header-footer($margin-top: 0, $margin-bottom: 0);
                    border-bottom-left-radius: 7px;
                   border-bottom-right-radius: 7px;
          }
</style>
