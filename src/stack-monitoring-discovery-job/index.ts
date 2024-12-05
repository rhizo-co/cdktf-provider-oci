// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackMonitoringDiscoveryJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#compartment_id StackMonitoringDiscoveryJob#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#defined_tags StackMonitoringDiscoveryJob#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_client StackMonitoringDiscoveryJob#discovery_client}
  */
  readonly discoveryClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_type StackMonitoringDiscoveryJob#discovery_type}
  */
  readonly discoveryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#freeform_tags StackMonitoringDiscoveryJob#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#id StackMonitoringDiscoveryJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#should_propagate_tags_to_discovered_resources StackMonitoringDiscoveryJob#should_propagate_tags_to_discovered_resources}
  */
  readonly shouldPropagateTagsToDiscoveredResources?: boolean | cdktf.IResolvable;
  /**
  * discovery_details block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_details StackMonitoringDiscoveryJob#discovery_details}
  */
  readonly discoveryDetails: StackMonitoringDiscoveryJobDiscoveryDetails;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#timeouts StackMonitoringDiscoveryJob#timeouts}
  */
  readonly timeouts?: StackMonitoringDiscoveryJobTimeouts;
}
export interface StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}
  */
  readonly propertiesMap?: { [key: string]: string };
}

export function stackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesToTerraform(struct?: StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference | StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.propertiesMap),
  }
}

export class StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertiesMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesMap = this._propertiesMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propertiesMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propertiesMap = value.propertiesMap;
    }
  }

  // properties_map - computed: false, optional: true, required: false
  private _propertiesMap?: { [key: string]: string }; 
  public get propertiesMap() {
    return this.getStringMapAttribute('properties_map');
  }
  public set propertiesMap(value: { [key: string]: string }) {
    this._propertiesMap = value;
  }
  public resetPropertiesMap() {
    this._propertiesMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesMapInput() {
    return this._propertiesMap;
  }
}
export interface StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credential_name StackMonitoringDiscoveryJob#credential_name}
  */
  readonly credentialName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credential_type StackMonitoringDiscoveryJob#credential_type}
  */
  readonly credentialType: string;
  /**
  * properties block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties StackMonitoringDiscoveryJob#properties}
  */
  readonly properties: StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties;
}

export function stackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsToTerraform(struct?: StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    properties: stackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesToTerraform(struct!.properties),
  }
}

export class StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialName = undefined;
      this._credentialType = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialName = value.credentialName;
      this._credentialType = value.credentialType;
      this._properties.internalValue = value.properties;
    }
  }

  // credential_name - computed: false, optional: false, required: true
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList extends cdktf.ComplexList {
  public internalValue? : StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems[] | cdktf.IResolvable

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
  public get(index: number): StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference {
    return new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringDiscoveryJobDiscoveryDetailsCredentials {
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#items StackMonitoringDiscoveryJob#items}
  */
  readonly items: StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems[] | cdktf.IResolvable;
}

export function stackMonitoringDiscoveryJobDiscoveryDetailsCredentialsToTerraform(struct?: StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference | StackMonitoringDiscoveryJobDiscoveryDetailsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(stackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsToTerraform, true)(struct!.items),
  }
}

export class StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringDiscoveryJobDiscoveryDetailsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringDiscoveryJobDiscoveryDetailsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface StackMonitoringDiscoveryJobDiscoveryDetailsProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}
  */
  readonly propertiesMap?: { [key: string]: string };
}

export function stackMonitoringDiscoveryJobDiscoveryDetailsPropertiesToTerraform(struct?: StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference | StackMonitoringDiscoveryJobDiscoveryDetailsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.propertiesMap),
  }
}

export class StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringDiscoveryJobDiscoveryDetailsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertiesMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesMap = this._propertiesMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringDiscoveryJobDiscoveryDetailsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propertiesMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propertiesMap = value.propertiesMap;
    }
  }

  // properties_map - computed: false, optional: true, required: false
  private _propertiesMap?: { [key: string]: string }; 
  public get propertiesMap() {
    return this.getStringMapAttribute('properties_map');
  }
  public set propertiesMap(value: { [key: string]: string }) {
    this._propertiesMap = value;
  }
  public resetPropertiesMap() {
    this._propertiesMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesMapInput() {
    return this._propertiesMap;
  }
}
export interface StackMonitoringDiscoveryJobDiscoveryDetailsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}
  */
  readonly propertiesMap?: { [key: string]: string };
}

export function stackMonitoringDiscoveryJobDiscoveryDetailsTagsToTerraform(struct?: StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference | StackMonitoringDiscoveryJobDiscoveryDetailsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.propertiesMap),
  }
}

export class StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringDiscoveryJobDiscoveryDetailsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertiesMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesMap = this._propertiesMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringDiscoveryJobDiscoveryDetailsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propertiesMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propertiesMap = value.propertiesMap;
    }
  }

  // properties_map - computed: false, optional: true, required: false
  private _propertiesMap?: { [key: string]: string }; 
  public get propertiesMap() {
    return this.getStringMapAttribute('properties_map');
  }
  public set propertiesMap(value: { [key: string]: string }) {
    this._propertiesMap = value;
  }
  public resetPropertiesMap() {
    this._propertiesMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesMapInput() {
    return this._propertiesMap;
  }
}
export interface StackMonitoringDiscoveryJobDiscoveryDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#agent_id StackMonitoringDiscoveryJob#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#license StackMonitoringDiscoveryJob#license}
  */
  readonly license?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#resource_name StackMonitoringDiscoveryJob#resource_name}
  */
  readonly resourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#resource_type StackMonitoringDiscoveryJob#resource_type}
  */
  readonly resourceType: string;
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credentials StackMonitoringDiscoveryJob#credentials}
  */
  readonly credentials?: StackMonitoringDiscoveryJobDiscoveryDetailsCredentials;
  /**
  * properties block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties StackMonitoringDiscoveryJob#properties}
  */
  readonly properties: StackMonitoringDiscoveryJobDiscoveryDetailsProperties;
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#tags StackMonitoringDiscoveryJob#tags}
  */
  readonly tags?: StackMonitoringDiscoveryJobDiscoveryDetailsTags;
}

export function stackMonitoringDiscoveryJobDiscoveryDetailsToTerraform(struct?: StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference | StackMonitoringDiscoveryJobDiscoveryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_id: cdktf.stringToTerraform(struct!.agentId),
    license: cdktf.stringToTerraform(struct!.license),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    credentials: stackMonitoringDiscoveryJobDiscoveryDetailsCredentialsToTerraform(struct!.credentials),
    properties: stackMonitoringDiscoveryJobDiscoveryDetailsPropertiesToTerraform(struct!.properties),
    tags: stackMonitoringDiscoveryJobDiscoveryDetailsTagsToTerraform(struct!.tags),
  }
}

export class StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringDiscoveryJobDiscoveryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentId = this._agentId;
    }
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringDiscoveryJobDiscoveryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentId = undefined;
      this._license = undefined;
      this._resourceName = undefined;
      this._resourceType = undefined;
      this._credentials.internalValue = undefined;
      this._properties.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentId = value.agentId;
      this._license = value.license;
      this._resourceName = value.resourceName;
      this._resourceType = value.resourceType;
      this._credentials.internalValue = value.credentials;
      this._properties.internalValue = value.properties;
      this._tags.internalValue = value.tags;
    }
  }

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // license - computed: true, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: StackMonitoringDiscoveryJobDiscoveryDetailsCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: StackMonitoringDiscoveryJobDiscoveryDetailsProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: StackMonitoringDiscoveryJobDiscoveryDetailsTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface StackMonitoringDiscoveryJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#create StackMonitoringDiscoveryJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#delete StackMonitoringDiscoveryJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#update StackMonitoringDiscoveryJob#update}
  */
  readonly update?: string;
}

export function stackMonitoringDiscoveryJobTimeoutsToTerraform(struct?: StackMonitoringDiscoveryJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class StackMonitoringDiscoveryJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StackMonitoringDiscoveryJobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringDiscoveryJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job oci_stack_monitoring_discovery_job}
*/
export class StackMonitoringDiscoveryJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_discovery_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job oci_stack_monitoring_discovery_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackMonitoringDiscoveryJobConfig
  */
  public constructor(scope: Construct, id: string, config: StackMonitoringDiscoveryJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_discovery_job',
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
    this._definedTags = config.definedTags;
    this._discoveryClient = config.discoveryClient;
    this._discoveryType = config.discoveryType;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._shouldPropagateTagsToDiscoveredResources = config.shouldPropagateTagsToDiscoveredResources;
    this._discoveryDetails.internalValue = config.discoveryDetails;
    this._timeouts.internalValue = config.timeouts;
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

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // discovery_client - computed: true, optional: true, required: false
  private _discoveryClient?: string; 
  public get discoveryClient() {
    return this.getStringAttribute('discovery_client');
  }
  public set discoveryClient(value: string) {
    this._discoveryClient = value;
  }
  public resetDiscoveryClient() {
    this._discoveryClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryClientInput() {
    return this._discoveryClient;
  }

  // discovery_type - computed: false, optional: true, required: false
  private _discoveryType?: string; 
  public get discoveryType() {
    return this.getStringAttribute('discovery_type');
  }
  public set discoveryType(value: string) {
    this._discoveryType = value;
  }
  public resetDiscoveryType() {
    this._discoveryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryTypeInput() {
    return this._discoveryType;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // should_propagate_tags_to_discovered_resources - computed: true, optional: true, required: false
  private _shouldPropagateTagsToDiscoveredResources?: boolean | cdktf.IResolvable; 
  public get shouldPropagateTagsToDiscoveredResources() {
    return this.getBooleanAttribute('should_propagate_tags_to_discovered_resources');
  }
  public set shouldPropagateTagsToDiscoveredResources(value: boolean | cdktf.IResolvable) {
    this._shouldPropagateTagsToDiscoveredResources = value;
  }
  public resetShouldPropagateTagsToDiscoveredResources() {
    this._shouldPropagateTagsToDiscoveredResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldPropagateTagsToDiscoveredResourcesInput() {
    return this._shouldPropagateTagsToDiscoveredResources;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // discovery_details - computed: false, optional: false, required: true
  private _discoveryDetails = new StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference(this, "discovery_details");
  public get discoveryDetails() {
    return this._discoveryDetails;
  }
  public putDiscoveryDetails(value: StackMonitoringDiscoveryJobDiscoveryDetails) {
    this._discoveryDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryDetailsInput() {
    return this._discoveryDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StackMonitoringDiscoveryJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StackMonitoringDiscoveryJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      discovery_client: cdktf.stringToTerraform(this._discoveryClient),
      discovery_type: cdktf.stringToTerraform(this._discoveryType),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      should_propagate_tags_to_discovered_resources: cdktf.booleanToTerraform(this._shouldPropagateTagsToDiscoveredResources),
      discovery_details: stackMonitoringDiscoveryJobDiscoveryDetailsToTerraform(this._discoveryDetails.internalValue),
      timeouts: stackMonitoringDiscoveryJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}