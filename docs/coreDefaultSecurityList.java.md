# `coreDefaultSecurityList` Submodule <a name="`coreDefaultSecurityList` Submodule" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDefaultSecurityList <a name="CoreDefaultSecurityList" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list oci_core_default_security_list}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityList;

CoreDefaultSecurityList.Builder.create(Construct scope, java.lang.String id)
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
//  .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .egressSecurityRules(IResolvable)
//  .egressSecurityRules(java.util.List<CoreDefaultSecurityListEgressSecurityRules>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .ingressSecurityRules(IResolvable)
//  .ingressSecurityRules(java.util.List<CoreDefaultSecurityListIngressSecurityRules>)
//  .timeouts(CoreDefaultSecurityListTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.manageDefaultResourceId">manageDefaultResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#manage_default_resource_id CoreDefaultSecurityList#manage_default_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#compartment_id CoreDefaultSecurityList#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#defined_tags CoreDefaultSecurityList#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#display_name CoreDefaultSecurityList#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.egressSecurityRules">egressSecurityRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>></code> | egress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#freeform_tags CoreDefaultSecurityList#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#id CoreDefaultSecurityList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.ingressSecurityRules">ingressSecurityRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>></code> | ingress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `manageDefaultResourceId`<sup>Required</sup> <a name="manageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.manageDefaultResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#manage_default_resource_id CoreDefaultSecurityList#manage_default_resource_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#compartment_id CoreDefaultSecurityList#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#defined_tags CoreDefaultSecurityList#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#display_name CoreDefaultSecurityList#display_name}.

---

##### `egressSecurityRules`<sup>Optional</sup> <a name="egressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.egressSecurityRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>>

egress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#egress_security_rules CoreDefaultSecurityList#egress_security_rules}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#freeform_tags CoreDefaultSecurityList#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#id CoreDefaultSecurityList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressSecurityRules`<sup>Optional</sup> <a name="ingressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.ingressSecurityRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>>

ingress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#ingress_security_rules CoreDefaultSecurityList#ingress_security_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#timeouts CoreDefaultSecurityList#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putEgressSecurityRules">putEgressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putIngressSecurityRules">putIngressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetEgressSecurityRules">resetEgressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetIngressSecurityRules">resetIngressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgressSecurityRules` <a name="putEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putEgressSecurityRules"></a>

```java
public void putEgressSecurityRules(IResolvable OR java.util.List<CoreDefaultSecurityListEgressSecurityRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putEgressSecurityRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>>

---

##### `putIngressSecurityRules` <a name="putIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putIngressSecurityRules"></a>

```java
public void putIngressSecurityRules(IResolvable OR java.util.List<CoreDefaultSecurityListIngressSecurityRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putIngressSecurityRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts"></a>

```java
public void putTimeouts(CoreDefaultSecurityListTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEgressSecurityRules` <a name="resetEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetEgressSecurityRules"></a>

```java
public void resetEgressSecurityRules()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetId"></a>

```java
public void resetId()
```

##### `resetIngressSecurityRules` <a name="resetIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetIngressSecurityRules"></a>

```java
public void resetIngressSecurityRules()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDefaultSecurityList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityList;

CoreDefaultSecurityList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityList;

CoreDefaultSecurityList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityList;

CoreDefaultSecurityList.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityList;

CoreDefaultSecurityList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreDefaultSecurityList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreDefaultSecurityList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreDefaultSecurityList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreDefaultSecurityList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreDefaultSecurityList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRules">egressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList">CoreDefaultSecurityListEgressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRules">ingressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList">CoreDefaultSecurityListIngressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference">CoreDefaultSecurityListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRulesInput">egressSecurityRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRulesInput">ingressSecurityRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceIdInput">manageDefaultResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceId">manageDefaultResourceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `egressSecurityRules`<sup>Required</sup> <a name="egressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRules"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesList getEgressSecurityRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList">CoreDefaultSecurityListEgressSecurityRulesList</a>

---

##### `ingressSecurityRules`<sup>Required</sup> <a name="ingressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRules"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesList getIngressSecurityRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList">CoreDefaultSecurityListIngressSecurityRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeouts"></a>

```java
public CoreDefaultSecurityListTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference">CoreDefaultSecurityListTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `egressSecurityRulesInput`<sup>Optional</sup> <a name="egressSecurityRulesInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRulesInput"></a>

```java
public java.lang.Object getEgressSecurityRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressSecurityRulesInput`<sup>Optional</sup> <a name="ingressSecurityRulesInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRulesInput"></a>

```java
public java.lang.Object getIngressSecurityRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>>

---

##### `manageDefaultResourceIdInput`<sup>Optional</sup> <a name="manageDefaultResourceIdInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceIdInput"></a>

```java
public java.lang.String getManageDefaultResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `manageDefaultResourceId`<sup>Required</sup> <a name="manageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceId"></a>

```java
public java.lang.String getManageDefaultResourceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDefaultSecurityListConfig <a name="CoreDefaultSecurityListConfig" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListConfig;

CoreDefaultSecurityListConfig.builder()
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
//  .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .egressSecurityRules(IResolvable)
//  .egressSecurityRules(java.util.List<CoreDefaultSecurityListEgressSecurityRules>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .ingressSecurityRules(IResolvable)
//  .ingressSecurityRules(java.util.List<CoreDefaultSecurityListIngressSecurityRules>)
//  .timeouts(CoreDefaultSecurityListTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.manageDefaultResourceId">manageDefaultResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#manage_default_resource_id CoreDefaultSecurityList#manage_default_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#compartment_id CoreDefaultSecurityList#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#defined_tags CoreDefaultSecurityList#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#display_name CoreDefaultSecurityList#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.egressSecurityRules">egressSecurityRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>></code> | egress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#freeform_tags CoreDefaultSecurityList#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#id CoreDefaultSecurityList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.ingressSecurityRules">ingressSecurityRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>></code> | ingress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `manageDefaultResourceId`<sup>Required</sup> <a name="manageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.manageDefaultResourceId"></a>

```java
public java.lang.String getManageDefaultResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#manage_default_resource_id CoreDefaultSecurityList#manage_default_resource_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#compartment_id CoreDefaultSecurityList#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#defined_tags CoreDefaultSecurityList#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#display_name CoreDefaultSecurityList#display_name}.

---

##### `egressSecurityRules`<sup>Optional</sup> <a name="egressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.egressSecurityRules"></a>

```java
public java.lang.Object getEgressSecurityRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>>

egress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#egress_security_rules CoreDefaultSecurityList#egress_security_rules}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#freeform_tags CoreDefaultSecurityList#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#id CoreDefaultSecurityList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressSecurityRules`<sup>Optional</sup> <a name="ingressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.ingressSecurityRules"></a>

```java
public java.lang.Object getIngressSecurityRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>>

ingress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#ingress_security_rules CoreDefaultSecurityList#ingress_security_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.timeouts"></a>

```java
public CoreDefaultSecurityListTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#timeouts CoreDefaultSecurityList#timeouts}

---

### CoreDefaultSecurityListEgressSecurityRules <a name="CoreDefaultSecurityListEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRules;

CoreDefaultSecurityListEgressSecurityRules.builder()
    .destination(java.lang.String)
    .protocol(java.lang.String)
//  .description(java.lang.String)
//  .destinationType(java.lang.String)
//  .icmpOptions(CoreDefaultSecurityListEgressSecurityRulesIcmpOptions)
//  .stateless(java.lang.Boolean)
//  .stateless(IResolvable)
//  .tcpOptions(CoreDefaultSecurityListEgressSecurityRulesTcpOptions)
//  .udpOptions(CoreDefaultSecurityListEgressSecurityRulesUdpOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination CoreDefaultSecurityList#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination_type CoreDefaultSecurityList#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.stateless">stateless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a></code> | udp_options block. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination CoreDefaultSecurityList#destination}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}.

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination_type CoreDefaultSecurityList#destination_type}.

---

##### `icmpOptions`<sup>Optional</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.icmpOptions"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesIcmpOptions getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#icmp_options CoreDefaultSecurityList#icmp_options}

---

##### `stateless`<sup>Optional</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.stateless"></a>

```java
public java.lang.Object getStateless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}.

---

##### `tcpOptions`<sup>Optional</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.tcpOptions"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesTcpOptions getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#tcp_options CoreDefaultSecurityList#tcp_options}

---

##### `udpOptions`<sup>Optional</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.udpOptions"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesUdpOptions getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#udp_options CoreDefaultSecurityList#udp_options}

---

### CoreDefaultSecurityListEgressSecurityRulesIcmpOptions <a name="CoreDefaultSecurityListEgressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions;

CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.builder()
    .type(java.lang.Number)
//  .code(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.type">type</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.code">code</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}.

---

### CoreDefaultSecurityListEgressSecurityRulesTcpOptions <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRulesTcpOptions;

CoreDefaultSecurityListEgressSecurityRulesTcpOptions.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
//  .sourcePortRange(CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.sourcePortRange"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange;

CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListEgressSecurityRulesUdpOptions <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRulesUdpOptions;

CoreDefaultSecurityListEgressSecurityRulesUdpOptions.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
//  .sourcePortRange(CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.sourcePortRange"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange;

CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListIngressSecurityRules <a name="CoreDefaultSecurityListIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRules;

CoreDefaultSecurityListIngressSecurityRules.builder()
    .protocol(java.lang.String)
    .source(java.lang.String)
//  .description(java.lang.String)
//  .icmpOptions(CoreDefaultSecurityListIngressSecurityRulesIcmpOptions)
//  .sourceType(java.lang.String)
//  .stateless(java.lang.Boolean)
//  .stateless(IResolvable)
//  .tcpOptions(CoreDefaultSecurityListIngressSecurityRulesTcpOptions)
//  .udpOptions(CoreDefaultSecurityListIngressSecurityRulesUdpOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source CoreDefaultSecurityList#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_type CoreDefaultSecurityList#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.stateless">stateless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a></code> | udp_options block. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source CoreDefaultSecurityList#source}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}.

---

##### `icmpOptions`<sup>Optional</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.icmpOptions"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesIcmpOptions getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#icmp_options CoreDefaultSecurityList#icmp_options}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_type CoreDefaultSecurityList#source_type}.

---

##### `stateless`<sup>Optional</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.stateless"></a>

```java
public java.lang.Object getStateless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}.

---

##### `tcpOptions`<sup>Optional</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.tcpOptions"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesTcpOptions getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#tcp_options CoreDefaultSecurityList#tcp_options}

---

##### `udpOptions`<sup>Optional</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.udpOptions"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesUdpOptions getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#udp_options CoreDefaultSecurityList#udp_options}

---

### CoreDefaultSecurityListIngressSecurityRulesIcmpOptions <a name="CoreDefaultSecurityListIngressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions;

CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.builder()
    .type(java.lang.Number)
//  .code(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.type">type</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.code">code</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}.

---

### CoreDefaultSecurityListIngressSecurityRulesTcpOptions <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRulesTcpOptions;

CoreDefaultSecurityListIngressSecurityRulesTcpOptions.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
//  .sourcePortRange(CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.sourcePortRange"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange;

CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListIngressSecurityRulesUdpOptions <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRulesUdpOptions;

CoreDefaultSecurityListIngressSecurityRulesUdpOptions.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
//  .sourcePortRange(CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.sourcePortRange"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange;

CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListTimeouts <a name="CoreDefaultSecurityListTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListTimeouts;

CoreDefaultSecurityListTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#create CoreDefaultSecurityList#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#delete CoreDefaultSecurityList#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#update CoreDefaultSecurityList#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#create CoreDefaultSecurityList#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#delete CoreDefaultSecurityList#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#update CoreDefaultSecurityList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference;

new CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resetCode"></a>

```java
public void resetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.codeInput"></a>

```java
public java.lang.Number getCodeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.Number getTypeInput();
```

- *Type:* java.lang.Number

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesIcmpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

---


### CoreDefaultSecurityListEgressSecurityRulesList <a name="CoreDefaultSecurityListEgressSecurityRulesList" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRulesList;

new CoreDefaultSecurityListEgressSecurityRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.get"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>>

---


### CoreDefaultSecurityListEgressSecurityRulesOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRulesOutputReference;

new CoreDefaultSecurityListEgressSecurityRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions">putIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions">putTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions">putUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetIcmpOptions">resetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetStateless">resetStateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetTcpOptions">resetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetUdpOptions">resetUdpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcmpOptions` <a name="putIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions"></a>

```java
public void putIcmpOptions(CoreDefaultSecurityListEgressSecurityRulesIcmpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

---

##### `putTcpOptions` <a name="putTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions"></a>

```java
public void putTcpOptions(CoreDefaultSecurityListEgressSecurityRulesTcpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

---

##### `putUdpOptions` <a name="putUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions"></a>

```java
public void putUdpOptions(CoreDefaultSecurityListEgressSecurityRulesUdpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationType` <a name="resetDestinationType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDestinationType"></a>

```java
public void resetDestinationType()
```

##### `resetIcmpOptions` <a name="resetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetIcmpOptions"></a>

```java
public void resetIcmpOptions()
```

##### `resetStateless` <a name="resetStateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetStateless"></a>

```java
public void resetStateless()
```

##### `resetTcpOptions` <a name="resetTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetTcpOptions"></a>

```java
public void resetTcpOptions()
```

##### `resetUdpOptions` <a name="resetUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetUdpOptions"></a>

```java
public void resetUdpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptionsInput">icmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.statelessInput">statelessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptionsInput">tcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptionsInput">udpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptions"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference</a>

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptions"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptions"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `icmpOptionsInput`<sup>Optional</sup> <a name="icmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptionsInput"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesIcmpOptions getIcmpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `statelessInput`<sup>Optional</sup> <a name="statelessInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.statelessInput"></a>

```java
public java.lang.Object getStatelessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tcpOptionsInput`<sup>Optional</sup> <a name="tcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptionsInput"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesTcpOptions getTcpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

---

##### `udpOptionsInput`<sup>Optional</sup> <a name="udpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptionsInput"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesUdpOptions getUdpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.stateless"></a>

```java
public java.lang.Object getStateless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules">CoreDefaultSecurityListEgressSecurityRules</a>

---


### CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference;

new CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```java
public void putSourcePortRange(CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMin"></a>

```java
public void resetMin()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange getSourcePortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesTcpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

---


### CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference;

new CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference;

new CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```java
public void putSourcePortRange(CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMin"></a>

```java
public void resetMin()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange getSourcePortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesUdpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

---


### CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference;

new CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference;

new CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resetCode"></a>

```java
public void resetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.codeInput"></a>

```java
public java.lang.Number getCodeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.Number getTypeInput();
```

- *Type:* java.lang.Number

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesIcmpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

---


### CoreDefaultSecurityListIngressSecurityRulesList <a name="CoreDefaultSecurityListIngressSecurityRulesList" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRulesList;

new CoreDefaultSecurityListIngressSecurityRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.get"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>>

---


### CoreDefaultSecurityListIngressSecurityRulesOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRulesOutputReference;

new CoreDefaultSecurityListIngressSecurityRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions">putIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions">putTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions">putUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetIcmpOptions">resetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetStateless">resetStateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetTcpOptions">resetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetUdpOptions">resetUdpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcmpOptions` <a name="putIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions"></a>

```java
public void putIcmpOptions(CoreDefaultSecurityListIngressSecurityRulesIcmpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

---

##### `putTcpOptions` <a name="putTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions"></a>

```java
public void putTcpOptions(CoreDefaultSecurityListIngressSecurityRulesTcpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

---

##### `putUdpOptions` <a name="putUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions"></a>

```java
public void putUdpOptions(CoreDefaultSecurityListIngressSecurityRulesUdpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIcmpOptions` <a name="resetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetIcmpOptions"></a>

```java
public void resetIcmpOptions()
```

##### `resetSourceType` <a name="resetSourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetSourceType"></a>

```java
public void resetSourceType()
```

##### `resetStateless` <a name="resetStateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetStateless"></a>

```java
public void resetStateless()
```

##### `resetTcpOptions` <a name="resetTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetTcpOptions"></a>

```java
public void resetTcpOptions()
```

##### `resetUdpOptions` <a name="resetUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetUdpOptions"></a>

```java
public void resetUdpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptionsInput">icmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.statelessInput">statelessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptionsInput">tcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptionsInput">udpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptions"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference</a>

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptions"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptions"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `icmpOptionsInput`<sup>Optional</sup> <a name="icmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptionsInput"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesIcmpOptions getIcmpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `statelessInput`<sup>Optional</sup> <a name="statelessInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.statelessInput"></a>

```java
public java.lang.Object getStatelessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tcpOptionsInput`<sup>Optional</sup> <a name="tcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptionsInput"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesTcpOptions getTcpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

---

##### `udpOptionsInput`<sup>Optional</sup> <a name="udpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptionsInput"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesUdpOptions getUdpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.stateless"></a>

```java
public java.lang.Object getStateless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules">CoreDefaultSecurityListIngressSecurityRules</a>

---


### CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference;

new CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```java
public void putSourcePortRange(CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMin"></a>

```java
public void resetMin()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange getSourcePortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesTcpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

---


### CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference;

new CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference;

new CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```java
public void putSourcePortRange(CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMin"></a>

```java
public void resetMin()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange getSourcePortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesUdpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

---


### CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference;

new CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListTimeoutsOutputReference <a name="CoreDefaultSecurityListTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_default_security_list.CoreDefaultSecurityListTimeoutsOutputReference;

new CoreDefaultSecurityListTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

---



