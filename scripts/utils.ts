/// <reference path="../lib/lodash/lodash.d.ts"/>
/// <reference path="../lib/jquery/jquery.d.ts"/>
/// <reference path="../lib/bootstrap/bootstrap.d.ts"/>
/// <reference path="../lib/durandal/durandal.d.ts"/>

//adding all the references here in utils file so that other files need not include again
//due to some reason, all the files even if it does not import utils, still has these reference paths

declare var require: any;

export function square(num: number) {
    return Math.pow(num, 2);
}