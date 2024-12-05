# `cloudGuardDetectorRecipe` Submodule <a name="`cloudGuardDetectorRecipe` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardDetectorRecipe <a name="CloudGuardDetectorRecipe" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe oci_cloud_guard_detector_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipe;

CloudGuardDetectorRecipe.Builder.create(Construct scope, java.lang.String id)
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
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .detector(java.lang.String)
//  .detectorRules(IResolvable)
//  .detectorRules(java.util.List<CloudGuardDetectorRecipeDetectorRules>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .sourceDetectorRecipeId(java.lang.String)
//  .timeouts(CloudGuardDetectorRecipeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#compartment_id CloudGuardDetectorRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#display_name CloudGuardDetectorRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#defined_tags CloudGuardDetectorRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#description CloudGuardDetectorRecipe#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.detector">detector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector CloudGuardDetectorRecipe#detector}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.detectorRules">detectorRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules">CloudGuardDetectorRecipeDetectorRules</a>></code> | detector_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#freeform_tags CloudGuardDetectorRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#id CloudGuardDetectorRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.sourceDetectorRecipeId">sourceDetectorRecipeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#source_detector_recipe_id CloudGuardDetectorRecipe#source_detector_recipe_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts">CloudGuardDetectorRecipeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#compartment_id CloudGuardDetectorRecipe#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#display_name CloudGuardDetectorRecipe#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#defined_tags CloudGuardDetectorRecipe#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#description CloudGuardDetectorRecipe#description}.

---

##### `detector`<sup>Optional</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.detector"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector CloudGuardDetectorRecipe#detector}.

---

##### `detectorRules`<sup>Optional</sup> <a name="detectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.detectorRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules">CloudGuardDetectorRecipeDetectorRules</a>>

detector_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector_rules CloudGuardDetectorRecipe#detector_rules}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#freeform_tags CloudGuardDetectorRecipe#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#id CloudGuardDetectorRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceDetectorRecipeId`<sup>Optional</sup> <a name="sourceDetectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.sourceDetectorRecipeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#source_detector_recipe_id CloudGuardDetectorRecipe#source_detector_recipe_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts">CloudGuardDetectorRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#timeouts CloudGuardDetectorRecipe#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.putDetectorRules">putDetectorRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDetector">resetDetector</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDetectorRules">resetDetectorRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetSourceDetectorRecipeId">resetSourceDetectorRecipeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetectorRules` <a name="putDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.putDetectorRules"></a>

```java
public void putDetectorRules(IResolvable OR java.util.List<CloudGuardDetectorRecipeDetectorRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.putDetectorRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules">CloudGuardDetectorRecipeDetectorRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.putTimeouts"></a>

```java
public void putTimeouts(CloudGuardDetectorRecipeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts">CloudGuardDetectorRecipeTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDetector` <a name="resetDetector" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDetector"></a>

```java
public void resetDetector()
```

##### `resetDetectorRules` <a name="resetDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetDetectorRules"></a>

```java
public void resetDetectorRules()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetId"></a>

```java
public void resetId()
```

##### `resetSourceDetectorRecipeId` <a name="resetSourceDetectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetSourceDetectorRecipeId"></a>

```java
public void resetSourceDetectorRecipeId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGuardDetectorRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipe;

CloudGuardDetectorRecipe.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipe;

CloudGuardDetectorRecipe.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipe;

CloudGuardDetectorRecipe.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipe;

CloudGuardDetectorRecipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudGuardDetectorRecipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudGuardDetectorRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudGuardDetectorRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudGuardDetectorRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardDetectorRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorRecipeType">detectorRecipeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorRules">detectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList">CloudGuardDetectorRecipeDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.effectiveDetectorRules">effectiveDetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList">CloudGuardDetectorRecipeEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.targetIds">targetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference">CloudGuardDetectorRecipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorInput">detectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorRulesInput">detectorRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules">CloudGuardDetectorRecipeDetectorRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.sourceDetectorRecipeIdInput">sourceDetectorRecipeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts">CloudGuardDetectorRecipeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detector">detector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.sourceDetectorRecipeId">sourceDetectorRecipeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `detectorRecipeType`<sup>Required</sup> <a name="detectorRecipeType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorRecipeType"></a>

```java
public java.lang.String getDetectorRecipeType();
```

- *Type:* java.lang.String

---

##### `detectorRules`<sup>Required</sup> <a name="detectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorRules"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesList getDetectorRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList">CloudGuardDetectorRecipeDetectorRulesList</a>

---

##### `effectiveDetectorRules`<sup>Required</sup> <a name="effectiveDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.effectiveDetectorRules"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesList getEffectiveDetectorRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList">CloudGuardDetectorRecipeEffectiveDetectorRulesList</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.targetIds"></a>

```java
public java.util.List<java.lang.String> getTargetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeouts"></a>

```java
public CloudGuardDetectorRecipeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference">CloudGuardDetectorRecipeTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `detectorInput`<sup>Optional</sup> <a name="detectorInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorInput"></a>

```java
public java.lang.String getDetectorInput();
```

- *Type:* java.lang.String

---

##### `detectorRulesInput`<sup>Optional</sup> <a name="detectorRulesInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detectorRulesInput"></a>

```java
public java.lang.Object getDetectorRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules">CloudGuardDetectorRecipeDetectorRules</a>>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sourceDetectorRecipeIdInput`<sup>Optional</sup> <a name="sourceDetectorRecipeIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.sourceDetectorRecipeIdInput"></a>

```java
public java.lang.String getSourceDetectorRecipeIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts">CloudGuardDetectorRecipeTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sourceDetectorRecipeId`<sup>Required</sup> <a name="sourceDetectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.sourceDetectorRecipeId"></a>

```java
public java.lang.String getSourceDetectorRecipeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipe.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardDetectorRecipeConfig <a name="CloudGuardDetectorRecipeConfig" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeConfig;

CloudGuardDetectorRecipeConfig.builder()
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
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .detector(java.lang.String)
//  .detectorRules(IResolvable)
//  .detectorRules(java.util.List<CloudGuardDetectorRecipeDetectorRules>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .sourceDetectorRecipeId(java.lang.String)
//  .timeouts(CloudGuardDetectorRecipeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#compartment_id CloudGuardDetectorRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#display_name CloudGuardDetectorRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#defined_tags CloudGuardDetectorRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#description CloudGuardDetectorRecipe#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.detector">detector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector CloudGuardDetectorRecipe#detector}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.detectorRules">detectorRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules">CloudGuardDetectorRecipeDetectorRules</a>></code> | detector_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#freeform_tags CloudGuardDetectorRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#id CloudGuardDetectorRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.sourceDetectorRecipeId">sourceDetectorRecipeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#source_detector_recipe_id CloudGuardDetectorRecipe#source_detector_recipe_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts">CloudGuardDetectorRecipeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#compartment_id CloudGuardDetectorRecipe#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#display_name CloudGuardDetectorRecipe#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#defined_tags CloudGuardDetectorRecipe#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#description CloudGuardDetectorRecipe#description}.

---

##### `detector`<sup>Optional</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector CloudGuardDetectorRecipe#detector}.

---

##### `detectorRules`<sup>Optional</sup> <a name="detectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.detectorRules"></a>

```java
public java.lang.Object getDetectorRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules">CloudGuardDetectorRecipeDetectorRules</a>>

detector_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector_rules CloudGuardDetectorRecipe#detector_rules}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#freeform_tags CloudGuardDetectorRecipe#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#id CloudGuardDetectorRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceDetectorRecipeId`<sup>Optional</sup> <a name="sourceDetectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.sourceDetectorRecipeId"></a>

```java
public java.lang.String getSourceDetectorRecipeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#source_detector_recipe_id CloudGuardDetectorRecipe#source_detector_recipe_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeConfig.property.timeouts"></a>

```java
public CloudGuardDetectorRecipeTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts">CloudGuardDetectorRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#timeouts CloudGuardDetectorRecipe#timeouts}

---

### CloudGuardDetectorRecipeDetectorRules <a name="CloudGuardDetectorRecipeDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRules;

CloudGuardDetectorRecipeDetectorRules.builder()
    .details(CloudGuardDetectorRecipeDetectorRulesDetails)
    .detectorRuleId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a></code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules.property.detectorRuleId">detectorRuleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector_rule_id CloudGuardDetectorRecipe#detector_rule_id}. |

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules.property.details"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesDetails getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#details CloudGuardDetectorRecipe#details}

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules.property.detectorRuleId"></a>

```java
public java.lang.String getDetectorRuleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#detector_rule_id CloudGuardDetectorRecipe#detector_rule_id}.

---

### CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules <a name="CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules;

CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules.builder()
    .build();
```


### CloudGuardDetectorRecipeDetectorRulesDetails <a name="CloudGuardDetectorRecipeDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesDetails;

CloudGuardDetectorRecipeDetectorRulesDetails.builder()
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .riskLevel(java.lang.String)
//  .condition(java.lang.String)
//  .configurations(IResolvable)
//  .configurations(java.util.List<CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations>)
//  .dataSourceId(java.lang.String)
//  .description(java.lang.String)
//  .entitiesMappings(IResolvable)
//  .entitiesMappings(java.util.List<CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings>)
//  .labels(java.util.List<java.lang.String>)
//  .recommendation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#is_enabled CloudGuardDetectorRecipe#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.riskLevel">riskLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#risk_level CloudGuardDetectorRecipe#risk_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#condition CloudGuardDetectorRecipe#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.configurations">configurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a>></code> | configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#data_source_id CloudGuardDetectorRecipe#data_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#description CloudGuardDetectorRecipe#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.entitiesMappings">entitiesMappings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a>></code> | entities_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#labels CloudGuardDetectorRecipe#labels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#recommendation CloudGuardDetectorRecipe#recommendation}. |

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#is_enabled CloudGuardDetectorRecipe#is_enabled}.

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.riskLevel"></a>

```java
public java.lang.String getRiskLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#risk_level CloudGuardDetectorRecipe#risk_level}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#condition CloudGuardDetectorRecipe#condition}.

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.configurations"></a>

```java
public java.lang.Object getConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a>>

configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#configurations CloudGuardDetectorRecipe#configurations}

---

##### `dataSourceId`<sup>Optional</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#data_source_id CloudGuardDetectorRecipe#data_source_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#description CloudGuardDetectorRecipe#description}.

---

##### `entitiesMappings`<sup>Optional</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.entitiesMappings"></a>

```java
public java.lang.Object getEntitiesMappings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a>>

entities_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#entities_mappings CloudGuardDetectorRecipe#entities_mappings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#labels CloudGuardDetectorRecipe#labels}.

---

##### `recommendation`<sup>Optional</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#recommendation CloudGuardDetectorRecipe#recommendation}.

---

### CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations <a name="CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations;

CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.builder()
    .configKey(java.lang.String)
    .name(java.lang.String)
//  .dataType(java.lang.String)
//  .value(java.lang.String)
//  .values(IResolvable)
//  .values(java.util.List<CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.configKey">configKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#config_key CloudGuardDetectorRecipe#config_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#name CloudGuardDetectorRecipe#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.dataType">dataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#data_type CloudGuardDetectorRecipe#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#value CloudGuardDetectorRecipe#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.values">values</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a>></code> | values block. |

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#config_key CloudGuardDetectorRecipe#config_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#name CloudGuardDetectorRecipe#name}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#data_type CloudGuardDetectorRecipe#data_type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#value CloudGuardDetectorRecipe#value}.

---

##### `values`<sup>Optional</sup> <a name="values" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.property.values"></a>

```java
public java.lang.Object getValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a>>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#values CloudGuardDetectorRecipe#values}

---

### CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues <a name="CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues;

CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.builder()
    .listType(java.lang.String)
    .managedListType(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.property.listType">listType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#list_type CloudGuardDetectorRecipe#list_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.property.managedListType">managedListType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#managed_list_type CloudGuardDetectorRecipe#managed_list_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#value CloudGuardDetectorRecipe#value}. |

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.property.listType"></a>

```java
public java.lang.String getListType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#list_type CloudGuardDetectorRecipe#list_type}.

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.property.managedListType"></a>

```java
public java.lang.String getManagedListType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#managed_list_type CloudGuardDetectorRecipe#managed_list_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#value CloudGuardDetectorRecipe#value}.

---

### CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings <a name="CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings;

CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.builder()
    .queryField(java.lang.String)
//  .displayName(java.lang.String)
//  .entityType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.property.queryField">queryField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#query_field CloudGuardDetectorRecipe#query_field}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#display_name CloudGuardDetectorRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#entity_type CloudGuardDetectorRecipe#entity_type}. |

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#query_field CloudGuardDetectorRecipe#query_field}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#display_name CloudGuardDetectorRecipe#display_name}.

---

##### `entityType`<sup>Optional</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#entity_type CloudGuardDetectorRecipe#entity_type}.

---

### CloudGuardDetectorRecipeDetectorRulesEntitiesMappings <a name="CloudGuardDetectorRecipeDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappings;

CloudGuardDetectorRecipeDetectorRulesEntitiesMappings.builder()
    .build();
```


### CloudGuardDetectorRecipeEffectiveDetectorRules <a name="CloudGuardDetectorRecipeEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRules;

CloudGuardDetectorRecipeEffectiveDetectorRules.builder()
    .build();
```


### CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules;

CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules.builder()
    .build();
```


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetails <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetails;

CloudGuardDetectorRecipeEffectiveDetectorRulesDetails.builder()
    .build();
```


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations;

CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations.builder()
    .build();
```


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues;

CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues.builder()
    .build();
```


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings;

CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings.builder()
    .build();
```


### CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings;

CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings.builder()
    .build();
```


### CloudGuardDetectorRecipeTimeouts <a name="CloudGuardDetectorRecipeTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeTimeouts;

CloudGuardDetectorRecipeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#create CloudGuardDetectorRecipe#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#delete CloudGuardDetectorRecipe#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#update CloudGuardDetectorRecipe#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#create CloudGuardDetectorRecipe#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#delete CloudGuardDetectorRecipe#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_detector_recipe#update CloudGuardDetectorRecipe#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList <a name="CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList;

new CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.get"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference;

new CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">isPreferred</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules">CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPreferred`<sup>Required</sup> <a name="isPreferred" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```java
public IResolvable getIsPreferred();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules">CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules</a>

---


### CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList <a name="CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList;

new CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.get"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a>>

---


### CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference;

new CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValues` <a name="putValues" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.putValues"></a>

```java
public void putValues(IResolvable OR java.util.List<CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.putValues.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a>>

---

##### `resetDataType` <a name="resetDataType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resetDataType"></a>

```java
public void resetDataType()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValues` <a name="resetValues" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.configKeyInput">configKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.valuesInput">valuesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList getValues();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `configKeyInput`<sup>Optional</sup> <a name="configKeyInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.configKeyInput"></a>

```java
public java.lang.String getConfigKeyInput();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.valuesInput"></a>

```java
public java.lang.Object getValuesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a>>

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a>

---


### CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList <a name="CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList;

new CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.get"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a>>

---


### CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference;

new CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.listTypeInput">listTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListTypeInput">managedListTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">listType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managedListType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listTypeInput`<sup>Optional</sup> <a name="listTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.listTypeInput"></a>

```java
public java.lang.String getListTypeInput();
```

- *Type:* java.lang.String

---

##### `managedListTypeInput`<sup>Optional</sup> <a name="managedListTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListTypeInput"></a>

```java
public java.lang.String getManagedListTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```java
public java.lang.String getListType();
```

- *Type:* java.lang.String

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```java
public java.lang.String getManagedListType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a>

---


### CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList <a name="CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList;

new CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.get"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a>>

---


### CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference;

new CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resetEntityType">resetEntityType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEntityType` <a name="resetEntityType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resetEntityType"></a>

```java
public void resetEntityType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryFieldInput">queryFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `queryFieldInput`<sup>Optional</sup> <a name="queryFieldInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryFieldInput"></a>

```java
public java.lang.String getQueryFieldInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a>

---


### CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference;

new CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.putConfigurations">putConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.putEntitiesMappings">putEntitiesMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetConfigurations">resetConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetDataSourceId">resetDataSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetEntitiesMappings">resetEntitiesMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetRecommendation">resetRecommendation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigurations` <a name="putConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.putConfigurations"></a>

```java
public void putConfigurations(IResolvable OR java.util.List<CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a>>

---

##### `putEntitiesMappings` <a name="putEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.putEntitiesMappings"></a>

```java
public void putEntitiesMappings(IResolvable OR java.util.List<CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.putEntitiesMappings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a>>

---

##### `resetCondition` <a name="resetCondition" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetConfigurations` <a name="resetConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetConfigurations"></a>

```java
public void resetConfigurations()
```

##### `resetDataSourceId` <a name="resetDataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetDataSourceId"></a>

```java
public void resetDataSourceId()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEntitiesMappings` <a name="resetEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetEntitiesMappings"></a>

```java
public void resetEntitiesMappings()
```

##### `resetLabels` <a name="resetLabels" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetRecommendation` <a name="resetRecommendation" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resetRecommendation"></a>

```java
public void resetRecommendation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">isConfigurationAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.configurationsInput">configurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.entitiesMappingsInput">entitiesMappingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.recommendationInput">recommendationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.riskLevelInput">riskLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.riskLevel">riskLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.configurations"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList</a>

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList getEntitiesMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `isConfigurationAllowed`<sup>Required</sup> <a name="isConfigurationAllowed" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```java
public IResolvable getIsConfigurationAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `configurationsInput`<sup>Optional</sup> <a name="configurationsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.configurationsInput"></a>

```java
public java.lang.Object getConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a>>

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.dataSourceIdInput"></a>

```java
public java.lang.String getDataSourceIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `entitiesMappingsInput`<sup>Optional</sup> <a name="entitiesMappingsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.entitiesMappingsInput"></a>

```java
public java.lang.Object getEntitiesMappingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a>>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendationInput`<sup>Optional</sup> <a name="recommendationInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.recommendationInput"></a>

```java
public java.lang.String getRecommendationInput();
```

- *Type:* java.lang.String

---

##### `riskLevelInput`<sup>Optional</sup> <a name="riskLevelInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.riskLevelInput"></a>

```java
public java.lang.String getRiskLevelInput();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```java
public java.lang.String getRiskLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.internalValue"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a>

---


### CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList <a name="CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList;

new CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.get"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference;

new CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesEntitiesMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappings">CloudGuardDetectorRecipeDetectorRulesEntitiesMappings</a>

---


### CloudGuardDetectorRecipeDetectorRulesList <a name="CloudGuardDetectorRecipeDetectorRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesList;

new CloudGuardDetectorRecipeDetectorRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.get"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules">CloudGuardDetectorRecipeDetectorRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules">CloudGuardDetectorRecipeDetectorRules</a>>

---


### CloudGuardDetectorRecipeDetectorRulesOutputReference <a name="CloudGuardDetectorRecipeDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeDetectorRulesOutputReference;

new CloudGuardDetectorRecipeDetectorRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.putDetails">putDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDetails` <a name="putDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.putDetails"></a>

```java
public void putDetails(CloudGuardDetectorRecipeDetectorRulesDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.putDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.candidateResponderRules">candidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList">CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference">CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detector">detector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList">CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.managedListTypes">managedListTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detailsInput">detailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detectorRuleIdInput">detectorRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules">CloudGuardDetectorRecipeDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `candidateResponderRules`<sup>Required</sup> <a name="candidateResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.candidateResponderRules"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList getCandidateResponderRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList">CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.details"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference">CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.entitiesMappings"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList getEntitiesMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList">CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `managedListTypes`<sup>Required</sup> <a name="managedListTypes" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.managedListTypes"></a>

```java
public java.util.List<java.lang.String> getManagedListTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detailsInput"></a>

```java
public CloudGuardDetectorRecipeDetectorRulesDetails getDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesDetails">CloudGuardDetectorRecipeDetectorRulesDetails</a>

---

##### `detectorRuleIdInput`<sup>Optional</sup> <a name="detectorRuleIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detectorRuleIdInput"></a>

```java
public java.lang.String getDetectorRuleIdInput();
```

- *Type:* java.lang.String

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.detectorRuleId"></a>

```java
public java.lang.String getDetectorRuleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeDetectorRules">CloudGuardDetectorRecipeDetectorRules</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList;

new CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.get"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference;

new CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">isPreferred</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules">CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPreferred`<sup>Required</sup> <a name="isPreferred" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```java
public IResolvable getIsPreferred();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules">CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList;

new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference;

new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList getValues();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList;

new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference;

new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">listType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managedListType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```java
public java.lang.String getListType();
```

- *Type:* java.lang.String

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```java
public java.lang.String getManagedListType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList;

new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.get"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference;

new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList;

new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.get"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference;

new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">isConfigurationAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">riskLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetails">CloudGuardDetectorRecipeEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList getEntitiesMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `isConfigurationAllowed`<sup>Required</sup> <a name="isConfigurationAllowed" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```java
public IResolvable getIsConfigurationAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```java
public java.lang.String getRiskLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetails">CloudGuardDetectorRecipeEffectiveDetectorRulesDetails</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList;

new CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference;

new CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings">CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings">CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings</a>

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesList <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList;

new CloudGuardDetectorRecipeEffectiveDetectorRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.get"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference <a name="CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference;

new CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.candidateResponderRules">candidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList">CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detector">detector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList">CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.managedListTypes">managedListTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRules">CloudGuardDetectorRecipeEffectiveDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `candidateResponderRules`<sup>Required</sup> <a name="candidateResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.candidateResponderRules"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList getCandidateResponderRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList">CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.details"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList">CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```java
public java.lang.String getDetectorRuleId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList getEntitiesMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList">CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `managedListTypes`<sup>Required</sup> <a name="managedListTypes" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```java
public java.util.List<java.lang.String> getManagedListTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```java
public CloudGuardDetectorRecipeEffectiveDetectorRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeEffectiveDetectorRules">CloudGuardDetectorRecipeEffectiveDetectorRules</a>

---


### CloudGuardDetectorRecipeTimeoutsOutputReference <a name="CloudGuardDetectorRecipeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_detector_recipe.CloudGuardDetectorRecipeTimeoutsOutputReference;

new CloudGuardDetectorRecipeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts">CloudGuardDetectorRecipeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDetectorRecipe.CloudGuardDetectorRecipeTimeouts">CloudGuardDetectorRecipeTimeouts</a>

---



