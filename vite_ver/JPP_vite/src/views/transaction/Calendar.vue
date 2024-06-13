C:\JPP\vue-material-dashboard-2-pro-v3.1.0\src\examples\Calendar.vue
<!-- 헤헷콩 -->
<template>
  <div class="card widget-calendar">
    <div class="p-3 pb-0 card-header">
      <h6 class="mb-0">{{ title }}</h6>
      <div class="d-flex">
        <div class="mb-0 text-sm p font-weight-bold widget-calendar-day">
          {{ day }}
        </div>
        <span>,&nbsp;</span>
        <div class="mb-1 text-sm p font-weight-bold widget-calendar-year">
          {{ year }}
        </div>
      </div>
    </div>
    <div class="p-3 card-body">
      <span>hi</span>
      <div :id="id" data-toggle="widget-calendar">
      </div>
    </div>
  </div>
</template>

<script>
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
let calendar;
export default {
  name: "Calendar",
  props: {
    id: {
      type: String,
      default: "widget-calendar",
    },
    title: {
      type: String,
      default: "Calendar",
    },
    day: {
      type: String,
      default: "Tuesday",
    },
    year: {
      type: String,
      default: "2024",
    },
    initialView: {
      type: String,
      default: "dayGridMonth",
    },
    initialDate: {
      type: String,
      default: "2024-06-11",
    },
    events: {
      type: Array,
      default: () => [
        {
          title: "아녕하세요",
          start: "2024-06-13",
          end: "2024-06-13",
          className: "expenditure",
        },
        {
          title: "산삼이조에요",
          start: "2024-06-13",
          end: "2024-06-13",
          className: "expenditure",
        },
        {
          title: "헤헷콩",
          start: "2024-06-13",
          end: "2024-06-13",
          className: "income",
        },
      ],
    },
    selectable: {
      type: Boolean,
      default: true,
    },
    editable: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    calendar = new Calendar(document.getElementById(this.id), {
      contentHeight: "auto",
      plugins: [dayGridPlugin],
      initialView: this.initialView,
      selectable: this.selectable,
      editable: this.editable,
      events: this.events,
      initialDate: this.initialDate,
      headerToolbar: {
        right: "prev,next today",
        left: "title",
      },
      eventContent: function(arg) {
      return {
        html: '<div class="custom-event">' + arg.event.title + '</div>',
        classNames: ['custom-event-container'],
      };
    },
    //eventDidMount: function(arg) {
      // 이벤트가 렌더링된 후에 추가적인 조작을 수행할 수 있습니다.
      // 예를 들어, 이벤트의 위치를 이동하거나 스타일을 조정할 수 있습니다.
    //},
      views: {
        month: {
          titleFormat: {
            month: "long",
            year: "numeric",
          },
        },
        agendaWeek: {
          titleFormat: {
            month: "long",
            year: "numeric",
            day: "numeric",
          },
        },
        agendaDay: {
          titleFormat: {
            month: "short",
            year: "numeric",
            day: "numeric",
          },
        },
      },
    });

    calendar.render();
  },
  beforeUnmount() {
    if (calendar) {
      calendar.destroy();
    }
  },
};
</script>
<style>
.fc .fc-button-primary {
  background: #4caf50 !important;
  border-color: #4caf50 !important;
}
.fc .fc-button-primary:hover {
  background: #4caf50 !important;
  border-color: #4caf50 !important;
}
.income {
  background-color: green !important;
  border-radius: 50%;
  width: 120px; /* 원하는 크기로 조정 */
  height: 20px; /* 원하는 크기로 조정 */
  display: inline-block; /* 크기를 맞추기 위해 블록 요소로 설정 */
  line-height: 20px; /* 높이와 동일하게 설정하여 텍스트가 중앙에 오도록 함 */
  color: white; /* 텍스트 색상 */
}
.expenditure {
  background-color: red !important;
  border-radius: 50%;
  width: 120px; /* 원하는 크기로 조정 */
  height: 20px; /* 원하는 크기로 조정 */
  /*display: inline-block; /* 크기를 맞추기 위해 블록 요소로 설정 */
  line-height: 20px; /* 높이와 동일하게 설정하여 텍스트가 중앙에 오도록 함 */
  color: white; /* 텍스트 색상 */
}
</style>
