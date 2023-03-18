<template>

  <HeaderSection/>
    <div class="container">
        <div class="not-found-wrap">
            <div class="not-found">
              <div class="not-found"> 
                <h1 class="not-found-head"><b>404 page not found</b></h1>
                <p class="not-found-section">UHMMMMMM, the page you're looking for does not exist . . .🥺 </p>
            
              </div>
                
        </div>
            
    </div>
    </div>
    <FooterSection/>
  
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
  h1{
    font-size: 54px;
    margin-bottom: 16px;
    text-align: center;
    font-family: primaryFont;
    font-weight: bolder;
  }

  .not-found{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: calc(100vh - 80px);
    width: 98%;
    margin: 0 auto;
    animation: fadeIn 1.5s ease-in-out;
  }

  p{
    font-family: secFont;
    font-size: 18px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
</style>