# `coreDefaultDhcpOptions` Submodule <a name="`coreDefaultDhcpOptions` Submodule" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDefaultDhcpOptions <a name="CoreDefaultDhcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options oci_core_default_dhcp_options}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_dhcp_options.CoreDefaultDhcpOptions;

CoreDefaultDhcpOptions.Builder.create(Construct scope, java.lang.String id)
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
    .manageDefaultResourceId(java.lang.String)
    .options(IResolvable)
    .options(java.util.List<CoreDefaultDhcpOptionsOptions>)
//  .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .domainNameType(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(CoreDefaultDhcpOptionsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.manageDefaultResourceId">manageDefaultResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#manage_default_resource_id CoreDefaultDhcpOptions#manage_default_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.options">options</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>></code> | options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#compartment_id CoreDefaultDhcpOptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#defined_tags CoreDefaultDhcpOptions#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#display_name CoreDefaultDhcpOptions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.domainNameType">domainNameType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#domain_name_type CoreDefaultDhcpOptions#domain_name_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#freeform_tags CoreDefaultDhcpOptions#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#id CoreDefaultDhcpOptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `manageDefaultResourceId`<sup>Required</sup> <a name="manageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.manageDefaultResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#manage_default_resource_id CoreDefaultDhcpOptions#manage_default_resource_id}.

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.options"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#options CoreDefaultDhcpOptions#options}

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#compartment_id CoreDefaultDhcpOptions#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#defined_tags CoreDefaultDhcpOptions#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#display_name CoreDefaultDhcpOptions#display_name}.

---

##### `domainNameType`<sup>Optional</sup> <a name="domainNameType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.domainNameType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#domain_name_type CoreDefaultDhcpOptions#domain_name_type}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#freeform_tags CoreDefaultDhcpOptions#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#id CoreDefaultDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#timeouts CoreDefaultDhcpOptions#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDomainNameType">resetDomainNameType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putOptions"></a>

```java
public void putOptions(IResolvable OR java.util.List<CoreDefaultDhcpOptionsOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putTimeouts"></a>

```java
public void putTimeouts(CoreDefaultDhcpOptionsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDomainNameType` <a name="resetDomainNameType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetDomainNameType"></a>

```java
public void resetDomainNameType()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDefaultDhcpOptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_dhcp_options.CoreDefaultDhcpOptions;

CoreDefaultDhcpOptions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_dhcp_options.CoreDefaultDhcpOptions;

CoreDefaultDhcpOptions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_dhcp_options.CoreDefaultDhcpOptions;

CoreDefaultDhcpOptions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_dhcp_options.CoreDefaultDhcpOptions;

CoreDefaultDhcpOptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreDefaultDhcpOptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreDefaultDhcpOptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreDefaultDhcpOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreDefaultDhcpOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreDefaultDhcpOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.options">options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList">CoreDefaultDhcpOptionsOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference">CoreDefaultDhcpOptionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.domainNameTypeInput">domainNameTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.manageDefaultResourceIdInput">manageDefaultResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.optionsInput">optionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.domainNameType">domainNameType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.manageDefaultResourceId">manageDefaultResourceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.options"></a>

```java
public CoreDefaultDhcpOptionsOptionsList getOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList">CoreDefaultDhcpOptionsOptionsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeouts"></a>

```java
public CoreDefaultDhcpOptionsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference">CoreDefaultDhcpOptionsTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `domainNameTypeInput`<sup>Optional</sup> <a name="domainNameTypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.domainNameTypeInput"></a>

```java
public java.lang.String getDomainNameTypeInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `manageDefaultResourceIdInput`<sup>Optional</sup> <a name="manageDefaultResourceIdInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.manageDefaultResourceIdInput"></a>

```java
public java.lang.String getManageDefaultResourceIdInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.optionsInput"></a>

```java
public java.lang.Object getOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domainNameType`<sup>Required</sup> <a name="domainNameType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.domainNameType"></a>

```java
public java.lang.String getDomainNameType();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `manageDefaultResourceId`<sup>Required</sup> <a name="manageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.manageDefaultResourceId"></a>

```java
public java.lang.String getManageDefaultResourceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDefaultDhcpOptionsConfig <a name="CoreDefaultDhcpOptionsConfig" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_dhcp_options.CoreDefaultDhcpOptionsConfig;

CoreDefaultDhcpOptionsConfig.builder()
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
    .manageDefaultResourceId(java.lang.String)
    .options(IResolvable)
    .options(java.util.List<CoreDefaultDhcpOptionsOptions>)
//  .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .domainNameType(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(CoreDefaultDhcpOptionsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.manageDefaultResourceId">manageDefaultResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#manage_default_resource_id CoreDefaultDhcpOptions#manage_default_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.options">options</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>></code> | options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#compartment_id CoreDefaultDhcpOptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#defined_tags CoreDefaultDhcpOptions#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#display_name CoreDefaultDhcpOptions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.domainNameType">domainNameType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#domain_name_type CoreDefaultDhcpOptions#domain_name_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#freeform_tags CoreDefaultDhcpOptions#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#id CoreDefaultDhcpOptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `manageDefaultResourceId`<sup>Required</sup> <a name="manageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.manageDefaultResourceId"></a>

```java
public java.lang.String getManageDefaultResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#manage_default_resource_id CoreDefaultDhcpOptions#manage_default_resource_id}.

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.options"></a>

```java
public java.lang.Object getOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#options CoreDefaultDhcpOptions#options}

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#compartment_id CoreDefaultDhcpOptions#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#defined_tags CoreDefaultDhcpOptions#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#display_name CoreDefaultDhcpOptions#display_name}.

---

##### `domainNameType`<sup>Optional</sup> <a name="domainNameType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.domainNameType"></a>

```java
public java.lang.String getDomainNameType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#domain_name_type CoreDefaultDhcpOptions#domain_name_type}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#freeform_tags CoreDefaultDhcpOptions#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#id CoreDefaultDhcpOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsConfig.property.timeouts"></a>

```java
public CoreDefaultDhcpOptionsTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#timeouts CoreDefaultDhcpOptions#timeouts}

---

### CoreDefaultDhcpOptionsOptions <a name="CoreDefaultDhcpOptionsOptions" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_dhcp_options.CoreDefaultDhcpOptionsOptions;

CoreDefaultDhcpOptionsOptions.builder()
    .type(java.lang.String)
//  .customDnsServers(java.util.List<java.lang.String>)
//  .searchDomainNames(java.util.List<java.lang.String>)
//  .serverType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#type CoreDefaultDhcpOptions#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.customDnsServers">customDnsServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#custom_dns_servers CoreDefaultDhcpOptions#custom_dns_servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.searchDomainNames">searchDomainNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#search_domain_names CoreDefaultDhcpOptions#search_domain_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.serverType">serverType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#server_type CoreDefaultDhcpOptions#server_type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#type CoreDefaultDhcpOptions#type}.

---

##### `customDnsServers`<sup>Optional</sup> <a name="customDnsServers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.customDnsServers"></a>

```java
public java.util.List<java.lang.String> getCustomDnsServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#custom_dns_servers CoreDefaultDhcpOptions#custom_dns_servers}.

---

##### `searchDomainNames`<sup>Optional</sup> <a name="searchDomainNames" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.searchDomainNames"></a>

```java
public java.util.List<java.lang.String> getSearchDomainNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#search_domain_names CoreDefaultDhcpOptions#search_domain_names}.

---

##### `serverType`<sup>Optional</sup> <a name="serverType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions.property.serverType"></a>

```java
public java.lang.String getServerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#server_type CoreDefaultDhcpOptions#server_type}.

---

### CoreDefaultDhcpOptionsTimeouts <a name="CoreDefaultDhcpOptionsTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_dhcp_options.CoreDefaultDhcpOptionsTimeouts;

CoreDefaultDhcpOptionsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#create CoreDefaultDhcpOptions#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#delete CoreDefaultDhcpOptions#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#update CoreDefaultDhcpOptions#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#create CoreDefaultDhcpOptions#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#delete CoreDefaultDhcpOptions#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_dhcp_options#update CoreDefaultDhcpOptions#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDefaultDhcpOptionsOptionsList <a name="CoreDefaultDhcpOptionsOptionsList" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_dhcp_options.CoreDefaultDhcpOptionsOptionsList;

new CoreDefaultDhcpOptionsOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.get"></a>

```java
public CoreDefaultDhcpOptionsOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>>

---


### CoreDefaultDhcpOptionsOptionsOutputReference <a name="CoreDefaultDhcpOptionsOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_dhcp_options.CoreDefaultDhcpOptionsOptionsOutputReference;

new CoreDefaultDhcpOptionsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetCustomDnsServers">resetCustomDnsServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetSearchDomainNames">resetSearchDomainNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetServerType">resetServerType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomDnsServers` <a name="resetCustomDnsServers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetCustomDnsServers"></a>

```java
public void resetCustomDnsServers()
```

##### `resetSearchDomainNames` <a name="resetSearchDomainNames" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetSearchDomainNames"></a>

```java
public void resetSearchDomainNames()
```

##### `resetServerType` <a name="resetServerType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.resetServerType"></a>

```java
public void resetServerType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.customDnsServersInput">customDnsServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.searchDomainNamesInput">searchDomainNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.serverTypeInput">serverTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.customDnsServers">customDnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.searchDomainNames">searchDomainNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.serverType">serverType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customDnsServersInput`<sup>Optional</sup> <a name="customDnsServersInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.customDnsServersInput"></a>

```java
public java.util.List<java.lang.String> getCustomDnsServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchDomainNamesInput`<sup>Optional</sup> <a name="searchDomainNamesInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.searchDomainNamesInput"></a>

```java
public java.util.List<java.lang.String> getSearchDomainNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverTypeInput`<sup>Optional</sup> <a name="serverTypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.serverTypeInput"></a>

```java
public java.lang.String getServerTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `customDnsServers`<sup>Required</sup> <a name="customDnsServers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.customDnsServers"></a>

```java
public java.util.List<java.lang.String> getCustomDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchDomainNames`<sup>Required</sup> <a name="searchDomainNames" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.searchDomainNames"></a>

```java
public java.util.List<java.lang.String> getSearchDomainNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverType`<sup>Required</sup> <a name="serverType" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.serverType"></a>

```java
public java.lang.String getServerType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsOptions">CoreDefaultDhcpOptionsOptions</a>

---


### CoreDefaultDhcpOptionsTimeoutsOutputReference <a name="CoreDefaultDhcpOptionsTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_dhcp_options.CoreDefaultDhcpOptionsTimeoutsOutputReference;

new CoreDefaultDhcpOptionsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultDhcpOptions.CoreDefaultDhcpOptionsTimeouts">CoreDefaultDhcpOptionsTimeouts</a>

---



