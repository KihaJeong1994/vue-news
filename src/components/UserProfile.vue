<template>
  <div>
    <section>
      <div>
        <div class="user-container">
          <div>
            <i class="fa-thin fa-user"></i>
          </div>
          <div class="user-description">
            <!-- <div>username : {{ info.id }}</div> -->
            <!-- 상위 컴포넌트에서 정의할 영역 -->
            <slot name="username"></slot>

            <div class="time">
              <!-- time : {{ info.created }} -->
              <!-- 상위 컴포넌트에서 정의할 영역 -->
              <slot name="time"></slot>
              <slot name="karma"></slot>
            </div>
            <!-- time : {{ info.created }} -->
            <!-- 상위 컴포넌트에서 정의할 영역 -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>