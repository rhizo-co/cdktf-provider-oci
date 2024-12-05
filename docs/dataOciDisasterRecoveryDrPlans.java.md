# `dataOciDisasterRecoveryDrPlans` Submodule <a name="`dataOciDisasterRecoveryDrPlans` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDisasterRecoveryDrPlans <a name="DataOciDisasterRecoveryDrPlans" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans oci_disaster_recovery_dr_plans}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlans;

DataOciDisasterRecoveryDrPlans.Builder.create(Construct scope, java.lang.String id)
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
    .drProtectionGroupId(java.lang.String)
//  .displayName(java.lang.String)
//  .drPlanId(java.lang.String)
//  .drPlanType(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDisasterRecoveryDrPlansFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.drProtectionGroupId">drProtectionGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_protection_group_id DataOciDisasterRecoveryDrPlans#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#display_name DataOciDisasterRecoveryDrPlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.drPlanId">drPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_id DataOciDisasterRecoveryDrPlans#dr_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.drPlanType">drPlanType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_type DataOciDisasterRecoveryDrPlans#dr_plan_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#id DataOciDisasterRecoveryDrPlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#state DataOciDisasterRecoveryDrPlans#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `drProtectionGroupId`<sup>Required</sup> <a name="drProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.drProtectionGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_protection_group_id DataOciDisasterRecoveryDrPlans#dr_protection_group_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#display_name DataOciDisasterRecoveryDrPlans#display_name}.

---

##### `drPlanId`<sup>Optional</sup> <a name="drPlanId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.drPlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_id DataOciDisasterRecoveryDrPlans#dr_plan_id}.

---

##### `drPlanType`<sup>Optional</sup> <a name="drPlanType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.drPlanType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_type DataOciDisasterRecoveryDrPlans#dr_plan_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#filter DataOciDisasterRecoveryDrPlans#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#id DataOciDisasterRecoveryDrPlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#state DataOciDisasterRecoveryDrPlans#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDrPlanId">resetDrPlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDrPlanType">resetDrPlanType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDisasterRecoveryDrPlansFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDrPlanId` <a name="resetDrPlanId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDrPlanId"></a>

```java
public void resetDrPlanId()
```

##### `resetDrPlanType` <a name="resetDrPlanType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDrPlanType"></a>

```java
public void resetDrPlanType()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlans resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlans;

DataOciDisasterRecoveryDrPlans.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlans;

DataOciDisasterRecoveryDrPlans.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlans;

DataOciDisasterRecoveryDrPlans.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlans;

DataOciDisasterRecoveryDrPlans.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDisasterRecoveryDrPlans.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlans resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDisasterRecoveryDrPlans to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDisasterRecoveryDrPlans that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDisasterRecoveryDrPlans to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanCollection">drPlanCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList">DataOciDisasterRecoveryDrPlansDrPlanCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList">DataOciDisasterRecoveryDrPlansFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanIdInput">drPlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanTypeInput">drPlanTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drProtectionGroupIdInput">drProtectionGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanId">drPlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanType">drPlanType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drProtectionGroupId">drProtectionGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `drPlanCollection`<sup>Required</sup> <a name="drPlanCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanCollection"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionList getDrPlanCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList">DataOciDisasterRecoveryDrPlansDrPlanCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.filter"></a>

```java
public DataOciDisasterRecoveryDrPlansFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList">DataOciDisasterRecoveryDrPlansFilterList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `drPlanIdInput`<sup>Optional</sup> <a name="drPlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanIdInput"></a>

```java
public java.lang.String getDrPlanIdInput();
```

- *Type:* java.lang.String

---

##### `drPlanTypeInput`<sup>Optional</sup> <a name="drPlanTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanTypeInput"></a>

```java
public java.lang.String getDrPlanTypeInput();
```

- *Type:* java.lang.String

---

##### `drProtectionGroupIdInput`<sup>Optional</sup> <a name="drProtectionGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drProtectionGroupIdInput"></a>

```java
public java.lang.String getDrProtectionGroupIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `drPlanId`<sup>Required</sup> <a name="drPlanId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanId"></a>

```java
public java.lang.String getDrPlanId();
```

- *Type:* java.lang.String

---

##### `drPlanType`<sup>Required</sup> <a name="drPlanType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanType"></a>

```java
public java.lang.String getDrPlanType();
```

- *Type:* java.lang.String

---

##### `drProtectionGroupId`<sup>Required</sup> <a name="drProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drProtectionGroupId"></a>

```java
public java.lang.String getDrProtectionGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDisasterRecoveryDrPlansConfig <a name="DataOciDisasterRecoveryDrPlansConfig" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansConfig;

DataOciDisasterRecoveryDrPlansConfig.builder()
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
    .drProtectionGroupId(java.lang.String)
//  .displayName(java.lang.String)
//  .drPlanId(java.lang.String)
//  .drPlanType(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDisasterRecoveryDrPlansFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drProtectionGroupId">drProtectionGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_protection_group_id DataOciDisasterRecoveryDrPlans#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#display_name DataOciDisasterRecoveryDrPlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drPlanId">drPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_id DataOciDisasterRecoveryDrPlans#dr_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drPlanType">drPlanType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_type DataOciDisasterRecoveryDrPlans#dr_plan_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#id DataOciDisasterRecoveryDrPlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#state DataOciDisasterRecoveryDrPlans#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `drProtectionGroupId`<sup>Required</sup> <a name="drProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drProtectionGroupId"></a>

```java
public java.lang.String getDrProtectionGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_protection_group_id DataOciDisasterRecoveryDrPlans#dr_protection_group_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#display_name DataOciDisasterRecoveryDrPlans#display_name}.

---

##### `drPlanId`<sup>Optional</sup> <a name="drPlanId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drPlanId"></a>

```java
public java.lang.String getDrPlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_id DataOciDisasterRecoveryDrPlans#dr_plan_id}.

---

##### `drPlanType`<sup>Optional</sup> <a name="drPlanType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drPlanType"></a>

```java
public java.lang.String getDrPlanType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_type DataOciDisasterRecoveryDrPlans#dr_plan_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#filter DataOciDisasterRecoveryDrPlans#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#id DataOciDisasterRecoveryDrPlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#state DataOciDisasterRecoveryDrPlans#state}.

---

### DataOciDisasterRecoveryDrPlansDrPlanCollection <a name="DataOciDisasterRecoveryDrPlansDrPlanCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollection;

DataOciDisasterRecoveryDrPlansDrPlanCollection.builder()
    .build();
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItems <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems;

DataOciDisasterRecoveryDrPlansDrPlanCollectionItems.builder()
    .build();
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups;

DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups.builder()
    .build();
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps;

DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps.builder()
    .build();
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep;

DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep.builder()
    .build();
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation;

DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation.builder()
    .build();
```


### DataOciDisasterRecoveryDrPlansFilter <a name="DataOciDisasterRecoveryDrPlansFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansFilter;

DataOciDisasterRecoveryDrPlansFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#name DataOciDisasterRecoveryDrPlans#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#values DataOciDisasterRecoveryDrPlans#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#regex DataOciDisasterRecoveryDrPlans#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#name DataOciDisasterRecoveryDrPlans#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#values DataOciDisasterRecoveryDrPlans#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#regex DataOciDisasterRecoveryDrPlans#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList;

new DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.get"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference;

new DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.drProtectionGroupId">drProtectionGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.lifeCycleDetails">lifeCycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.peerDrProtectionGroupId">peerDrProtectionGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.peerRegion">peerRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.planGroups">planGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems">DataOciDisasterRecoveryDrPlansDrPlanCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `drProtectionGroupId`<sup>Required</sup> <a name="drProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.drProtectionGroupId"></a>

```java
public java.lang.String getDrProtectionGroupId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifeCycleDetails`<sup>Required</sup> <a name="lifeCycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.lifeCycleDetails"></a>

```java
public java.lang.String getLifeCycleDetails();
```

- *Type:* java.lang.String

---

##### `peerDrProtectionGroupId`<sup>Required</sup> <a name="peerDrProtectionGroupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.peerDrProtectionGroupId"></a>

```java
public java.lang.String getPeerDrProtectionGroupId();
```

- *Type:* java.lang.String

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.peerRegion"></a>

```java
public java.lang.String getPeerRegion();
```

- *Type:* java.lang.String

---

##### `planGroups`<sup>Required</sup> <a name="planGroups" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.planGroups"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList getPlanGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems">DataOciDisasterRecoveryDrPlansDrPlanCollectionItems</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList;

new DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.get"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference;

new DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.isPauseEnabled">isPauseEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.steps">steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPauseEnabled`<sup>Required</sup> <a name="isPauseEnabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.isPauseEnabled"></a>

```java
public IResolvable getIsPauseEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `steps`<sup>Required</sup> <a name="steps" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.steps"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList getSteps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.internalValue"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList;

new DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.get"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference;

new DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.errorMode">errorMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.memberId">memberId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.userDefinedStep">userDefinedStep</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `errorMode`<sup>Required</sup> <a name="errorMode" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.errorMode"></a>

```java
public java.lang.String getErrorMode();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.memberId"></a>

```java
public java.lang.String getMemberId();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userDefinedStep`<sup>Required</sup> <a name="userDefinedStep" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.userDefinedStep"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList getUserDefinedStep();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.internalValue"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList;

new DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.get"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList;

new DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference;

new DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.internalValue"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference;

new DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.functionRegion">functionRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.objectStorageScriptLocation">objectStorageScriptLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.requestBody">requestBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runAsUser">runAsUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceId">runOnInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceRegion">runOnInstanceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.scriptCommand">scriptCommand</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.stepType">stepType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `functionRegion`<sup>Required</sup> <a name="functionRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.functionRegion"></a>

```java
public java.lang.String getFunctionRegion();
```

- *Type:* java.lang.String

---

##### `objectStorageScriptLocation`<sup>Required</sup> <a name="objectStorageScriptLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.objectStorageScriptLocation"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList getObjectStorageScriptLocation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList</a>

---

##### `requestBody`<sup>Required</sup> <a name="requestBody" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.requestBody"></a>

```java
public java.lang.String getRequestBody();
```

- *Type:* java.lang.String

---

##### `runAsUser`<sup>Required</sup> <a name="runAsUser" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runAsUser"></a>

```java
public java.lang.String getRunAsUser();
```

- *Type:* java.lang.String

---

##### `runOnInstanceId`<sup>Required</sup> <a name="runOnInstanceId" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceId"></a>

```java
public java.lang.String getRunOnInstanceId();
```

- *Type:* java.lang.String

---

##### `runOnInstanceRegion`<sup>Required</sup> <a name="runOnInstanceRegion" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceRegion"></a>

```java
public java.lang.String getRunOnInstanceRegion();
```

- *Type:* java.lang.String

---

##### `scriptCommand`<sup>Required</sup> <a name="scriptCommand" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.scriptCommand"></a>

```java
public java.lang.String getScriptCommand();
```

- *Type:* java.lang.String

---

##### `stepType`<sup>Required</sup> <a name="stepType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.stepType"></a>

```java
public java.lang.String getStepType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.internalValue"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList;

new DataOciDisasterRecoveryDrPlansDrPlanCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.get"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference;

new DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection">DataOciDisasterRecoveryDrPlansDrPlanCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.items"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDisasterRecoveryDrPlansDrPlanCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection">DataOciDisasterRecoveryDrPlansDrPlanCollection</a>

---


### DataOciDisasterRecoveryDrPlansFilterList <a name="DataOciDisasterRecoveryDrPlansFilterList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansFilterList;

new DataOciDisasterRecoveryDrPlansFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.get"></a>

```java
public DataOciDisasterRecoveryDrPlansFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>>

---


### DataOciDisasterRecoveryDrPlansFilterOutputReference <a name="DataOciDisasterRecoveryDrPlansFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_disaster_recovery_dr_plans.DataOciDisasterRecoveryDrPlansFilterOutputReference;

new DataOciDisasterRecoveryDrPlansFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>

---



