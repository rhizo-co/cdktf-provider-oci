// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#availability_domain DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compartment_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_capacity_topology_id}
  */
  readonly computeCapacityTopologyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_hpc_island_id}
  */
  readonly computeHpcIslandId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_local_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_local_block_id}
  */
  readonly computeLocalBlockId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#compute_network_block_id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#compute_network_block_id}
  */
  readonly computeNetworkBlockId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#id DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#filter DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#filter}
  */
  readonly filter?: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems {
}

export function dataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsToTerraform(struct?: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_capacity_topology_id - computed: true, optional: false, required: false
  public get computeCapacityTopologyId() {
    return this.getStringAttribute('compute_capacity_topology_id');
  }

  // compute_hpc_island_id - computed: true, optional: false, required: false
  public get computeHpcIslandId() {
    return this.getStringAttribute('compute_hpc_island_id');
  }

  // compute_local_block_id - computed: true, optional: false, required: false
  public get computeLocalBlockId() {
    return this.getStringAttribute('compute_local_block_id');
  }

  // compute_network_block_id - computed: true, optional: false, required: false
  public get computeNetworkBlockId() {
    return this.getStringAttribute('compute_network_block_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_shape - computed: true, optional: false, required: false
  public get instanceShape() {
    return this.getStringAttribute('instance_shape');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

export class DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference {
    return new DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection {
}

export function dataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionToTerraform(struct?: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference {
    return new DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#name DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#regex DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts#values DataOciCoreComputeCapacityTopologyComputeBareMetalHosts#values}
  */
  readonly values: string[];
}

export function dataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterToTerraform(struct?: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter | cdktf.IResolvable): any {
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

export class DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference {
    return new DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts oci_core_compute_capacity_topology_compute_bare_metal_hosts}
*/
export class DataOciCoreComputeCapacityTopologyComputeBareMetalHosts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_compute_capacity_topology_compute_bare_metal_hosts";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_bare_metal_hosts oci_core_compute_capacity_topology_compute_bare_metal_hosts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_capacity_topology_compute_bare_metal_hosts',
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
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._computeCapacityTopologyId = config.computeCapacityTopologyId;
    this._computeHpcIslandId = config.computeHpcIslandId;
    this._computeLocalBlockId = config.computeLocalBlockId;
    this._computeNetworkBlockId = config.computeNetworkBlockId;
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compute_bare_metal_host_collection - computed: true, optional: false, required: false
  private _computeBareMetalHostCollection = new DataOciCoreComputeCapacityTopologyComputeBareMetalHostsComputeBareMetalHostCollectionList(this, "compute_bare_metal_host_collection", false);
  public get computeBareMetalHostCollection() {
    return this._computeBareMetalHostCollection;
  }

  // compute_capacity_topology_id - computed: false, optional: false, required: true
  private _computeCapacityTopologyId?: string; 
  public get computeCapacityTopologyId() {
    return this.getStringAttribute('compute_capacity_topology_id');
  }
  public set computeCapacityTopologyId(value: string) {
    this._computeCapacityTopologyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCapacityTopologyIdInput() {
    return this._computeCapacityTopologyId;
  }

  // compute_hpc_island_id - computed: false, optional: true, required: false
  private _computeHpcIslandId?: string; 
  public get computeHpcIslandId() {
    return this.getStringAttribute('compute_hpc_island_id');
  }
  public set computeHpcIslandId(value: string) {
    this._computeHpcIslandId = value;
  }
  public resetComputeHpcIslandId() {
    this._computeHpcIslandId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeHpcIslandIdInput() {
    return this._computeHpcIslandId;
  }

  // compute_local_block_id - computed: false, optional: true, required: false
  private _computeLocalBlockId?: string; 
  public get computeLocalBlockId() {
    return this.getStringAttribute('compute_local_block_id');
  }
  public set computeLocalBlockId(value: string) {
    this._computeLocalBlockId = value;
  }
  public resetComputeLocalBlockId() {
    this._computeLocalBlockId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeLocalBlockIdInput() {
    return this._computeLocalBlockId;
  }

  // compute_network_block_id - computed: false, optional: true, required: false
  private _computeNetworkBlockId?: string; 
  public get computeNetworkBlockId() {
    return this.getStringAttribute('compute_network_block_id');
  }
  public set computeNetworkBlockId(value: string) {
    this._computeNetworkBlockId = value;
  }
  public resetComputeNetworkBlockId() {
    this._computeNetworkBlockId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeNetworkBlockIdInput() {
    return this._computeNetworkBlockId;
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
  private _filter = new DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilter[] | cdktf.IResolvable) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compute_capacity_topology_id: cdktf.stringToTerraform(this._computeCapacityTopologyId),
      compute_hpc_island_id: cdktf.stringToTerraform(this._computeHpcIslandId),
      compute_local_block_id: cdktf.stringToTerraform(this._computeLocalBlockId),
      compute_network_block_id: cdktf.stringToTerraform(this._computeNetworkBlockId),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataOciCoreComputeCapacityTopologyComputeBareMetalHostsFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}
