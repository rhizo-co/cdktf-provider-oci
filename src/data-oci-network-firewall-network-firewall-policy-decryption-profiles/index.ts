// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#display_name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#network_firewall_policy_id}
  */
  readonly networkFirewallPolicyId: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#filter DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#filter}
  */
  readonly filter?: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter[] | cdktf.IResolvable;
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems {
}

export function dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_certificate_extensions_restricted - computed: true, optional: false, required: false
  public get areCertificateExtensionsRestricted() {
    return this.getBooleanAttribute('are_certificate_extensions_restricted');
  }

  // is_auto_include_alt_name - computed: true, optional: false, required: false
  public get isAutoIncludeAltName() {
    return this.getBooleanAttribute('is_auto_include_alt_name');
  }

  // is_expired_certificate_blocked - computed: true, optional: false, required: false
  public get isExpiredCertificateBlocked() {
    return this.getBooleanAttribute('is_expired_certificate_blocked');
  }

  // is_out_of_capacity_blocked - computed: true, optional: false, required: false
  public get isOutOfCapacityBlocked() {
    return this.getBooleanAttribute('is_out_of_capacity_blocked');
  }

  // is_revocation_status_timeout_blocked - computed: true, optional: false, required: false
  public get isRevocationStatusTimeoutBlocked() {
    return this.getBooleanAttribute('is_revocation_status_timeout_blocked');
  }

  // is_unknown_revocation_status_blocked - computed: true, optional: false, required: false
  public get isUnknownRevocationStatusBlocked() {
    return this.getBooleanAttribute('is_unknown_revocation_status_blocked');
  }

  // is_unsupported_cipher_blocked - computed: true, optional: false, required: false
  public get isUnsupportedCipherBlocked() {
    return this.getBooleanAttribute('is_unsupported_cipher_blocked');
  }

  // is_unsupported_version_blocked - computed: true, optional: false, required: false
  public get isUnsupportedVersionBlocked() {
    return this.getBooleanAttribute('is_unsupported_version_blocked');
  }

  // is_untrusted_issuer_blocked - computed: true, optional: false, required: false
  public get isUntrustedIssuerBlocked() {
    return this.getBooleanAttribute('is_untrusted_issuer_blocked');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_firewall_policy_id - computed: true, optional: false, required: false
  public get networkFirewallPolicyId() {
    return this.getStringAttribute('network_firewall_policy_id');
  }

  // parent_resource_id - computed: true, optional: false, required: false
  public get parentResourceId() {
    return this.getStringAttribute('parent_resource_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection {
}

export function dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#name DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#regex DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles#values DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles#values}
  */
  readonly values: string[];
}

export function dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterToTerraform(struct?: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter | cdktf.IResolvable): any {
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

export class DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference {
    return new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles oci_network_firewall_network_firewall_policy_decryption_profiles}
*/
export class DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_firewall_network_firewall_policy_decryption_profiles";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_decryption_profiles oci_network_firewall_network_firewall_policy_decryption_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_firewall_network_firewall_policy_decryption_profiles',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._networkFirewallPolicyId = config.networkFirewallPolicyId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // decryption_profile_summary_collection - computed: true, optional: false, required: false
  private _decryptionProfileSummaryCollection = new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollectionList(this, "decryption_profile_summary_collection", false);
  public get decryptionProfileSummaryCollection() {
    return this._decryptionProfileSummaryCollection;
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

  // network_firewall_policy_id - computed: false, optional: false, required: true
  private _networkFirewallPolicyId?: string; 
  public get networkFirewallPolicyId() {
    return this.getStringAttribute('network_firewall_policy_id');
  }
  public set networkFirewallPolicyId(value: string) {
    this._networkFirewallPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFirewallPolicyIdInput() {
    return this._networkFirewallPolicyId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      network_firewall_policy_id: cdktf.stringToTerraform(this._networkFirewallPolicyId),
      filter: cdktf.listMapper(dataOciNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterToTerraform, true)(this._filter.internalValue),
    };
  }
}