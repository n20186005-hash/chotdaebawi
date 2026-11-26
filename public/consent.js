(function () {
  'use strict';
  var key = 'chotdaebawi.analytics.v1';
  var vetoKey = 'chotdaebawi.analytics.veto.v1';
  var id = 'G-HXM22WWPKP';
  var active = false;
  var configured = false;
  var consentReady = false;
  var draftDirty = false;
  var strings = {
    en: { saved: 'Preference saved.', failed: 'Could not verify the saved choice. Analytics is off on this page.', unsafe: 'Analytics is off on this page, but permission from this attempt or an earlier one may remain usable in other tabs. Check your browser storage.', changed: 'The setting changed in another tab; your unsaved choice was discarded.', updated: 'The setting was updated in another tab.' },
    ko: { saved: '설정이 저장되었습니다.', failed: '저장 여부를 확인할 수 없습니다. 이 페이지에서 분석은 꺼져 있습니다.', unsafe: '이 페이지의 분석은 꺼져 있지만 이번 시도나 이전에 저장된 권한을 다른 탭에서 사용할 수 있습니다. 브라우저 저장소를 확인하세요.', changed: '다른 탭에서 설정이 변경되어 저장하지 않은 선택이 취소되었습니다.', updated: '다른 탭에서 설정이 변경되었습니다.' },
    ja: { saved: '設定を保存しました。', failed: '保存を確認できません。このページでは分析はオフです。', unsafe: 'このページの分析はオフですが、今回または以前の試行で保存された許可が他のタブで使われる可能性があります。ブラウザーの保存データを確認してください。', changed: '別のタブで設定が変更され、未保存の選択は破棄されました。', updated: '別のタブで設定が変更されました。' },
    zh: { saved: '偏好已保存。', failed: '無法確認是否保存；本頁的分析功能已關閉。', unsafe: '本頁分析功能已關閉，但本次或先前嘗試保存的授權可能仍可在其他分頁使用。請檢查瀏覽器儲存資料。', changed: '其他分頁已更改設定，您尚未保存的選擇已捨棄。', updated: '其他分頁已更改設定。' }
  };
  function read(store, name) { try { return { ok: true, value: store.getItem(name) }; } catch (_) { return { ok: false }; } }
  function write(store, name, value) { try { store.setItem(name, value); return read(store, name).value === value; } catch (_) { return false; } }
  function remove(store, name) { try { store.removeItem(name); var r = read(store, name); return r.ok && r.value === null; } catch (_) { return false; } }
  function stores() { try { return { local: window.localStorage, session: window.sessionStorage }; } catch (_) { return null; } }
  function permission() {
    var s = stores(); if (!s) return false;
    var veto = read(s.session, vetoKey), pref = read(s.local, key);
    return veto.ok && veto.value === null && pref.ok && pref.value === 'granted';
  }
  function runtime(on) {
    active = on;
    window['ga-disable-' + id] = !on;
    if (!on) {
      if (consentReady) window.gtag('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      return;
    }
    if (!consentReady) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
      window.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      consentReady = true;
    }
    window.gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    if (!configured) {
      configured = true;
      window.gtag('js', new Date());
      window.gtag('config', id);
      var script = document.createElement('script'); script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
      document.head.appendChild(script);
    }
  }
  function refuse(s) {
    runtime(false);
    if (!s) return false;
    write(s.session, vetoKey, 'denied');
    var safe = write(s.local, key, 'denied') || remove(s.local, key);
    if (safe) remove(s.session, vetoKey);
    return safe;
  }
  function save(on) {
    var s = stores();
    if (!on) { var denied = refuse(s); return denied ? 'saved' : 'unsafe'; }
    runtime(false);
    if (!s || !remove(s.session, vetoKey) || !write(s.local, key, 'granted') || !permission()) {
      return refuse(s) ? 'failed' : 'unsafe';
    }
    runtime(true); return 'saved';
  }
  runtime(permission());
  window.addEventListener('storage', function (event) {
    var s = stores(); if ((event.key === key || event.key === null) && (!s || event.storageArea === s.local)) { var wasDirty = draftDirty; runtime(permission()); sync(); draftDirty = false; var msg = document.getElementById('saved-msg'); if (msg) { var lang = document.documentElement.getAttribute('lang') || 'en'; var t = strings[lang.slice(0, 2)] || strings.en; msg.textContent = wasDirty ? t.changed : t.updated; } }
  });
  function sync() {
    var box = document.getElementById('analytics-choice');
    if (box) box.checked = active;
  }
  document.addEventListener('DOMContentLoaded', function () {
    var box = document.getElementById('analytics-choice'), button = document.getElementById('save-cookies'), msg = document.getElementById('saved-msg');
    if (!box || !button || !msg) return;
    var lang = document.documentElement.getAttribute('lang') || 'en';
    var t = strings[lang.slice(0, 2)] || strings.en;
    sync();
    box.addEventListener('change', function () { draftDirty = box.checked !== active; msg.textContent = ''; });
    button.addEventListener('click', function () { var result = save(box.checked); sync(); draftDirty = false; msg.textContent = t[result]; });
  });
})();
