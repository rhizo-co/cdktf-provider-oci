# `fusionAppsFusionEnvironmentFamily` Submodule <a name="`fusionAppsFusionEnvironmentFamily` Submodule" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FusionAppsFusionEnvironmentFamily <a name="FusionAppsFusionEnvironmentFamily" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family oci_fusion_apps_fusion_environment_family}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_family.FusionAppsFusionEnvironmentFamily;

FusionAppsFusionEnvironmentFamily.Builder.create(Construct scope, java.lang.String id)
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
    .subscriptionIds(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .familyMaintenancePolicy(FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(FusionAppsFusionEnvironmentFamilyTimeouts)
//  .timeUpdated(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#compartment_id FusionAppsFusionEnvironmentFamily#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#display_name FusionAppsFusionEnvironmentFamily#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.subscriptionIds">subscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#subscription_ids FusionAppsFusionEnvironmentFamily#subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#defined_tags FusionAppsFusionEnvironmentFamily#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.familyMaintenancePolicy">familyMaintenancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a></code> | family_maintenance_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#freeform_tags FusionAppsFusionEnvironmentFamily#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#id FusionAppsFusionEnvironmentFamily#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#time_updated FusionAppsFusionEnvironmentFamily#time_updated}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#compartment_id FusionAppsFusionEnvironmentFamily#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#display_name FusionAppsFusionEnvironmentFamily#display_name}.

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.subscriptionIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#subscription_ids FusionAppsFusionEnvironmentFamily#subscription_ids}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#defined_tags FusionAppsFusionEnvironmentFamily#defined_tags}.

---

##### `familyMaintenancePolicy`<sup>Optional</sup> <a name="familyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.familyMaintenancePolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

family_maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#family_maintenance_policy FusionAppsFusionEnvironmentFamily#family_maintenance_policy}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#freeform_tags FusionAppsFusionEnvironmentFamily#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#id FusionAppsFusionEnvironmentFamily#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#timeouts FusionAppsFusionEnvironmentFamily#timeouts}

---

##### `timeUpdated`<sup>Optional</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.Initializer.parameter.timeUpdated"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#time_updated FusionAppsFusionEnvironmentFamily#time_updated}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putFamilyMaintenancePolicy">putFamilyMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetFamilyMaintenancePolicy">resetFamilyMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetTimeUpdated">resetTimeUpdated</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFamilyMaintenancePolicy` <a name="putFamilyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putFamilyMaintenancePolicy"></a>

```java
public void putFamilyMaintenancePolicy(FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putFamilyMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putTimeouts"></a>

```java
public void putTimeouts(FusionAppsFusionEnvironmentFamilyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFamilyMaintenancePolicy` <a name="resetFamilyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetFamilyMaintenancePolicy"></a>

```java
public void resetFamilyMaintenancePolicy()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeUpdated` <a name="resetTimeUpdated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.resetTimeUpdated"></a>

```java
public void resetTimeUpdated()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FusionAppsFusionEnvironmentFamily resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_family.FusionAppsFusionEnvironmentFamily;

FusionAppsFusionEnvironmentFamily.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_family.FusionAppsFusionEnvironmentFamily;

FusionAppsFusionEnvironmentFamily.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_family.FusionAppsFusionEnvironmentFamily;

FusionAppsFusionEnvironmentFamily.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_family.FusionAppsFusionEnvironmentFamily;

FusionAppsFusionEnvironmentFamily.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FusionAppsFusionEnvironmentFamily.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FusionAppsFusionEnvironmentFamily resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FusionAppsFusionEnvironmentFamily to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FusionAppsFusionEnvironmentFamily that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FusionAppsFusionEnvironmentFamily to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.familyMaintenancePolicy">familyMaintenancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.isSubscriptionUpdateNeeded">isSubscriptionUpdateNeeded</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.systemName">systemName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference">FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.familyMaintenancePolicyInput">familyMaintenancePolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.subscriptionIdsInput">subscriptionIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeUpdatedInput">timeUpdatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.subscriptionIds">subscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `familyMaintenancePolicy`<sup>Required</sup> <a name="familyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.familyMaintenancePolicy"></a>

```java
public FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference getFamilyMaintenancePolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference</a>

---

##### `isSubscriptionUpdateNeeded`<sup>Required</sup> <a name="isSubscriptionUpdateNeeded" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.isSubscriptionUpdateNeeded"></a>

```java
public IResolvable getIsSubscriptionUpdateNeeded();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemName`<sup>Required</sup> <a name="systemName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.systemName"></a>

```java
public java.lang.String getSystemName();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeouts"></a>

```java
public FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference">FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `familyMaintenancePolicyInput`<sup>Optional</sup> <a name="familyMaintenancePolicyInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.familyMaintenancePolicyInput"></a>

```java
public FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy getFamilyMaintenancePolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdsInput`<sup>Optional</sup> <a name="subscriptionIdsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.subscriptionIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubscriptionIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>

---

##### `timeUpdatedInput`<sup>Optional</sup> <a name="timeUpdatedInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeUpdatedInput"></a>

```java
public java.lang.String getTimeUpdatedInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.subscriptionIds"></a>

```java
public java.util.List<java.lang.String> getSubscriptionIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamily.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FusionAppsFusionEnvironmentFamilyConfig <a name="FusionAppsFusionEnvironmentFamilyConfig" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_family.FusionAppsFusionEnvironmentFamilyConfig;

FusionAppsFusionEnvironmentFamilyConfig.builder()
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
    .subscriptionIds(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .familyMaintenancePolicy(FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(FusionAppsFusionEnvironmentFamilyTimeouts)
//  .timeUpdated(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#compartment_id FusionAppsFusionEnvironmentFamily#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#display_name FusionAppsFusionEnvironmentFamily#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.subscriptionIds">subscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#subscription_ids FusionAppsFusionEnvironmentFamily#subscription_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#defined_tags FusionAppsFusionEnvironmentFamily#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.familyMaintenancePolicy">familyMaintenancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a></code> | family_maintenance_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#freeform_tags FusionAppsFusionEnvironmentFamily#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#id FusionAppsFusionEnvironmentFamily#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#time_updated FusionAppsFusionEnvironmentFamily#time_updated}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#compartment_id FusionAppsFusionEnvironmentFamily#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#display_name FusionAppsFusionEnvironmentFamily#display_name}.

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.subscriptionIds"></a>

```java
public java.util.List<java.lang.String> getSubscriptionIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#subscription_ids FusionAppsFusionEnvironmentFamily#subscription_ids}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#defined_tags FusionAppsFusionEnvironmentFamily#defined_tags}.

---

##### `familyMaintenancePolicy`<sup>Optional</sup> <a name="familyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.familyMaintenancePolicy"></a>

```java
public FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy getFamilyMaintenancePolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

family_maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#family_maintenance_policy FusionAppsFusionEnvironmentFamily#family_maintenance_policy}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#freeform_tags FusionAppsFusionEnvironmentFamily#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#id FusionAppsFusionEnvironmentFamily#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.timeouts"></a>

```java
public FusionAppsFusionEnvironmentFamilyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#timeouts FusionAppsFusionEnvironmentFamily#timeouts}

---

##### `timeUpdated`<sup>Optional</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyConfig.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#time_updated FusionAppsFusionEnvironmentFamily#time_updated}.

---

### FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy <a name="FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_family.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy;

FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.builder()
//  .concurrentMaintenance(java.lang.String)
//  .isMonthlyPatchingEnabled(java.lang.Boolean)
//  .isMonthlyPatchingEnabled(IResolvable)
//  .quarterlyUpgradeBeginTimes(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.concurrentMaintenance">concurrentMaintenance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#concurrent_maintenance FusionAppsFusionEnvironmentFamily#concurrent_maintenance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#is_monthly_patching_enabled FusionAppsFusionEnvironmentFamily#is_monthly_patching_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.quarterlyUpgradeBeginTimes">quarterlyUpgradeBeginTimes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#quarterly_upgrade_begin_times FusionAppsFusionEnvironmentFamily#quarterly_upgrade_begin_times}. |

---

##### `concurrentMaintenance`<sup>Optional</sup> <a name="concurrentMaintenance" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.concurrentMaintenance"></a>

```java
public java.lang.String getConcurrentMaintenance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#concurrent_maintenance FusionAppsFusionEnvironmentFamily#concurrent_maintenance}.

---

##### `isMonthlyPatchingEnabled`<sup>Optional</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.isMonthlyPatchingEnabled"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#is_monthly_patching_enabled FusionAppsFusionEnvironmentFamily#is_monthly_patching_enabled}.

---

##### `quarterlyUpgradeBeginTimes`<sup>Optional</sup> <a name="quarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy.property.quarterlyUpgradeBeginTimes"></a>

```java
public java.lang.String getQuarterlyUpgradeBeginTimes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#quarterly_upgrade_begin_times FusionAppsFusionEnvironmentFamily#quarterly_upgrade_begin_times}.

---

### FusionAppsFusionEnvironmentFamilyTimeouts <a name="FusionAppsFusionEnvironmentFamilyTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_family.FusionAppsFusionEnvironmentFamilyTimeouts;

FusionAppsFusionEnvironmentFamilyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#create FusionAppsFusionEnvironmentFamily#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#delete FusionAppsFusionEnvironmentFamily#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#update FusionAppsFusionEnvironmentFamily#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#create FusionAppsFusionEnvironmentFamily#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#delete FusionAppsFusionEnvironmentFamily#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_family#update FusionAppsFusionEnvironmentFamily#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference <a name="FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_family.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference;

new FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetConcurrentMaintenance">resetConcurrentMaintenance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetIsMonthlyPatchingEnabled">resetIsMonthlyPatchingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetQuarterlyUpgradeBeginTimes">resetQuarterlyUpgradeBeginTimes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConcurrentMaintenance` <a name="resetConcurrentMaintenance" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetConcurrentMaintenance"></a>

```java
public void resetConcurrentMaintenance()
```

##### `resetIsMonthlyPatchingEnabled` <a name="resetIsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetIsMonthlyPatchingEnabled"></a>

```java
public void resetIsMonthlyPatchingEnabled()
```

##### `resetQuarterlyUpgradeBeginTimes` <a name="resetQuarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.resetQuarterlyUpgradeBeginTimes"></a>

```java
public void resetQuarterlyUpgradeBeginTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.concurrentMaintenanceInput">concurrentMaintenanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabledInput">isMonthlyPatchingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimesInput">quarterlyUpgradeBeginTimesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.concurrentMaintenance">concurrentMaintenance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes">quarterlyUpgradeBeginTimes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `concurrentMaintenanceInput`<sup>Optional</sup> <a name="concurrentMaintenanceInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.concurrentMaintenanceInput"></a>

```java
public java.lang.String getConcurrentMaintenanceInput();
```

- *Type:* java.lang.String

---

##### `isMonthlyPatchingEnabledInput`<sup>Optional</sup> <a name="isMonthlyPatchingEnabledInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabledInput"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `quarterlyUpgradeBeginTimesInput`<sup>Optional</sup> <a name="quarterlyUpgradeBeginTimesInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimesInput"></a>

```java
public java.lang.String getQuarterlyUpgradeBeginTimesInput();
```

- *Type:* java.lang.String

---

##### `concurrentMaintenance`<sup>Required</sup> <a name="concurrentMaintenance" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.concurrentMaintenance"></a>

```java
public java.lang.String getConcurrentMaintenance();
```

- *Type:* java.lang.String

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabled"></a>

```java
public java.lang.Object getIsMonthlyPatchingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `quarterlyUpgradeBeginTimes`<sup>Required</sup> <a name="quarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes"></a>

```java
public java.lang.String getQuarterlyUpgradeBeginTimes();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicyOutputReference.property.internalValue"></a>

```java
public FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy">FusionAppsFusionEnvironmentFamilyFamilyMaintenancePolicy</a>

---


### FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference <a name="FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fusion_apps_fusion_environment_family.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference;

new FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentFamily.FusionAppsFusionEnvironmentFamilyTimeouts">FusionAppsFusionEnvironmentFamilyTimeouts</a>

---



