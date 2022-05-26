interface PublisherProps {
    publisher: string
}

const getPublisher = (publisher: string) => {
    switch (publisher) {
        case "Nintendo":
          return (
            <svg xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 600 200">
                <g transform="translate(0 -626.5)" id="layer1">
                <path id="rect80" opacity="1" vector-effect="none" fill="#e60012" fill-opacity="1" fill-rule="nonzero" stroke="none" stroke-width="15" stroke-miterlimit="4" stroke-dasharray="none" paint-order="stroke markers fill" d="M0 626.5h600v200H0z"/>
                <path d="M110.966 789.567C70.823 789.553 44 761.105 44 726.612c0-34.492 26.884-63.267 66.905-63.179h378.19c40.02-.088 66.905 28.687 66.905 63.18 0 34.492-26.823 62.94-66.966 62.954zm.123-110.618c-31.78.061-51.287 21.302-51.287 47.582 0 26.272 19.384 47.69 51.287 47.574H488.91c31.903.11 51.294-21.302 51.294-47.574 0-26.273-19.507-47.514-51.287-47.575zm398.145 22.18c2.89 0 4.325.979 4.325 2.916 0 1.333-.83 2.34-2.21 2.686l2.264 4.522h-2.74l-1.938-4.148h-1.203v4.148h-2.468v-10.124zm-.224-3.958c-5.045 0-9.138 4.094-9.138 9.139 0 5.045 4.093 9.138 9.138 9.138s9.138-4.093 9.138-9.138-4.093-9.139-9.138-9.139zm7.39 9.145c0 4.08-3.31 7.391-7.39 7.391a7.394 7.394 0 0 1-7.39-7.39c0-4.08 3.31-7.391 7.39-7.391a7.39 7.39 0 0 1 7.39 7.39zm-8.668-.693h1.203c1.408 0 2.088-.428 2.088-1.435 0-1.054-.728-1.51-2.21-1.51h-1.081zm-206.535 24.742c-.028-3.46.047-5.772 1.183-7.744 1.394-2.434 3.957-3.59 6.282-3.604h-.007c2.326.014 4.889 1.17 6.283 3.604 1.135 1.979 1.183 4.29 1.156 7.751zm14.836 11.906s.013.177.013 2.393c0 7.221-4.752 8.826-7.39 8.826-2.639 0-7.473-1.605-7.473-8.826 0-2.162.014-8.152.014-8.152s33.636.014 33.636-.007c0-12.245-11.824-22.39-26.347-22.39-14.524 0-26.293 9.927-26.293 22.172 0 12.246 11.77 22.166 26.293 22.166 12.048 0 22.226-6.874 25.334-16.196zm56.182-27.496c6.677-.19 20.221 4.181 20.126 19.813-.013 2.774-.007 21.486-.007 21.486h-17.74V730.14c0-3.44-3.29-7.268-8.158-7.268-4.862 0-8.48 3.828-8.48 7.268 0 1.686.021 25.933.021 25.933h-17.725l.013-39.484 17.72-.013s-.021 3.175 0 4.154c3.412-3.257 8.335-5.786 14.23-5.956zm-145.11 0c6.677-.19 20.22 4.181 20.126 19.813-.014 2.774-.007 21.486-.007 21.486h-17.74V730.14c0-3.44-3.29-7.268-8.159-7.268-4.861 0-8.478 3.828-8.478 7.268 0 1.686.02 25.933.02 25.933H195.14l-.007-39.484 17.74-.013s-.02 3.175 0 4.154c3.413-3.257 8.329-5.786 14.23-5.956zm203.72-18.066h17.624v59.378h-17.651s-.007-1.917-.007-2.284c-6.833 4.29-14.544 4.283-20.548 1.482-1.611-.748-12.211-5.834-12.211-19.575 0-10.424 9.832-21.806 22.703-20.677 4.236.374 7.248 1.918 10.104 3.522-.014-9.138-.014-21.846-.014-21.846zm.13 39.436v-7.058c0-6.106-4.216-7.663-6.99-7.663-2.842 0-7.004 1.557-7.004 7.663 0 2.026.007 7.037.007 7.037s-.007 4.923-.007 7.024c0 6.1 4.162 7.697 6.997 7.697 2.78 0 7.003-1.598 7.003-7.697 0-2.536-.007-7.003-.007-7.003zm56.576-.116s-.007 5.97-.007 8.363c0 6.297-3.72 8.894-7.295 8.894-3.584 0-7.317-2.597-7.317-8.894 0-2.393.007-8.512.007-8.512s.014-5.84.014-8.234c0-6.27 3.74-8.846 7.296-8.846 3.563 0 7.295 2.577 7.295 8.846 0 2.393-.007 6.82.014 8.404zm-7.173-22.125c-14.415 0-26.096 9.927-26.096 22.173 0 12.245 11.688 22.172 26.096 22.172 14.414 0 26.096-9.927 26.096-22.172 0-12.246-11.682-22.173-26.096-22.173zm-312.95-5.072v-12.137h17.895v12.137zm.04 47.255v-39.49l17.855.007v39.483zm89.58 0 .008-39.408h-9.71v-5.861l9.716-.007-.013-7.996h17.868v7.989h9.669v5.874h-9.669l.014 39.409zm-162.244 0 .007-59.378h18.5l25.593 41.408-.014-41.408h18.359v59.378h-18.331l-25.729-41.407v41.407z" id="path29" fill="#fff" stroke-width="1"/>
                </g>
            </svg>
          );
        case "Microsoft Game Studio":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.665 57.569">
                    <defs>
                        <clipPath clipPathUnits="userSpaceOnUse" id="a">
                            <path d="M0 0h510v326H0V0Z"/>
                        </clipPath>
                        <clipPath clipPathUnits="userSpaceOnUse" id="b">
                            <path d="M108.321 28.523h29.695v18.468h-29.695V28.523z"/>
                        </clipPath>
                        <clipPath clipPathUnits="userSpaceOnUse" id="c">
                            <path d="M108.321 29.584h28.926v17.407h-28.926V29.584z"/>
                        </clipPath>
                        <clipPath clipPathUnits="userSpaceOnUse" id="d">
                            <path d="M108.321 28.523h29.695v18.468h-29.695V28.523z"/>
                        </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(3.3073 0 0 -3.3073 -358.251 155.413)">
                        <g clip-path="url(#b)">
                            <path d="M128.57 40.867a.534.534 0 1 0-1.068 0 .534.534 0 0 0 1.068 0M116.707 38.606c-.18.191-.48.387-.898.588-.282.134-.473.248-.571.343a.498.498 0 0 0-.158.377c0 .143.059.258.179.346.119.087.28.131.48.131.407 0 .769-.11 1.086-.328v.982c-.304.121-.686.181-1.144.181-.521 0-.938-.127-1.251-.383-.312-.255-.468-.594-.468-1.017 0-.58.359-1.04 1.078-1.38.316-.148.533-.27.65-.366.15-.125.224-.263.224-.414a.412.412 0 0 0-.151-.325c-.12-.103-.3-.155-.535-.155-.456 0-.871.16-1.246.48v-1.052c.324-.175.73-.263 1.22-.263.648 0 1.13.152 1.446.453.256.246.384.564.384.954 0 .333-.108.616-.325.848M119.445 37.242a.709.709 0 0 0-.338-.095c-.28 0-.418.175-.418.525v1.362h.756v.765h-.756v1.023l-1.036-.296V39.8h-.545v-.765h.545v-1.542c0-.76.367-1.14 1.098-1.14.307 0 .539.04.694.12v.77zM123.14 39.8h-1.036v-1.926c0-.227-.056-.404-.17-.534a.565.565 0 0 0-.444-.194c-.377 0-.565.238-.565.714v1.94h-1.036v-2.032c0-.945.39-1.417 1.17-1.417.432 0 .775.198 1.03.595h.015v-.513h1.036V39.8zM125.974 38.07c0-.281-.068-.508-.204-.68a.63.63 0 0 0-.509-.243.62.62 0 0 0-.5.217c-.138.16-.207.396-.207.707 0 .309.064.556.192.74a.62.62 0 0 0 .541.276.633.633 0 0 0 .497-.216.797.797 0 0 0 .19-.547v-.253zm-.02 3.348v-2.003h-.013c-.17.312-.473.468-.907.468-.454 0-.822-.165-1.105-.494-.287-.337-.43-.786-.43-1.348 0-.563.143-.995.43-1.295.252-.263.576-.394.97-.394.458 0 .806.182 1.042.546h.013v-.464h1.04v4.984h-1.04zM127.51 36.433h1.039v3.366h-1.039v-3.366zM130.791 37.147c-.52 0-.783.323-.783.97 0 .315.072.557.214.726.136.163.323.244.562.244.502 0 .753-.315.753-.944 0-.664-.249-.996-.746-.996m1.364 2.229c-.322.337-.772.506-1.35.506-.56 0-1.004-.151-1.332-.454-.346-.315-.52-.757-.52-1.324 0-.54.16-.966.48-1.281.32-.314.762-.472 1.325-.472.574 0 1.026.166 1.354.497.323.324.484.762.484 1.315 0 .497-.147.902-.44 1.213M135.118 38.09c-.141.138-.362.26-.664.368-.206.076-.343.139-.411.192a.294.294 0 0 0-.115.243c0 .188.137.283.41.283.288 0 .562-.077.822-.231v.803c-.278.09-.556.135-.834.135-.435 0-.778-.1-1.032-.296a.932.932 0 0 1-.382-.777c0-.263.075-.475.224-.635.125-.133.324-.251.598-.353.265-.102.437-.182.516-.238a.262.262 0 0 0 .119-.22c0-.204-.165-.305-.494-.305-.304 0-.625.1-.963.305v-.841c.296-.115.62-.172.976-.172.483 0 .855.11 1.118.33a.962.962 0 0 1 .358.782.844.844 0 0 1-.246.628"/>
                        </g>
                        <g clip-path="url(#c)">
                            <path d="M124.338 32.208c-.017-.295-.296-.422-.537-.499-.243-.077-.516-.119-.77-.07-.2.037-.43.122-.541.305-.138.23.036.493.247.61.389.216 1.029.231 1.416-.015.138-.088.192-.209.185-.33"/>
                            <path d="M136.464 32.334a3.552 3.552 0 0 1-.59.376c-2.01 1.011-6.08 2.117-12.627 2.292-1.683.045-9.587.161-14.06-1.097a2.842 2.842 0 0 1-.261-.083c-.168-.057-.355-.135-.46-.226-.226-.197-.167-.483.042-.592.315-.164.869-.087.947-.075.1.014.199.032.298.051 9.492 1.287 14.65.548 17.014.19.127-.02.33-.023.4-.153.044-.082.032-.193-.061-.233a.463.463 0 0 0-.17-.029c-.13 0-.361-.01-.62-.027-.446-.016-.865-.057-1.073-.15-.498-.22-.333-.524-.311-.554.103-.14.268-.17.429-.183.155-.01.57-.043.725-.055a28.18 28.18 0 0 0 6.974-1.434c.624-.212 1.213-.513 1.857-.667a3.7 3.7 0 0 1 .554-.09c.459-.038 1.042.018 1.392.356.088.086.175.197.23.308.087.171.135.348.15.527.05.611-.314 1.183-.78 1.548"/>
                        </g>
                        <g clip-path="url(#d)">
                            <path d="M135.143 41.968a1.024 1.024 0 0 0-.506-.109c-.587 0-.881.331-.881.993v1.993h-.578v.456h.578v.822l.539.175v-.997h.848v-.456h-.848v-1.9c0-.226.039-.387.115-.482.077-.095.205-.143.385-.143.133 0 .25.036.348.108v-.46zM114.12 41.935h-.551v3.166c0 .25.015.554.046.914h-.013a3.117 3.117 0 0 0-.142-.458l-1.607-3.622h-.27l-1.611 3.596a2.58 2.58 0 0 0-.141.484h-.013c.018-.189.026-.496.026-.92v-3.16h-.532v4.714h.729l1.447-3.287c.11-.248.18-.437.214-.566h.023c.094.26.17.452.227.58l1.475 3.273h.694v-4.714zM115.015 41.935v3.366h.539v-3.366h-.539zm.632 4.573a.337.337 0 0 0-.104-.25.345.345 0 0 0-.251-.102.349.349 0 0 0-.249.099.336.336 0 0 0-.103.253c0 .099.035.182.103.248.07.067.152.101.249.101a.348.348 0 0 0 .251-.101.33.33 0 0 0 .104-.248M118.645 42.09c-.259-.158-.567-.236-.924-.236-.482 0-.87.16-1.167.479-.29.312-.434.713-.434 1.203 0 .553.158.999.475 1.339.317.339.742.509 1.277.509.294 0 .554-.057.78-.171v-.552a1.37 1.37 0 0 1-.803.263c-.342 0-.62-.12-.838-.358-.226-.246-.339-.572-.339-.98 0-.392.104-.702.311-.93.207-.23.485-.342.834-.342.293 0 .57.096.828.289v-.513zM121.081 44.756c-.094.072-.23.109-.41.109-.22 0-.404-.1-.554-.296-.168-.222-.253-.528-.253-.918v-1.716h-.539v3.367h.54v-.694h.013c.08.245.2.435.364.569a.806.806 0 0 0 .517.184.86.86 0 0 0 .322-.046v-.56zM123.953 43.612c0 .432-.099.76-.294.986-.188.217-.452.325-.792.325-.335 0-.604-.11-.805-.328-.213-.235-.319-.567-.319-.996 0-.403.101-.72.305-.945.205-.227.477-.34.82-.34.354 0 .625.115.811.344.182.224.273.542.273.954m.552.02c0-.537-.15-.968-.454-1.292-.301-.325-.708-.487-1.222-.487-.507 0-.908.162-1.204.487-.288.313-.432.726-.432 1.239 0 .585.163 1.038.491 1.358.305.298.713.447 1.223.447.503 0 .894-.156 1.176-.467.282-.311.423-.74.423-1.285M127.043 42.836a.878.878 0 0 0-.31-.687c-.225-.198-.533-.296-.922-.296a1.65 1.65 0 0 0-.836.204v.58a1.35 1.35 0 0 1 .875-.324c.427 0 .64.157.64.47a.42.42 0 0 1-.141.325c-.094.086-.278.19-.552.31-.283.123-.483.25-.601.381-.143.156-.214.358-.214.608 0 .281.11.514.332.7.22.184.506.276.855.276.267 0 .507-.052.72-.157v-.542a1.277 1.277 0 0 1-.763.24.66.66 0 0 1-.431-.132.42.42 0 0 1-.161-.339.45.45 0 0 1 .135-.348c.08-.077.25-.17.506-.279.287-.12.494-.245.622-.372a.832.832 0 0 0 .246-.618M130.202 43.612c0 .432-.098.76-.292.986-.189.217-.453.325-.793.325-.335 0-.604-.11-.805-.328-.213-.235-.319-.567-.319-.996 0-.403.102-.72.305-.945.205-.227.477-.34.819-.34.355 0 .626.115.812.344.182.224.273.542.273.954m.552.02c0-.537-.151-.968-.454-1.292-.302-.325-.709-.487-1.223-.487-.505 0-.907.162-1.202.487-.289.313-.434.726-.434 1.239 0 .585.164 1.038.492 1.358.305.298.713.447 1.223.447.503 0 .894-.156 1.176-.467.281-.311.422-.74.422-1.285M132.993 46.446a.723.723 0 0 1-.358.089c-.378 0-.566-.238-.566-.714v-.52h.79v-.456h-.79v-2.91h-.539v2.91h-.572v.457h.572v.546c0 .37.115.66.345.87.197.183.44.274.727.274.166 0 .297-.02.391-.06v-.486zM135.753 46.28a.135.135 0 0 1-.006.042.061.061 0 0 1-.022.03.09.09 0 0 1-.043.017.327.327 0 0 1-.069.006h-.067v-.194h.083a.14.14 0 0 1 .091.027.086.086 0 0 1 .033.072m.011-.468-.065.16a.513.513 0 0 1-.019.04.236.236 0 0 1-.023.035.12.12 0 0 1-.027.024.056.056 0 0 1-.031.01h-.053v-.27h-.12v.668h.202a.412.412 0 0 0 .121-.016.219.219 0 0 0 .079-.042.152.152 0 0 0 .043-.059.2.2 0 0 0 .013-.068.168.168 0 0 0-.043-.113.208.208 0 0 0-.12-.066v-.004a.099.099 0 0 0 .052-.03.428.428 0 0 0 .055-.088l.086-.181h-.15zm.345.327a.45.45 0 0 1-.461.461.456.456 0 0 1-.335-.133.438.438 0 0 1-.095-.147.486.486 0 0 1 .102-.515.448.448 0 0 1 .148-.095.488.488 0 0 1 .505.097.461.461 0 0 1 .136.332m.076.003a.555.555 0 0 0-.072-.271.503.503 0 0 0-.192-.188.552.552 0 0 0-.276-.07.579.579 0 0 0-.215.04.51.51 0 0 0-.169.108.504.504 0 0 0-.15.376.553.553 0 0 0 .07.27.527.527 0 0 0 .47.26.595.595 0 0 0 .208-.038.502.502 0 0 0 .284-.271.54.54 0 0 0 .042-.216"/>
                        </g>
                    </g>
                </svg>
            );
        case "Take-Two Interactive":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 475.058">
                <defs>
                  <clipPath clipPathUnits="userSpaceOnUse" id="z" clip-path="url(#clipPathS)">
                    <use height="100%" width="100%" transform="translate(-393.41 -258.656)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="y" clip-path="url(#clipPathZ)">
                    <use height="100%" width="100%" transform="translate(-370.599 -258.656)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="x" clip-path="url(#clipPathe)">
                    <use height="100%" width="100%"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="w" clip-path="url(#clipPathq)">
                    <use height="100%" width="100%" transform="translate(-338.608 -258.656)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="v" clip-path="url(#clipPathAj)">
                    <use height="100%" width="100%" transform="translate(-324.112 -263.932)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="u" clip-path="url(#clipPath3c)">
                    <use height="100%" width="100%" transform="translate(-299.76 -264.671)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="t" clip-path="url(#clipPath1W)">
                    <use height="100%" width="100%" transform="translate(-278.489 -267.287)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="s" clip-path="url(#clipPathM)">
                    <use height="100%" width="100%" transform="translate(-264.266 -258.656)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="r" clip-path="url(#clipPathMv)">
                    <use height="100%" width="100%" transform="translate(-242.805 -258.656)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="q" clip-path="url(#clipPathT)">
                    <use height="100%" width="100%" transform="translate(-224.299 -258.656)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="l" clip-path="url(#clipPath4Q)">
                    <use height="100%" width="100%"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="p" clip-path="url(#clipPathIy)">
                    <use height="100%" width="100%"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="g" clip-path="url(#clipPathu)">
                    <use height="100%" width="100%" transform="translate(-402.837 -482.288)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="f" clip-path="url(#clipPathR)">
                    <use height="100%" width="100%" transform="translate(-394.789 -490.927)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="o" clip-path="url(#clipPathqp)">
                    <use height="100%" width="100%" transform="translate(-384.492 -289.891)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="n" clip-path="url(#clipPathV)">
                    <use height="100%" width="100%" transform="translate(-362.909 -281.996)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="m" clip-path="url(#clipPathP)">
                    <use height="100%" width="100%" transform="translate(-330.808 -281.957)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="k" clip-path="url(#clipPathy)">
                    <use height="100%" width="100%" transform="translate(-291.858 -281.91)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="j" clip-path="url(#clipPathE)">
                    <use height="100%" width="100%" transform="translate(-262.05 -281.874)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="i" clip-path="url(#clipPathiG)">
                    <use height="100%" width="100%" transform="translate(-233.576 -288.437)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="h" clip-path="url(#clipPathSZ)">
                    <use height="100%" width="100%" transform="translate(-210 -281.812)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="e" clip-path="url(#clipPathFY)">
                    <use height="100%" width="100%" transform="translate(-392.889 -313.934)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="d" clip-path="url(#clipPathuC)">
                    <use height="100%" width="100%" transform="translate(-392.889 -313.934)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="c" clip-path="url(#clipPathO)">
                    <use height="100%" width="100%" transform="translate(-253.318 -314.017)"/>
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="b" clip-path="url(#clipPath38)">
                    <use height="100%" width="100%" transform="translate(-253.318 -314.017)"/>
                  </clipPath>
                  <path id="a" d="M166.44 490.928h244.897V257.985H166.44Z"/>
                </defs>
                <path clip-path="url(#b)" transform="matrix(2.04343 0 0 -2.04343 177.529 361.503)" d="m0 0-51.293-.062-.16 133.621-36.932-.044-.05 42.317 124.385.149.052-42.317-36.162-.043L0 0" fill="#1476c6"/>
                <path clip-path="url(#c)" transform="matrix(2.04343 0 0 -2.04343 177.529 361.503)" d="m0 0-51.293-.062-.16 133.621-36.932-.044-.05 42.317 124.385.149.052-42.317-36.162-.043L0 0" fill="#1476c6"/>
                <path clip-path="url(#d)" transform="matrix(2.04343 0 0 -2.04343 462.732 361.672)" d="m0 0-130.741-.157-.047 39.323 58.304 43.903c10.509 9.029 23.02 19.563 23.001 34.591-.011 10.019-6.283 18.026-16.802 18.013-16.03-.019-20.518-16.555-21.254-29.83l-43.339 8.464c4.715 36.823 31.235 59.898 68.303 59.942 34.314.041 63.389-18.458 63.434-55.527.023-18.534-8.476-32.32-21.987-44.358l-39.788-29.855L-64.92 42l66.873.08L0 0"/>
                <path clip-path="url(#e)" transform="matrix(2.04343 0 0 -2.04343 462.732 361.672)" d="m0 0-130.741-.157-.047 39.323 58.304 43.903c10.509 9.029 23.02 19.563 23.001 34.591-.011 10.019-6.283 18.026-16.802 18.013-16.03-.019-20.518-16.555-21.254-29.83l-43.339 8.464c4.715 36.823 31.235 59.898 68.303 59.942 34.314.041 63.389-18.458 63.434-55.527.023-18.534-8.476-32.32-21.987-44.358l-39.788-29.855L-64.92 42l66.873.08L0 0"/>
                <path clip-path="url(#f)" transform="matrix(2.04343 0 0 -2.04343 466.614 0)" d="M0 0v-1.016h2.91v-7.623h1.178v7.623h2.909V0H0"/>
                <path clip-path="url(#g)" transform="matrix(2.04343 0 0 -2.04343 483.06 17.653)" d="M0 0h1.109v5.098c0 .201-.01.522-.024.955-.017.433-.023.756-.023.97v.262L3.556 0h1.163l2.508 7.285c0-.465-.009-.903-.023-1.31a22.448 22.448 0 0 1-.023-.877V0H8.29v8.639H6.63L4.144 1.334 1.665 8.639H0V0"/>
                <path clip-path="url(#h)" transform="matrix(2.04343 0 0 -2.04343 89.012 427.311)" d="m0 0-4.629-.006-.014 12.058-3.333-.003-.005 3.818 11.225.014.005-3.819-3.263-.004L0 0"/>
                <path clip-path="url(#i)" transform="matrix(2.04343 0 0 -2.04343 137.188 413.774)" d="m0 0-1.301 4.604-1.291-4.607Zm.837-3.471-4.235-.005-.968-3.125-3.958-.005 4.911 15.883 5.138.006L6.72-6.588l-4.976-.006-.907 3.123"/>
                <path clip-path="url(#j)" transform="matrix(2.04343 0 0 -2.04343 195.372 427.185)" d="m0 0-2.739 5.991-1.663-2.316.004-3.68L-8.98-.01l-.019 15.877 4.582.004.008-6.549 4.39 6.555 4.374.005-3.997-5.814L5.346.007 0 0"/>
                <path clip-path="url(#k)" transform="matrix(2.04343 0 0 -2.04343 256.283 427.111)" d="m0 0-11.918-.015-.019 15.877 11.918.015.004-3.657-7.151-.009.004-2.314 5.784.007.005-3.541-5.785-.007.003-2.569 7.15.008L0 0"/>
                <path clip-path="url(#l)" transform="matrix(2.04343 0 0 -2.04343 -340.108 1003.174)" d="M312.448 287.635h-9.565v4.474h9.565z"/>
                <path clip-path="url(#m)" transform="matrix(2.04343 0 0 -2.04343 335.874 427.015)" d="m0 0-4.629-.005-.014 12.057-3.332-.004-.005 3.819 11.224.014.005-3.819-3.263-.004L0 0"/>
                <path clip-path="url(#n)" transform="matrix(2.04343 0 0 -2.04343 401.47 426.935)" d="m0 0-4.096-.005-2.21 8.745h-.046L-8.401-.01l-4.258-.006-4.255 15.872 4.583.005 2.209-9.162h.046l2.142 9.168 3.819.004 2.348-9.162h.046l2.188 9.168 3.727.005L0 0"/>
                <path clip-path="url(#o)" transform="matrix(2.04343 0 0 -2.04343 445.573 410.802)" d="M0 0c.002-1.527.168-4.466 2.389-4.464C4.611-4.462 4.77-1.522 4.768.005c-.002 1.551-.238 4.652-2.39 4.65C.226 4.652-.002 1.551 0 0Zm9.975.035c.005-4.513-2.768-8.126-7.582-8.132-4.813-.006-7.595 3.601-7.6 8.114-.006 4.745 2.744 8.219 7.581 8.225 4.837.006 7.595-3.463 7.601-8.207"/>
                <path clip-path="url(#p)" transform="matrix(2.04343 0 0 -2.04343 -340.108 1003.174)" d="M206.911 258.656h-4.474v14.476h4.474z"/>
                <path clip-path="url(#q)" transform="matrix(2.04343 0 0 -2.04343 118.23 474.629)" d="m0 0-4.157 6.774-1.288 2.617-.042-.042.042-.169c.212-.929.296-1.436.296-2.427V0h-3.609v14.476h4.2L.295 6.394l.043.042-.317 4.01v4.03h3.608V0H0"/>
                <path clip-path="url(#r)" transform="matrix(2.04343 0 0 -2.04343 156.046 474.629)" d="M0 0h-4.22v10.994h-3.039v3.482H2.976v-3.482H0V0"/>
                <path clip-path="url(#s)" transform="matrix(2.04343 0 0 -2.04343 199.9 474.629)" d="M0 0h-10.868v14.476H0v-3.334h-6.52v-2.11h5.275V5.803H-6.52V3.461H0V0"/>
                <path clip-path="url(#t)" transform="matrix(2.04343 0 0 -2.04343 228.964 456.992)" d="M0 0c.971 0 2.131.147 2.131 1.393 0 .486-.253.949-.697 1.182-.379.189-.843.189-1.265.189h-1.794V0Zm1.878-8.631-2.11 5.529h-1.393v-5.529H-6.12V5.845h7.365c1.266 0 2.659-.168 3.735-.886 1.203-.76 1.773-2.046 1.773-3.461 0-1.898-.845-3.038-2.554-3.819l2.617-6.31H1.878"/>
                <path clip-path="url(#u)" transform="matrix(2.04343 0 0 -2.04343 272.43 462.338)" d="m0 0-1.181 4.199L-2.363 0Zm.759-3.165h-3.861l-.887-2.849h-3.608l4.495 14.476h4.684L6.119-6.014H1.582L.759-3.165"/>
                <path clip-path="url(#v)" transform="matrix(2.04343 0 0 -2.04343 322.191 463.848)" d="M0 0c-.275-3.334-2.701-5.486-6.035-5.486-4.347 0-6.627 3.144-6.627 7.259 0 4.178 2.005 7.639 6.563 7.639 3.693 0 5.803-2.195 6.099-5.803l-4.137-.212c.043 1.225-.421 2.765-1.919 2.765-1.963 0-2.047-3.018-2.047-4.389 0-1.456.084-3.925 2.089-3.925 1.371 0 1.899 1.202 1.962 2.405L0 0"/>
                <path clip-path="url(#w)" transform="matrix(2.04343 0 0 -2.04343 351.813 474.629)" d="M0 0h-4.221v10.994H-7.26v3.482H2.975v-3.482H0V0"/>
                <path clip-path="url(#x)" transform="matrix(2.04343 0 0 -2.04343 -340.108 1003.174)" d="M353.781 258.656h-4.474v14.476h4.474z"/>
                <path clip-path="url(#y)" transform="matrix(2.04343 0 0 -2.04343 417.184 474.629)" d="M0 0h-4.537L-9.2 14.476h4.663l2.279-7.829.423-1.435.401 1.372 2.279 7.892h3.65L0 0"/>
                <path clip-path="url(#z)" transform="matrix(2.04343 0 0 -2.04343 463.797 474.629)" d="M0 0h-10.868v14.476H0v-3.334h-6.521v-2.11h5.276V5.803h-5.276V3.461H0V0"/>
              </svg>
        );
        case "Sony Computer Entertainment":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.67 110.52">
  <defs>
    <clipPath id="a">
      <path d="M9 105h4v5.52H9Zm0 0"/>
    </clipPath>
    <clipPath id="b">
      <path d="M13 105h6v5.52h-6Zm0 0"/>
    </clipPath>
    <clipPath id="c">
      <path d="M18 105h5v5.52h-5Zm0 0"/>
    </clipPath>
    <clipPath id="d">
      <path d="M23 105h5v5.52h-5Zm0 0"/>
    </clipPath>
    <clipPath id="e">
      <path d="M28 105h5v5.52h-5Zm0 0"/>
    </clipPath>
    <clipPath id="f">
      <path d="M32 105h5v5.52h-5Zm0 0"/>
    </clipPath>
    <clipPath id="g">
      <path d="M37 105h5v5.52h-5Zm0 0"/>
    </clipPath>
    <clipPath id="h">
      <path d="M42 105h2v5.52h-2Zm0 0"/>
    </clipPath>
    <clipPath id="i">
      <path d="M44 105h6v5.52h-6Zm0 0"/>
    </clipPath>
    <clipPath id="j">
      <path d="M50 105h6v5.52h-6Zm0 0"/>
    </clipPath>
    <clipPath id="k">
      <path d="M56 105h5v5.52h-5Zm0 0"/>
    </clipPath>
    <clipPath id="l">
      <path d="M61 105h5v5.52h-5Zm0 0"/>
    </clipPath>
    <clipPath id="m">
      <path d="M66 105h5v5.52h-5Zm0 0"/>
    </clipPath>
    <clipPath id="n">
      <path d="M73 108h3v2.52h-3Zm0 0"/>
    </clipPath>
    <clipPath id="o">
      <path d="M75 108h4v2.52h-4Zm0 0"/>
    </clipPath>
    <clipPath id="p">
      <path d="M0 14h79.672v79H0Zm0 0"/>
    </clipPath>
    <clipPath id="q">
      <path d="m39.75 13.77 39.914 39.918L40 93.355l-40-40Zm0 0"/>
    </clipPath>
    <clipPath id="r">
      <path d="m39.75 13.77 39.914 39.918L40 93.355l-40-40Zm0 0"/>
    </clipPath>
    <clipPath id="t">
      <path d="M26.2 20.32H46V60H26.2Zm0 0"/>
    </clipPath>
    <clipPath id="u">
      <path d="m46.25 60.125-20-20 19.875-19.793"/>
    </clipPath>
    <clipPath id="v">
      <path d="m46.25 60.125-20-20 19.875-19.793"/>
    </clipPath>
    <clipPath id="x">
      <path d="M34 48h19.898v39.719H34Zm0 0"/>
    </clipPath>
    <clipPath id="y">
      <path d="m33.957 47.832 19.957 19.961-19.832 19.832"/>
    </clipPath>
    <clipPath id="z">
      <path d="m33.957 47.832 19.957 19.961-19.832 19.832"/>
    </clipPath>
    <image id="s" width="399" height="199"/>
    <image id="w" width="200" height="399"/>
    <image id="A" width="200" height="399"/>
  </defs>
  <path d="M8.633 6.125h1.012c.828 1.512 2.796 3.129 5.566 3.129 1.45 0 3-.438 3-1.5 0-.781-.68-1.18-2.234-1.379l-2.11-.266c-3.746-.46-5.234-1.734-5.234-3.086 0-2.043 2.543-3.027 5.48-3.027 1.328 0 2.528.242 3.621.73l1.118-.648h.89l.27 3.5h-1.035C18.21 2.16 16.41.715 13.844.715c-1.32 0-2.852.41-2.852 1.363 0 .57.477 1.09 2.293 1.328l2.567.344c3.414.465 4.843 1.484 4.843 3.129 0 1.617-1.906 3.09-5.402 3.09-1.676 0-3.145-.305-4.281-.887l-1.305.82h-.91l-.164-3.777M30.008 9.32c2.484 0 3.707-1.46 3.707-4.336 0-2.879-1.223-4.336-3.707-4.336-2.5 0-3.723 1.457-3.723 4.336 0 2.875 1.223 4.336 3.723 4.336Zm0-9.324c4.367 0 7.8 2.149 7.8 4.988 0 2.836-3.433 4.985-7.8 4.985-4.383 0-7.817-2.149-7.817-4.985 0-2.84 3.434-4.988 7.817-4.988M38.723.195h5.336l8.007 6.102V2.57c0-1.23-.351-1.605-2.277-1.656V.195h5.961v.72c-1.926.05-2.277.425-2.277 1.655v7.332h-1.344l-9.684-7.464h-.043v4.96c0 1.23.356 1.602 2.278 1.657v.715h-5.957v-.715c1.922-.055 2.273-.426 2.273-1.657v-5.77c-.516-.476-1.324-.714-2.273-.714V.195" fill="#403d7f"/>
  <path d="M55.605.195h7.407v.72h-.453c-.871 0-1.098.077-1.098.304 0 .12.105.25.394.543l2.711 2.812 1.985-2.308c.289-.344.394-.516.394-.664 0-.555-.953-.688-1.965-.688V.195h6.063v.72c-1.492.132-2.113.515-3.148 1.644l-2.73 2.996V8.39c0 .504.124.664 1.241.664h1.098v.715h-8.297v-.715h1.035c1.117 0 1.238-.16 1.238-.664V5.715L57.508 1.64c-.598-.61-.824-.727-1.903-.727V.195M14.895 99.547c-.31-1.137-1.137-1.574-2.485-1.574-1.902 0-2.723 1.379-2.723 2.953 0 1.488.645 2.984 2.786 2.984 1.359 0 2.199-.777 2.496-1.832h.777c-.348 1.285-1.3 2.367-3.414 2.367-2.426 0-3.39-1.617-3.39-3.504 0-2.543 1.574-3.504 3.663-3.504 1.622 0 2.801.731 3.055 2.11h-.765M23.824 100.95c0-1.848-1.125-2.977-2.941-2.977-2.024 0-2.91 1.433-2.91 2.976 0 1.574.875 2.961 2.933 2.961 2.043 0 2.918-1.406 2.918-2.96Zm-2.965-3.513c2.465 0 3.711 1.563 3.711 3.512 0 1.914-1.246 3.496-3.675 3.496-2.43 0-3.668-1.582-3.668-3.496-.008-1.937 1.28-3.511 3.632-3.511M26.344 104.27v-6.657h1.14l2.582 5.871h.02l2.539-5.87h1.125v6.656h-.742v-5.934h-.024l-2.582 5.934h-.699l-2.594-5.934h-.02v5.934h-.745M38.242 100.793c1.387 0 2.254-.238 2.254-1.367 0-.832-.637-1.278-2.035-1.278h-1.926v2.645Zm-2.453 3.477v-6.657h2.879c2.047 0 2.57.86 2.57 1.86 0 1.488-1.562 1.859-3.02 1.859h-1.683v2.938h-.746M42.848 97.613h.746v3.969c0 1.645.699 2.328 2.308 2.328 1.696 0 2.309-.758 2.309-2.328v-3.969h.742v4.153c0 1.726-1.016 2.68-3.05 2.68-2.06 0-3.055-.977-3.055-2.68v-4.153M50.36 97.613h5.734v.535h-2.496v6.122h-.743v-6.122H50.36v-.535M57.484 104.27v-6.657h5.243v.535H58.23v2.407h4.06v.535h-4.06v2.644h4.606v.536h-5.352M67.555 100.71c1.101 0 1.957-.39 1.957-1.32 0-1-.918-1.242-1.914-1.242h-2.364v2.563Zm-2.32.536v3.024h-.747v-6.657h3.086c1.73 0 2.68.52 2.68 1.746 0 .844-.371 1.286-1.277 1.63.93.269.984 1.1 1.003 1.804.036 1.008.133 1.281.329 1.414v.063h-.82c-.305-.454-.231-1.7-.348-2.207-.176-.723-.82-.817-1.567-.817h-2.34" fill="#403d7f"/>
  <g clip-path="url(#a)">
    <path d="M9.281 110.52v-4.747h3.64v.383h-3.12v1.715h2.816v.383H9.801v1.887h3.195v.379H9.281" fill="#403d7f"/>
  </g>
  <g clip-path="url(#b)">
    <path d="M14.441 106.383h-.015v4.137h-.52v-4.747h.586l3.164 4.149h.012v-4.149h.52v4.747h-.602l-3.145-4.137" fill="#403d7f"/>
  </g>
  <g clip-path="url(#c)">
    <path d="M18.914 105.773h3.98v.383h-1.73v4.364h-.516v-4.364h-1.734v-.383" fill="#403d7f"/>
  </g>
  <g clip-path="url(#d)">
    <path d="M23.633 110.52v-4.747h3.637v.383h-3.122v1.715h2.82v.383h-2.82v1.887h3.2v.379h-3.715" fill="#403d7f"/>
  </g>
  <g clip-path="url(#e)">
    <path d="M30.395 107.98c.765 0 1.359-.273 1.359-.94 0-.712-.64-.884-1.332-.884h-1.64v1.824Zm-1.614.383v2.157h-.515v-4.747h2.14c1.203 0 1.864.372 1.864 1.247 0 .601-.258.918-.891 1.16.648.191.687.785.7 1.285.023.719.093.918.23 1.012v.043h-.57c-.216-.325-.16-1.211-.243-1.575-.121-.511-.57-.582-1.09-.582h-1.625" fill="#403d7f"/>
  </g>
  <g clip-path="url(#f)">
    <path d="M32.848 105.773h3.98v.383h-1.73v4.364h-.52v-4.364h-1.73v-.383" fill="#403d7f"/>
  </g>
  <g clip-path="url(#g)">
    <path d="M38.414 108.648h2.145l-1.07-2.492Zm-1.352 1.872 2.153-4.747h.582l2.098 4.747h-.532l-.629-1.489h-2.492l-.648 1.489h-.532" fill="#403d7f"/>
  </g>
  <g clip-path="url(#h)">
    <path d="M42.816 110.52v-4.747h.516v4.747h-.516" fill="#403d7f"/>
  </g>
  <g clip-path="url(#i)">
    <path d="M45.262 106.383h-.016v4.137h-.52v-4.747h.587l3.16 4.149h.015v-4.149h.52v4.747h-.602l-3.144-4.137" fill="#403d7f"/>
  </g>
  <g clip-path="url(#j)">
    <path d="M50.207 110.52v-4.747h.79l1.792 4.188h.016l1.761-4.188h.786v4.747h-.52v-4.23h-.016l-1.793 4.23h-.484l-1.8-4.23h-.016v4.23h-.516" fill="#403d7f"/>
  </g>
  <g clip-path="url(#k)">
    <path d="M56.555 110.52v-4.747h3.64v.383h-3.12v1.715h2.816v.383h-2.817v1.887h3.196v.379h-3.715" fill="#403d7f"/>
  </g>
  <g clip-path="url(#l)">
    <path d="M61.715 106.383h-.016v4.137h-.515v-4.747h.582l3.164 4.149h.011v-4.149h.52v4.747h-.602l-3.144-4.137" fill="#403d7f"/>
  </g>
  <g clip-path="url(#m)">
    <path d="M66.188 105.773h3.984v.383h-1.734v4.364h-.516v-4.364h-1.734v-.383" fill="#403d7f"/>
  </g>
  <g clip-path="url(#n)">
    <path d="M73.598 108.367h1.804v.176h-.785v1.977h-.234v-1.977h-.785v-.176" fill="#403d7f"/>
  </g>
  <g clip-path="url(#o)">
    <path d="M75.965 110.52v-1.918h.008l.816 1.918h.219l.816-1.918h.004v1.918h.234v-2.153h-.355l-.797 1.899h-.008l-.812-1.899h-.36v2.153h.235" fill="#403d7f"/>
  </g>
  <g clip-path="url(#p)">
    <g clip-path="url(#q)">
      <g clip-path="url(#r)">
        <use transform="matrix(.2 0 0 -.4 0 93.42)"/>
      </g>
    </g>
  </g>
  <g clip-path="url(#t)">
    <g clip-path="url(#u)">
      <g clip-path="url(#v)">
        <use transform="matrix(.1 0 0 -.1 26.2 60.22)"/>
      </g>
    </g>
  </g>
  <g clip-path="url(#x)">
    <g clip-path="url(#y)">
      <g clip-path="url(#z)">
        <use transform="matrix(.1 0 0 -.1 33.9 87.72)"/>
      </g>
    </g>
  </g>
</svg>
            );
        case "Activision":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1188 0 2880 720" preserveAspectRatio="none" version="1.0">
                    <path d="M-3453.677-4786.186" fill="#fff"/>
                    <path d="M1562.893 572.49h7.27c0 14.928 5.97 28.3 15.707 38.036 9.736 9.736 23.107 15.707 38.036 15.707 14.799 0 28.3-5.971 38.035-15.707 9.737-9.737 15.708-23.108 15.708-38.036h7.14c0 33.752-27.261 61.013-60.883 61.013v-3.635 3.635c-33.622 0-60.883-27.261-61.013-61.013m114.756 0c0-14.8-5.971-28.3-15.707-37.906-9.737-9.736-23.237-15.838-38.036-15.838v-7.14c33.622 0 60.883 27.262 60.883 60.884h-7.14m-53.743-57.249v-3.635 3.635m-61.013 57.249c.13-33.622 27.39-60.884 61.013-60.884v7.14c-14.929 0-28.3 6.102-38.036 15.838-9.736 9.606-15.708 23.107-15.708 37.906h-7.27M-247.507 200.7h106.968v408.008h-106.968V200.7zM1317.542 434.756V607.15l-107.616-.39V188.109l193.813 166.812V200.7h106.708v423.067l-192.905-189.011M-785.46 403.6c0-115.795 93.986-209.78 209.78-209.78 52.186 0 99.958 19.212 136.696 50.757l-69.321 78.668c-18.174-15.318-41.67-24.535-67.374-24.535-57.898 0-104.89 46.993-104.89 104.89 0 57.898 46.992 104.89 104.89 104.89 26.092 0 49.978-9.605 68.412-25.443l69.192 78.798c-36.738 32.064-84.9 51.407-137.604 51.407-115.795 0-209.781-93.857-209.781-209.652"/>
                    <path d="M63.14 702.045-139.24 164.351h-169.15v445.915h-110.731V164.35h-245.091l56.859-107.097h547.17l123.324 322.2 123.454-322.2H716.37l58.417 107.097H265.652L63.14 702.045"/>
                    <path d="M405.073 607.15V517.06h73.475c11.943 0 34.66-.909 40.373-19.862 11.813-39.464-109.175-103.463-109.175-201.603 0-74.254 53.744-96.452 90.222-96.452h111.38v88.534h-68.801s-19.732 0-25.184 7.918c-29.858 42.71 110.602 105.15 110.602 219.907 0 59.974-51.407 91.65-102.683 91.65h-120.21M267.21 199.142h107.097V607.15H267.209V199.142zM645.36 199.142h107.098V607.15H645.36V199.142zM1639.743 603.645c-1.817-4.284-1.558-10.774-2.337-16.227-1.038-7.14-3.764-10.255-11.293-10.255h-14.93v26.482h-14.798v-67.763h36.478c12.202 0 19.862 8.438 19.862 18.693 0 8.049-3.246 14.02-10.775 17.006v.26c7.4 1.817 9.476 8.957 9.866 15.837.39 4.284.26 12.203 2.856 15.967h-14.929m-28.56-36.997h16.358c6.62 0 10.255-2.856 10.255-9.736 0-6.49-3.635-9.347-10.255-9.347h-16.357v19.083M-866.724 608.708l-28.43-75.942h-132.8l-28.43 75.942h-113.848L-961.489 11.04l208.742 597.668h-113.977m-128.777-184.986h63.22l-31.675-104.371-31.545 104.37M771.93 403.47c0-115.924 94.116-210.04 210.17-210.04 115.925 0 210.041 94.116 210.041 210.04 0 116.055-94.116 210.171-210.04 210.171-116.055 0-210.171-94.116-210.171-210.17m105.8 0c0 57.637 46.733 104.37 104.37 104.37 57.509 0 104.242-46.733 104.242-104.37 0-57.508-46.734-104.242-104.242-104.242-57.637 0-104.37 46.734-104.37 104.242"/>
                </svg>
            );
        case "Default":
            return (
                <div>Hey</div>
            );
    }
}

const publisherIcon = (props: PublisherProps) => {
    let svg = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372.368 372.573">
            <path d="M167.617 371.807c-28.683-2.747-57.723-13.048-82.669-29.324-20.904-13.64-25.625-19.246-25.625-30.435 0-22.475 24.712-61.84 66.993-106.716 24.012-25.486 57.46-55.36 61.077-54.55 7.03 1.572 63.25 56.41 84.297 82.224 33.28 40.822 48.58 74.246 40.808 89.147-5.91 11.328-42.573 33.467-69.508 41.973-22.2 7.01-51.356 9.98-75.373 7.68zM31.09 288.68C13.72 262.03 4.942 235.795.705 197.848c-1.4-12.53-.898-19.697 3.177-45.415C8.96 120.38 27.215 83.297 49.149 60.476c9.342-9.72 10.176-9.957 21.563-6.12 13.829 4.658 28.596 14.857 51.499 35.566l13.362 12.083-7.297 8.964c-33.872 41.612-69.63 100.597-83.105 137.09-7.326 19.838-10.281 39.752-7.129 48.043 2.128 5.597.173 3.51-6.953-7.422zm304.916 4.533c1.716-8.377-.455-23.763-5.542-39.28-11.016-33.606-47.84-96.124-81.652-138.63l-10.645-13.382 11.516-10.574c15.036-13.806 25.476-22.074 36.74-29.094 8.89-5.54 21.592-10.445 27.052-10.445 3.366 0 15.217 12.299 24.784 25.72 14.817 20.789 25.718 45.988 31.24 72.22 3.569 16.95 3.866 53.232.575 70.14-2.7 13.876-8.403 31.875-13.966 44.082-4.168 9.146-14.535 26.91-19.078 32.69-2.336 2.972-2.338 2.966-1.024-3.447zM170.689 45.463c-15.602-7.923-39.67-16.428-52.965-18.716-4.661-.802-12.612-1.25-17.67-.994-10.969.554-10.479-.02 7.119-8.334 14.63-6.912 26.833-10.976 43.4-14.455 18.636-3.913 53.666-3.959 72.005-.094 19.808 4.174 43.133 12.854 56.276 20.942l3.907 2.404-8.963-.453c-17.81-.899-43.766 6.296-71.632 19.858-8.406 4.09-15.718 7.357-16.25 7.26-.533-.098-7.385-3.436-15.227-7.419z"/>
        </svg>
    );
    

    return (
        <div className="w-56">
            {getPublisher(props.publisher)}
        </div>
    );
}

export default publisherIcon 