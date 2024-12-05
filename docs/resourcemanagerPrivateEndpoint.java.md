# `resourcemanagerPrivateEndpoint` Submodule <a name="`resourcemanagerPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcemanagerPrivateEndpoint <a name="ResourcemanagerPrivateEndpoint" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint oci_resourcemanager_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resourcemanager_private_endpoint.ResourcemanagerPrivateEndpoint;

ResourcemanagerPrivateEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .subnetId(java.lang.String)
    .vcnId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .dnsZones(java.util.List<java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isUsedWithConfigurationSourceProvider(java.lang.Boolean)
//  .isUsedWithConfigurationSourceProvider(IResolvable)
//  .nsgIdList(java.util.List<java.lang.String>)
//  .timeouts(ResourcemanagerPrivateEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#compartment_id ResourcemanagerPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#display_name ResourcemanagerPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#subnet_id ResourcemanagerPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#vcn_id ResourcemanagerPrivateEndpoint#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#defined_tags ResourcemanagerPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#description ResourcemanagerPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.dnsZones">dnsZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#dns_zones ResourcemanagerPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#freeform_tags ResourcemanagerPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#id ResourcemanagerPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.isUsedWithConfigurationSourceProvider">isUsedWithConfigurationSourceProvider</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#is_used_with_configuration_source_provider ResourcemanagerPrivateEndpoint#is_used_with_configuration_source_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.nsgIdList">nsgIdList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#nsg_id_list ResourcemanagerPrivateEndpoint#nsg_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#compartment_id ResourcemanagerPrivateEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#display_name ResourcemanagerPrivateEndpoint#display_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#subnet_id ResourcemanagerPrivateEndpoint#subnet_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.vcnId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#vcn_id ResourcemanagerPrivateEndpoint#vcn_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#defined_tags ResourcemanagerPrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#description ResourcemanagerPrivateEndpoint#description}.

---

##### `dnsZones`<sup>Optional</sup> <a name="dnsZones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.dnsZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#dns_zones ResourcemanagerPrivateEndpoint#dns_zones}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#freeform_tags ResourcemanagerPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#id ResourcemanagerPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isUsedWithConfigurationSourceProvider`<sup>Optional</sup> <a name="isUsedWithConfigurationSourceProvider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.isUsedWithConfigurationSourceProvider"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#is_used_with_configuration_source_provider ResourcemanagerPrivateEndpoint#is_used_with_configuration_source_provider}.

---

##### `nsgIdList`<sup>Optional</sup> <a name="nsgIdList" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.nsgIdList"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#nsg_id_list ResourcemanagerPrivateEndpoint#nsg_id_list}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#timeouts ResourcemanagerPrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDnsZones">resetDnsZones</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetIsUsedWithConfigurationSourceProvider">resetIsUsedWithConfigurationSourceProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetNsgIdList">resetNsgIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts"></a>

```java
public void putTimeouts(ResourcemanagerPrivateEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDnsZones` <a name="resetDnsZones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetDnsZones"></a>

```java
public void resetDnsZones()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetIsUsedWithConfigurationSourceProvider` <a name="resetIsUsedWithConfigurationSourceProvider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetIsUsedWithConfigurationSourceProvider"></a>

```java
public void resetIsUsedWithConfigurationSourceProvider()
```

##### `resetNsgIdList` <a name="resetNsgIdList" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetNsgIdList"></a>

```java
public void resetNsgIdList()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourcemanagerPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.resourcemanager_private_endpoint.ResourcemanagerPrivateEndpoint;

ResourcemanagerPrivateEndpoint.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.resourcemanager_private_endpoint.ResourcemanagerPrivateEndpoint;

ResourcemanagerPrivateEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.resourcemanager_private_endpoint.ResourcemanagerPrivateEndpoint;

ResourcemanagerPrivateEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.resourcemanager_private_endpoint.ResourcemanagerPrivateEndpoint;

ResourcemanagerPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourcemanagerPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ResourcemanagerPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourcemanagerPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourcemanagerPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ResourcemanagerPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.sourceIps">sourceIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference">ResourcemanagerPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZonesInput">dnsZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProviderInput">isUsedWithConfigurationSourceProviderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdListInput">nsgIdListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnIdInput">vcnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZones">dnsZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProvider">isUsedWithConfigurationSourceProvider</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdList">nsgIdList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sourceIps`<sup>Required</sup> <a name="sourceIps" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.sourceIps"></a>

```java
public java.util.List<java.lang.String> getSourceIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeouts"></a>

```java
public ResourcemanagerPrivateEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference">ResourcemanagerPrivateEndpointTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `dnsZonesInput`<sup>Optional</sup> <a name="dnsZonesInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZonesInput"></a>

```java
public java.util.List<java.lang.String> getDnsZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isUsedWithConfigurationSourceProviderInput`<sup>Optional</sup> <a name="isUsedWithConfigurationSourceProviderInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProviderInput"></a>

```java
public java.lang.Object getIsUsedWithConfigurationSourceProviderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nsgIdListInput`<sup>Optional</sup> <a name="nsgIdListInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdListInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnIdInput"></a>

```java
public java.lang.String getVcnIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dnsZones`<sup>Required</sup> <a name="dnsZones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.dnsZones"></a>

```java
public java.util.List<java.lang.String> getDnsZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isUsedWithConfigurationSourceProvider`<sup>Required</sup> <a name="isUsedWithConfigurationSourceProvider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.isUsedWithConfigurationSourceProvider"></a>

```java
public java.lang.Object getIsUsedWithConfigurationSourceProvider();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nsgIdList`<sup>Required</sup> <a name="nsgIdList" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.nsgIdList"></a>

```java
public java.util.List<java.lang.String> getNsgIdList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcemanagerPrivateEndpointConfig <a name="ResourcemanagerPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resourcemanager_private_endpoint.ResourcemanagerPrivateEndpointConfig;

ResourcemanagerPrivateEndpointConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .subnetId(java.lang.String)
    .vcnId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .dnsZones(java.util.List<java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isUsedWithConfigurationSourceProvider(java.lang.Boolean)
//  .isUsedWithConfigurationSourceProvider(IResolvable)
//  .nsgIdList(java.util.List<java.lang.String>)
//  .timeouts(ResourcemanagerPrivateEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#compartment_id ResourcemanagerPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#display_name ResourcemanagerPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#subnet_id ResourcemanagerPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#vcn_id ResourcemanagerPrivateEndpoint#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#defined_tags ResourcemanagerPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#description ResourcemanagerPrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dnsZones">dnsZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#dns_zones ResourcemanagerPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#freeform_tags ResourcemanagerPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#id ResourcemanagerPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.isUsedWithConfigurationSourceProvider">isUsedWithConfigurationSourceProvider</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#is_used_with_configuration_source_provider ResourcemanagerPrivateEndpoint#is_used_with_configuration_source_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.nsgIdList">nsgIdList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#nsg_id_list ResourcemanagerPrivateEndpoint#nsg_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#compartment_id ResourcemanagerPrivateEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#display_name ResourcemanagerPrivateEndpoint#display_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#subnet_id ResourcemanagerPrivateEndpoint#subnet_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#vcn_id ResourcemanagerPrivateEndpoint#vcn_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#defined_tags ResourcemanagerPrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#description ResourcemanagerPrivateEndpoint#description}.

---

##### `dnsZones`<sup>Optional</sup> <a name="dnsZones" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.dnsZones"></a>

```java
public java.util.List<java.lang.String> getDnsZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#dns_zones ResourcemanagerPrivateEndpoint#dns_zones}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#freeform_tags ResourcemanagerPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#id ResourcemanagerPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isUsedWithConfigurationSourceProvider`<sup>Optional</sup> <a name="isUsedWithConfigurationSourceProvider" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.isUsedWithConfigurationSourceProvider"></a>

```java
public java.lang.Object getIsUsedWithConfigurationSourceProvider();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#is_used_with_configuration_source_provider ResourcemanagerPrivateEndpoint#is_used_with_configuration_source_provider}.

---

##### `nsgIdList`<sup>Optional</sup> <a name="nsgIdList" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.nsgIdList"></a>

```java
public java.util.List<java.lang.String> getNsgIdList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#nsg_id_list ResourcemanagerPrivateEndpoint#nsg_id_list}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointConfig.property.timeouts"></a>

```java
public ResourcemanagerPrivateEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#timeouts ResourcemanagerPrivateEndpoint#timeouts}

---

### ResourcemanagerPrivateEndpointTimeouts <a name="ResourcemanagerPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resourcemanager_private_endpoint.ResourcemanagerPrivateEndpointTimeouts;

ResourcemanagerPrivateEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#create ResourcemanagerPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#delete ResourcemanagerPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#update ResourcemanagerPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#create ResourcemanagerPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#delete ResourcemanagerPrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resourcemanager_private_endpoint#update ResourcemanagerPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcemanagerPrivateEndpointTimeoutsOutputReference <a name="ResourcemanagerPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resourcemanager_private_endpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference;

new ResourcemanagerPrivateEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourcemanagerPrivateEndpoint.ResourcemanagerPrivateEndpointTimeouts">ResourcemanagerPrivateEndpointTimeouts</a>

---



