// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get all toggle section headers
    const toggleSections = document.querySelectorAll('.toggle-section');

    toggleSections.forEach(section => {
        section.addEventListener('click', () => {
            // Get the target content div ID from the data-target attribute
            const targetId = section.dataset.target;
            const targetContent = document.getElementById(targetId);
            const toggleIcon = section.querySelector(`#toggle-icon-${targetId.replace('-content', '')}`);

            if (targetContent) {
                // Toggle the 'active' class on the content div
                targetContent.classList.toggle('active');
                targetContent.classList.toggle('hidden'); // Also toggle hidden for initial state

                // Change the toggle icon based on the active state
                if (targetContent.classList.contains('active')) {
                    toggleIcon.textContent = '-'; // Change to minus when expanded
                } else {
                    toggleIcon.textContent = '+'; // Change back to plus when collapsed
                }
            }
        });
    });

    // Markdown content for copying
    const markdownContent = `
# 중학교 1학년 대상 기후 데이터 분석 수업 지도안 (3차시)

**안녕하세요, 과학 교사 제미나이입니다!**

최근 폭염이나 갑작스러운 폭우처럼 이상한 날씨를 경험한 적이 많죠? 10년 뒤 우리나라의 날씨는 어떻게 변해있을까요?

이 수업에서는 우리가 직접 **'기후 데이터 탐정'**이 되어 과거와 현재의 데이터를 통해 미래의 날씨를 살짝 엿보는 재미있는 탐구 활동을 해볼 거예요. 복잡한 과학이 아니라, 간단한 방법으로 데이터와 친해지는 시간이니 즐겁게 참여해 주세요!

이 지도안은 다운로드 가능한 마크다운(.md) 파일 형식으로 작성되었습니다.

---

## 🎯 수업 목표

1.  **날씨**와 **기후**의 차이점을 설명할 수 있다.
2.  공공 데이터를 활용하여 우리나라의 기후 변화 데이터를 수집하고 그래프로 표현할 수 있다.
3.  데이터의 경향성을 파악하여 10년 후의 기후를 예측해 보고, 기후 변화가 우리 생활에 미칠 영향을 상상하여 표현할 수 있다.

---

## 🔬 1차시: 우리는 기후 탐정! 🕵️‍♀️

### **파인만식 설명으로 개념 잡기**

여러분, 어제 점심에 뭐 먹었는지 기억나요? 그건 **'날씨'**와 같아요. 매일매일 바뀌는 단기적인 정보죠. 그럼 여러분이 보통 여름엔 반팔을 입고 겨울엔 두꺼운 외투를 입는다는 사실은 어떨까요? 이게 바로 **'기후'**랍니다. 오랜 기간 동안의 평균적인 날씨 패턴, 즉 옷장 속에 어떤 종류의 옷이 있는가와 같아요. 우리는 미래를 예측하기 위해 과거의 사진첩(기후 데이터)을 넘겨보며 어떤 사진(날씨)이 찍힐지 추리해 볼 거예요!

### **활동 내용**

1.  **생각 열기 (5분)**
    * 최근 경험했던 이상한 날씨(폭염, 폭우, 따뜻한 겨울 등)에 대해 자유롭게 이야기 나누기.
    * 왜 이런 현상이 나타나는지 궁금증 유발하기.

2.  **핵심 개념 배우기 (10분)**
    * 날씨와 기후의 차이점 설명 (위 파인만식 설명 활용).
    * 과거 데이터를 분석하면 미래를 예측하는 데 도움이 되는 이유 토의하기.

3.  **데이터 수집 실습 (25분)**
    * **탐정 도구:** 기상청 기상자료개방포털 사이트
    * **미션:** 내가 태어난 달의 지난 10년간 평균 기온 데이터 찾아보기.
        * 예: 8월에 태어났다면, 2015년~2024년의 8월 평균 기온 찾기.
    * 찾은 데이터를 학습지에 간단히 기록하기.

4.  **정리 및 예고 (5분)**
    * 데이터를 숫자로만 보니 어떤 변화가 있는지 한눈에 보이나요? 다음 시간에는 이 숫자들을 그림으로 바꿔서 누가 봐도 쉽게 알 수 있도록 만들어 볼 거예요!

---

## 📊 2차시: 데이터, 그림으로 말해요!

### **파인만식 설명으로 개념 잡기**

숫자 10개를 쭉 늘어놓고 설명하는 것보다, 그 숫자들을 모아 '점점 높아지는 계단' 그림 하나를 보여주는 게 훨씬 이해하기 쉽지 않을까요? **그래프**가 바로 그런 역할을 해요. 데이터라는 복잡한 이야기를 한 장의 그림으로 요약해 주는 마법 같은 도구죠. 위로 쭉 뻗는 선은 "점점 더워지고 있어!"라고 소리치는 것과 같답니다.

### **활동 내용**

1.  **지난 시간 복습 (5분)**
    * 기후와 날씨의 차이, 데이터 수집 방법 간단히 복습.

2.  **그래프 실습 (25분)**
    * **탐정 도구:** 구글 스프레드시트 또는 미리 준비된 그래프 용지
    * **미션:** 1차시에 수집한 '나의 탄생월 10년치 평균 기온' 데이터를 꺾은선그래프로 그리기.
        * x축: 연도 (2015년 ~ 2024년)
        * y축: 평균 기온
    * 그래프의 제목 붙이기 (예: 2015-2024년 서울 8월 평균 기온 변화)

3.  **경향성 파악하기 (10분)**
    * **탐정의 눈으로 분석:** 내가 그린 그래프의 선이 전체적으로 어디를 향하고 있나요? (위, 아래, 그대로)
    * 그래프의 점들을 가장 잘 대표할 수 있는 직선(추세선)을 자를 대고 그려보기.
    * 이 추세선이 무엇을 의미하는지 한 문장으로 학습지에 작성하기. (예: 지난 10년간 8월의 평균 기온은 꾸준히 높아지는 경향을 보인다.)

4.  **정리 및 예고 (5분)**
    * 이제 우리는 데이터가 말하는 경향을 그림으로 파악할 수 있게 됐어요. 그렇다면 이 선을 쭉 이어서 미래를 그려볼 수도 있겠죠? 다음 시간에는 직접 미래 기후 보고서를 만들어 보겠습니다!

---

## 📝 3차시: 내가 만드는 미래 날씨 보고서

### **파인만식 설명으로 개념 잡기**

자, 탐정 여러분! 단서(데이터)를 모으고, 패턴(그래프와 추세선)도 찾아냈어요. 이제 범인을 지목하듯, 미래를 예측해 볼 시간이에요. 영화의 전반부만 보고 결말을 추리하는 것과 같아요. 100% 정확하진 않겠지만, 우리는 데이터라는 확실한 근거를 가지고 아주 그럴듯한 추리를 할 수 있답니다. "이대로라면, 10년 뒤 여름은 지금보다 훨씬 덥겠는걸?" 하고 말이죠.

### **활동 내용**

1.  **미래 예측하기 (15분)**
    * **탐정의 예측:** 2차시에 그린 그래프의 추세선을 10년 뒤(2035년)까지 연장해서 그려보기.
    * 2035년 나의 탄생월 평균 기온은 약 몇 도가 될지 예측하여 기록하기.

2.  **미래 상상하고 표현하기 (20분)**
    * **미션:** '10년 뒤 나에게서 온 엽서' 꾸미기
    * 예측한 기후 변화가 우리 생활(음식, 옷, 집, 직업, 건강 등)을 어떻게 바꿀지 상상하여 그림이나 글로 표현하기.
        * 예시: "2035년의 여름은 너무 더워서, 학교에서 '폭염 방학'을 한단다! 길거리에서는 열대 과일인 망고를 팔고 있어."
    * 이 활동은 기후 변화와 사회적 변화를 연결하는 탐구 활동에서 아이디어를 얻었습니다.

3.  **발표 및 공유 (10분)**
    * 자신이 만든 '미래 날씨 보고서(엽서)'를 친구들에게 소개하기.
    * 친구들의 다양한 예측과 상상을 들어보며 생각 넓히기.
    * 우리의 예측은 간단한 모델이지만, 실제 기상학자들은 슈퍼컴퓨터와 인공지능(AI)을 이용해 훨씬 정교하게 미래를 예측한다는 사실을 알려주며 수업 마무리.

---
> 이 수업을 통해 학생들이 기후 변화를 막연한 두려움이 아닌, 데이터를 통해 탐구하고 미래를 대비할 수 있는 과학적 문제로 인식하는 계기가 되기를 바랍니다.
    `;

    const copyBtn = document.getElementById('copyMarkdownBtn');
    const copyMessage = document.getElementById('copyMessage');

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            // Use a temporary textarea to copy text to clipboard
            const textarea = document.createElement('textarea');
            textarea.value = markdownContent;
            textarea.style.position = 'fixed'; // Prevent scrolling to bottom
            textarea.style.opacity = '0'; // Make it invisible
            document.body.appendChild(textarea);
            textarea.select();

            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    copyMessage.textContent = '복사되었습니다!';
                    copyMessage.classList.remove('hidden');
                    setTimeout(() => {
                        copyMessage.classList.add('hidden');
                    }, 2000); // Hide message after 2 seconds
                } else {
                    copyMessage.textContent = '복사 실패!';
                    copyMessage.classList.remove('hidden');
                    copyMessage.classList.add('text-red-600'); // Change color for error
                    setTimeout(() => {
                        copyMessage.classList.add('hidden');
                        copyMessage.classList.remove('text-red-600');
                    }, 2000);
                }
            } catch (err) {
                console.error('Failed to copy text: ', err);
                copyMessage.textContent = '복사 실패!';
                copyMessage.classList.remove('hidden');
                copyMessage.classList.add('text-red-600');
                setTimeout(() => {
                    copyMessage.classList.add('hidden');
                    copyMessage.classList.remove('text-red-600');
                }, 2000);
            } finally {
                document.body.removeChild(textarea);
            }
        });
    }
});