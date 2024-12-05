// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeTargetDatabasesColumnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name DataOciDataSafeTargetDatabasesColumns#column_name}
  */
  readonly columnName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#column_name_contains DataOciDataSafeTargetDatabasesColumns#column_name_contains}
  */
  readonly columnNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#datatype DataOciDataSafeTargetDatabasesColumns#datatype}
  */
  readonly datatype?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#id DataOciDataSafeTargetDatabasesColumns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name DataOciDataSafeTargetDatabasesColumns#schema_name}
  */
  readonly schemaName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#schema_name_contains DataOciDataSafeTargetDatabasesColumns#schema_name_contains}
  */
  readonly schemaNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name DataOciDataSafeTargetDatabasesColumns#table_name}
  */
  readonly tableName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#table_name_contains DataOciDataSafeTargetDatabasesColumns#table_name_contains}
  */
  readonly tableNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#target_database_id DataOciDataSafeTargetDatabasesColumns#target_database_id}
  */
  readonly targetDatabaseId: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#filter DataOciDataSafeTargetDatabasesColumns#filter}
  */
  readonly filter?: DataOciDataSafeTargetDatabasesColumnsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeTargetDatabasesColumnsColumns {
}

export function dataOciDataSafeTargetDatabasesColumnsColumnsToTerraform(struct?: DataOciDataSafeTargetDatabasesColumnsColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeTargetDatabasesColumnsColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeTargetDatabasesColumnsColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // character_length - computed: true, optional: false, required: false
  public get characterLength() {
    return this.getNumberAttribute('character_length');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getStringAttribute('length');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getNumberAttribute('scale');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export class DataOciDataSafeTargetDatabasesColumnsColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference {
    return new DataOciDataSafeTargetDatabasesColumnsColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeTargetDatabasesColumnsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#name DataOciDataSafeTargetDatabasesColumns#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#regex DataOciDataSafeTargetDatabasesColumns#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns#values DataOciDataSafeTargetDatabasesColumns#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeTargetDatabasesColumnsFilterToTerraform(struct?: DataOciDataSafeTargetDatabasesColumnsFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeTargetDatabasesColumnsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeTargetDatabasesColumnsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeTargetDatabasesColumnsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeTargetDatabasesColumnsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeTargetDatabasesColumnsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeTargetDatabasesColumnsFilterOutputReference {
    return new DataOciDataSafeTargetDatabasesColumnsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns oci_data_safe_target_databases_columns}
*/
export class DataOciDataSafeTargetDatabasesColumns extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_target_databases_columns";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases_columns oci_data_safe_target_databases_columns} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeTargetDatabasesColumnsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeTargetDatabasesColumnsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_target_databases_columns',
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
    this._columnName = config.columnName;
    this._columnNameContains = config.columnNameContains;
    this._datatype = config.datatype;
    this._id = config.id;
    this._schemaName = config.schemaName;
    this._schemaNameContains = config.schemaNameContains;
    this._tableName = config.tableName;
    this._tableNameContains = config.tableNameContains;
    this._targetDatabaseId = config.targetDatabaseId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column_name - computed: false, optional: true, required: false
  private _columnName?: string[]; 
  public get columnName() {
    return this.getListAttribute('column_name');
  }
  public set columnName(value: string[]) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // column_name_contains - computed: false, optional: true, required: false
  private _columnNameContains?: string; 
  public get columnNameContains() {
    return this.getStringAttribute('column_name_contains');
  }
  public set columnNameContains(value: string) {
    this._columnNameContains = value;
  }
  public resetColumnNameContains() {
    this._columnNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameContainsInput() {
    return this._columnNameContains;
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataOciDataSafeTargetDatabasesColumnsColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // datatype - computed: false, optional: true, required: false
  private _datatype?: string[]; 
  public get datatype() {
    return this.getListAttribute('datatype');
  }
  public set datatype(value: string[]) {
    this._datatype = value;
  }
  public resetDatatype() {
    this._datatype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datatypeInput() {
    return this._datatype;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string[]; 
  public get schemaName() {
    return this.getListAttribute('schema_name');
  }
  public set schemaName(value: string[]) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // schema_name_contains - computed: false, optional: true, required: false
  private _schemaNameContains?: string; 
  public get schemaNameContains() {
    return this.getStringAttribute('schema_name_contains');
  }
  public set schemaNameContains(value: string) {
    this._schemaNameContains = value;
  }
  public resetSchemaNameContains() {
    this._schemaNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameContainsInput() {
    return this._schemaNameContains;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string[]; 
  public get tableName() {
    return this.getListAttribute('table_name');
  }
  public set tableName(value: string[]) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // table_name_contains - computed: false, optional: true, required: false
  private _tableNameContains?: string; 
  public get tableNameContains() {
    return this.getStringAttribute('table_name_contains');
  }
  public set tableNameContains(value: string) {
    this._tableNameContains = value;
  }
  public resetTableNameContains() {
    this._tableNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameContainsInput() {
    return this._tableNameContains;
  }

  // target_database_id - computed: false, optional: false, required: true
  private _targetDatabaseId?: string; 
  public get targetDatabaseId() {
    return this.getStringAttribute('target_database_id');
  }
  public set targetDatabaseId(value: string) {
    this._targetDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseIdInput() {
    return this._targetDatabaseId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeTargetDatabasesColumnsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeTargetDatabasesColumnsFilter[] | cdktf.IResolvable) {
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
      column_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._columnName),
      column_name_contains: cdktf.stringToTerraform(this._columnNameContains),
      datatype: cdktf.listMapper(cdktf.stringToTerraform, false)(this._datatype),
      id: cdktf.stringToTerraform(this._id),
      schema_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemaName),
      schema_name_contains: cdktf.stringToTerraform(this._schemaNameContains),
      table_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tableName),
      table_name_contains: cdktf.stringToTerraform(this._tableNameContains),
      target_database_id: cdktf.stringToTerraform(this._targetDatabaseId),
      filter: cdktf.listMapper(dataOciDataSafeTargetDatabasesColumnsFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}
