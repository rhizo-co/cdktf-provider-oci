// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMeteringComputationUsageCarbonEmissionsQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_query#usage_carbon_emissions_query_id DataOciMeteringComputationUsageCarbonEmissionsQuery#usage_carbon_emissions_query_id}
  */
  readonly usageCarbonEmissionsQueryId: string;
}
export interface DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi {
}

export function dataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiToTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiToHclTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // graph - computed: true, optional: false, required: false
  public get graph() {
    return this.getStringAttribute('graph');
  }

  // is_cumulative_graph - computed: true, optional: false, required: false
  public get isCumulativeGraph() {
    return this.getBooleanAttribute('is_cumulative_graph');
  }
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference {
    return new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag {
}

export function dataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagToTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagToHclTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference {
    return new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery {
}

export function dataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryToTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryToHclTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_depth - computed: true, optional: false, required: false
  public get compartmentDepth() {
    return this.getNumberAttribute('compartment_depth');
  }

  // date_range_name - computed: true, optional: false, required: false
  public get dateRangeName() {
    return this.getStringAttribute('date_range_name');
  }

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getListAttribute('group_by');
  }

  // group_by_tag - computed: true, optional: false, required: false
  private _groupByTag = new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList(this, "group_by_tag", false);
  public get groupByTag() {
    return this._groupByTag;
  }

  // is_aggregate_by_time - computed: true, optional: false, required: false
  public get isAggregateByTime() {
    return this.getBooleanAttribute('is_aggregate_by_time');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // time_usage_ended - computed: true, optional: false, required: false
  public get timeUsageEnded() {
    return this.getStringAttribute('time_usage_ended');
  }

  // time_usage_started - computed: true, optional: false, required: false
  public get timeUsageStarted() {
    return this.getStringAttribute('time_usage_started');
  }

  // usage_carbon_emissions_query_filter - computed: true, optional: false, required: false
  public get usageCarbonEmissionsQueryFilter() {
    return this.getStringAttribute('usage_carbon_emissions_query_filter');
  }
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference {
    return new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition {
}

export function dataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionToTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionToHclTerraform(struct?: DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost_analysis_ui - computed: true, optional: false, required: false
  private _costAnalysisUi = new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiList(this, "cost_analysis_ui", false);
  public get costAnalysisUi() {
    return this._costAnalysisUi;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // report_query - computed: true, optional: false, required: false
  private _reportQuery = new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryList(this, "report_query", false);
  public get reportQuery() {
    return this._reportQuery;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference {
    return new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_query oci_metering_computation_usage_carbon_emissions_query}
*/
export class DataOciMeteringComputationUsageCarbonEmissionsQuery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_metering_computation_usage_carbon_emissions_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMeteringComputationUsageCarbonEmissionsQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMeteringComputationUsageCarbonEmissionsQuery to import
  * @param importFromId The id of the existing DataOciMeteringComputationUsageCarbonEmissionsQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMeteringComputationUsageCarbonEmissionsQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_metering_computation_usage_carbon_emissions_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_query oci_metering_computation_usage_carbon_emissions_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMeteringComputationUsageCarbonEmissionsQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMeteringComputationUsageCarbonEmissionsQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_usage_carbon_emissions_query',
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
    this._usageCarbonEmissionsQueryId = config.usageCarbonEmissionsQueryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // query_definition - computed: true, optional: false, required: false
  private _queryDefinition = new DataOciMeteringComputationUsageCarbonEmissionsQueryQueryDefinitionList(this, "query_definition", false);
  public get queryDefinition() {
    return this._queryDefinition;
  }

  // usage_carbon_emissions_query_id - computed: false, optional: false, required: true
  private _usageCarbonEmissionsQueryId?: string; 
  public get usageCarbonEmissionsQueryId() {
    return this.getStringAttribute('usage_carbon_emissions_query_id');
  }
  public set usageCarbonEmissionsQueryId(value: string) {
    this._usageCarbonEmissionsQueryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageCarbonEmissionsQueryIdInput() {
    return this._usageCarbonEmissionsQueryId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      usage_carbon_emissions_query_id: cdktf.stringToTerraform(this._usageCarbonEmissionsQueryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      usage_carbon_emissions_query_id: {
        value: cdktf.stringToHclTerraform(this._usageCarbonEmissionsQueryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
