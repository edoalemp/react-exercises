(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{779:function(e,n,o){"use strict";o.r(n),o.d(n,"conf",function(){return t}),o.d(n,"language",function(){return s});var t={comments:{lineComment:";;"},brackets:[["(",")"],["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}]},s={defaultToken:"",ignoreCase:!0,tokenPostfix:".clj",brackets:[{open:"(",close:")",token:"delimiter.parenthesis"},{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"}],keywords:["ns","ns-unmap","create-ns","in-ns","fn","def","defn","defmacro","defmulti","defonce","require","import","new","refer","pos","pos?","filter","map","reduce","repeat","key","rest","concat","into","reverse","iterate","range","drop","drop-while","take","take-while","neg","neg?","bound-fn","if","if-not","if-let","case,","contains","conj","disj","sort","get","assoc","merge","keys","vals","nth","first","last","count","contains?","cond","condp","cond->","cond->>","when","while","when-not","when-let","when-first","do","future","comment","doto","locking","proxy","println","type","meta","var","as->","reify","deftype","defrecord","defprotocol","extend","extend-protocol","extend-type","specify","specify!","try","catch","finally","let","letfn","binding","loop","for","seq","doseq","dotimes","when-let","if-let","when-some","if-some","this-as","defmethod","testing","deftest","are","use-fixtures","use","remove","run","run*","fresh","alt!","alt!!","go","go-loop","thread","boolean","str"],constants:["true","false","nil"],operators:["=","not=","<","<=",">",">=","and","or","not","inc","dec","max","min","rem","bit-and","bit-or","bit-xor","bit-not"],tokenizer:{root:[[/0[xX][0-9a-fA-F]+/,"number.hex"],[/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?/,"number.float"],[/(?:\b(?:(ns|def|defn|defn-|defmacro|defmulti|defonce|ns|ns-unmap|fn))(?![\w-]))(\s+)((?:\w|\-|\!|\?)*)/,["keyword","white","variable"]],[/[a-zA-Z_#][a-zA-Z0-9_\-\?\!\*]*/,{cases:{"@keywords":"keyword","@constants":"constant","@operators":"operators","@default":"identifier"}}],[/\/#"(?:\.|(?:\")|[^""\n])*"\/g/,"regexp"],{include:"@whitespace"},{include:"@strings"}],whitespace:[[/[ \t\r\n]+/,"white"],[/;;.*$/,"comment"]],strings:[[/"$/,"string","@popall"],[/"(?=.)/,"string","@multiLineString"]],multiLineString:[[/\\./,"string.escape"],[/"/,"string","@popall"],[/.(?=.*")/,"string"],[/.*\\$/,"string"],[/.*$/,"string","@popall"]]}}}}]);
//# sourceMappingURL=44.bundle.js.map