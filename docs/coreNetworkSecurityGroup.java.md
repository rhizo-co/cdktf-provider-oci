# `coreNetworkSecurityGroup` Submodule <a name="`coreNetworkSecurityGroup` Submodule" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreNetworkSecurityGroup <a name="CoreNetworkSecurityGroup" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group oci_core_network_security_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_network_security_group.CoreNetworkSecurityGroup;

CoreNetworkSecurityGroup.Builder.create(Construct scope, java.lang.String id)
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
    .vcnId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(CoreNetworkSecurityGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#compartment_id CoreNetworkSecurityGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#vcn_id CoreNetworkSecurityGroup#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#defined_tags CoreNetworkSecurityGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#display_name CoreNetworkSecurityGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#freeform_tags CoreNetworkSecurityGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#id CoreNetworkSecurityGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts">CoreNetworkSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#compartment_id CoreNetworkSecurityGroup#compartment_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.vcnId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#vcn_id CoreNetworkSecurityGroup#vcn_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#defined_tags CoreNetworkSecurityGroup#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#display_name CoreNetworkSecurityGroup#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#freeform_tags CoreNetworkSecurityGroup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#id CoreNetworkSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts">CoreNetworkSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#timeouts CoreNetworkSecurityGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.putTimeouts"></a>

```java
public void putTimeouts(CoreNetworkSecurityGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts">CoreNetworkSecurityGroupTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreNetworkSecurityGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_network_security_group.CoreNetworkSecurityGroup;

CoreNetworkSecurityGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_network_security_group.CoreNetworkSecurityGroup;

CoreNetworkSecurityGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_network_security_group.CoreNetworkSecurityGroup;

CoreNetworkSecurityGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_network_security_group.CoreNetworkSecurityGroup;

CoreNetworkSecurityGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreNetworkSecurityGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreNetworkSecurityGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreNetworkSecurityGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreNetworkSecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreNetworkSecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference">CoreNetworkSecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts">CoreNetworkSecurityGroupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.vcnIdInput">vcnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.timeouts"></a>

```java
public CoreNetworkSecurityGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference">CoreNetworkSecurityGroupTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts">CoreNetworkSecurityGroupTimeouts</a>

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.vcnIdInput"></a>

```java
public java.lang.String getVcnIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreNetworkSecurityGroupConfig <a name="CoreNetworkSecurityGroupConfig" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_network_security_group.CoreNetworkSecurityGroupConfig;

CoreNetworkSecurityGroupConfig.builder()
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
    .vcnId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(CoreNetworkSecurityGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#compartment_id CoreNetworkSecurityGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#vcn_id CoreNetworkSecurityGroup#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#defined_tags CoreNetworkSecurityGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#display_name CoreNetworkSecurityGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#freeform_tags CoreNetworkSecurityGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#id CoreNetworkSecurityGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts">CoreNetworkSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#compartment_id CoreNetworkSecurityGroup#compartment_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#vcn_id CoreNetworkSecurityGroup#vcn_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#defined_tags CoreNetworkSecurityGroup#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#display_name CoreNetworkSecurityGroup#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#freeform_tags CoreNetworkSecurityGroup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#id CoreNetworkSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupConfig.property.timeouts"></a>

```java
public CoreNetworkSecurityGroupTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts">CoreNetworkSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#timeouts CoreNetworkSecurityGroup#timeouts}

---

### CoreNetworkSecurityGroupTimeouts <a name="CoreNetworkSecurityGroupTimeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_network_security_group.CoreNetworkSecurityGroupTimeouts;

CoreNetworkSecurityGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#create CoreNetworkSecurityGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#delete CoreNetworkSecurityGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#update CoreNetworkSecurityGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#create CoreNetworkSecurityGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#delete CoreNetworkSecurityGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group#update CoreNetworkSecurityGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreNetworkSecurityGroupTimeoutsOutputReference <a name="CoreNetworkSecurityGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_network_security_group.CoreNetworkSecurityGroupTimeoutsOutputReference;

new CoreNetworkSecurityGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts">CoreNetworkSecurityGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroup.CoreNetworkSecurityGroupTimeouts">CoreNetworkSecurityGroupTimeouts</a>

---


