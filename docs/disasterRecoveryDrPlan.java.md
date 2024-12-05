# `disasterRecoveryDrPlan` Submodule <a name="`disasterRecoveryDrPlan` Submodule" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryDrPlan <a name="DisasterRecoveryDrPlan" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan oci_disaster_recovery_dr_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlan;

DisasterRecoveryDrPlan.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .drProtectionGroupId(java.lang.String)
    .type(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DisasterRecoveryDrPlanTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#display_name DisasterRecoveryDrPlan#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.drProtectionGroupId">drProtectionGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#dr_protection_group_id DisasterRecoveryDrPlan#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#type DisasterRecoveryDrPlan#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#defined_tags DisasterRecoveryDrPlan#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#freeform_tags DisasterRecoveryDrPlan#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#id DisasterRecoveryDrPlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#display_name DisasterRecoveryDrPlan#display_name}.

---

##### `drProtectionGroupId`<sup>Required</sup> <a name="drProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.drProtectionGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#dr_protection_group_id DisasterRecoveryDrPlan#dr_protection_group_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#type DisasterRecoveryDrPlan#type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#defined_tags DisasterRecoveryDrPlan#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#freeform_tags DisasterRecoveryDrPlan#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#id DisasterRecoveryDrPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#timeouts DisasterRecoveryDrPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.putTimeouts"></a>

```java
public void putTimeouts(DisasterRecoveryDrPlanTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DisasterRecoveryDrPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlan;

DisasterRecoveryDrPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlan;

DisasterRecoveryDrPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlan;

DisasterRecoveryDrPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlan;

DisasterRecoveryDrPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DisasterRecoveryDrPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DisasterRecoveryDrPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DisasterRecoveryDrPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DisasterRecoveryDrPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryDrPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.lifeCycleDetails">lifeCycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.peerDrProtectionGroupId">peerDrProtectionGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.peerRegion">peerRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.planGroups">planGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList">DisasterRecoveryDrPlanPlanGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference">DisasterRecoveryDrPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.drProtectionGroupIdInput">drProtectionGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.drProtectionGroupId">drProtectionGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `lifeCycleDetails`<sup>Required</sup> <a name="lifeCycleDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.lifeCycleDetails"></a>

```java
public java.lang.String getLifeCycleDetails();
```

- *Type:* java.lang.String

---

##### `peerDrProtectionGroupId`<sup>Required</sup> <a name="peerDrProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.peerDrProtectionGroupId"></a>

```java
public java.lang.String getPeerDrProtectionGroupId();
```

- *Type:* java.lang.String

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.peerRegion"></a>

```java
public java.lang.String getPeerRegion();
```

- *Type:* java.lang.String

---

##### `planGroups`<sup>Required</sup> <a name="planGroups" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.planGroups"></a>

```java
public DisasterRecoveryDrPlanPlanGroupsList getPlanGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList">DisasterRecoveryDrPlanPlanGroupsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeouts"></a>

```java
public DisasterRecoveryDrPlanTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference">DisasterRecoveryDrPlanTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `drProtectionGroupIdInput`<sup>Optional</sup> <a name="drProtectionGroupIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.drProtectionGroupIdInput"></a>

```java
public java.lang.String getDrProtectionGroupIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `drProtectionGroupId`<sup>Required</sup> <a name="drProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.drProtectionGroupId"></a>

```java
public java.lang.String getDrProtectionGroupId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryDrPlanConfig <a name="DisasterRecoveryDrPlanConfig" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanConfig;

DisasterRecoveryDrPlanConfig.builder()
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
    .displayName(java.lang.String)
    .drProtectionGroupId(java.lang.String)
    .type(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DisasterRecoveryDrPlanTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#display_name DisasterRecoveryDrPlan#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.drProtectionGroupId">drProtectionGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#dr_protection_group_id DisasterRecoveryDrPlan#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#type DisasterRecoveryDrPlan#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#defined_tags DisasterRecoveryDrPlan#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#freeform_tags DisasterRecoveryDrPlan#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#id DisasterRecoveryDrPlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#display_name DisasterRecoveryDrPlan#display_name}.

---

##### `drProtectionGroupId`<sup>Required</sup> <a name="drProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.drProtectionGroupId"></a>

```java
public java.lang.String getDrProtectionGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#dr_protection_group_id DisasterRecoveryDrPlan#dr_protection_group_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#type DisasterRecoveryDrPlan#type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#defined_tags DisasterRecoveryDrPlan#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#freeform_tags DisasterRecoveryDrPlan#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#id DisasterRecoveryDrPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.timeouts"></a>

```java
public DisasterRecoveryDrPlanTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#timeouts DisasterRecoveryDrPlan#timeouts}

---

### DisasterRecoveryDrPlanPlanGroups <a name="DisasterRecoveryDrPlanPlanGroups" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanPlanGroups;

DisasterRecoveryDrPlanPlanGroups.builder()
    .build();
```


### DisasterRecoveryDrPlanPlanGroupsSteps <a name="DisasterRecoveryDrPlanPlanGroupsSteps" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanPlanGroupsSteps;

DisasterRecoveryDrPlanPlanGroupsSteps.builder()
    .build();
```


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep;

DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep.builder()
    .build();
```


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation;

DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation.builder()
    .build();
```


### DisasterRecoveryDrPlanTimeouts <a name="DisasterRecoveryDrPlanTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanTimeouts;

DisasterRecoveryDrPlanTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#create DisasterRecoveryDrPlan#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#delete DisasterRecoveryDrPlan#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#update DisasterRecoveryDrPlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#create DisasterRecoveryDrPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#delete DisasterRecoveryDrPlan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#update DisasterRecoveryDrPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisasterRecoveryDrPlanPlanGroupsList <a name="DisasterRecoveryDrPlanPlanGroupsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanPlanGroupsList;

new DisasterRecoveryDrPlanPlanGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.get"></a>

```java
public DisasterRecoveryDrPlanPlanGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DisasterRecoveryDrPlanPlanGroupsOutputReference <a name="DisasterRecoveryDrPlanPlanGroupsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanPlanGroupsOutputReference;

new DisasterRecoveryDrPlanPlanGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.isPauseEnabled">isPauseEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.steps">steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList">DisasterRecoveryDrPlanPlanGroupsStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups">DisasterRecoveryDrPlanPlanGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPauseEnabled`<sup>Required</sup> <a name="isPauseEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.isPauseEnabled"></a>

```java
public IResolvable getIsPauseEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `steps`<sup>Required</sup> <a name="steps" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.steps"></a>

```java
public DisasterRecoveryDrPlanPlanGroupsStepsList getSteps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList">DisasterRecoveryDrPlanPlanGroupsStepsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.internalValue"></a>

```java
public DisasterRecoveryDrPlanPlanGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups">DisasterRecoveryDrPlanPlanGroups</a>

---


### DisasterRecoveryDrPlanPlanGroupsStepsList <a name="DisasterRecoveryDrPlanPlanGroupsStepsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanPlanGroupsStepsList;

new DisasterRecoveryDrPlanPlanGroupsStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.get"></a>

```java
public DisasterRecoveryDrPlanPlanGroupsStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DisasterRecoveryDrPlanPlanGroupsStepsOutputReference <a name="DisasterRecoveryDrPlanPlanGroupsStepsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference;

new DisasterRecoveryDrPlanPlanGroupsStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.errorMode">errorMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.memberId">memberId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.userDefinedStep">userDefinedStep</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps">DisasterRecoveryDrPlanPlanGroupsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `errorMode`<sup>Required</sup> <a name="errorMode" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.errorMode"></a>

```java
public java.lang.String getErrorMode();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.memberId"></a>

```java
public java.lang.String getMemberId();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userDefinedStep`<sup>Required</sup> <a name="userDefinedStep" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.userDefinedStep"></a>

```java
public DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList getUserDefinedStep();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.internalValue"></a>

```java
public DisasterRecoveryDrPlanPlanGroupsSteps getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps">DisasterRecoveryDrPlanPlanGroupsSteps</a>

---


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList;

new DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.get"></a>

```java
public DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList;

new DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get"></a>

```java
public DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference;

new DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.internalValue"></a>

```java
public DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation</a>

---


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference;

new DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.functionRegion">functionRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.objectStorageScriptLocation">objectStorageScriptLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.requestBody">requestBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runAsUser">runAsUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceId">runOnInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceRegion">runOnInstanceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.scriptCommand">scriptCommand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.stepType">stepType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `functionRegion`<sup>Required</sup> <a name="functionRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.functionRegion"></a>

```java
public java.lang.String getFunctionRegion();
```

- *Type:* java.lang.String

---

##### `objectStorageScriptLocation`<sup>Required</sup> <a name="objectStorageScriptLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.objectStorageScriptLocation"></a>

```java
public DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList getObjectStorageScriptLocation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList</a>

---

##### `requestBody`<sup>Required</sup> <a name="requestBody" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.requestBody"></a>

```java
public java.lang.String getRequestBody();
```

- *Type:* java.lang.String

---

##### `runAsUser`<sup>Required</sup> <a name="runAsUser" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runAsUser"></a>

```java
public java.lang.String getRunAsUser();
```

- *Type:* java.lang.String

---

##### `runOnInstanceId`<sup>Required</sup> <a name="runOnInstanceId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceId"></a>

```java
public java.lang.String getRunOnInstanceId();
```

- *Type:* java.lang.String

---

##### `runOnInstanceRegion`<sup>Required</sup> <a name="runOnInstanceRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceRegion"></a>

```java
public java.lang.String getRunOnInstanceRegion();
```

- *Type:* java.lang.String

---

##### `scriptCommand`<sup>Required</sup> <a name="scriptCommand" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.scriptCommand"></a>

```java
public java.lang.String getScriptCommand();
```

- *Type:* java.lang.String

---

##### `stepType`<sup>Required</sup> <a name="stepType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.stepType"></a>

```java
public java.lang.String getStepType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.internalValue"></a>

```java
public DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep</a>

---


### DisasterRecoveryDrPlanTimeoutsOutputReference <a name="DisasterRecoveryDrPlanTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.disaster_recovery_dr_plan.DisasterRecoveryDrPlanTimeoutsOutputReference;

new DisasterRecoveryDrPlanTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>

---



