# `coreSecurityList` Submodule <a name="`coreSecurityList` Submodule" id="rhizo-co-terraform-provider-oci.coreSecurityList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreSecurityList <a name="CoreSecurityList" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list oci_core_security_list}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityList;

CoreSecurityList.Builder.create(Construct scope, java.lang.String id)
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
//  .egressSecurityRules(IResolvable)
//  .egressSecurityRules(java.util.List<CoreSecurityListEgressSecurityRules>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .ingressSecurityRules(IResolvable)
//  .ingressSecurityRules(java.util.List<CoreSecurityListIngressSecurityRules>)
//  .timeouts(CoreSecurityListTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#compartment_id CoreSecurityList#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#vcn_id CoreSecurityList#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#defined_tags CoreSecurityList#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#display_name CoreSecurityList#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.egressSecurityRules">egressSecurityRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules">CoreSecurityListEgressSecurityRules</a>></code> | egress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#freeform_tags CoreSecurityList#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#id CoreSecurityList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.ingressSecurityRules">ingressSecurityRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules">CoreSecurityListIngressSecurityRules</a>></code> | ingress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts">CoreSecurityListTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#compartment_id CoreSecurityList#compartment_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.vcnId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#vcn_id CoreSecurityList#vcn_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#defined_tags CoreSecurityList#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#display_name CoreSecurityList#display_name}.

---

##### `egressSecurityRules`<sup>Optional</sup> <a name="egressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.egressSecurityRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules">CoreSecurityListEgressSecurityRules</a>>

egress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#egress_security_rules CoreSecurityList#egress_security_rules}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#freeform_tags CoreSecurityList#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#id CoreSecurityList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressSecurityRules`<sup>Optional</sup> <a name="ingressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.ingressSecurityRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules">CoreSecurityListIngressSecurityRules</a>>

ingress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#ingress_security_rules CoreSecurityList#ingress_security_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts">CoreSecurityListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#timeouts CoreSecurityList#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putEgressSecurityRules">putEgressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putIngressSecurityRules">putIngressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetEgressSecurityRules">resetEgressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetIngressSecurityRules">resetIngressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgressSecurityRules` <a name="putEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putEgressSecurityRules"></a>

```java
public void putEgressSecurityRules(IResolvable OR java.util.List<CoreSecurityListEgressSecurityRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putEgressSecurityRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules">CoreSecurityListEgressSecurityRules</a>>

---

##### `putIngressSecurityRules` <a name="putIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putIngressSecurityRules"></a>

```java
public void putIngressSecurityRules(IResolvable OR java.util.List<CoreSecurityListIngressSecurityRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putIngressSecurityRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules">CoreSecurityListIngressSecurityRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putTimeouts"></a>

```java
public void putTimeouts(CoreSecurityListTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts">CoreSecurityListTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEgressSecurityRules` <a name="resetEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetEgressSecurityRules"></a>

```java
public void resetEgressSecurityRules()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetId"></a>

```java
public void resetId()
```

##### `resetIngressSecurityRules` <a name="resetIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetIngressSecurityRules"></a>

```java
public void resetIngressSecurityRules()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreSecurityList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityList;

CoreSecurityList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityList;

CoreSecurityList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityList;

CoreSecurityList.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityList;

CoreSecurityList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreSecurityList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreSecurityList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreSecurityList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreSecurityList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreSecurityList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.egressSecurityRules">egressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList">CoreSecurityListEgressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.ingressSecurityRules">ingressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList">CoreSecurityListIngressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference">CoreSecurityListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.egressSecurityRulesInput">egressSecurityRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules">CoreSecurityListEgressSecurityRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.ingressSecurityRulesInput">ingressSecurityRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules">CoreSecurityListIngressSecurityRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts">CoreSecurityListTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.vcnIdInput">vcnIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `egressSecurityRules`<sup>Required</sup> <a name="egressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.egressSecurityRules"></a>

```java
public CoreSecurityListEgressSecurityRulesList getEgressSecurityRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList">CoreSecurityListEgressSecurityRulesList</a>

---

##### `ingressSecurityRules`<sup>Required</sup> <a name="ingressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.ingressSecurityRules"></a>

```java
public CoreSecurityListIngressSecurityRulesList getIngressSecurityRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList">CoreSecurityListIngressSecurityRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.timeouts"></a>

```java
public CoreSecurityListTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference">CoreSecurityListTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `egressSecurityRulesInput`<sup>Optional</sup> <a name="egressSecurityRulesInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.egressSecurityRulesInput"></a>

```java
public java.lang.Object getEgressSecurityRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules">CoreSecurityListEgressSecurityRules</a>>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressSecurityRulesInput`<sup>Optional</sup> <a name="ingressSecurityRulesInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.ingressSecurityRulesInput"></a>

```java
public java.lang.Object getIngressSecurityRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules">CoreSecurityListIngressSecurityRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts">CoreSecurityListTimeouts</a>

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.vcnIdInput"></a>

```java
public java.lang.String getVcnIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreSecurityListConfig <a name="CoreSecurityListConfig" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListConfig;

CoreSecurityListConfig.builder()
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
//  .egressSecurityRules(IResolvable)
//  .egressSecurityRules(java.util.List<CoreSecurityListEgressSecurityRules>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .ingressSecurityRules(IResolvable)
//  .ingressSecurityRules(java.util.List<CoreSecurityListIngressSecurityRules>)
//  .timeouts(CoreSecurityListTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#compartment_id CoreSecurityList#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#vcn_id CoreSecurityList#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#defined_tags CoreSecurityList#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#display_name CoreSecurityList#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.egressSecurityRules">egressSecurityRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules">CoreSecurityListEgressSecurityRules</a>></code> | egress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#freeform_tags CoreSecurityList#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#id CoreSecurityList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.ingressSecurityRules">ingressSecurityRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules">CoreSecurityListIngressSecurityRules</a>></code> | ingress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts">CoreSecurityListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#compartment_id CoreSecurityList#compartment_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#vcn_id CoreSecurityList#vcn_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#defined_tags CoreSecurityList#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#display_name CoreSecurityList#display_name}.

---

##### `egressSecurityRules`<sup>Optional</sup> <a name="egressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.egressSecurityRules"></a>

```java
public java.lang.Object getEgressSecurityRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules">CoreSecurityListEgressSecurityRules</a>>

egress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#egress_security_rules CoreSecurityList#egress_security_rules}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#freeform_tags CoreSecurityList#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#id CoreSecurityList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressSecurityRules`<sup>Optional</sup> <a name="ingressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.ingressSecurityRules"></a>

```java
public java.lang.Object getIngressSecurityRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules">CoreSecurityListIngressSecurityRules</a>>

ingress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#ingress_security_rules CoreSecurityList#ingress_security_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListConfig.property.timeouts"></a>

```java
public CoreSecurityListTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts">CoreSecurityListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#timeouts CoreSecurityList#timeouts}

---

### CoreSecurityListEgressSecurityRules <a name="CoreSecurityListEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRules;

CoreSecurityListEgressSecurityRules.builder()
    .destination(java.lang.String)
    .protocol(java.lang.String)
//  .description(java.lang.String)
//  .destinationType(java.lang.String)
//  .icmpOptions(CoreSecurityListEgressSecurityRulesIcmpOptions)
//  .stateless(java.lang.Boolean)
//  .stateless(IResolvable)
//  .tcpOptions(CoreSecurityListEgressSecurityRulesTcpOptions)
//  .udpOptions(CoreSecurityListEgressSecurityRulesUdpOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#destination CoreSecurityList#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#protocol CoreSecurityList#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#description CoreSecurityList#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#destination_type CoreSecurityList#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.stateless">stateless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#stateless CoreSecurityList#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a></code> | udp_options block. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#destination CoreSecurityList#destination}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#protocol CoreSecurityList#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#description CoreSecurityList#description}.

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#destination_type CoreSecurityList#destination_type}.

---

##### `icmpOptions`<sup>Optional</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.icmpOptions"></a>

```java
public CoreSecurityListEgressSecurityRulesIcmpOptions getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#icmp_options CoreSecurityList#icmp_options}

---

##### `stateless`<sup>Optional</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.stateless"></a>

```java
public java.lang.Object getStateless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#stateless CoreSecurityList#stateless}.

---

##### `tcpOptions`<sup>Optional</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.tcpOptions"></a>

```java
public CoreSecurityListEgressSecurityRulesTcpOptions getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#tcp_options CoreSecurityList#tcp_options}

---

##### `udpOptions`<sup>Optional</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules.property.udpOptions"></a>

```java
public CoreSecurityListEgressSecurityRulesUdpOptions getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#udp_options CoreSecurityList#udp_options}

---

### CoreSecurityListEgressSecurityRulesIcmpOptions <a name="CoreSecurityListEgressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRulesIcmpOptions;

CoreSecurityListEgressSecurityRulesIcmpOptions.builder()
    .type(java.lang.Number)
//  .code(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions.property.type">type</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#type CoreSecurityList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions.property.code">code</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#code CoreSecurityList#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#type CoreSecurityList#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#code CoreSecurityList#code}.

---

### CoreSecurityListEgressSecurityRulesTcpOptions <a name="CoreSecurityListEgressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRulesTcpOptions;

CoreSecurityListEgressSecurityRulesTcpOptions.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
//  .sourcePortRange(CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions.property.sourcePortRange"></a>

```java
public CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source_port_range CoreSecurityList#source_port_range}

---

### CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange <a name="CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange;

CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

### CoreSecurityListEgressSecurityRulesUdpOptions <a name="CoreSecurityListEgressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRulesUdpOptions;

CoreSecurityListEgressSecurityRulesUdpOptions.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
//  .sourcePortRange(CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions.property.sourcePortRange"></a>

```java
public CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source_port_range CoreSecurityList#source_port_range}

---

### CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange <a name="CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange;

CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

### CoreSecurityListIngressSecurityRules <a name="CoreSecurityListIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRules;

CoreSecurityListIngressSecurityRules.builder()
    .protocol(java.lang.String)
    .source(java.lang.String)
//  .description(java.lang.String)
//  .icmpOptions(CoreSecurityListIngressSecurityRulesIcmpOptions)
//  .sourceType(java.lang.String)
//  .stateless(java.lang.Boolean)
//  .stateless(IResolvable)
//  .tcpOptions(CoreSecurityListIngressSecurityRulesTcpOptions)
//  .udpOptions(CoreSecurityListIngressSecurityRulesUdpOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#protocol CoreSecurityList#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source CoreSecurityList#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#description CoreSecurityList#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source_type CoreSecurityList#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.stateless">stateless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#stateless CoreSecurityList#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a></code> | udp_options block. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#protocol CoreSecurityList#protocol}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source CoreSecurityList#source}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#description CoreSecurityList#description}.

---

##### `icmpOptions`<sup>Optional</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.icmpOptions"></a>

```java
public CoreSecurityListIngressSecurityRulesIcmpOptions getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#icmp_options CoreSecurityList#icmp_options}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source_type CoreSecurityList#source_type}.

---

##### `stateless`<sup>Optional</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.stateless"></a>

```java
public java.lang.Object getStateless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#stateless CoreSecurityList#stateless}.

---

##### `tcpOptions`<sup>Optional</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.tcpOptions"></a>

```java
public CoreSecurityListIngressSecurityRulesTcpOptions getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#tcp_options CoreSecurityList#tcp_options}

---

##### `udpOptions`<sup>Optional</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules.property.udpOptions"></a>

```java
public CoreSecurityListIngressSecurityRulesUdpOptions getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#udp_options CoreSecurityList#udp_options}

---

### CoreSecurityListIngressSecurityRulesIcmpOptions <a name="CoreSecurityListIngressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRulesIcmpOptions;

CoreSecurityListIngressSecurityRulesIcmpOptions.builder()
    .type(java.lang.Number)
//  .code(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions.property.type">type</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#type CoreSecurityList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions.property.code">code</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#code CoreSecurityList#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#type CoreSecurityList#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#code CoreSecurityList#code}.

---

### CoreSecurityListIngressSecurityRulesTcpOptions <a name="CoreSecurityListIngressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRulesTcpOptions;

CoreSecurityListIngressSecurityRulesTcpOptions.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
//  .sourcePortRange(CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions.property.sourcePortRange"></a>

```java
public CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source_port_range CoreSecurityList#source_port_range}

---

### CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange <a name="CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange;

CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

### CoreSecurityListIngressSecurityRulesUdpOptions <a name="CoreSecurityListIngressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRulesUdpOptions;

CoreSecurityListIngressSecurityRulesUdpOptions.builder()
//  .max(java.lang.Number)
//  .min(java.lang.Number)
//  .sourcePortRange(CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions.property.sourcePortRange"></a>

```java
public CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#source_port_range CoreSecurityList#source_port_range}

---

### CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange <a name="CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange;

CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#max CoreSecurityList#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#min CoreSecurityList#min}.

---

### CoreSecurityListTimeouts <a name="CoreSecurityListTimeouts" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListTimeouts;

CoreSecurityListTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#create CoreSecurityList#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#delete CoreSecurityList#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#update CoreSecurityList#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#create CoreSecurityList#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#delete CoreSecurityList#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_security_list#update CoreSecurityList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference <a name="CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference;

new CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resetCode"></a>

```java
public void resetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.codeInput"></a>

```java
public java.lang.Number getCodeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.Number getTypeInput();
```

- *Type:* java.lang.Number

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```java
public CoreSecurityListEgressSecurityRulesIcmpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a>

---


### CoreSecurityListEgressSecurityRulesList <a name="CoreSecurityListEgressSecurityRulesList" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRulesList;

new CoreSecurityListEgressSecurityRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.get"></a>

```java
public CoreSecurityListEgressSecurityRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules">CoreSecurityListEgressSecurityRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules">CoreSecurityListEgressSecurityRules</a>>

---


### CoreSecurityListEgressSecurityRulesOutputReference <a name="CoreSecurityListEgressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRulesOutputReference;

new CoreSecurityListEgressSecurityRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putIcmpOptions">putIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putTcpOptions">putTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putUdpOptions">putUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetIcmpOptions">resetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetStateless">resetStateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetTcpOptions">resetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetUdpOptions">resetUdpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcmpOptions` <a name="putIcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putIcmpOptions"></a>

```java
public void putIcmpOptions(CoreSecurityListEgressSecurityRulesIcmpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a>

---

##### `putTcpOptions` <a name="putTcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putTcpOptions"></a>

```java
public void putTcpOptions(CoreSecurityListEgressSecurityRulesTcpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a>

---

##### `putUdpOptions` <a name="putUdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putUdpOptions"></a>

```java
public void putUdpOptions(CoreSecurityListEgressSecurityRulesUdpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationType` <a name="resetDestinationType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetDestinationType"></a>

```java
public void resetDestinationType()
```

##### `resetIcmpOptions` <a name="resetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetIcmpOptions"></a>

```java
public void resetIcmpOptions()
```

##### `resetStateless` <a name="resetStateless" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetStateless"></a>

```java
public void resetStateless()
```

##### `resetTcpOptions` <a name="resetTcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetTcpOptions"></a>

```java
public void resetTcpOptions()
```

##### `resetUdpOptions` <a name="resetUdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.resetUdpOptions"></a>

```java
public void resetUdpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference">CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference">CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference">CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.icmpOptionsInput">icmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.statelessInput">statelessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.tcpOptionsInput">tcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.udpOptionsInput">udpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules">CoreSecurityListEgressSecurityRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.icmpOptions"></a>

```java
public CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference">CoreSecurityListEgressSecurityRulesIcmpOptionsOutputReference</a>

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.tcpOptions"></a>

```java
public CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference">CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.udpOptions"></a>

```java
public CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference">CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `icmpOptionsInput`<sup>Optional</sup> <a name="icmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.icmpOptionsInput"></a>

```java
public CoreSecurityListEgressSecurityRulesIcmpOptions getIcmpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesIcmpOptions">CoreSecurityListEgressSecurityRulesIcmpOptions</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `statelessInput`<sup>Optional</sup> <a name="statelessInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.statelessInput"></a>

```java
public java.lang.Object getStatelessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tcpOptionsInput`<sup>Optional</sup> <a name="tcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.tcpOptionsInput"></a>

```java
public CoreSecurityListEgressSecurityRulesTcpOptions getTcpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a>

---

##### `udpOptionsInput`<sup>Optional</sup> <a name="udpOptionsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.udpOptionsInput"></a>

```java
public CoreSecurityListEgressSecurityRulesUdpOptions getUdpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.stateless"></a>

```java
public java.lang.Object getStateless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRules">CoreSecurityListEgressSecurityRules</a>

---


### CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference <a name="CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference;

new CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```java
public void putSourcePortRange(CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMin"></a>

```java
public void resetMin()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```java
public CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```java
public CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange getSourcePortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```java
public CoreSecurityListEgressSecurityRulesTcpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptions">CoreSecurityListEgressSecurityRulesTcpOptions</a>

---


### CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference;

new CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---


### CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference <a name="CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference;

new CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```java
public void putSourcePortRange(CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMin"></a>

```java
public void resetMin()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```java
public CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```java
public CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange getSourcePortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```java
public CoreSecurityListEgressSecurityRulesUdpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptions">CoreSecurityListEgressSecurityRulesUdpOptions</a>

---


### CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference;

new CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---


### CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference <a name="CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference;

new CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resetCode"></a>

```java
public void resetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.codeInput"></a>

```java
public java.lang.Number getCodeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.Number getTypeInput();
```

- *Type:* java.lang.Number

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```java
public CoreSecurityListIngressSecurityRulesIcmpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a>

---


### CoreSecurityListIngressSecurityRulesList <a name="CoreSecurityListIngressSecurityRulesList" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRulesList;

new CoreSecurityListIngressSecurityRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.get"></a>

```java
public CoreSecurityListIngressSecurityRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules">CoreSecurityListIngressSecurityRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules">CoreSecurityListIngressSecurityRules</a>>

---


### CoreSecurityListIngressSecurityRulesOutputReference <a name="CoreSecurityListIngressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRulesOutputReference;

new CoreSecurityListIngressSecurityRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putIcmpOptions">putIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putTcpOptions">putTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putUdpOptions">putUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetIcmpOptions">resetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetStateless">resetStateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetTcpOptions">resetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetUdpOptions">resetUdpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcmpOptions` <a name="putIcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putIcmpOptions"></a>

```java
public void putIcmpOptions(CoreSecurityListIngressSecurityRulesIcmpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a>

---

##### `putTcpOptions` <a name="putTcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putTcpOptions"></a>

```java
public void putTcpOptions(CoreSecurityListIngressSecurityRulesTcpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a>

---

##### `putUdpOptions` <a name="putUdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putUdpOptions"></a>

```java
public void putUdpOptions(CoreSecurityListIngressSecurityRulesUdpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIcmpOptions` <a name="resetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetIcmpOptions"></a>

```java
public void resetIcmpOptions()
```

##### `resetSourceType` <a name="resetSourceType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetSourceType"></a>

```java
public void resetSourceType()
```

##### `resetStateless` <a name="resetStateless" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetStateless"></a>

```java
public void resetStateless()
```

##### `resetTcpOptions` <a name="resetTcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetTcpOptions"></a>

```java
public void resetTcpOptions()
```

##### `resetUdpOptions` <a name="resetUdpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.resetUdpOptions"></a>

```java
public void resetUdpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference">CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference">CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference">CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.icmpOptionsInput">icmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.statelessInput">statelessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.tcpOptionsInput">tcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.udpOptionsInput">udpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules">CoreSecurityListIngressSecurityRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.icmpOptions"></a>

```java
public CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference">CoreSecurityListIngressSecurityRulesIcmpOptionsOutputReference</a>

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.tcpOptions"></a>

```java
public CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference">CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.udpOptions"></a>

```java
public CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference">CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `icmpOptionsInput`<sup>Optional</sup> <a name="icmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.icmpOptionsInput"></a>

```java
public CoreSecurityListIngressSecurityRulesIcmpOptions getIcmpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesIcmpOptions">CoreSecurityListIngressSecurityRulesIcmpOptions</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `statelessInput`<sup>Optional</sup> <a name="statelessInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.statelessInput"></a>

```java
public java.lang.Object getStatelessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tcpOptionsInput`<sup>Optional</sup> <a name="tcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.tcpOptionsInput"></a>

```java
public CoreSecurityListIngressSecurityRulesTcpOptions getTcpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a>

---

##### `udpOptionsInput`<sup>Optional</sup> <a name="udpOptionsInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.udpOptionsInput"></a>

```java
public CoreSecurityListIngressSecurityRulesUdpOptions getUdpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.stateless"></a>

```java
public java.lang.Object getStateless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRules">CoreSecurityListIngressSecurityRules</a>

---


### CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference <a name="CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference;

new CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```java
public void putSourcePortRange(CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMin"></a>

```java
public void resetMin()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```java
public CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```java
public CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange getSourcePortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```java
public CoreSecurityListIngressSecurityRulesTcpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptions">CoreSecurityListIngressSecurityRulesTcpOptions</a>

---


### CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference;

new CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---


### CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference <a name="CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference;

new CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```java
public void putSourcePortRange(CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMin"></a>

```java
public void resetMin()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```java
public CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```java
public CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange getSourcePortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```java
public CoreSecurityListIngressSecurityRulesUdpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptions">CoreSecurityListIngressSecurityRulesUdpOptions</a>

---


### CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference;

new CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---


### CoreSecurityListTimeoutsOutputReference <a name="CoreSecurityListTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_security_list.CoreSecurityListTimeoutsOutputReference;

new CoreSecurityListTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts">CoreSecurityListTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreSecurityList.CoreSecurityListTimeouts">CoreSecurityListTimeouts</a>

---



