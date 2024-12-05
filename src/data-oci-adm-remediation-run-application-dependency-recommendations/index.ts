// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#gav DataOciAdmRemediationRunApplicationDependencyRecommendations#gav}
  */
  readonly gav?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#id DataOciAdmRemediationRunApplicationDependencyRecommendations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#purl DataOciAdmRemediationRunApplicationDependencyRecommendations#purl}
  */
  readonly purl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#remediation_run_id DataOciAdmRemediationRunApplicationDependencyRecommendations#remediation_run_id}
  */
  readonly remediationRunId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#filter DataOciAdmRemediationRunApplicationDependencyRecommendations#filter}
  */
  readonly filter?: DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter[] | cdktf.IResolvable;
}
export interface DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems {
}

export function dataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsToTerraform(struct?: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsToHclTerraform(struct?: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_dependency_node_ids - computed: true, optional: false, required: false
  public get applicationDependencyNodeIds() {
    return this.getListAttribute('application_dependency_node_ids');
  }

  // gav - computed: true, optional: false, required: false
  public get gav() {
    return this.getStringAttribute('gav');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // purl - computed: true, optional: false, required: false
  public get purl() {
    return this.getStringAttribute('purl');
  }

  // recommended_gav - computed: true, optional: false, required: false
  public get recommendedGav() {
    return this.getStringAttribute('recommended_gav');
  }

  // recommended_purl - computed: true, optional: false, required: false
  public get recommendedPurl() {
    return this.getStringAttribute('recommended_purl');
  }
}

export class DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference {
    return new DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection {
}

export function dataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionToTerraform(struct?: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionToHclTerraform(struct?: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference {
    return new DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#name DataOciAdmRemediationRunApplicationDependencyRecommendations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#regex DataOciAdmRemediationRunApplicationDependencyRecommendations#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#values DataOciAdmRemediationRunApplicationDependencyRecommendations#values}
  */
  readonly values: string[];
}

export function dataOciAdmRemediationRunApplicationDependencyRecommendationsFilterToTerraform(struct?: DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter | cdktf.IResolvable): any {
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


export function dataOciAdmRemediationRunApplicationDependencyRecommendationsFilterToHclTerraform(struct?: DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference {
    return new DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations oci_adm_remediation_run_application_dependency_recommendations}
*/
export class DataOciAdmRemediationRunApplicationDependencyRecommendations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_adm_remediation_run_application_dependency_recommendations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAdmRemediationRunApplicationDependencyRecommendations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAdmRemediationRunApplicationDependencyRecommendations to import
  * @param importFromId The id of the existing DataOciAdmRemediationRunApplicationDependencyRecommendations that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAdmRemediationRunApplicationDependencyRecommendations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_adm_remediation_run_application_dependency_recommendations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_application_dependency_recommendations oci_adm_remediation_run_application_dependency_recommendations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAdmRemediationRunApplicationDependencyRecommendationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_adm_remediation_run_application_dependency_recommendations',
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
    this._gav = config.gav;
    this._id = config.id;
    this._purl = config.purl;
    this._remediationRunId = config.remediationRunId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_dependency_recommendation_collection - computed: true, optional: false, required: false
  private _applicationDependencyRecommendationCollection = new DataOciAdmRemediationRunApplicationDependencyRecommendationsApplicationDependencyRecommendationCollectionList(this, "application_dependency_recommendation_collection", false);
  public get applicationDependencyRecommendationCollection() {
    return this._applicationDependencyRecommendationCollection;
  }

  // gav - computed: false, optional: true, required: false
  private _gav?: string; 
  public get gav() {
    return this.getStringAttribute('gav');
  }
  public set gav(value: string) {
    this._gav = value;
  }
  public resetGav() {
    this._gav = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gavInput() {
    return this._gav;
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

  // purl - computed: false, optional: true, required: false
  private _purl?: string; 
  public get purl() {
    return this.getStringAttribute('purl');
  }
  public set purl(value: string) {
    this._purl = value;
  }
  public resetPurl() {
    this._purl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purlInput() {
    return this._purl;
  }

  // remediation_run_id - computed: false, optional: false, required: true
  private _remediationRunId?: string; 
  public get remediationRunId() {
    return this.getStringAttribute('remediation_run_id');
  }
  public set remediationRunId(value: string) {
    this._remediationRunId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationRunIdInput() {
    return this._remediationRunId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciAdmRemediationRunApplicationDependencyRecommendationsFilter[] | cdktf.IResolvable) {
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
      gav: cdktf.stringToTerraform(this._gav),
      id: cdktf.stringToTerraform(this._id),
      purl: cdktf.stringToTerraform(this._purl),
      remediation_run_id: cdktf.stringToTerraform(this._remediationRunId),
      filter: cdktf.listMapper(dataOciAdmRemediationRunApplicationDependencyRecommendationsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gav: {
        value: cdktf.stringToHclTerraform(this._gav),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purl: {
        value: cdktf.stringToHclTerraform(this._purl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remediation_run_id: {
        value: cdktf.stringToHclTerraform(this._remediationRunId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciAdmRemediationRunApplicationDependencyRecommendationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciAdmRemediationRunApplicationDependencyRecommendationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
