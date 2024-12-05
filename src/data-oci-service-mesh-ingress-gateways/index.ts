// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciServiceMeshIngressGatewaysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#compartment_id DataOciServiceMeshIngressGateways#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#id DataOciServiceMeshIngressGateways#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#mesh_id DataOciServiceMeshIngressGateways#mesh_id}
  */
  readonly meshId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#state DataOciServiceMeshIngressGateways#state}
  */
  readonly state?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#filter DataOciServiceMeshIngressGateways#filter}
  */
  readonly filter?: DataOciServiceMeshIngressGatewaysFilter[] | cdktf.IResolvable;
}
export interface DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging {
}

export function dataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingToTerraform(struct?: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference {
    return new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle {
}

export function dataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleToTerraform(struct?: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_bundle_id - computed: true, optional: false, required: false
  public get caBundleId() {
    return this.getStringAttribute('ca_bundle_id');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference {
    return new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation {
}

export function dataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationToTerraform(struct?: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subject_alternate_names - computed: true, optional: false, required: false
  public get subjectAlternateNames() {
    return this.getListAttribute('subject_alternate_names');
  }

  // trusted_ca_bundle - computed: true, optional: false, required: false
  private _trustedCaBundle = new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList(this, "trusted_ca_bundle", false);
  public get trustedCaBundle() {
    return this._trustedCaBundle;
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference {
    return new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate {
}

export function dataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateToTerraform(struct?: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference {
    return new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls {
}

export function dataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsToTerraform(struct?: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_validation - computed: true, optional: false, required: false
  private _clientValidation = new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList(this, "client_validation", false);
  public get clientValidation() {
    return this._clientValidation;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // server_certificate - computed: true, optional: false, required: false
  private _serverCertificate = new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList(this, "server_certificate", false);
  public get serverCertificate() {
    return this._serverCertificate;
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference {
    return new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners {
}

export function dataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersToTerraform(struct?: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference {
    return new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts {
}

export function dataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsToTerraform(struct?: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // listeners - computed: true, optional: false, required: false
  private _listeners = new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference {
    return new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls {
}

export function dataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsToTerraform(struct?: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // maximum_validity - computed: true, optional: false, required: false
  public get maximumValidity() {
    return this.getNumberAttribute('maximum_validity');
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference {
    return new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems {
}

export function dataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsToTerraform(struct?: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_logging - computed: true, optional: false, required: false
  private _accessLogging = new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList(this, "access_logging", false);
  public get accessLogging() {
    return this._accessLogging;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // mesh_id - computed: true, optional: false, required: false
  public get meshId() {
    return this.getStringAttribute('mesh_id');
  }

  // mtls - computed: true, optional: false, required: false
  private _mtls = new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList(this, "mtls", false);
  public get mtls() {
    return this._mtls;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference {
    return new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewaysIngressGatewayCollection {
}

export function dataOciServiceMeshIngressGatewaysIngressGatewayCollectionToTerraform(struct?: DataOciServiceMeshIngressGatewaysIngressGatewayCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewaysIngressGatewayCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewaysIngressGatewayCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference {
    return new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceMeshIngressGatewaysFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#regex DataOciServiceMeshIngressGateways#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#values DataOciServiceMeshIngressGateways#values}
  */
  readonly values: string[];
}

export function dataOciServiceMeshIngressGatewaysFilterToTerraform(struct?: DataOciServiceMeshIngressGatewaysFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class DataOciServiceMeshIngressGatewaysFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciServiceMeshIngressGatewaysFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceMeshIngressGatewaysFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciServiceMeshIngressGatewaysFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciServiceMeshIngressGatewaysFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciServiceMeshIngressGatewaysFilterOutputReference {
    return new DataOciServiceMeshIngressGatewaysFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways oci_service_mesh_ingress_gateways}
*/
export class DataOciServiceMeshIngressGateways extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_mesh_ingress_gateways";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways oci_service_mesh_ingress_gateways} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciServiceMeshIngressGatewaysConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciServiceMeshIngressGatewaysConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_mesh_ingress_gateways',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '6.18.0',
        providerVersionConstraint: '~> 6.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._meshId = config.meshId;
    this._name = config.name;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ingress_gateway_collection - computed: true, optional: false, required: false
  private _ingressGatewayCollection = new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList(this, "ingress_gateway_collection", false);
  public get ingressGatewayCollection() {
    return this._ingressGatewayCollection;
  }

  // mesh_id - computed: false, optional: true, required: false
  private _meshId?: string; 
  public get meshId() {
    return this.getStringAttribute('mesh_id');
  }
  public set meshId(value: string) {
    this._meshId = value;
  }
  public resetMeshId() {
    this._meshId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshIdInput() {
    return this._meshId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciServiceMeshIngressGatewaysFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciServiceMeshIngressGatewaysFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      mesh_id: cdktf.stringToTerraform(this._meshId),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciServiceMeshIngressGatewaysFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}
