// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_rrset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDnsRrsetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_rrset#compartment_id DataOciDnsRrset#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_rrset#domain DataOciDnsRrset#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_rrset#rtype DataOciDnsRrset#rtype}
  */
  readonly rtype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_rrset#scope DataOciDnsRrset#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_rrset#view_id DataOciDnsRrset#view_id}
  */
  readonly viewId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_rrset#zone_name_or_id DataOciDnsRrset#zone_name_or_id}
  */
  readonly zoneNameOrId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_rrset#zone_version DataOciDnsRrset#zone_version}
  */
  readonly zoneVersion?: string;
}
export interface DataOciDnsRrsetItems {
}

export function dataOciDnsRrsetItemsToTerraform(struct?: DataOciDnsRrsetItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciDnsRrsetItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDnsRrsetItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDnsRrsetItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // is_protected - computed: true, optional: false, required: false
  public get isProtected() {
    return this.getBooleanAttribute('is_protected');
  }

  // rdata - computed: true, optional: false, required: false
  public get rdata() {
    return this.getStringAttribute('rdata');
  }

  // record_hash - computed: true, optional: false, required: false
  public get recordHash() {
    return this.getStringAttribute('record_hash');
  }

  // rrset_version - computed: true, optional: false, required: false
  public get rrsetVersion() {
    return this.getStringAttribute('rrset_version');
  }

  // rtype - computed: true, optional: false, required: false
  public get rtype() {
    return this.getStringAttribute('rtype');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

export class DataOciDnsRrsetItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDnsRrsetItemsOutputReference {
    return new DataOciDnsRrsetItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_rrset oci_dns_rrset}
*/
export class DataOciDnsRrset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dns_rrset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_rrset oci_dns_rrset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDnsRrsetConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDnsRrsetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_rrset',
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
    this._domain = config.domain;
    this._rtype = config.rtype;
    this._scope = config.scope;
    this._viewId = config.viewId;
    this._zoneNameOrId = config.zoneNameOrId;
    this._zoneVersion = config.zoneVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDnsRrsetItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // rtype - computed: false, optional: false, required: true
  private _rtype?: string; 
  public get rtype() {
    return this.getStringAttribute('rtype');
  }
  public set rtype(value: string) {
    this._rtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rtypeInput() {
    return this._rtype;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // view_id - computed: false, optional: true, required: false
  private _viewId?: string; 
  public get viewId() {
    return this.getStringAttribute('view_id');
  }
  public set viewId(value: string) {
    this._viewId = value;
  }
  public resetViewId() {
    this._viewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewIdInput() {
    return this._viewId;
  }

  // zone_name_or_id - computed: false, optional: false, required: true
  private _zoneNameOrId?: string; 
  public get zoneNameOrId() {
    return this.getStringAttribute('zone_name_or_id');
  }
  public set zoneNameOrId(value: string) {
    this._zoneNameOrId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameOrIdInput() {
    return this._zoneNameOrId;
  }

  // zone_version - computed: false, optional: true, required: false
  private _zoneVersion?: string; 
  public get zoneVersion() {
    return this.getStringAttribute('zone_version');
  }
  public set zoneVersion(value: string) {
    this._zoneVersion = value;
  }
  public resetZoneVersion() {
    this._zoneVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneVersionInput() {
    return this._zoneVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      domain: cdktf.stringToTerraform(this._domain),
      rtype: cdktf.stringToTerraform(this._rtype),
      scope: cdktf.stringToTerraform(this._scope),
      view_id: cdktf.stringToTerraform(this._viewId),
      zone_name_or_id: cdktf.stringToTerraform(this._zoneNameOrId),
      zone_version: cdktf.stringToTerraform(this._zoneVersion),
    };
  }
}
