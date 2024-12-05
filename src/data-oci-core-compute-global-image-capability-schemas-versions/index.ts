// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#compute_global_image_capability_schema_id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#compute_global_image_capability_schema_id}
  */
  readonly computeGlobalImageCapabilitySchemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#display_name DataOciCoreComputeGlobalImageCapabilitySchemasVersions#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#id DataOciCoreComputeGlobalImageCapabilitySchemasVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#filter DataOciCoreComputeGlobalImageCapabilitySchemasVersions#filter}
  */
  readonly filter?: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions {
}

export function dataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsToTerraform(struct?: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_global_image_capability_schema_id - computed: true, optional: false, required: false
  public get computeGlobalImageCapabilitySchemaId() {
    return this.getStringAttribute('compute_global_image_capability_schema_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema_data - computed: true, optional: false, required: false
  private _schemaData = new cdktf.StringMap(this, "schema_data");
  public get schemaData() {
    return this._schemaData;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}

export class DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference {
    return new DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#name DataOciCoreComputeGlobalImageCapabilitySchemasVersions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#regex DataOciCoreComputeGlobalImageCapabilitySchemasVersions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions#values DataOciCoreComputeGlobalImageCapabilitySchemasVersions#values}
  */
  readonly values: string[];
}

export function dataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterToTerraform(struct?: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter | cdktf.IResolvable): any {
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

export class DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference {
    return new DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions oci_core_compute_global_image_capability_schemas_versions}
*/
export class DataOciCoreComputeGlobalImageCapabilitySchemasVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_compute_global_image_capability_schemas_versions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_global_image_capability_schemas_versions oci_core_compute_global_image_capability_schemas_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_global_image_capability_schemas_versions',
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
    this._computeGlobalImageCapabilitySchemaId = config.computeGlobalImageCapabilitySchemaId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_global_image_capability_schema_id - computed: false, optional: false, required: true
  private _computeGlobalImageCapabilitySchemaId?: string; 
  public get computeGlobalImageCapabilitySchemaId() {
    return this.getStringAttribute('compute_global_image_capability_schema_id');
  }
  public set computeGlobalImageCapabilitySchemaId(value: string) {
    this._computeGlobalImageCapabilitySchemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeGlobalImageCapabilitySchemaIdInput() {
    return this._computeGlobalImageCapabilitySchemaId;
  }

  // compute_global_image_capability_schema_versions - computed: true, optional: false, required: false
  private _computeGlobalImageCapabilitySchemaVersions = new DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersionsList(this, "compute_global_image_capability_schema_versions", false);
  public get computeGlobalImageCapabilitySchemaVersions() {
    return this._computeGlobalImageCapabilitySchemaVersions;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
  private _filter = new DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter[] | cdktf.IResolvable) {
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
      compute_global_image_capability_schema_id: cdktf.stringToTerraform(this._computeGlobalImageCapabilitySchemaId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}