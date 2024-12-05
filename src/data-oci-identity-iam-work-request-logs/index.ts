// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityIamWorkRequestLogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_logs#iam_work_request_id DataOciIdentityIamWorkRequestLogs#iam_work_request_id}
  */
  readonly iamWorkRequestId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_logs#id DataOciIdentityIamWorkRequestLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_logs#filter DataOciIdentityIamWorkRequestLogs#filter}
  */
  readonly filter?: DataOciIdentityIamWorkRequestLogsFilter[] | cdktf.IResolvable;
}
export interface DataOciIdentityIamWorkRequestLogsIamWorkRequestLogs {
}

export function dataOciIdentityIamWorkRequestLogsIamWorkRequestLogsToTerraform(struct?: DataOciIdentityIamWorkRequestLogsIamWorkRequestLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciIdentityIamWorkRequestLogsIamWorkRequestLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityIamWorkRequestLogsIamWorkRequestLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIdentityIamWorkRequestLogsIamWorkRequestLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class DataOciIdentityIamWorkRequestLogsIamWorkRequestLogsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIdentityIamWorkRequestLogsIamWorkRequestLogsOutputReference {
    return new DataOciIdentityIamWorkRequestLogsIamWorkRequestLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIdentityIamWorkRequestLogsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_logs#name DataOciIdentityIamWorkRequestLogs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_logs#regex DataOciIdentityIamWorkRequestLogs#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_logs#values DataOciIdentityIamWorkRequestLogs#values}
  */
  readonly values: string[];
}

export function dataOciIdentityIamWorkRequestLogsFilterToTerraform(struct?: DataOciIdentityIamWorkRequestLogsFilter | cdktf.IResolvable): any {
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

export class DataOciIdentityIamWorkRequestLogsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIdentityIamWorkRequestLogsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciIdentityIamWorkRequestLogsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciIdentityIamWorkRequestLogsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciIdentityIamWorkRequestLogsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciIdentityIamWorkRequestLogsFilterOutputReference {
    return new DataOciIdentityIamWorkRequestLogsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_logs oci_identity_iam_work_request_logs}
*/
export class DataOciIdentityIamWorkRequestLogs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_iam_work_request_logs";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_logs oci_identity_iam_work_request_logs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityIamWorkRequestLogsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityIamWorkRequestLogsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_iam_work_request_logs',
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
    this._iamWorkRequestId = config.iamWorkRequestId;
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // iam_work_request_id - computed: false, optional: false, required: true
  private _iamWorkRequestId?: string; 
  public get iamWorkRequestId() {
    return this.getStringAttribute('iam_work_request_id');
  }
  public set iamWorkRequestId(value: string) {
    this._iamWorkRequestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamWorkRequestIdInput() {
    return this._iamWorkRequestId;
  }

  // iam_work_request_logs - computed: true, optional: false, required: false
  private _iamWorkRequestLogs = new DataOciIdentityIamWorkRequestLogsIamWorkRequestLogsList(this, "iam_work_request_logs", false);
  public get iamWorkRequestLogs() {
    return this._iamWorkRequestLogs;
  }

  // id - computed: true, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciIdentityIamWorkRequestLogsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciIdentityIamWorkRequestLogsFilter[] | cdktf.IResolvable) {
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
      iam_work_request_id: cdktf.stringToTerraform(this._iamWorkRequestId),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataOciIdentityIamWorkRequestLogsFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}
