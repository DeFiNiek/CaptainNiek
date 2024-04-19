import React from "react";

const Chart = () => {
    return (
        <iframe
            srcDoc={`
        <!DOCTYPE html>
        <html lang="en">
        <head>
	<base href="https://pump.fun/tradingview/charting_library/">
	<meta charset="utf-8">
	<script>window === window.parent && (location.href = "about:blank")</script>
	<script defer="" crossorigin="anonymous" src="bundles/runtime.b283dc97286bf865cf08.js"></script>
	<script defer="" crossorigin="anonymous" src="bundles/en.4716.e4ac74dfc9ec5374b00c.js"></script>
	<script defer="" crossorigin="anonymous" src="bundles/5142.2c34c8656148cc5203b7.js"></script>
	<script defer="" crossorigin="anonymous" src="bundles/library.97ddeff81f861d17f06e.js"></script>
	<link type="text/css" href="bundles/6150.bda60280b05cea478076.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/2666.fbb750fd312778403036.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/4015.1d0e3a62a59d173c81f3.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/3842.8cf6b523fd5a5b6fb022.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/6.362fa6a7ab1f3e3b06c4.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/5649.b60ed09c5ea8c55827d4.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/8056.1f54f717d8e522c55c89.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/5993.4705829d0834140ee3f2.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/2191.bb0aa12f5e562fd483f3.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/3502.c49903f7222870ff8aca.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/6752.207eb3cc75b3ed2c6754.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/8149.21f2b01074a4d082e268.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/6639.885b5577e3fb71ee2bea.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/9327.97be240031495a68333f.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/9916.60c48148a54dba9504a0.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/6106.f01163745d787b60c86c.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/6985.2cd225354e2fd236e8e9.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/1109.b1ced88f4a839badfff1.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/4788.3cff897925f7a8dbc837.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/5145.a2b224fd27ab2941c565.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/6036.3b493a9f0ab052e6447c.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/5166.a12c50ad6225ca6de843.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/1033.5197f9f8b8500206d06c.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/4987.ca5d16a7e990d39bfb0e.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/9842.ceaeabba258d065497c8.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/8450.f75ab24e1ecb22d29183.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/4102.4abd8542fa3aa3e7fd5d.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/4894.99d4c2794da9feef3c70.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/6025.263b457b1a7f9ca139b2.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/3939.4d0187960a564ff5a557.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/6949.19355e81a60b640ea097.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/524.ef662c4bc3e57dd91171.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/1803.4653bb65d2b0d594d6af.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/3066.58a325f25b087530293d.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/9789.cb5ad20bc727d3820b6c.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/5866.f164dd2a584ab0f493cf.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/956.1e89775cfd644d656c56.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/6221.bc53670dfb8f982908a2.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/9138.03b8fbcfabcae851949a.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/3980.b2ff45a2d8bb6a131d7c.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/3914.d2b6c577f350629b6837.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/2109.4d5de3fbde1cd7dc5e9f.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/855.56a5e53c97d91a9f96f7.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/2587.1f1100dc01693edfe269.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/2639.7b1d42eef7b89e0e96d3.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/7807.8577632fdab29ee53ddf.css">
	<link rel="stylesheet" type="text/css" href="/tradingview/charting_library/bundles/3353.860146c59230ab4bd938.css">
    </head>
    <body class="chart-page unselectable on-widget">
	<div role="contentinfo" aria-hidden="false" style="font-size: 0px;">
		<p>TradingView is interactive and has commands to use with a screen reader. The following is a list of keyboard
			commands available to interact on the platform</p>
		<ul>
			<li>Start using keyboard navigation mode. Press Alt + Z</li>
			<li>Quick search. Press Ctrl + K</li>
			<li>Change symbol. Start typing symbol name</li>
			<li>Change interval. Press number or comma</li>
			<li>Indicators, Metrics and Strategies. Press slash</li>
			<li>Load layout. Press period</li>
		</ul>
	</div>
	<div id="layout-size-sensor" style="position: fixed; inset: 0px; pointer-events: none; visibility: hidden;"></div>
	<div class="js-rootresizer__contents layout-with-border-radius"
		style="position: relative; width: 100%; height: 100%;">
		<div class="layout__area--top" style="position: absolute; top: 0px; left: 0px; width: 418px; height: 38px;">
			<div class="toolbar-qqNP9X6e">
				<div class="overflowWrap-qqNP9X6e">
					<div class="inner-OhqNVIYA fake-OhqNVIYA" data-is-fake-main-panel="true" aria-hidden="true"
						role="toolbar">
						<div class="wrapOverflow-wXGVFOC9">
							<div class="wrap-wXGVFOC9">
								<div class="scrollWrap-wXGVFOC9 noScrollBar-wXGVFOC9">
									<div class="content-OhqNVIYA" role="none">
										<div class="innerWrap-OhqNVIYA">
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI"><button aria-label="Symbol Search" tabindex="-1"
													type="button"
													class="uppercase-cq__ntSC smallLeftPadding-cq__ntSC button-GwQQdU8S button-cq__ntSC apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
													data-tooltip="Symbol Search"><span class="icon-GwQQdU8S"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"
															width="18" height="18">
															<path fill="currentColor"
																d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM8 2a6 6 0 1 0 3.65 10.76l3.58 3.58 1.06-1.06-3.57-3.57A6 6 0 0 0 8 2Z">
															</path>
														</svg></span>
													<div class="js-button-text text-GwQQdU8S text-cq__ntSC">NIEK</div>
												</button><button aria-label="Compare or Add Symbol" tabindex="-1"
													type="button"
													class="button-OhqNVIYA button-ptpAHg8E withoutText-ptpAHg8E button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
													data-tooltip="Compare or Add Symbol"><span
														class="icon-GwQQdU8S"><svg xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 28 28" width="28" height="28">
															<path fill="currentColor"
																d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z">
															</path>
															<path fill="currentColor"
																d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"></path>
														</svg></span></button></div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI">
												<div class="wrap-n5bmFxyX"><button type="button"
														class="menu-S_1OCXUK button-merBkM5y apply-common-tooltip accessible-merBkM5y"
														tabindex="-1" data-tooltip="5 minutes" aria-label="5 minutes">
														<div class="menuContent-S_1OCXUK wrap-n5bmFxyX">
															<div class="value-gwXludjS">5m</div>
														</div>
													</button></div>
											</div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI">
												<div class="wrap-n5bmFxyX"><button type="button"
														class="menu-b3Cgff6l button-merBkM5y apply-common-tooltip accessible-merBkM5y"
														tabindex="-1" data-tooltip="Candles" aria-label="Candles">
														<div class="wrap-n5bmFxyX"><span><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 28 28" width="28" height="28"
																	fill="currentColor">
																	<path
																		d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z">
																	</path>
																	<path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"></path>
																	<path
																		d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z">
																	</path>
																	<path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"></path>
																</svg></span></div>
													</button></div>
											</div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI">
												<div class="wrap-n5bmFxyX"><button
														aria-label="Indicators &amp; Strategies" data-role="button"
														data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;/&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0}&amp;quot;}"
														tabindex="-1" type="button"
														class="button-OhqNVIYA button-ptpAHg8E withText-ptpAHg8E button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
														data-name="open-indicators-dialog"
														data-tooltip="Indicators &amp; Strategies"><span
															class="icon-GwQQdU8S"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28" fill="none">
																<path stroke="currentColor"
																	d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0">
																</path>
															</svg></span>
														<div class="js-button-text text-GwQQdU8S">Indicators</div>
													</button></div>
											</div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI">
												<div class="wrap-n5bmFxyX"><button tabindex="-1" type="button"
														class="button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
														aria-label="Undo scale price"
														data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Ctrl&amp;quot;,&amp;quot;Z&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + {1}&amp;quot;}"
														data-tooltip="Undo scale price"><span
															class="icon-GwQQdU8S icon-uMfL97K2"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28">
																<path fill="currentColor"
																	d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z">
																</path>
															</svg></span></button><button tabindex="-1" type="button"
														class="button-GwQQdU8S isDisabled-GwQQdU8S accessible-GwQQdU8S"
														disabled=""><span class="icon-GwQQdU8S icon-uMfL97K2"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28">
																<path fill="currentColor"
																	d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z">
																</path>
															</svg></span></button></div>
											</div>
											<div class="fill-OhqNVIYA collapse-OhqNVIYA group-MBOVGQRI"></div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI"><button aria-label="Quick Search"
													data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Ctrl&amp;quot;,&amp;quot;K&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + {1}&amp;quot;}"
													tabindex="-1" type="button"
													class="iconButton-OhqNVIYA button-xNqEcuN2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
													data-tooltip="Quick Search"><span class="icon-GwQQdU8S"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
															width="28" height="28">
															<path fill="currentColor"
																d="M15 11v4l1-1.5 2.33-3.5.67-1h-3V4l-1 1.5L12.67 9 12 10h3v1Zm2-7v4h2a1 1 0 0 1 .83 1.55l-4 6A1 1 0 0 1 14 15v-4h-2a1 1 0 0 1-.83-1.56l4-6A1 1 0 0 1 17 4ZM5 13.5a7.5 7.5 0 0 1 6-7.35v1.02A6.5 6.5 0 1 0 18.98 13h1a7.6 7.6 0 0 1-1.83 5.44l4.7 4.7-.7.71-4.71-4.7A7.5 7.5 0 0 1 5 13.5Z">
															</path>
														</svg></span></button><button aria-label="Chart settings"
													tabindex="-1" type="button"
													class="iconButton-OhqNVIYA button-xNqEcuN2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
													data-tooltip="Chart settings"><span class="icon-GwQQdU8S"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
															width="28" height="28">
															<g fill="currentColor" fill-rule="evenodd">
																<path fill-rule="nonzero"
																	d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z">
																</path>
																<path
																	d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z">
																</path>
															</g>
														</svg></span></button>
												<div class="group-MBOVGQRI"><button aria-label="Fullscreen mode"
														data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Shift&amp;quot;,&amp;quot;F&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + {1}&amp;quot;}"
														tabindex="-1" type="button"
														class="button-xNqEcuN2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
														data-tooltip="Fullscreen mode"><span class="icon-GwQQdU8S"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28">
																<path fill="currentColor"
																	d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z">
																</path>
															</svg></span></button></div><button type="button"
													class="button-merBkM5y apply-common-tooltip accessible-merBkM5y"
													tabindex="-1" data-tooltip="Take a snapshot"
													aria-label="Take a snapshot">
													<div data-role="button" class="iconButton-OhqNVIYA button-GwQQdU8S">
														<span class="icon-GwQQdU8S"><svg
																xmlns="http://www.w3.org/2000/svg" width="28"
																height="28" fill="currentColor">
																<path fill-rule="evenodd" clip-rule="evenodd"
																	d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z">
																</path>
																<path fill-rule="evenodd" clip-rule="evenodd"
																	d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z">
																</path>
															</svg></span></div>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="inner-OhqNVIYA fake-OhqNVIYA" data-is-fake-main-panel="true" aria-hidden="true"
						role="toolbar">
						<div class="wrapOverflow-wXGVFOC9">
							<div class="wrap-wXGVFOC9">
								<div class="scrollWrap-wXGVFOC9 noScrollBar-wXGVFOC9">
									<div class="content-OhqNVIYA" role="none">
										<div class="innerWrap-OhqNVIYA">
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI"><button aria-label="Symbol Search" tabindex="-1"
													type="button"
													class="uppercase-cq__ntSC smallLeftPadding-cq__ntSC button-GwQQdU8S button-cq__ntSC apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
													data-tooltip="Symbol Search"><span class="icon-GwQQdU8S"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"
															width="18" height="18">
															<path fill="currentColor"
																d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM8 2a6 6 0 1 0 3.65 10.76l3.58 3.58 1.06-1.06-3.57-3.57A6 6 0 0 0 8 2Z">
															</path>
														</svg></span>
													<div class="js-button-text text-GwQQdU8S text-cq__ntSC">NIEK</div>
												</button><button aria-label="Compare or Add Symbol" tabindex="-1"
													type="button"
													class="button-OhqNVIYA button-ptpAHg8E withoutText-ptpAHg8E button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
													data-tooltip="Compare or Add Symbol"><span
														class="icon-GwQQdU8S"><svg xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 28 28" width="28" height="28">
															<path fill="currentColor"
																d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z">
															</path>
															<path fill="currentColor"
																d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"></path>
														</svg></span></button></div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI">
												<div class="wrap-n5bmFxyX"><button type="button"
														class="menu-S_1OCXUK button-merBkM5y apply-common-tooltip accessible-merBkM5y"
														tabindex="-1" data-tooltip="5 minutes" aria-label="5 minutes">
														<div class="menuContent-S_1OCXUK wrap-n5bmFxyX">
															<div class="value-gwXludjS">5m</div>
														</div>
													</button></div>
											</div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI">
												<div class="wrap-n5bmFxyX"><button type="button"
														class="menu-b3Cgff6l button-merBkM5y apply-common-tooltip accessible-merBkM5y"
														tabindex="-1" data-tooltip="Candles" aria-label="Candles">
														<div class="wrap-n5bmFxyX"><span><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 28 28" width="28" height="28"
																	fill="currentColor">
																	<path
																		d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z">
																	</path>
																	<path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"></path>
																	<path
																		d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z">
																	</path>
																	<path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"></path>
																</svg></span></div>
													</button></div>
											</div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI">
												<div class="wrap-n5bmFxyX"><button
														aria-label="Indicators &amp; Strategies" data-role="button"
														data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;/&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0}&amp;quot;}"
														tabindex="-1" type="button"
														class="button-OhqNVIYA button-ptpAHg8E withoutText-ptpAHg8E button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
														data-name="open-indicators-dialog"
														data-tooltip="Indicators &amp; Strategies"><span
															class="icon-GwQQdU8S"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28" fill="none">
																<path stroke="currentColor"
																	d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0">
																</path>
															</svg></span></button></div>
											</div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI">
												<div class="wrap-n5bmFxyX"><button tabindex="-1" type="button"
														class="button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
														aria-label="Undo scale price"
														data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Ctrl&amp;quot;,&amp;quot;Z&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + {1}&amp;quot;}"
														data-tooltip="Undo scale price"><span
															class="icon-GwQQdU8S icon-uMfL97K2"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28">
																<path fill="currentColor"
																	d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z">
																</path>
															</svg></span></button><button tabindex="-1" type="button"
														class="button-GwQQdU8S isDisabled-GwQQdU8S accessible-GwQQdU8S"
														disabled=""><span class="icon-GwQQdU8S icon-uMfL97K2"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28">
																<path fill="currentColor"
																	d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z">
																</path>
															</svg></span></button></div>
											</div>
											<div class="fill-OhqNVIYA collapse-OhqNVIYA group-MBOVGQRI"></div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI"><button aria-label="Quick Search"
													data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Ctrl&amp;quot;,&amp;quot;K&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + {1}&amp;quot;}"
													tabindex="-1" type="button"
													class="iconButton-OhqNVIYA button-xNqEcuN2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
													data-tooltip="Quick Search"><span class="icon-GwQQdU8S"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
															width="28" height="28">
															<path fill="currentColor"
																d="M15 11v4l1-1.5 2.33-3.5.67-1h-3V4l-1 1.5L12.67 9 12 10h3v1Zm2-7v4h2a1 1 0 0 1 .83 1.55l-4 6A1 1 0 0 1 14 15v-4h-2a1 1 0 0 1-.83-1.56l4-6A1 1 0 0 1 17 4ZM5 13.5a7.5 7.5 0 0 1 6-7.35v1.02A6.5 6.5 0 1 0 18.98 13h1a7.6 7.6 0 0 1-1.83 5.44l4.7 4.7-.7.71-4.71-4.7A7.5 7.5 0 0 1 5 13.5Z">
															</path>
														</svg></span></button><button aria-label="Chart settings"
													tabindex="-1" type="button"
													class="iconButton-OhqNVIYA button-xNqEcuN2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
													data-tooltip="Chart settings"><span class="icon-GwQQdU8S"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
															width="28" height="28">
															<g fill="currentColor" fill-rule="evenodd">
																<path fill-rule="nonzero"
																	d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z">
																</path>
																<path
																	d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z">
																</path>
															</g>
														</svg></span></button>
												<div class="group-MBOVGQRI"><button aria-label="Fullscreen mode"
														data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Shift&amp;quot;,&amp;quot;F&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + {1}&amp;quot;}"
														tabindex="-1" type="button"
														class="button-xNqEcuN2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
														data-tooltip="Fullscreen mode"><span class="icon-GwQQdU8S"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28">
																<path fill="currentColor"
																	d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z">
																</path>
															</svg></span></button></div><button type="button"
													class="button-merBkM5y apply-common-tooltip accessible-merBkM5y"
													tabindex="-1" data-tooltip="Take a snapshot"
													aria-label="Take a snapshot">
													<div data-role="button" class="iconButton-OhqNVIYA button-GwQQdU8S">
														<span class="icon-GwQQdU8S"><svg
																xmlns="http://www.w3.org/2000/svg" width="28"
																height="28" fill="currentColor">
																<path fill-rule="evenodd" clip-rule="evenodd"
																	d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z">
																</path>
																<path fill-rule="evenodd" clip-rule="evenodd"
																	d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z">
																</path>
															</svg></span></div>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="inner-OhqNVIYA" data-is-fake-main-panel="false" aria-hidden="false" role="toolbar">
						<div class="wrapOverflow-wXGVFOC9">
							<div class="wrap-wXGVFOC9">
								<div class="scrollWrap-wXGVFOC9 noScrollBar-wXGVFOC9">
									<div class="content-OhqNVIYA" role="none">
										<div class="innerWrap-OhqNVIYA">
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI"><button aria-label="Symbol Search"
													id="header-toolbar-symbol-search" tabindex="-1" type="button"
													class="uppercase-cq__ntSC smallLeftPadding-cq__ntSC button-GwQQdU8S button-cq__ntSC apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
													data-tooltip="Symbol Search"><span class="icon-GwQQdU8S"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"
															width="18" height="18">
															<path fill="currentColor"
																d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM8 2a6 6 0 1 0 3.65 10.76l3.58 3.58 1.06-1.06-3.57-3.57A6 6 0 0 0 8 2Z">
															</path>
														</svg></span>
													<div class="js-button-text text-GwQQdU8S text-cq__ntSC">NIEK</div>
												</button><button aria-label="Compare or Add Symbol"
													id="header-toolbar-compare" tabindex="-1" type="button"
													class="button-OhqNVIYA button-ptpAHg8E withoutText-ptpAHg8E button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
													data-tooltip="Compare or Add Symbol"><span
														class="icon-GwQQdU8S"><svg xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 28 28" width="28" height="28">
															<path fill="currentColor"
																d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z">
															</path>
															<path fill="currentColor"
																d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"></path>
														</svg></span></button></div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI">
												<div class="wrap-n5bmFxyX" id="header-toolbar-intervals"><button
														type="button"
														class="menu-S_1OCXUK button-merBkM5y apply-common-tooltip accessible-merBkM5y"
														tabindex="-1" data-tooltip="5 minutes" aria-label="5 minutes">
														<div class="menuContent-S_1OCXUK wrap-n5bmFxyX">
															<div class="value-gwXludjS">5m</div>
														</div>
													</button></div>
											</div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI">
												<div class="wrap-n5bmFxyX" id="header-toolbar-chart-styles"><button
														type="button"
														class="menu-b3Cgff6l button-merBkM5y apply-common-tooltip accessible-merBkM5y"
														tabindex="-1" data-tooltip="Candles" aria-label="Candles">
														<div class="wrap-n5bmFxyX"><span><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 28 28" width="28" height="28"
																	fill="currentColor">
																	<path
																		d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z">
																	</path>
																	<path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"></path>
																	<path
																		d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z">
																	</path>
																	<path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"></path>
																</svg></span></div>
													</button></div>
											</div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI">
												<div class="wrap-n5bmFxyX" id="header-toolbar-indicators"><button
														aria-label="Indicators &amp; Strategies" data-role="button"
														data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;/&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0}&amp;quot;}"
														tabindex="-1" type="button"
														class="button-OhqNVIYA button-ptpAHg8E withoutText-ptpAHg8E button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
														data-name="open-indicators-dialog"
														data-tooltip="Indicators &amp; Strategies"><span
															class="icon-GwQQdU8S"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28" fill="none">
																<path stroke="currentColor"
																	d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0">
																</path>
															</svg></span></button></div>
											</div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI">
												<div class="wrap-n5bmFxyX" id="header-toolbar-undo-redo"><button
														tabindex="-1" type="button"
														class="button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
														aria-label="Undo scale price"
														data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Ctrl&amp;quot;,&amp;quot;Z&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + {1}&amp;quot;}"
														data-tooltip="Undo scale price"><span
															class="icon-GwQQdU8S icon-uMfL97K2"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28">
																<path fill="currentColor"
																	d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z">
																</path>
															</svg></span></button><button tabindex="-1" type="button"
														class="button-GwQQdU8S isDisabled-GwQQdU8S accessible-GwQQdU8S"
														disabled=""><span class="icon-GwQQdU8S icon-uMfL97K2"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28">
																<path fill="currentColor"
																	d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z">
																</path>
															</svg></span></button></div>
											</div>
											<div class="fill-OhqNVIYA group-MBOVGQRI"></div>
											<div class="separatorWrap-MBOVGQRI">
												<div class="separator-xVhBjD5m separator-MBOVGQRI"></div>
											</div>
											<div class="group-MBOVGQRI"><button id="header-toolbar-quick-search"
													aria-label="Quick Search"
													data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Ctrl&amp;quot;,&amp;quot;K&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + {1}&amp;quot;}"
													tabindex="-1" type="button"
													class="iconButton-OhqNVIYA button-xNqEcuN2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
													data-name="header-toolbar-quick-search"
													data-tooltip="Quick Search"><span class="icon-GwQQdU8S"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
															width="28" height="28">
															<path fill="currentColor"
																d="M15 11v4l1-1.5 2.33-3.5.67-1h-3V4l-1 1.5L12.67 9 12 10h3v1Zm2-7v4h2a1 1 0 0 1 .83 1.55l-4 6A1 1 0 0 1 14 15v-4h-2a1 1 0 0 1-.83-1.56l4-6A1 1 0 0 1 17 4ZM5 13.5a7.5 7.5 0 0 1 6-7.35v1.02A6.5 6.5 0 1 0 18.98 13h1a7.6 7.6 0 0 1-1.83 5.44l4.7 4.7-.7.71-4.71-4.7A7.5 7.5 0 0 1 5 13.5Z">
															</path>
														</svg></span></button><button id="header-toolbar-properties"
													aria-label="Chart settings" tabindex="-1" type="button"
													class="iconButton-OhqNVIYA button-xNqEcuN2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
													data-name="header-toolbar-properties"
													data-tooltip="Chart settings"><span class="icon-GwQQdU8S"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
															width="28" height="28">
															<g fill="currentColor" fill-rule="evenodd">
																<path fill-rule="nonzero"
																	d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z">
																</path>
																<path
																	d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z">
																</path>
															</g>
														</svg></span></button>
												<div class="group-MBOVGQRI"><button id="header-toolbar-fullscreen"
														aria-label="Fullscreen mode"
														data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Shift&amp;quot;,&amp;quot;F&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + {1}&amp;quot;}"
														tabindex="-1" type="button"
														class="button-xNqEcuN2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
														data-name="header-toolbar-fullscreen"
														data-tooltip="Fullscreen mode"><span class="icon-GwQQdU8S"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28">
																<path fill="currentColor"
																	d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z">
																</path>
															</svg></span></button></div><button type="button"
													class="button-merBkM5y apply-common-tooltip accessible-merBkM5y"
													tabindex="-1" data-tooltip="Take a snapshot"
													aria-label="Take a snapshot">
													<div id="header-toolbar-screenshot" data-role="button"
														class="iconButton-OhqNVIYA button-GwQQdU8S"><span
															class="icon-GwQQdU8S"><svg
																xmlns="http://www.w3.org/2000/svg" width="28"
																height="28" fill="currentColor">
																<path fill-rule="evenodd" clip-rule="evenodd"
																	d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z">
																</path>
																<path fill-rule="evenodd" clip-rule="evenodd"
																	d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z">
																</path>
															</svg></span></div>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="layout__area--right js-hidden" style="position: absolute; top: 0px; right: 0px;"></div>
		<div class="layout__area--left" style="position: absolute; top: 42px; left: 0px; width: 52px; height: 362px;">
			<div id="drawing-toolbar" class="drawingToolbar-BfVZxb4b" role="toolbar" aria-orientation="vertical">
				<div class="wrap-Z4M3tWHb">
					<div class="scrollWrap-Z4M3tWHb noScrollBar-Z4M3tWHb">
						<div class="content-Z4M3tWHb">
							<div class="inner-BfVZxb4b">
								<div class="group-BfVZxb4b"><span>
										<div data-name="linetool-group-cursors" class="dropdown-pbhJWNrt undefined">
											<div class="control-pbhJWNrt">
												<div class="buttonWrap-pbhJWNrt accessible-pbhJWNrt"><button
														aria-label="Cross" data-tooltip-delay="1500" type="button"
														class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical isActive-KTgbfaP5 isTransparent-KTgbfaP5 accessible-KTgbfaP5"
														tabindex="-1" aria-pressed="true" data-tooltip="Cross">
														<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 28 28" width="28" height="28">
																	<g fill="currentColor">
																		<path d="M18 15h8v-1h-8z"></path>
																		<path
																			d="M14 18v8h1v-8zM14 3v8h1v-8zM3 15h8v-1h-8z">
																		</path>
																	</g>
																</svg></span></div>
													</button></div><button
													class="arrow-pbhJWNrt apply-common-tooltip common-tooltip-vertical accessible-pbhJWNrt"
													type="button" tabindex="-1" aria-pressed="true" aria-label="Cursors"
													data-tooltip="Cursors"><span class="arrowIcon-pbhJWNrt"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"
															width="10" height="16">
															<path
																d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z">
															</path>
														</svg></span></button>
											</div>
										</div>
									</span><span>
										<div data-name="linetool-group-trend-line" class="dropdown-pbhJWNrt">
											<div class="control-pbhJWNrt">
												<div class="buttonWrap-pbhJWNrt accessible-pbhJWNrt"><button
														aria-label="Trend Line" data-tooltip-delay="1500" type="button"
														class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical isTransparent-KTgbfaP5 accessible-KTgbfaP5"
														tabindex="-1"
														data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Shift&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{hotKey_0} — drawing a straight line at angles of 45&amp;quot;}"
														aria-pressed="false" data-tooltip="Trend Line">
														<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 28 28" width="28" height="28">
																	<g fill="currentColor" fill-rule="nonzero">
																		<path d="M7.354 21.354l14-14-.707-.707-14 14z">
																		</path>
																		<path
																			d="M22.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z">
																		</path>
																	</g>
																</svg></span></div>
													</button></div><button
													class="arrow-pbhJWNrt apply-common-tooltip common-tooltip-vertical accessible-pbhJWNrt"
													type="button" tabindex="-1" aria-pressed="false"
													aria-label="Trend line tools" data-tooltip="Trend line tools"><span
														class="arrowIcon-pbhJWNrt"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"
															width="10" height="16">
															<path
																d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z">
															</path>
														</svg></span></button>
											</div>
										</div>
									</span><span>
										<div data-name="linetool-group-gann-and-fibonacci" class="dropdown-pbhJWNrt">
											<div class="control-pbhJWNrt">
												<div class="buttonWrap-pbhJWNrt accessible-pbhJWNrt"><button
														aria-label="Fib Retracement" data-tooltip-delay="1500"
														type="button"
														class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical isTransparent-KTgbfaP5 accessible-KTgbfaP5"
														tabindex="-1" aria-pressed="false"
														data-tooltip="Fib Retracement">
														<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 28 28" width="28" height="28">
																	<g fill="currentColor" fill-rule="nonzero">
																		<path d="M3 5h22v-1h-22z"></path>
																		<path d="M3 17h22v-1h-22z"></path>
																		<path d="M3 11h19.5v-1h-19.5z"></path>
																		<path d="M5.5 23h19.5v-1h-19.5z"></path>
																		<path
																			d="M3.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM24.5 12c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z">
																		</path>
																	</g>
																</svg></span></div>
													</button></div><button
													class="arrow-pbhJWNrt apply-common-tooltip common-tooltip-vertical accessible-pbhJWNrt"
													type="button" tabindex="-1" aria-pressed="false"
													aria-label="Gann and Fibonacci tools"
													data-tooltip="Gann and Fibonacci tools"><span
														class="arrowIcon-pbhJWNrt"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"
															width="10" height="16">
															<path
																d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z">
															</path>
														</svg></span></button>
											</div>
										</div>
									</span><span>
										<div data-name="linetool-group-patterns" class="dropdown-pbhJWNrt">
											<div class="control-pbhJWNrt">
												<div class="buttonWrap-pbhJWNrt accessible-pbhJWNrt"><button
														aria-label="XABCD Pattern" data-tooltip-delay="1500"
														type="button"
														class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical isTransparent-KTgbfaP5 accessible-KTgbfaP5"
														tabindex="-1" aria-pressed="false" data-tooltip="XABCD Pattern">
														<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 28 28" width="28" height="28">
																	<g fill="currentColor" fill-rule="nonzero">
																		<path
																			d="M20.449 8.505l2.103 9.112.974-.225-2.103-9.112zM13.943 14.011l7.631 4.856.537-.844-7.631-4.856zM14.379 11.716l4.812-3.609-.6-.8-4.812 3.609zM10.96 13.828l-4.721 6.744.819.573 4.721-6.744zM6.331 20.67l2.31-13.088-.985-.174-2.31 13.088zM9.041 7.454l1.995 3.492.868-.496-1.995-3.492z">
																		</path>
																		<path
																			d="M8.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM12.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM20.5 8c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM23.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z">
																		</path>
																	</g>
																</svg></span></div>
													</button></div><button
													class="arrow-pbhJWNrt apply-common-tooltip common-tooltip-vertical accessible-pbhJWNrt"
													type="button" tabindex="-1" aria-pressed="false"
													aria-label="Patterns" data-tooltip="Patterns"><span
														class="arrowIcon-pbhJWNrt"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"
															width="10" height="16">
															<path
																d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z">
															</path>
														</svg></span></button>
											</div>
										</div>
									</span><span>
										<div data-name="linetool-group-prediction-and-measurement"
											class="dropdown-pbhJWNrt">
											<div class="control-pbhJWNrt">
												<div class="buttonWrap-pbhJWNrt accessible-pbhJWNrt"><button
														aria-label="Long Position" data-tooltip-delay="1500"
														type="button"
														class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical isTransparent-KTgbfaP5 accessible-KTgbfaP5"
														tabindex="-1" aria-pressed="false" data-tooltip="Long Position">
														<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 28 28" width="28" height="28"
																	fill="none">
																	<path fill="currentColor" fill-rule="evenodd"
																		clip-rule="evenodd"
																		d="M4.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2 6.5A2.5 2.5 0 0 1 6.95 6H24v1H6.95A2.5 2.5 0 0 1 2 6.5zM4.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2 16.5a2.5 2.5 0 0 1 4.95-.5h13.1a2.5 2.5 0 1 1 0 1H6.95A2.5 2.5 0 0 1 2 16.5zM22.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-18 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2 22.5a2.5 2.5 0 0 1 4.95-.5H24v1H6.95A2.5 2.5 0 0 1 2 22.5z">
																	</path>
																	<path fill="currentColor" fill-rule="evenodd"
																		clip-rule="evenodd"
																		d="M22.4 8.94l-1.39.63-.41-.91 1.39-.63.41.91zm-4 1.8l-1.39.63-.41-.91 1.39-.63.41.91zm-4 1.8l-1.4.63-.4-.91 1.39-.63.41.91zm-4 1.8l-1.4.63-.4-.91 1.39-.63.41.91z">
																	</path>
																</svg></span></div>
													</button></div><button
													class="arrow-pbhJWNrt apply-common-tooltip common-tooltip-vertical accessible-pbhJWNrt"
													type="button" tabindex="-1" aria-pressed="false"
													aria-label="Forecasting and measurement tools"
													data-tooltip="Forecasting and measurement tools"><span
														class="arrowIcon-pbhJWNrt"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"
															width="10" height="16">
															<path
																d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z">
															</path>
														</svg></span></button>
											</div>
										</div>
									</span><span>
										<div data-name="linetool-group-geometric-shapes" class="dropdown-pbhJWNrt">
											<div class="control-pbhJWNrt">
												<div class="buttonWrap-pbhJWNrt accessible-pbhJWNrt"><button
														aria-label="Brush" data-tooltip-delay="1500" type="button"
														class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical isTransparent-KTgbfaP5 accessible-KTgbfaP5"
														tabindex="-1" aria-pressed="false" data-tooltip="Brush">
														<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 28 28" width="28" height="28">
																	<g fill="currentColor" fill-rule="nonzero">
																		<path
																			d="M1.789 23l.859-.854.221-.228c.18-.19.38-.409.597-.655.619-.704 1.238-1.478 1.815-2.298.982-1.396 1.738-2.776 2.177-4.081 1.234-3.667 5.957-4.716 8.923-1.263 3.251 3.785-.037 9.38-5.379 9.38h-9.211zm9.211-1c4.544 0 7.272-4.642 4.621-7.728-2.45-2.853-6.225-2.015-7.216.931-.474 1.408-1.273 2.869-2.307 4.337-.599.852-1.241 1.653-1.882 2.383l-.068.078h6.853z">
																		</path>
																		<path
																			d="M18.182 6.002l-1.419 1.286c-1.031.935-1.075 2.501-.096 3.48l1.877 1.877c.976.976 2.553.954 3.513-.045l5.65-5.874-.721-.693-5.65 5.874c-.574.596-1.507.609-2.086.031l-1.877-1.877c-.574-.574-.548-1.48.061-2.032l1.419-1.286-.672-.741z">
																		</path>
																	</g>
																</svg></span></div>
													</button></div><button
													class="arrow-pbhJWNrt apply-common-tooltip common-tooltip-vertical accessible-pbhJWNrt"
													type="button" tabindex="-1" aria-pressed="false"
													aria-label="Geometric shapes" data-tooltip="Geometric shapes"><span
														class="arrowIcon-pbhJWNrt"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"
															width="10" height="16">
															<path
																d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z">
															</path>
														</svg></span></button>
											</div>
										</div>
									</span><span>
										<div data-name="linetool-group-annotation" class="dropdown-pbhJWNrt">
											<div class="control-pbhJWNrt">
												<div class="buttonWrap-pbhJWNrt accessible-pbhJWNrt"><button
														aria-label="Text" data-tooltip-delay="1500" type="button"
														class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical isTransparent-KTgbfaP5 accessible-KTgbfaP5"
														tabindex="-1" aria-pressed="false" data-tooltip="Text">
														<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 28 28" width="28" height="28">
																	<path fill="currentColor"
																		d="M8 6.5c0-.28.22-.5.5-.5H14v16h-2v1h5v-1h-2V6h5.5c.28 0 .5.22.5.5V9h1V6.5c0-.83-.67-1.5-1.5-1.5h-12C7.67 5 7 5.67 7 6.5V9h1V6.5Z">
																	</path>
																</svg></span></div>
													</button></div><button
													class="arrow-pbhJWNrt apply-common-tooltip common-tooltip-vertical accessible-pbhJWNrt"
													type="button" tabindex="-1" aria-pressed="false"
													aria-label="Annotation tools" data-tooltip="Annotation tools"><span
														class="arrowIcon-pbhJWNrt"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"
															width="10" height="16">
															<path
																d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z">
															</path>
														</svg></span></button>
											</div>
										</div>
									</span>
									<div data-name="linetool-group-font-icons" class="dropdown-pbhJWNrt">
										<div class="control-pbhJWNrt">
											<div class="buttonWrap-pbhJWNrt accessible-pbhJWNrt"><button
													aria-label="Icon" data-tooltip-delay="1500" type="button"
													class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical isTransparent-KTgbfaP5 accessible-KTgbfaP5"
													tabindex="-1" aria-pressed="false" data-tooltip="Icon">
													<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28">
																<path fill="currentColor"
																	d="M4.05 14a9.95 9.95 0 1 1 19.9 0 9.95 9.95 0 0 1-19.9 0ZM14 3a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm-3 13.03a.5.5 0 0 1 .64.3 2.5 2.5 0 0 0 4.72 0 .5.5 0 0 1 .94.34 3.5 3.5 0 0 1-6.6 0 .5.5 0 0 1 .3-.64Zm.5-4.53a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z">
																</path>
															</svg></span></div>
												</button></div><button
												class="arrow-pbhJWNrt apply-common-tooltip common-tooltip-vertical accessible-pbhJWNrt"
												type="button" tabindex="-1" aria-pressed="false" aria-label="Icons"
												data-tooltip="Icons"><span class="arrowIcon-pbhJWNrt"><svg
														xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"
														width="10" height="16">
														<path
															d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z">
														</path>
													</svg></span></button>
										</div>
									</div>
								</div>
								<div class="group-BfVZxb4b"><button aria-label="Measure" data-name="measure"
										type="button"
										class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical isTransparent-KTgbfaP5 accessible-KTgbfaP5"
										tabindex="-1"
										data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Shift&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{hotKey_0} + Click on the chart&amp;quot;}"
										aria-pressed="false" data-tooltip="Measure">
										<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
													xmlns="http://www.w3.org/2000/svg" width="28" height="28">
													<path fill="currentColor"
														d="M2 9.75a1.5 1.5 0 0 0-1.5 1.5v5.5a1.5 1.5 0 0 0 1.5 1.5h24a1.5 1.5 0 0 0 1.5-1.5v-5.5a1.5 1.5 0 0 0-1.5-1.5zm0 1h3v2.5h1v-2.5h3.25v3.9h1v-3.9h3.25v2.5h1v-2.5h3.25v3.9h1v-3.9H22v2.5h1v-2.5h3a.5.5 0 0 1 .5.5v5.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-5.5a.5.5 0 0 1 .5-.5z"
														transform="rotate(-45 14 14)"></path>
												</svg></span></div>
									</button><button aria-label="Zoom In" data-name="zoom" type="button"
										class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical isTransparent-KTgbfaP5 accessible-KTgbfaP5"
										tabindex="-1" aria-pressed="false" data-tooltip="Zoom In">
										<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
													xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28"
													height="28" fill="currentColor">
													<path d="M17.646 18.354l4 4 .708-.708-4-4z"></path>
													<path
														d="M12.5 21a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm0-1a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z">
													</path>
													<path d="M9 13h7v-1H9z"></path>
													<path d="M13 16V9h-1v7z"></path>
												</svg></span></div>
									</button>
									<div></div>
								</div>
								<div class="group-BfVZxb4b">
									<div class="toolButtonMagnet-wg76fIbD">
										<div data-name="magnet-button" class="dropdown-pbhJWNrt">
											<div class="control-pbhJWNrt">
												<div class="buttonWrap-pbhJWNrt accessible-pbhJWNrt"><button
														aria-label="Magnet Mode snaps drawings placed near price bars to the closest OHLC value"
														data-tooltip-delay="1500" type="button"
														class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical accessible-KTgbfaP5"
														tabindex="-1"
														data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Ctrl&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0}&amp;quot;}"
														aria-pressed="false"
														data-tooltip="Magnet Mode snaps drawings placed near price bars to the closest OHLC value">
														<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 28 28" width="28" height="28">
																	<g fill="currentColor" fill-rule="evenodd">
																		<path fill-rule="nonzero"
																			d="M14 10a2 2 0 0 0-2 2v11H6V12c0-4.416 3.584-8 8-8s8 3.584 8 8v11h-6V12a2 2 0 0 0-2-2zm-3 2a3 3 0 0 1 6 0v10h4V12c0-3.864-3.136-7-7-7s-7 3.136-7 7v10h4V12z">
																		</path>
																		<path d="M6.5 18h5v1h-5zm10 0h5v1h-5z"></path>
																	</g>
																</svg></span></div>
													</button></div><button class="arrow-pbhJWNrt accessible-pbhJWNrt"
													type="button" tabindex="-1" aria-pressed="false"><span
														class="arrowIcon-pbhJWNrt"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"
															width="10" height="16">
															<path
																d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z">
															</path>
														</svg></span></button>
											</div>
										</div>
									</div><button aria-label="Stay in Drawing Mode" data-name="drawginmode"
										type="button"
										class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical accessible-KTgbfaP5"
										tabindex="-1" aria-pressed="false" data-tooltip="Stay in Drawing Mode">
										<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
													xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28"
													height="28">
													<g fill="currentColor" fill-rule="evenodd">
														<path fill-rule="nonzero"
															d="M23.002 23C23 23 23 18.003 23 18.003L15.998 18C16 18 16 22.997 16 22.997l7.002.003zM15 18.003A1 1 0 0 1 15.998 17h7.004c.551 0 .998.438.998 1.003v4.994A1 1 0 0 1 23.002 24h-7.004A.993.993 0 0 1 15 22.997v-4.994z">
														</path>
														<path d="M19 20h1v2h-1z"></path>
														<path fill-rule="nonzero"
															d="M22 14.5a2.5 2.5 0 0 0-5 0v3h1v-3a1.5 1.5 0 0 1 3 0v.5h1v-.5z">
														</path>
														<g fill-rule="nonzero">
															<path
																d="M3 14.707A1 1 0 0 1 3.293 14L14.439 2.854a1.5 1.5 0 0 1 2.122 0l2.585 2.585a1.5 1.5 0 0 1 0 2.122L8 18.707a1 1 0 0 1-.707.293H4a1 1 0 0 1-1-1v-3.293zm1 0V18h3.293L18.439 6.854a.5.5 0 0 0 0-.708l-2.585-2.585a.5.5 0 0 0-.708 0L4 14.707z">
															</path>
															<path
																d="M13.146 4.854l4 4 .708-.708-4-4zm-9 9l4 4 .708-.708-4-4z">
															</path>
															<path d="M15.146 6.146l-9 9 .708.708 9-9z"></path>
														</g>
													</g>
												</svg></span></div>
									</button><button aria-label="Lock All Drawing Tools" data-name="lockAllDrawings"
										type="button"
										class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical accessible-KTgbfaP5"
										tabindex="-1" aria-pressed="false" data-tooltip="Lock All Drawing Tools">
										<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
													xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28"
													height="28">
													<path fill="currentColor" fill-rule="evenodd"
														d="M14 6a3 3 0 0 0-3 3v3h8.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 6 21.5v-7A2.5 2.5 0 0 1 8.5 12H10V9a4 4 0 0 1 8 0h-1a3 3 0 0 0-3-3zm-1 11a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-6-2.5c0-.83.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 21.5v-7z">
													</path>
												</svg></span></div>
									</button>
									<div data-name="hide-all" data-type="hide-drawing-tools" class="dropdown-pbhJWNrt">
										<div class="control-pbhJWNrt">
											<div class="buttonWrap-pbhJWNrt accessible-pbhJWNrt"><button
													aria-label="Hide all drawings" data-tooltip-delay="1500"
													type="button"
													class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical accessible-KTgbfaP5"
													tabindex="-1"
													data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Ctrl&amp;quot;,&amp;quot;Alt&amp;quot;,&amp;quot;H&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + {1} + {2}&amp;quot;}"
													aria-pressed="false" data-tooltip="Hide all drawings">
													<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
																xmlns="http://www.w3.org/2000/svg" width="28"
																height="28">
																<path fill="currentColor" fill-rule="evenodd"
																	d="M5 10.76l-.41-.72-.03-.04.03-.04a15 15 0 012.09-2.9c1.47-1.6 3.6-3.12 6.32-3.12 2.73 0 4.85 1.53 6.33 3.12a15.01 15.01 0 012.08 2.9l.03.04-.03.04a15 15 0 01-2.09 2.9c-1.47 1.6-3.6 3.12-6.32 3.12-2.73 0-4.85-1.53-6.33-3.12a15 15 0 01-1.66-2.18zm17.45-.98L22 10l.45.22-.01.02a5.04 5.04 0 01-.15.28 16.01 16.01 0 01-2.23 3.1c-1.56 1.69-3.94 3.44-7.06 3.44-3.12 0-5.5-1.75-7.06-3.44a16 16 0 01-2.38-3.38v-.02h-.01L4 10l-.45-.22.01-.02a5.4 5.4 0 01.15-.28 16 16 0 012.23-3.1C7.5 4.69 9.88 2.94 13 2.94c3.12 0 5.5 1.75 7.06 3.44a16.01 16.01 0 012.38 3.38v.02h.01zM22 10l.45-.22.1.22-.1.22L22 10zM3.55 9.78L4 10l-.45.22-.1-.22.1-.22zm6.8.22A2.6 2.6 0 0113 7.44 2.6 2.6 0 0115.65 10 2.6 2.6 0 0113 12.56 2.6 2.6 0 0110.35 10zM13 6.44A3.6 3.6 0 009.35 10 3.6 3.6 0 0013 13.56c2 0 3.65-1.58 3.65-3.56A3.6 3.6 0 0013 6.44zm7.85 12l.8-.8.7.71-.79.8a.5.5 0 000 .7l.59.59c.2.2.5.2.7 0l1.8-1.8.7.71-1.79 1.8a1.5 1.5 0 01-2.12 0l-.59-.59a1.5 1.5 0 010-2.12zM16.5 21.5l-.35-.35a.5.5 0 00-.07.07l-1 1.5-1 1.5a.5.5 0 00.42.78h4a2.5 2.5 0 001.73-.77A2.5 2.5 0 0021 22.5a2.5 2.5 0 00-.77-1.73A2.5 2.5 0 0018.5 20a3.1 3.1 0 00-1.65.58 5.28 5.28 0 00-.69.55v.01h-.01l.35.36zm.39.32l-.97 1.46-.49.72h3.07c.34 0 .72-.17 1.02-.48.3-.3.48-.68.48-1.02 0-.34-.17-.72-.48-1.02-.3-.3-.68-.48-1.02-.48-.35 0-.75.18-1.1.42a4.27 4.27 0 00-.51.4z">
																</path>
															</svg></span></div>
												</button></div><button class="arrow-pbhJWNrt accessible-pbhJWNrt"
												type="button" tabindex="-1" aria-pressed="false"><span
													class="arrowIcon-pbhJWNrt"><svg xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 10 16" width="10" height="16">
														<path
															d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z">
														</path>
													</svg></span></button>
										</div>
									</div>
								</div>
								<div class="group-BfVZxb4b">
									<div data-name="removeAllDrawingTools" class="dropdown-pbhJWNrt">
										<div class="control-pbhJWNrt">
											<div class="buttonWrap-pbhJWNrt accessible-pbhJWNrt"><button
													aria-label="Remove 0 drawings" data-tooltip-delay="1500"
													type="button"
													class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical isTransparent-KTgbfaP5 accessible-KTgbfaP5"
													tabindex="-1" data-tooltip="Remove 0 drawings">
													<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"
																width="28" height="28">
																<path fill="currentColor" fill-rule="evenodd"
																	d="M11.5 6a.5.5 0 0 0-.5.5V8h6V6.5a.5.5 0 0 0-.5-.5h-5zM18 8V6.5c0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5V8H5.5a.5.5 0 0 0 0 1H7v12.5A2.5 2.5 0 0 0 9.5 24h9a2.5 2.5 0 0 0 2.5-2.5V9h1.5a.5.5 0 0 0 0-1H18zm2 1H8v12.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V9zm-8.5 3c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5zm5.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z">
																</path>
															</svg></span></div>
												</button></div><button class="arrow-pbhJWNrt accessible-pbhJWNrt"
												type="button" tabindex="-1"><span class="arrowIcon-pbhJWNrt"><svg
														xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"
														width="10" height="16">
														<path
															d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z">
														</path>
													</svg></span></button>
										</div>
									</div>
								</div>
								<div class="fill-BfVZxb4b"></div>
								<div class="group-BfVZxb4b lastGroup-BfVZxb4b"><button aria-label="Show Object Tree"
										data-name="showObjectsTree" id="drawing-toolbar-object-tree" type="button"
										class="button-KTgbfaP5 apply-common-tooltip common-tooltip-vertical accessible-KTgbfaP5"
										tabindex="-1" data-tooltip="Show Object Tree">
										<div class="bg-KTgbfaP5"><span class="icon-KTgbfaP5"><svg
													xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28"
													height="28">
													<g fill="currentColor">
														<path fill-rule="nonzero"
															d="M14 18.634l-.307-.239-7.37-5.73-2.137-1.665 9.814-7.633 9.816 7.634-.509.394-1.639 1.269-7.667 5.969zm7.054-6.759l1.131-.876-8.184-6.366-8.186 6.367 1.123.875 7.063 5.491 7.054-5.492z">
														</path>
														<path d="M7 14.5l-1 .57 8 6.43 8-6.5-1-.5-7 5.5z"></path>
														<path d="M7 17.5l-1 .57 8 6.43 8-6.5-1-.5-7 5.5z"></path>
													</g>
												</svg></span></div>
									</button></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="toggleButton-OhcB9eH7 apply-common-tooltip common-tooltip-vertical"
				title="Hide Drawings Toolbar" data-name="toolbar-drawing-toggle-button" data-value="visible"><svg
					xmlns="http://www.w3.org/2000/svg" width="9" height="27" viewBox="0 0 9 27"
					class="container-Wp9adlfh">
					<g fill="none" fill-rule="evenodd">
						<path class="background-Wp9adlfh" d="M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z">
						</path>
						<path class="arrow-Wp9adlfh" d="M5.5 10l-2 3.5 2 3.5"></path>
					</g>
				</svg></div>
		</div>
		<div class="layout__area--center no-border-bottom-left-radius no-border-bottom-right-radius no-border-top-right-radius"
			style="position: absolute; top: 42px; left: 56px; width: 362px; height: 358px;">
			<div class="chart-toolbar chart-controls-bar" data-is-chart-toolbar-component="true"
				style="left: 0px; right: 0px; bottom: 0px;" data-initialized="true">
				<div class="toolbar-BXXUwft2" role="toolbar">
					<div class="dateRangeWrapper-BXXUwft2 collapsed-BXXUwft2">
						<div class="dateRangeCollapsed-BXXUwft2"><button type="button"
								class="button-Hfju7pW_ dateRange-BXXUwft2 button-merBkM5y apply-common-tooltip accessible-merBkM5y"
								tabindex="-1" data-name="date-ranges-menu">Date Range<div class="arrow-merBkM5y">
									<div class="arrowWrap-merBkM5y"><span class="icon-WB2y0EnP"><svg
												xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16"
												height="8">
												<path fill="currentColor"
													d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z">
												</path>
											</svg></span></div>
								</div></button></div>
					</div>
					<div class="dateRangeWrapper-BXXUwft2">
						<div class="dateRangeExpanded-BXXUwft2">
							<div class="sliderRow-k2h4OAz8 dateRange-BXXUwft2 tabs-NGf0gcnH"
								data-name="date-ranges-tabs"><button aria-label="5 days in 5 minutes intervals"
									value="5D" tabindex="-1" type="button"
									class="item-SqYYy1zF button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
									data-name="date-range-tab-5D" data-tooltip="5 days in 5 minutes intervals">
									<div class="js-button-text text-GwQQdU8S">5d</div>
								</button>
								<div class="slider-NGf0gcnH slider-3kCW6DWs" style="opacity: 0;">
									<div class="inner-3kCW6DWs"></div>
								</div>
							</div><span class="separator-yDfG9Ccu"></span><button aria-label="Go to"
								data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Alt&amp;quot;,&amp;quot;G&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + {1}&amp;quot;}"
								tabindex="-1" type="button"
								class="button-uToIfRbZ button-xNqEcuN2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
								data-name="go-to-date" data-tooltip="Go to"><span class="icon-GwQQdU8S"><svg
										xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
										<path fill="currentColor" fill-rule="evenodd"
											d="M11 4h-1v2H7.5A2.5 2.5 0 0 0 5 8.5V13h1v-2h16v8.5c0 .83-.67 1.5-1.5 1.5H14v1h6.5a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 20.5 6H18V4h-1v2h-6V4Zm6 4V7h-6v1h-1V7H7.5C6.67 7 6 7.67 6 8.5V10h16V8.5c0-.83-.67-1.5-1.5-1.5H18v1h-1Zm-5.15 10.15-3.5-3.5-.7.7L10.29 18H4v1h6.3l-2.65 2.65.7.7 3.5-3.5.36-.35-.36-.35Z">
										</path>
									</svg></span></button>
						</div>
					</div>
					<div class="seriesControlWrapper-BXXUwft2">
						<div class="inline-BXXUwft2">
							<div class="inline-BXXUwft2"><button aria-label="Timezone" tabindex="-1" type="button"
									class="item-BXXUwft2 button-GwQQdU8S button-x1dCOTP3 apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
									data-name="time-zone-menu" data-tooltip="Timezone">
									<div class="js-button-text text-GwQQdU8S">09:49:43 (UTC)</div>
								</button></div>
						</div>
						<div class="inline-BXXUwft2"><span class="separator-yDfG9Ccu"></span></div>
						<div class="inline-BXXUwft2"><button aria-label="Toggle Percentage" aria-pressed="false"
								tabindex="-1" type="button"
								class="item-BXXUwft2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
								data-name="percentage" data-tooltip="Toggle Percentage"><span class="icon-GwQQdU8S"><svg
										xmlns="http://www.w3.org/2000/svg" width="14" height="14">
										<g fill="none" stroke="currentColor">
											<circle cx="3.5" cy="3.5" r="2"></circle>
											<circle cx="10.5" cy="10.5" r="2"></circle>
											<path stroke-linecap="square" d="M9.5 1.5l-5 11"></path>
										</g>
									</svg></span></button></div>
						<div class="inline-BXXUwft2"><button aria-label="Toggle Log Scale" aria-pressed="false"
								tabindex="-1" type="button"
								class="item-BXXUwft2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
								data-name="logarithm" data-tooltip="Toggle Log Scale">
								<div class="js-button-text text-GwQQdU8S">log</div>
							</button></div>
						<div class="inline-BXXUwft2"><button aria-label="Toggle Auto Scale" aria-pressed="false"
								tabindex="-1" type="button"
								class="item-BXXUwft2 last-BXXUwft2 button-GwQQdU8S apply-common-tooltip isInteractive-GwQQdU8S accessible-GwQQdU8S"
								data-name="auto" data-tooltip="Toggle Auto Scale">
								<div class="js-button-text text-GwQQdU8S">auto</div>
							</button></div>
					</div>
				</div>
			</div>
			<div class="chart-container top-full-width-chart active"
				style="position: absolute; overflow: hidden; width: 362px; height: 319px; top: 0px; left: 0px;">
				<div class="chart-container-border">
					<div class="screen-otjoFNF2"></div>
					<div class="chart-widget chart-widget--themed-dark chart-widget__top--themed-dark chart-widget__bottom--themed-dark"
						role="region" aria-label="Chart #1" style="height: 319px; width: 362px;">
						<div class="tooltip-wrapper"></div>
						<div class="chart-markup-table"
							style="height: 319px; width: 362px; user-select: none; -webkit-tap-highlight-color: transparent;">
							<div style="display: flex;">
								<div class="chart-markup-table price-axis-container"
									style="width: 0px; position: relative; min-width: 0px; height: 291.556px;"></div>
								<div class="chart-markup-table pane" style="width: 268px; height: 291.556px;">
									<div class="chart-gui-wrapper" data-name="pane-widget-chart-gui-wrapper"
										style="width: 268px; height: 291.556px;"><canvas aria-hidden="true"
											style="user-select: none; -webkit-tap-highlight-color: transparent; width: 268px; height: 291.556px; position: absolute; left: 0px; top: 0px;"
											width="302" height="328"></canvas><canvas
											aria-label="Chart for NIEK, 5 minutes"
											style="user-select: none; -webkit-tap-highlight-color: transparent; width: 268px; height: 291.556px; position: absolute; left: 0px; top: 0px;"
											width="302" height="328"></canvas>
										<div class="errorCardRendererContainer-S9sXvhAu"
											style="--backgroundColor: linear-gradient(#181C27, #131722); --textColor: #9598A1;">
										</div>
										<div class="legend-l31H9iuA noWrap-l31H9iuA wrappable-l31H9iuA directionColumn-l31H9iuA hideUniportantValueItems-l31H9iuA"
											data-name="legend" aria-hidden="true"
											style="--legend-source-item-button-width: 28px; color: rgba(24, 28, 39, 0.5);">
											<div class="legendMainSourceWrapper-l31H9iuA">
												<div data-status="undefined"
													class="item-l31H9iuA series-l31H9iuA onlyOneButtonCanBeStick-l31H9iuA"
													data-name="legend-series-item">
													<div class="noWrapWrapper-l31H9iuA"
														style="max-width: calc(100% - 41px);">
														<div class="titlesWrapper-l31H9iuA">
															<div class="titleWrapper-l31H9iuA mainTitle-l31H9iuA apply-overflow-tooltip apply-common-tooltip withAction-l31H9iuA withDot-l31H9iuA"
																data-name="legend-source-title" title="Change symbol">
																<div class="title-l31H9iuA">NIEK</div>
															</div>
															<div class="titleWrapper-l31H9iuA descTitle-l31H9iuA apply-overflow-tooltip apply-common-tooltip withAction-l31H9iuA blockHidden-e6PF69Df"
																data-name="legend-source-description"
																title="Change description">
																<div class="title-l31H9iuA"></div>
															</div>
															<div class="titleWrapper-l31H9iuA intervalTitle-l31H9iuA apply-overflow-tooltip apply-common-tooltip withAction-l31H9iuA withDot-l31H9iuA"
																data-name="legend-source-interval"
																title="Change interval">
																<div class="title-l31H9iuA">5</div>
															</div>
															<div class="titleWrapper-l31H9iuA providerTitle-l31H9iuA apply-overflow-tooltip blockHidden-e6PF69Df"
																data-name="legend-source-provider">
																<div class="title-l31H9iuA"></div>
															</div>
															<div class="titleWrapper-l31H9iuA exchangeTitle-l31H9iuA apply-overflow-tooltip withDot-l31H9iuA"
																data-name="legend-source-exchange">
																<div class="title-l31H9iuA">Pump</div>
															</div>
															<div class="titleWrapper-l31H9iuA styleTitle-l31H9iuA apply-overflow-tooltip blockHidden-e6PF69Df"
																data-name="legend-source-style">
																<div class="title-l31H9iuA"></div>
															</div>
															<div class="titleWrapper-l31H9iuA priceSourceTitle-l31H9iuA apply-overflow-tooltip blockHidden-e6PF69Df"
																data-name="legend-source-price-source">
																<div class="title-l31H9iuA"></div>
															</div>
														</div>
														<div class="buttonsWrapper-l31H9iuA">
															<div class="buttons-l31H9iuA">
																<div class="button-l31H9iuA blockHidden-e6PF69Df eye-l31H9iuA apply-common-tooltip"
																	data-name="legend-show-hide-action" title="Hide">
																	<div class="buttonIcon-l31H9iuA"><svg
																			xmlns="http://www.w3.org/2000/svg"
																			viewBox="0 0 24 22" width="24" height="22"
																			fill="none">
																			<g class="normal-eye">
																				<path fill="currentColor"
																					fill-rule="evenodd"
																					clip-rule="evenodd"
																					d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z">
																				</path>
																				<path fill="currentColor"
																					fill-rule="evenodd"
																					clip-rule="evenodd"
																					d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z">
																				</path>
																			</g>
																			<g class="crossed-eye">
																				<path fill="currentColor"
																					fill-rule="evenodd"
																					clip-rule="evenodd"
																					d="M8.8503 16.2712C9.76531 16.7135 10.8152 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366C17.8729 7.77954 17.7448 7.64491 17.6105 7.51105L16.9035 8.2181C17.0254 8.33968 17.1425 8.46276 17.2549 8.58634C17.2549 8.58634 19 10.5 19 11C19 11.5 17.2549 13.4137 17.2549 13.4137C16.0532 14.7355 14.3022 16 11.9999 16C11.1218 16 10.324 15.8161 9.60627 15.5153L8.8503 16.2712ZM7.09663 13.7823C6.97455 13.6606 6.85728 13.5374 6.74482 13.4137C6.74482 13.4137 5 11.5 5 11C5 10.5 6.74482 8.58634 6.74482 8.58634C7.94648 7.26451 9.69746 6 11.9999 6C12.8781 6 13.6761 6.18398 14.394 6.48495L15.1499 5.729C14.2348 5.28657 13.1847 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C6.12693 14.2206 6.25516 14.3553 6.38959 14.4893L7.09663 13.7823Z">
																				</path>
																				<path fill="currentColor"
																					fill-rule="evenodd"
																					clip-rule="evenodd"
																					d="M11.2231 13.8984C11.4709 13.9647 11.7313 14 12 14C13.6569 14 15 12.6569 15 11C15 10.7313 14.9647 10.4709 14.8984 10.2231L13.9961 11.1254C13.934 12.1301 13.1301 12.934 12.1254 12.9961L11.2231 13.8984ZM11.8751 9.00384C10.87 9.06578 10.0658 9.87001 10.0038 10.8751L9.10166 11.7772C9.03535 11.5294 9 11.2688 9 11C9 9.34315 10.3431 8 12 8C12.2688 8 12.5294 8.03535 12.7772 8.10166L11.8751 9.00384Z">
																				</path>
																				<path fill="currentColor"
																					fill-rule="evenodd"
																					clip-rule="evenodd"
																					d="M5.64648 16.6465L17.6465 4.64648L18.3536 5.35359L6.35359 17.3536L5.64648 16.6465Z">
																				</path>
																			</g>
																			<g class="loading-eye">
																				<path fill="currentColor"
																					fill-rule="evenodd"
																					clip-rule="evenodd"
																					d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z">
																				</path>
																			</g>
																			<g class="animated-loading-eye">
																				<path stroke="currentColor"
																					stroke-linecap="round"
																					d="M14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5">
																				</path>
																			</g>
																		</svg></div>
																</div>
																<div class="button-l31H9iuA apply-common-tooltip"
																	data-name="legend-more-action" title="More">
																	<div class="buttonIcon-l31H9iuA"><svg
																			xmlns="http://www.w3.org/2000/svg"
																			viewBox="0 0 16 4" width="16" height="4"
																			fill="none">
																			<circle stroke="currentColor" cx="2" cy="2"
																				r="1.5"></circle>
																			<circle stroke="currentColor" cx="8" cy="2"
																				r="1.5"></circle>
																			<circle stroke="currentColor" cx="14" cy="2"
																				r="1.5"></circle>
																		</svg></div>
																</div>
															</div>
														</div>
														<div class="statusesWrapper-l31H9iuA">
															<div
																class="statuses-Lgtz1OtS apply-common-tooltip common-tooltip-wide small-Lgtz1OtS statusesWrapper__statuses-l31H9iuA">
																<div
																	class="statusItem-Lgtz1OtS small-Lgtz1OtS marketStatusOpen-Lgtz1OtS">
																	<svg xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 18 18" width="18" height="18"
																		fill="none">
																		<circle fill="currentColor" cx="9" cy="9" r="4">
																		</circle>
																	</svg></div>
															</div>
														</div>
													</div>
													<div class="valuesWrapper-l31H9iuA">
														<div class="valuesAdditionalWrapper-l31H9iuA">
															<div class="valueItem-l31H9iuA blockHidden-e6PF69Df">
																<div class="valueTitle-l31H9iuA blockHidden-e6PF69Df">
																</div>
																<div class="valueValue-l31H9iuA"></div>
															</div>
															<div class="valueItem-l31H9iuA unimportant-l31H9iuA">
																<div class="valueTitle-l31H9iuA">O</div>
																<div class="valueValue-l31H9iuA"
																	style="color: rgb(8, 153, 129);">0.0000000336</div>
															</div>
															<div class="valueItem-l31H9iuA unimportant-l31H9iuA">
																<div class="valueTitle-l31H9iuA">H</div>
																<div class="valueValue-l31H9iuA"
																	style="color: rgb(8, 153, 129);">0.0000000341</div>
															</div>
															<div class="valueItem-l31H9iuA unimportant-l31H9iuA">
																<div class="valueTitle-l31H9iuA">L</div>
																<div class="valueValue-l31H9iuA"
																	style="color: rgb(8, 153, 129);">0.0000000336</div>
															</div>
															<div class="valueItem-l31H9iuA">
																<div class="valueTitle-l31H9iuA">C</div>
																<div class="valueValue-l31H9iuA"
																	style="color: rgb(8, 153, 129);">0.0000000341</div>
															</div>
															<div class="valueItem-l31H9iuA blockHidden-e6PF69Df">
																<div class="valueTitle-l31H9iuA blockHidden-e6PF69Df">
																</div>
																<div class="valueValue-l31H9iuA"
																	style="color: rgb(8, 153, 129);">0.0000000341</div>
															</div>
															<div class="valueItem-l31H9iuA blockHidden-e6PF69Df">
																<div class="valueTitle-l31H9iuA blockHidden-e6PF69Df">
																</div>
																<div class="valueValue-l31H9iuA"
																	style="color: rgb(8, 153, 129);">∅</div>
															</div>
															<div class="valueItem-l31H9iuA">
																<div class="valueTitle-l31H9iuA blockHidden-e6PF69Df">
																</div>
																<div class="valueValue-l31H9iuA"
																	style="color: rgb(8, 153, 129);">+0.0000000004
																	(+1.22%)</div>
															</div>
															<div class="valueItem-l31H9iuA blockHidden-e6PF69Df">
																<div class="valueTitle-l31H9iuA">Vol</div>
																<div class="valueValue-l31H9iuA"
																	style="color: rgb(8, 153, 129);">400M</div>
															</div>
															<div class="valueItem-l31H9iuA blockHidden-e6PF69Df">
																<div class="valueTitle-l31H9iuA blockHidden-e6PF69Df">
																</div>
																<div class="valueValue-l31H9iuA"
																	style="color: rgb(8, 153, 129);">0.0000000000
																	(0.00%)</div>
															</div>
														</div><span class="blockHidden-e6PF69Df loader-l31H9iuA"><span
																class="loader-UL6iwcBa static-UL6iwcBa"><span
																	class="item-UL6iwcBa black-UL6iwcBa small-UL6iwcBa"></span><span
																	class="item-UL6iwcBa black-UL6iwcBa small-UL6iwcBa"></span><span
																	class="item-UL6iwcBa black-UL6iwcBa small-UL6iwcBa"></span></span></span>
													</div>
												</div>
											</div>
										</div>
										<div class="paneControls-JQv8nO8e hidden-JQv8nO8e forceHidden-JQv8nO8e"
											aria-hidden="true" style="color: rgba(24, 28, 39, 0.8);">
											<div class="buttonsWrapper-JQv8nO8e blockHidden-e6PF69Df">
												<div class="button-JQv8nO8e pane-button-e6PF69Df blockHidden-e6PF69Df up-JQv8nO8e apply-common-tooltip newButton-JQv8nO8e"
													data-name="pane-button-up" title="Move pane up">
													<div class="buttonIcon-JQv8nO8e"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"
															width="15" height="15">
															<path fill="currentColor"
																d="M11.83 6.12l-.66.76L8 4.1V12H7V4.1L3.83 6.88l-.66-.76L7.5 2.34l4.33 3.78z">
															</path>
														</svg></div>
												</div>
												<div class="button-JQv8nO8e pane-button-e6PF69Df blockHidden-e6PF69Df down-JQv8nO8e apply-common-tooltip newButton-JQv8nO8e"
													data-name="pane-button-down" title="Move pane down">
													<div class="buttonIcon-JQv8nO8e"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"
															width="15" height="15">
															<path fill="currentColor"
																d="M11.83 8.88l-.66-.76L8 10.9V3H7v7.9L3.83 8.12l-.66.76 4.33 3.78 4.33-3.78z">
															</path>
														</svg></div>
												</div>
												<div class="button-JQv8nO8e pane-button-e6PF69Df blockHidden-e6PF69Df apply-common-tooltip newButton-JQv8nO8e"
													data-name="pane-button-close" title="Delete pane">
													<div class="buttonIcon-JQv8nO8e"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"
															width="15" height="15">
															<path fill="currentColor"
																d="M11.65 12.35l-9-9 .7-.7 9 9-.7.7z"></path>
															<path fill="currentColor"
																d="M2.65 11.65l9-9 .7.7-9 9-.7-.7z"></path>
														</svg></div>
												</div>
												<div class="button-JQv8nO8e pane-button-e6PF69Df blockHidden-e6PF69Df collapse-JQv8nO8e apply-common-tooltip newButton-JQv8nO8e"
													data-name="pane-button-collapse" title="Collapse pane"
													data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Ctrl&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + Double click&amp;quot;}">
													<div class="buttonIcon-JQv8nO8e"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"
															width="15" height="15" fill="none">
															<path stroke="currentColor" d="M11 2 7.5 5 4 2"
																class="bracket-up"></path>
															<path stroke="currentColor" d="M4 13l3.5-3 3.5 3"
																class="bracket-down"></path>
														</svg></div>
												</div>
												<div class="button-JQv8nO8e pane-button-e6PF69Df blockHidden-e6PF69Df restore-JQv8nO8e apply-common-tooltip newButton-JQv8nO8e"
													data-name="pane-button-restore" title="Restore pane"
													data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;Ctrl&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;{0} + Double click&amp;quot;}">
													<div class="buttonIcon-JQv8nO8e"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"
															width="15" height="15" fill="none">
															<path stroke="currentColor" d="m4 5 3.5-3L11 5"
																class="bracket-up"></path>
															<path stroke="currentColor" d="M11 10l-3.5 3L4 10"
																class="bracket-down"></path>
														</svg></div>
												</div>
												<div class="button-JQv8nO8e pane-button-e6PF69Df blockHidden-e6PF69Df maximize-JQv8nO8e apply-common-tooltip newButton-JQv8nO8e"
													data-name="pane-button-maximize" title="Maximize pane"
													data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;Double click&amp;quot;}">
													<div class="buttonIcon-JQv8nO8e"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"
															width="15" height="15" fill="none">
															<path fill="currentColor"
																d="M4.5 12A1.5 1.5 0 0 1 3 10.5V9H2v1.5A2.5 2.5 0 0 0 4.5 13h6a2.5 2.5 0 0 0 2.5-2.5V9h-1v1.5c0 .83-.67 1.5-1.5 1.5h-6z"
																class="bracket-up"></path>
															<path fill="currentColor"
																d="M4.5 3C3.67 3 3 3.67 3 4.5V6H2V4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6h-1V4.5c0-.83-.67-1.5-1.5-1.5h-6z"
																class="bracket-down"></path>
														</svg></div>
												</div>
												<div class="button-JQv8nO8e pane-button-e6PF69Df blockHidden-e6PF69Df minimize-JQv8nO8e apply-common-tooltip newButton-JQv8nO8e"
													data-name="pane-button-minimize" title="Restore pane"
													data-tooltip-hotkey="{&amp;quot;keys&amp;quot;:[&amp;quot;&amp;quot;],&amp;quot;text&amp;quot;:&amp;quot;Double click&amp;quot;}">
													<div class="buttonIcon-JQv8nO8e"><svg
															xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"
															width="15" height="15" fill="none">
															<path fill="currentColor"
																d="M4.5 12A1.5 1.5 0 0 1 3 10.5V9H2v1.5A2.5 2.5 0 0 0 4.5 13h6a2.5 2.5 0 0 0 2.5-2.5V9h-1v1.5c0 .83-.67 1.5-1.5 1.5h-6z"
																class="bracket-up"></path>
															<path fill="currentColor"
																d="M4.5 3C3.67 3 3 3.67 3 4.5V6H2V4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6h-1V4.5c0-.83-.67-1.5-1.5-1.5h-6z"
																class="bracket-down"></path>
														</svg></div>
												</div>
											</div>
											<div class="button-JQv8nO8e pane-button-e6PF69Df apply-common-tooltip newButton-JQv8nO8e blockHidden-e6PF69Df"
												data-name="pane-button-more" title="Manage panes">
												<div class="buttonIcon-JQv8nO8e"><svg xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 15 15" width="15" height="15">
														<circle fill="currentColor" cx="12.75" cy="7.5" r="1.25">
														</circle>
														<circle fill="currentColor" cx="7.5" cy="7.5" r="1.25"></circle>
														<circle fill="currentColor" cx="2.25" cy="7.5" r="1.25">
														</circle>
													</svg></div>
											</div>
										</div>
									</div>
								</div>
								<div class="chart-markup-table price-axis-container"
									style="width: 94px; position: relative; min-width: 94px; height: 291.556px;">
									<div class="price-axis" aria-hidden="true"
										style="width: 94px; left: 0px; height: 291.556px; min-width: 94px;"><canvas
											style="user-select: none; -webkit-tap-highlight-color: transparent; width: 94px; height: 291.556px; position: absolute; z-index: 1; left: 0px; top: 0px;"
											width="105" height="328"></canvas><canvas
											style="user-select: none; -webkit-tap-highlight-color: transparent; width: 94px; height: 291.556px; position: absolute; z-index: 2; left: 0px; top: 0px;"
											width="105" height="328"></canvas>
										<div class="price-axis__modeButtons price-axis__modeButtons_hidden"
											style="background: rgb(19, 23, 34);">
											<div class="priceScaleModeButtons-PEm49B2T"><button
													class="priceScaleModeButtons__button-PEm49B2T apply-common-tooltip"
													data-tooltip="Auto (fits data to screen)"
													aria-label="Toggle auto scale">A</button><button
													class="priceScaleModeButtons__button-PEm49B2T apply-common-tooltip"
													data-tooltip="Logarithmic" aria-label="Toggle log scale">L</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div style="display: flex;">
								<div class="chart-markup-table price-axis-container"
									style="width: 0px; position: relative; min-width: 0px; height: 28px;"></div>
								<div class="chart-markup-table time-axis" style="height: 28px; width: 268px;">
									<div aria-hidden="true"
										style="width: 100%; height: 100%; position: relative; overflow: hidden;"><canvas
											style="user-select: none; -webkit-tap-highlight-color: transparent; width: 268px; height: 28px; position: absolute; z-index: 1; left: 0px; top: 0px;"
											width="302" height="32"></canvas><canvas
											style="user-select: none; -webkit-tap-highlight-color: transparent; width: 268px; height: 28px; position: absolute; z-index: 2; left: 0px; top: 0px;"
											width="302" height="32"></canvas></div>
								</div>
								<div class="chart-markup-table price-axis-container"
									style="width: 94px; position: relative; min-width: 94px; height: 28px;">
									<div class="price-axis-stub-t9vjEPyG apply-common-tooltip fixed-gear-t9vjEPyG"
										aria-hidden="true"
										style="width: 94px; height: 28px; position: absolute; left: 0px; overflow: hidden; min-width: 94px;">
										<div class="wrapper-t9vjEPyG">
											<div class="label-t9vjEPyG">
												<div class="symbol-t9vjEPyG">A</div>
												<div class="gear-t9vjEPyG"><svg xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 16 14" width="16" height="14">
														<path fill="currentColor" fill-rule="evenodd"
															d="M4.6 1.5 1.64 7l2.96 5.5h6.8L14.36 7 11.4 1.5H4.6ZM15.5 7 12 .5H4L.5 7 4 13.5h8L15.5 7ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z">
														</path>
													</svg></div>
											</div>
										</div><canvas
											style="user-select: none; -webkit-tap-highlight-color: transparent; width: 94px; height: 28px; position: absolute; left: 0px; top: 0px;"
											width="105" height="32"></canvas>
									</div>
								</div>
							</div>
						</div>
						<div class="control-bar-wrapper" style="left: 156px; bottom: 54.4444px;">
							<div class="control-bar control-bar--hidden">
								<div class="control-bar__group js-btn-group js-btn-group-zoom js-hidden">
									<div class="control-bar__btn control-bar__btn--zoom-out apply-common-tooltip"
										title="Zoom out"
										data-tooltip-hotkey="{&quot;keys&quot;:[&quot;Ctrl&quot;,&quot;<svg xmlns=\&quot;http://www.w3.org/2000/svg\&quot; viewBox=\&quot;0 0 7 7\&quot; width=\&quot;7\&quot; height=\&quot;7\&quot;><path fill=\&quot;currentColor\&quot; d=\&quot;M3.5 7L7 4H4V0H3V4H0L3.5 7Z\&quot;/></svg>&quot;],&quot;text&quot;:&quot;{0} + {1}&quot;}">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18"
											height="18">
											<path fill="currentColor" d="M14 10H4V8.5h10V10Z"></path>
										</svg>
									</div>
									<div class="control-bar__btn control-bar__btn--zoom-in apply-common-tooltip"
										title="Zoom in"
										data-tooltip-hotkey="{&quot;keys&quot;:[&quot;Ctrl&quot;,&quot;<svg xmlns=\&quot;http://www.w3.org/2000/svg\&quot; viewBox=\&quot;0 0 7 7\&quot; width=\&quot;7\&quot; height=\&quot;7\&quot;><path fill=\&quot;currentColor\&quot; d=\&quot;M3.5 0L0 3h3v4h1V3h3L3.5 0z\&quot;/></svg>&quot;],&quot;text&quot;:&quot;{0} + {1}&quot;}">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18"
											height="18">
											<path fill="currentColor" d="M8.25 13.75v-9.5h1.5v9.5h-1.5Z"></path>
											<path fill="currentColor" d="M13.75 9.75h-9.5v-1.5h9.5v1.5Z"></path>
										</svg>
									</div>
								</div>
								<div class="control-bar__group js-btn-group js-btn-group-maximize js-hidden">
									<div class="control-bar__btn control-bar__btn--maximize apply-common-tooltip"
										title="Maximize chart"
										data-tooltip-hotkey="{&quot;keys&quot;:[&quot;Alt&quot;,&quot;Click&quot;,&quot;Alt&quot;,&quot;Enter&quot;],&quot;text&quot;:&quot;{0} + {1}, {2} + {3}&quot;}">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18"
											height="18">
											<path fill="currentColor"
												d="M14.5 8V3.5H10V2h6v6h-1.5Zm-11 2v4.5H8V16H2v-6h1.5Z"></path>
										</svg>
									</div>
									<div class="control-bar__btn control-bar__btn--minimize js-hidden apply-common-tooltip"
										title="Restore chart"
										data-tooltip-hotkey="{&quot;keys&quot;:[&quot;Alt&quot;,&quot;Click&quot;,&quot;Alt&quot;,&quot;Enter&quot;],&quot;text&quot;:&quot;{0} + {1}, {2} + {3}&quot;}">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18"
											height="18">
											<path fill="currentColor"
												d="M11.5 2v4.5H16V8h-6V2h1.5Zm-5 14v-4.5H2V10h6v6H6.5Z"></path>
										</svg>
									</div>
								</div>
								<div class="control-bar__group js-btn-group js-btn-group-scroll js-hidden">
									<div class="control-bar__btn control-bar__btn--move-left apply-common-tooltip"
										title="Scroll to the left"
										data-tooltip-hotkey="{&quot;keys&quot;:[&quot;<svg xmlns=\&quot;http://www.w3.org/2000/svg\&quot; viewBox=\&quot;0 0 9 7\&quot; width=\&quot;9\&quot; height=\&quot;7\&quot;><path fill=\&quot;currentColor\&quot; d=\&quot;M.5 3.5L4 0v3h5v1H4v3z\&quot;/></svg>&quot;],&quot;text&quot;:&quot;{0}&quot;}">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18"
											height="18">
											<path fill="currentColor"
												d="M7.83 3.92 12.28 9l-4.45 5.08-1.13-1L10.29 9l-3.6-4.09 1.14-.99Z">
											</path>
										</svg>
									</div>
									<div class="control-bar__btn control-bar__btn--move-right apply-common-tooltip"
										title="Scroll to the right"
										data-tooltip-hotkey="{&quot;keys&quot;:[&quot;<svg xmlns=\&quot;http://www.w3.org/2000/svg\&quot; viewBox=\&quot;0 0 9 7\&quot; width=\&quot;9\&quot; height=\&quot;7\&quot;><path fill=\&quot;currentColor\&quot; d=\&quot;M8.5 3.5L5 0v3H0v1h5v3z\&quot;/></svg>&quot;],&quot;text&quot;:&quot;{0}&quot;}">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18"
											height="18">
											<path fill="currentColor"
												d="M7.83 3.92 12.28 9l-4.45 5.08-1.13-1L10.29 9l-3.6-4.09 1.14-.99Z">
											</path>
										</svg>
									</div>
								</div>
								<div class="control-bar__group js-btn-group js-btn-group-reset-scale">
									<div class="control-bar__btn control-bar__btn--turn-button apply-common-tooltip js-btn-reset"
										data-tooltip-hotkey="{&quot;keys&quot;:[&quot;Alt&quot;,&quot;R&quot;],&quot;text&quot;:&quot;{0} + {1}&quot;}">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18"
											height="18">
											<path fill="currentColor"
												d="M10 6.38V8L6 5.5 10 3v1.85A5.25 5.25 0 1 1 3.75 10a.75.75 0 0 1 1.5 0A3.75 3.75 0 1 0 10 6.38Z">
											</path>
										</svg>
									</div>
								</div>
							</div>
						</div>
						<div class="control-bar-wrapper control-bar-wrapper--back-present"
							style="margin-right: 108px; bottom: 54.4444px;">
							<div class="control-bar control-bar__btn control-bar__btn--btn-hidden apply-common-tooltip"
								title="Scroll to the most recent bar"
								data-tooltip-hotkey="{&quot;keys&quot;:[&quot;Alt&quot;,&quot;Shift&quot;,&quot;<svg xmlns=\&quot;http://www.w3.org/2000/svg\&quot; viewBox=\&quot;0 0 9 7\&quot; width=\&quot;9\&quot; height=\&quot;7\&quot;><path fill=\&quot;currentColor\&quot; d=\&quot;M8.5 3.5L5 0v3H0v1h5v3z\&quot;/></svg>&quot;],&quot;text&quot;:&quot;{0} + {1} + {2}&quot;}">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
									<path fill="currentColor"
										d="M7.45 3.5 12.48 9l-5.03 5.49 1.1 1.01L14.52 9 8.55 2.49 7.45 3.5Z"></path>
									<path fill="currentColor"
										d="m3.93 5.99 2.58 3-2.58 3.02 1.14.98 3.42-4-3.42-3.98L3.93 6Z"></path>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div class="tv-spinner tv-spinner--size_large" role="progressbar"></div>
			</div>
		</div>
	</div>
	<div class="loading-indicator" id="loading-indicator" style="background-color: rgb(19, 23, 34); display: none;">
		<div class="tv-spinner tv-spinner--size_large spinner tv-spinner--shown" role="progressbar"></div>
	</div>
	<script>var JSServer = {}, __initialEnabledFeaturesets = ["charting_library"]</script>
	<script>(function () {
				 window.urlParams = (function () {
					 var match,
						 pl = /\+/g,  // Regex for replacing addition symbol with a space
						 search = /([^&=]+)=?([^&]*)/g,
						 decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')).replace(/<\/?[^>]+(>|$)/g, ''); },
						 query = function () {
							 // We don't use hash on the url because: safari 13 throws an error if you attempt this
							 // on a blob, and safari 14 will strip hash from blob urls.
							 if (frameElement && frameElement.dataset.widgetOptions) {
								 return frameElement.dataset.widgetOptions;
							 } else {
								 throw "Unexpected use of this page";
							 }
						 }(),
						 result = {};

					 while (match = search.exec(query)) {
						 result[decode(match[1])] = decode(match[2]);
					 }

					 var additionalSettingsObject = window.parent[result.uid];

					 var customObjectNames = ['datafeed', 'customFormatters', 'brokerFactory', 'save_load_adapter', 'customTranslateFunction', 'contextMenu'];

					 for (var p in additionalSettingsObject) {
						 if (customObjectNames.indexOf(p) === -1) {
							 result[p] = JSON.stringify(additionalSettingsObject[p]);
						 }
					 }

					 return result;
				 })();

				 window.locale = urlParams.locale;
				 window.language = urlParams.locale; // a very big attention needed here
				 window.customTranslateFunction = window.parent[urlParams.uid].customTranslateFunction;
				 window.customChartDescriptionFunction = window.parent[urlParams.uid].customChartDescriptionFunction;

				 window.addCustomCSSFile = function (href) {
					 var link = document.createElement('link');
					 link.setAttribute('type', 'text/css');
					 link.setAttribute('rel', 'stylesheet');
					 link.setAttribute('href', href);
					 link.setAttribute('cross-origin', 'anonymous');

					 window.loadedCustomCss = new Promise((resolve) => {
						 link.onload = resolve;
						 link.onerror = resolve;
					 });
					 document.body.appendChild(link);
				 };

				 window.loadedCustomCss = Promise.resolve();
				 if (!!urlParams.customCSS) {
					 window.addCustomCSSFile(urlParams.customCSS);
				 }

				 var loadingScreenParams = {};

				 if (typeof urlParams.loading_screen === 'string') {
					 try {
						 loadingScreenParams = JSON.parse(urlParams.loading_screen);
					 } catch (e) { }
				 }

				 var loadingIndicatorElement = document.getElementById('loading-indicator');

				 if (loadingScreenParams.backgroundColor) {
					 loadingIndicatorElement.style = 'background-color: ' + loadingScreenParams.backgroundColor;
				 }

				 !function () { "use strict"; var t, e = new WeakMap; !function (t) { t[t.Element = 1] = "Element", t[t.Document = 9] = "Document" }(t || (t = {})); var n = { mini: "xsmall", xxsmall: "xxsmall", xsmall: "xsmall", small: "small", medium: "medium", large: "large" }; var s, i, o, r, l, c = (void 0 === l && (l = ""), s = '<div class="tv-spinner '.concat(l, '" role="progressbar"></div>'), o = function (n, s) { var i, o; return i = null == s ? document.documentElement : s.nodeType === t.Document ? s.documentElement : s, e && (o = e.get(i)), o || ((o = i.ownerDocument.createRange()).selectNodeContents(i), e && e.set(i, o)), o.createContextualFragment(n) }(s, i), null !== (r = o.firstElementChild) && o.removeChild(r), r), a = function () { function t(t) { this._shown = !1, this._el = c.cloneNode(!0), this.setSize(n[t || "large"]) } return t.prototype.spin = function (t) { return this._el.classList.add("tv-spinner--shown"), void 0 === this._container && (this._container = t, void 0 !== t && t.appendChild(this._el)), this._shown = !0, this }, t.prototype.stop = function (t) { return t && void 0 !== this._container && this._container.removeChild(this._el), this._el && this._el.classList.remove("tv-spinner--shown"), this._shown = !1, this }, t.prototype.setStyle = function (t) { var e = this; return Object.keys(t).forEach((function (n) { var s = t[n]; void 0 !== s && e._el.style.setProperty(n, s) })), this }, t.prototype.style = function () { return this._el.style }, t.prototype.setSize = function (t) { var e = void 0 !== t ? "tv-spinner--size_".concat(t) : ""; return this._el.className = "tv-spinner ".concat(e, " ").concat(this._shown ? "tv-spinner--shown" : ""), this }, t.prototype.getEl = function () { return this._el }, t.prototype.destroy = function () { this.stop(), delete this._el, delete this._container }, t }(); window.Spinner = a }();


				 var spinnerColor = (loadingScreenParams.foregroundColor) ? loadingScreenParams.foregroundColor : undefined;

				 var loadingSpinner = new Spinner('large').setStyle({
					 '--tv-spinner-color': spinnerColor,
					 zIndex: String(2e9),
				 });
				 loadingSpinner.getEl().classList.add('spinner');
				 loadingSpinner.spin(loadingIndicatorElement);
			 })();</script>
	<div id="tooltip-root-element">
		<div id="common-tooltip-wrapper" class="common-tooltip-EJBD96zX common-tooltip--hidden-EJBD96zX">
			<div class="common-tooltip__ear-holder-EJBD96zX">
				<div class="common-tooltip__body-EJBD96zX js-tooltip-body">Toggle Auto Scale</div>
			</div>
			<div class="common-tooltip__button-container-EJBD96zX"></div>
		</div>
	</div>
	<div id="chart-aria-description" tabindex="-1" role="alert" aria-live="assertive"></div>
	<div id="overlap-manager-root" style="position: absolute; z-index: 150; top: 0px; left: 0px;"></div>
    </body>
        </html>
      `}
            style={{ width: "100%", height: "500px", border: "none" }}
            title="TradingView Chart"
        />
    );
};

export default Chart;
