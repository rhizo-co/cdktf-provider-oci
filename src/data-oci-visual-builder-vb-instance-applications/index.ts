// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciVisualBuilderVbInstanceApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#id DataOciVisualBuilderVbInstanceApplications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#idcs_open_id DataOciVisualBuilderVbInstanceApplications#idcs_open_id}
  */
  readonly idcsOpenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#vb_instance_id DataOciVisualBuilderVbInstanceApplications#vb_instance_id}
  */
  readonly vbInstanceId: string;
}
export interface DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems {
}

export function dataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsToTerraform(struct?: DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference {
    return new DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection {
}

export function dataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionToTerraform(struct?: DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference {
    return new DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications oci_visual_builder_vb_instance_applications}
*/
export class DataOciVisualBuilderVbInstanceApplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_visual_builder_vb_instance_applications";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications oci_visual_builder_vb_instance_applications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciVisualBuilderVbInstanceApplicationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciVisualBuilderVbInstanceApplicationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_visual_builder_vb_instance_applications',
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
    this._id = config.id;
    this._idcsOpenId = config.idcsOpenId;
    this._vbInstanceId = config.vbInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_summary_collection - computed: true, optional: false, required: false
  private _applicationSummaryCollection = new DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList(this, "application_summary_collection", false);
  public get applicationSummaryCollection() {
    return this._applicationSummaryCollection;
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

  // idcs_open_id - computed: false, optional: true, required: false
  private _idcsOpenId?: string; 
  public get idcsOpenId() {
    return this.getStringAttribute('idcs_open_id');
  }
  public set idcsOpenId(value: string) {
    this._idcsOpenId = value;
  }
  public resetIdcsOpenId() {
    this._idcsOpenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsOpenIdInput() {
    return this._idcsOpenId;
  }

  // vb_instance_id - computed: false, optional: false, required: true
  private _vbInstanceId?: string; 
  public get vbInstanceId() {
    return this.getStringAttribute('vb_instance_id');
  }
  public set vbInstanceId(value: string) {
    this._vbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vbInstanceIdInput() {
    return this._vbInstanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      idcs_open_id: cdktf.stringToTerraform(this._idcsOpenId),
      vb_instance_id: cdktf.stringToTerraform(this._vbInstanceId),
    };
  }
}
