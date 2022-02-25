<template>
<div class="card-wrapper">
    <div class="card">
     <div class="card-header">
       <h4>{{ cardHeader }}</h4>
     </div>
     <div class="card-body">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, totam?</p>
     </div>
     <div class="card-footer">
       <h4>{{ cardFooter }}</h4>
     </div>
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

          .card-wrapper{
                 display: flex;
                 justify-content: space-between;
          }

          .card{
             max-width: 420px;
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
