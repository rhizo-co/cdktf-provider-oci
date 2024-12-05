# `cloudGuardTarget` Submodule <a name="`cloudGuardTarget` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardTarget <a name="CloudGuardTarget" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target oci_cloud_guard_target}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTarget;

CloudGuardTarget.Builder.create(Construct scope, java.lang.String id)
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
    .targetResourceId(java.lang.String)
    .targetResourceType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .targetDetectorRecipes(IResolvable)
//  .targetDetectorRecipes(java.util.List<CloudGuardTargetTargetDetectorRecipes>)
//  .targetResponderRecipes(IResolvable)
//  .targetResponderRecipes(java.util.List<CloudGuardTargetTargetResponderRecipes>)
//  .timeouts(CloudGuardTargetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#compartment_id CloudGuardTarget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#display_name CloudGuardTarget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_resource_id CloudGuardTarget#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_resource_type CloudGuardTarget#target_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#defined_tags CloudGuardTarget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#description CloudGuardTarget#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#freeform_tags CloudGuardTarget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#id CloudGuardTarget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#state CloudGuardTarget#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.targetDetectorRecipes">targetDetectorRecipes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes">CloudGuardTargetTargetDetectorRecipes</a>></code> | target_detector_recipes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.targetResponderRecipes">targetResponderRecipes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes">CloudGuardTargetTargetResponderRecipes</a>></code> | target_responder_recipes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts">CloudGuardTargetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#compartment_id CloudGuardTarget#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#display_name CloudGuardTarget#display_name}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.targetResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_resource_id CloudGuardTarget#target_resource_id}.

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.targetResourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_resource_type CloudGuardTarget#target_resource_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#defined_tags CloudGuardTarget#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#description CloudGuardTarget#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#freeform_tags CloudGuardTarget#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#id CloudGuardTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#state CloudGuardTarget#state}.

---

##### `targetDetectorRecipes`<sup>Optional</sup> <a name="targetDetectorRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.targetDetectorRecipes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes">CloudGuardTargetTargetDetectorRecipes</a>>

target_detector_recipes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_detector_recipes CloudGuardTarget#target_detector_recipes}

---

##### `targetResponderRecipes`<sup>Optional</sup> <a name="targetResponderRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.targetResponderRecipes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes">CloudGuardTargetTargetResponderRecipes</a>>

target_responder_recipes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_responder_recipes CloudGuardTarget#target_responder_recipes}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts">CloudGuardTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#timeouts CloudGuardTarget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTargetDetectorRecipes">putTargetDetectorRecipes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTargetResponderRecipes">putTargetResponderRecipes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetTargetDetectorRecipes">resetTargetDetectorRecipes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetTargetResponderRecipes">resetTargetResponderRecipes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTargetDetectorRecipes` <a name="putTargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTargetDetectorRecipes"></a>

```java
public void putTargetDetectorRecipes(IResolvable OR java.util.List<CloudGuardTargetTargetDetectorRecipes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTargetDetectorRecipes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes">CloudGuardTargetTargetDetectorRecipes</a>>

---

##### `putTargetResponderRecipes` <a name="putTargetResponderRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTargetResponderRecipes"></a>

```java
public void putTargetResponderRecipes(IResolvable OR java.util.List<CloudGuardTargetTargetResponderRecipes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTargetResponderRecipes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes">CloudGuardTargetTargetResponderRecipes</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTimeouts"></a>

```java
public void putTimeouts(CloudGuardTargetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts">CloudGuardTargetTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetState"></a>

```java
public void resetState()
```

##### `resetTargetDetectorRecipes` <a name="resetTargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetTargetDetectorRecipes"></a>

```java
public void resetTargetDetectorRecipes()
```

##### `resetTargetResponderRecipes` <a name="resetTargetResponderRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetTargetResponderRecipes"></a>

```java
public void resetTargetResponderRecipes()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGuardTarget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTarget;

CloudGuardTarget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTarget;

CloudGuardTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTarget;

CloudGuardTarget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTarget;

CloudGuardTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudGuardTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudGuardTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudGuardTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudGuardTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.inheritedByCompartments">inheritedByCompartments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.lifecyleDetails">lifecyleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.recipeCount">recipeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetDetails">targetDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList">CloudGuardTargetTargetDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetDetectorRecipes">targetDetectorRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList">CloudGuardTargetTargetDetectorRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResponderRecipes">targetResponderRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList">CloudGuardTargetTargetResponderRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference">CloudGuardTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetDetectorRecipesInput">targetDetectorRecipesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes">CloudGuardTargetTargetDetectorRecipes</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResponderRecipesInput">targetResponderRecipesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes">CloudGuardTargetTargetResponderRecipes</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts">CloudGuardTargetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `inheritedByCompartments`<sup>Required</sup> <a name="inheritedByCompartments" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.inheritedByCompartments"></a>

```java
public java.util.List<java.lang.String> getInheritedByCompartments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.lifecyleDetails"></a>

```java
public java.lang.String getLifecyleDetails();
```

- *Type:* java.lang.String

---

##### `recipeCount`<sup>Required</sup> <a name="recipeCount" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.recipeCount"></a>

```java
public java.lang.Number getRecipeCount();
```

- *Type:* java.lang.Number

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `targetDetails`<sup>Required</sup> <a name="targetDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetDetails"></a>

```java
public CloudGuardTargetTargetDetailsList getTargetDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList">CloudGuardTargetTargetDetailsList</a>

---

##### `targetDetectorRecipes`<sup>Required</sup> <a name="targetDetectorRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetDetectorRecipes"></a>

```java
public CloudGuardTargetTargetDetectorRecipesList getTargetDetectorRecipes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList">CloudGuardTargetTargetDetectorRecipesList</a>

---

##### `targetResponderRecipes`<sup>Required</sup> <a name="targetResponderRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResponderRecipes"></a>

```java
public CloudGuardTargetTargetResponderRecipesList getTargetResponderRecipes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList">CloudGuardTargetTargetResponderRecipesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeouts"></a>

```java
public CloudGuardTargetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference">CloudGuardTargetTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `targetDetectorRecipesInput`<sup>Optional</sup> <a name="targetDetectorRecipesInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetDetectorRecipesInput"></a>

```java
public java.lang.Object getTargetDetectorRecipesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes">CloudGuardTargetTargetDetectorRecipes</a>>

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceIdInput"></a>

```java
public java.lang.String getTargetResourceIdInput();
```

- *Type:* java.lang.String

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceTypeInput"></a>

```java
public java.lang.String getTargetResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `targetResponderRecipesInput`<sup>Optional</sup> <a name="targetResponderRecipesInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResponderRecipesInput"></a>

```java
public java.lang.Object getTargetResponderRecipesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes">CloudGuardTargetTargetResponderRecipes</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts">CloudGuardTargetTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardTargetConfig <a name="CloudGuardTargetConfig" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetConfig;

CloudGuardTargetConfig.builder()
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
    .targetResourceId(java.lang.String)
    .targetResourceType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .targetDetectorRecipes(IResolvable)
//  .targetDetectorRecipes(java.util.List<CloudGuardTargetTargetDetectorRecipes>)
//  .targetResponderRecipes(IResolvable)
//  .targetResponderRecipes(java.util.List<CloudGuardTargetTargetResponderRecipes>)
//  .timeouts(CloudGuardTargetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#compartment_id CloudGuardTarget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#display_name CloudGuardTarget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_resource_id CloudGuardTarget#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_resource_type CloudGuardTarget#target_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#defined_tags CloudGuardTarget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#description CloudGuardTarget#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#freeform_tags CloudGuardTarget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#id CloudGuardTarget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#state CloudGuardTarget#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetDetectorRecipes">targetDetectorRecipes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes">CloudGuardTargetTargetDetectorRecipes</a>></code> | target_detector_recipes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetResponderRecipes">targetResponderRecipes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes">CloudGuardTargetTargetResponderRecipes</a>></code> | target_responder_recipes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts">CloudGuardTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#compartment_id CloudGuardTarget#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#display_name CloudGuardTarget#display_name}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_resource_id CloudGuardTarget#target_resource_id}.

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_resource_type CloudGuardTarget#target_resource_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#defined_tags CloudGuardTarget#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#description CloudGuardTarget#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#freeform_tags CloudGuardTarget#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#id CloudGuardTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#state CloudGuardTarget#state}.

---

##### `targetDetectorRecipes`<sup>Optional</sup> <a name="targetDetectorRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetDetectorRecipes"></a>

```java
public java.lang.Object getTargetDetectorRecipes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes">CloudGuardTargetTargetDetectorRecipes</a>>

target_detector_recipes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_detector_recipes CloudGuardTarget#target_detector_recipes}

---

##### `targetResponderRecipes`<sup>Optional</sup> <a name="targetResponderRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.targetResponderRecipes"></a>

```java
public java.lang.Object getTargetResponderRecipes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes">CloudGuardTargetTargetResponderRecipes</a>>

target_responder_recipes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#target_responder_recipes CloudGuardTarget#target_responder_recipes}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetConfig.property.timeouts"></a>

```java
public CloudGuardTargetTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts">CloudGuardTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#timeouts CloudGuardTarget#timeouts}

---

### CloudGuardTargetTargetDetails <a name="CloudGuardTargetTargetDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetails;

CloudGuardTargetTargetDetails.builder()
    .build();
```


### CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes <a name="CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes;

CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes.builder()
    .build();
```


### CloudGuardTargetTargetDetectorRecipes <a name="CloudGuardTargetTargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipes;

CloudGuardTargetTargetDetectorRecipes.builder()
    .detectorRecipeId(java.lang.String)
//  .detectorRules(IResolvable)
//  .detectorRules(java.util.List<CloudGuardTargetTargetDetectorRecipesDetectorRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes.property.detectorRecipeId">detectorRecipeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#detector_recipe_id CloudGuardTarget#detector_recipe_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes.property.detectorRules">detectorRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules">CloudGuardTargetTargetDetectorRecipesDetectorRules</a>></code> | detector_rules block. |

---

##### `detectorRecipeId`<sup>Required</sup> <a name="detectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes.property.detectorRecipeId"></a>

```java
public java.lang.String getDetectorRecipeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#detector_recipe_id CloudGuardTarget#detector_recipe_id}.

---

##### `detectorRules`<sup>Optional</sup> <a name="detectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes.property.detectorRules"></a>

```java
public java.lang.Object getDetectorRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules">CloudGuardTargetTargetDetectorRecipesDetectorRules</a>>

detector_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#detector_rules CloudGuardTarget#detector_rules}

---

### CloudGuardTargetTargetDetectorRecipesDetectorRules <a name="CloudGuardTargetTargetDetectorRecipesDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRules;

CloudGuardTargetTargetDetectorRecipesDetectorRules.builder()
    .details(CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails)
    .detectorRuleId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a></code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules.property.detectorRuleId">detectorRuleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#detector_rule_id CloudGuardTarget#detector_rule_id}. |

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules.property.details"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#details CloudGuardTarget#details}

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules.property.detectorRuleId"></a>

```java
public java.lang.String getDetectorRuleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#detector_rule_id CloudGuardTarget#detector_rule_id}.

---

### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails;

CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails.builder()
//  .conditionGroups(IResolvable)
//  .conditionGroups(java.util.List<CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails.property.conditionGroups">conditionGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a>></code> | condition_groups block. |

---

##### `conditionGroups`<sup>Optional</sup> <a name="conditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails.property.conditionGroups"></a>

```java
public java.lang.Object getConditionGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a>>

condition_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#condition_groups CloudGuardTarget#condition_groups}

---

### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups;

CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.builder()
    .compartmentId(java.lang.String)
    .condition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#compartment_id CloudGuardTarget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#condition CloudGuardTarget#condition}. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#compartment_id CloudGuardTarget#compartment_id}.

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#condition CloudGuardTarget#condition}.

---

### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations;

CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations.builder()
    .build();
```


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues;

CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues.builder()
    .build();
```


### CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings;

CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings.builder()
    .build();
```


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules;

CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules.builder()
    .build();
```


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails;

CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails.builder()
    .build();
```


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups;

CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups.builder()
    .build();
```


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations;

CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations.builder()
    .build();
```


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues;

CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues.builder()
    .build();
```


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings;

CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings.builder()
    .build();
```


### CloudGuardTargetTargetResponderRecipes <a name="CloudGuardTargetTargetResponderRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipes;

CloudGuardTargetTargetResponderRecipes.builder()
    .responderRecipeId(java.lang.String)
//  .responderRules(IResolvable)
//  .responderRules(java.util.List<CloudGuardTargetTargetResponderRecipesResponderRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes.property.responderRecipeId">responderRecipeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#responder_recipe_id CloudGuardTarget#responder_recipe_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes.property.responderRules">responderRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules">CloudGuardTargetTargetResponderRecipesResponderRules</a>></code> | responder_rules block. |

---

##### `responderRecipeId`<sup>Required</sup> <a name="responderRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes.property.responderRecipeId"></a>

```java
public java.lang.String getResponderRecipeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#responder_recipe_id CloudGuardTarget#responder_recipe_id}.

---

##### `responderRules`<sup>Optional</sup> <a name="responderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes.property.responderRules"></a>

```java
public java.lang.Object getResponderRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules">CloudGuardTargetTargetResponderRecipesResponderRules</a>>

responder_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#responder_rules CloudGuardTarget#responder_rules}

---

### CloudGuardTargetTargetResponderRecipesEffectiveResponderRules <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesEffectiveResponderRules;

CloudGuardTargetTargetResponderRecipesEffectiveResponderRules.builder()
    .build();
```


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails;

CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails.builder()
    .build();
```


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations;

CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations.builder()
    .build();
```


### CloudGuardTargetTargetResponderRecipesResponderRules <a name="CloudGuardTargetTargetResponderRecipesResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesResponderRules;

CloudGuardTargetTargetResponderRecipesResponderRules.builder()
    .details(CloudGuardTargetTargetResponderRecipesResponderRulesDetails)
    .responderRuleId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a></code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules.property.responderRuleId">responderRuleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#responder_rule_id CloudGuardTarget#responder_rule_id}. |

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules.property.details"></a>

```java
public CloudGuardTargetTargetResponderRecipesResponderRulesDetails getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#details CloudGuardTarget#details}

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules.property.responderRuleId"></a>

```java
public java.lang.String getResponderRuleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#responder_rule_id CloudGuardTarget#responder_rule_id}.

---

### CloudGuardTargetTargetResponderRecipesResponderRulesDetails <a name="CloudGuardTargetTargetResponderRecipesResponderRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesResponderRulesDetails;

CloudGuardTargetTargetResponderRecipesResponderRulesDetails.builder()
//  .condition(java.lang.String)
//  .configurations(IResolvable)
//  .configurations(java.util.List<CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations>)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#condition CloudGuardTarget#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.property.configurations">configurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a>></code> | configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#mode CloudGuardTarget#mode}. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#condition CloudGuardTarget#condition}.

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.property.configurations"></a>

```java
public java.lang.Object getConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a>>

configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#configurations CloudGuardTarget#configurations}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#mode CloudGuardTarget#mode}.

---

### CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations <a name="CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations;

CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.builder()
    .configKey(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.property.configKey">configKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#config_key CloudGuardTarget#config_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#name CloudGuardTarget#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#value CloudGuardTarget#value}. |

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#config_key CloudGuardTarget#config_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#name CloudGuardTarget#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#value CloudGuardTarget#value}.

---

### CloudGuardTargetTimeouts <a name="CloudGuardTargetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTimeouts;

CloudGuardTargetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#create CloudGuardTarget#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#delete CloudGuardTarget#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#update CloudGuardTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#create CloudGuardTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#delete CloudGuardTarget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_target#update CloudGuardTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardTargetTargetDetailsList <a name="CloudGuardTargetTargetDetailsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetailsList;

new CloudGuardTargetTargetDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.get"></a>

```java
public CloudGuardTargetTargetDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetDetailsOutputReference <a name="CloudGuardTargetTargetDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetailsOutputReference;

new CloudGuardTargetTargetDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.securityZoneDisplayName">securityZoneDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.securityZoneId">securityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.targetSecurityZoneRecipes">targetSecurityZoneRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList">CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetails">CloudGuardTargetTargetDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityZoneDisplayName`<sup>Required</sup> <a name="securityZoneDisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.securityZoneDisplayName"></a>

```java
public java.lang.String getSecurityZoneDisplayName();
```

- *Type:* java.lang.String

---

##### `securityZoneId`<sup>Required</sup> <a name="securityZoneId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.securityZoneId"></a>

```java
public java.lang.String getSecurityZoneId();
```

- *Type:* java.lang.String

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

---

##### `targetSecurityZoneRecipes`<sup>Required</sup> <a name="targetSecurityZoneRecipes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.targetSecurityZoneRecipes"></a>

```java
public CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList getTargetSecurityZoneRecipes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList">CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetails">CloudGuardTargetTargetDetails</a>

---


### CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList <a name="CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList;

new CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.get"></a>

```java
public CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference <a name="CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference;

new CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.securityPolicies">securityPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes">CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `securityPolicies`<sup>Required</sup> <a name="securityPolicies" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.securityPolicies"></a>

```java
public java.util.List<java.lang.String> getSecurityPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes">CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes</a>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a>>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList getValues();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations</a>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">listType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managedListType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```java
public java.lang.String getListType();
```

- *Type:* java.lang.String

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```java
public java.lang.String getManagedListType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues</a>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.putConditionGroups">putConditionGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resetConditionGroups">resetConditionGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionGroups` <a name="putConditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.putConditionGroups"></a>

```java
public void putConditionGroups(IResolvable OR java.util.List<CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.putConditionGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a>>

---

##### `resetConditionGroups` <a name="resetConditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resetConditionGroups"></a>

```java
public void resetConditionGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroups">conditionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">isConfigurationAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.riskLevel">riskLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroupsInput">conditionGroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionGroups`<sup>Required</sup> <a name="conditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroups"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList getConditionGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.configurations"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList</a>

---

##### `isConfigurationAllowed`<sup>Required</sup> <a name="isConfigurationAllowed" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```java
public IResolvable getIsConfigurationAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```java
public java.lang.String getRiskLevel();
```

- *Type:* java.lang.String

---

##### `conditionGroupsInput`<sup>Optional</sup> <a name="conditionGroupsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroupsInput"></a>

```java
public java.lang.Object getConditionGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings">CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings">CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings</a>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesList <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesList;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.get"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules">CloudGuardTargetTargetDetectorRecipesDetectorRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules">CloudGuardTargetTargetDetectorRecipesDetectorRules</a>>

---


### CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference <a name="CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference;

new CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.putDetails">putDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDetails` <a name="putDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.putDetails"></a>

```java
public void putDetails(CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.putDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detector">detector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList">CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.managedListTypes">managedListTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detailsInput">detailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleIdInput">detectorRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules">CloudGuardTargetTargetDetectorRecipesDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.details"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.entitiesMappings"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList getEntitiesMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList">CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `managedListTypes`<sup>Required</sup> <a name="managedListTypes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.managedListTypes"></a>

```java
public java.util.List<java.lang.String> getManagedListTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detailsInput"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails getDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a>

---

##### `detectorRuleIdInput`<sup>Optional</sup> <a name="detectorRuleIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleIdInput"></a>

```java
public java.lang.String getDetectorRuleIdInput();
```

- *Type:* java.lang.String

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleId"></a>

```java
public java.lang.String getDetectorRuleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules">CloudGuardTargetTargetDetectorRecipesDetectorRules</a>

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups</a>

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList getValues();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations</a>

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">listType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">managedListType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listType`<sup>Required</sup> <a name="listType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```java
public java.lang.String getListType();
```

- *Type:* java.lang.String

---

##### `managedListType`<sup>Required</sup> <a name="managedListType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```java
public java.lang.String getManagedListType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.conditionGroups">conditionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">isConfigurationAllowed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">riskLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionGroups`<sup>Required</sup> <a name="conditionGroups" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.conditionGroups"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList getConditionGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `isConfigurationAllowed`<sup>Required</sup> <a name="isConfigurationAllowed" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```java
public IResolvable getIsConfigurationAllowed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```java
public java.lang.String getRiskLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails</a>

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">queryField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `queryField`<sup>Required</sup> <a name="queryField" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```java
public java.lang.String getQueryField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings</a>

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.get"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference <a name="CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference;

new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detector">detector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.entitiesMappings">entitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.managedListTypes">managedListTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.details"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList</a>

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```java
public java.lang.String getDetectorRuleId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entitiesMappings`<sup>Required</sup> <a name="entitiesMappings" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList getEntitiesMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `managedListTypes`<sup>Required</sup> <a name="managedListTypes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```java
public java.util.List<java.lang.String> getManagedListTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules</a>

---


### CloudGuardTargetTargetDetectorRecipesList <a name="CloudGuardTargetTargetDetectorRecipesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesList;

new CloudGuardTargetTargetDetectorRecipesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.get"></a>

```java
public CloudGuardTargetTargetDetectorRecipesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes">CloudGuardTargetTargetDetectorRecipes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes">CloudGuardTargetTargetDetectorRecipes</a>>

---


### CloudGuardTargetTargetDetectorRecipesOutputReference <a name="CloudGuardTargetTargetDetectorRecipesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetDetectorRecipesOutputReference;

new CloudGuardTargetTargetDetectorRecipesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.putDetectorRules">putDetectorRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.resetDetectorRules">resetDetectorRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDetectorRules` <a name="putDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.putDetectorRules"></a>

```java
public void putDetectorRules(IResolvable OR java.util.List<CloudGuardTargetTargetDetectorRecipesDetectorRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.putDetectorRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules">CloudGuardTargetTargetDetectorRecipesDetectorRules</a>>

---

##### `resetDetectorRules` <a name="resetDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.resetDetectorRules"></a>

```java
public void resetDetectorRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detector">detector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeType">detectorRecipeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRules">detectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList">CloudGuardTargetTargetDetectorRecipesDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.effectiveDetectorRules">effectiveDetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeIdInput">detectorRecipeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRulesInput">detectorRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules">CloudGuardTargetTargetDetectorRecipesDetectorRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeId">detectorRecipeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes">CloudGuardTargetTargetDetectorRecipes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `detector`<sup>Required</sup> <a name="detector" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detector"></a>

```java
public java.lang.String getDetector();
```

- *Type:* java.lang.String

---

##### `detectorRecipeType`<sup>Required</sup> <a name="detectorRecipeType" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeType"></a>

```java
public java.lang.String getDetectorRecipeType();
```

- *Type:* java.lang.String

---

##### `detectorRules`<sup>Required</sup> <a name="detectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRules"></a>

```java
public CloudGuardTargetTargetDetectorRecipesDetectorRulesList getDetectorRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRulesList">CloudGuardTargetTargetDetectorRecipesDetectorRulesList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `effectiveDetectorRules`<sup>Required</sup> <a name="effectiveDetectorRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.effectiveDetectorRules"></a>

```java
public CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList getEffectiveDetectorRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList">CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `detectorRecipeIdInput`<sup>Optional</sup> <a name="detectorRecipeIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeIdInput"></a>

```java
public java.lang.String getDetectorRecipeIdInput();
```

- *Type:* java.lang.String

---

##### `detectorRulesInput`<sup>Optional</sup> <a name="detectorRulesInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRulesInput"></a>

```java
public java.lang.Object getDetectorRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesDetectorRules">CloudGuardTargetTargetDetectorRecipesDetectorRules</a>>

---

##### `detectorRecipeId`<sup>Required</sup> <a name="detectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeId"></a>

```java
public java.lang.String getDetectorRecipeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetDetectorRecipes">CloudGuardTargetTargetDetectorRecipes</a>

---


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get"></a>

```java
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations</a>

---


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.get"></a>

```java
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.configurations"></a>

```java
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails</a>

---


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.get"></a>

```java
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference <a name="CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference;

new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.responderRuleId">responderRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.supportedModes">supportedModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRules">CloudGuardTargetTargetResponderRecipesEffectiveResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.details"></a>

```java
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.responderRuleId"></a>

```java
public java.lang.String getResponderRuleId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.supportedModes"></a>

```java
public java.util.List<java.lang.String> getSupportedModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRules">CloudGuardTargetTargetResponderRecipesEffectiveResponderRules</a>

---


### CloudGuardTargetTargetResponderRecipesList <a name="CloudGuardTargetTargetResponderRecipesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesList;

new CloudGuardTargetTargetResponderRecipesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.get"></a>

```java
public CloudGuardTargetTargetResponderRecipesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes">CloudGuardTargetTargetResponderRecipes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes">CloudGuardTargetTargetResponderRecipes</a>>

---


### CloudGuardTargetTargetResponderRecipesOutputReference <a name="CloudGuardTargetTargetResponderRecipesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesOutputReference;

new CloudGuardTargetTargetResponderRecipesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.putResponderRules">putResponderRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.resetResponderRules">resetResponderRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResponderRules` <a name="putResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.putResponderRules"></a>

```java
public void putResponderRules(IResolvable OR java.util.List<CloudGuardTargetTargetResponderRecipesResponderRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.putResponderRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules">CloudGuardTargetTargetResponderRecipesResponderRules</a>>

---

##### `resetResponderRules` <a name="resetResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.resetResponderRules"></a>

```java
public void resetResponderRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.effectiveResponderRules">effectiveResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRules">responderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList">CloudGuardTargetTargetResponderRecipesResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRecipeIdInput">responderRecipeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRulesInput">responderRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules">CloudGuardTargetTargetResponderRecipesResponderRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRecipeId">responderRecipeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes">CloudGuardTargetTargetResponderRecipes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `effectiveResponderRules`<sup>Required</sup> <a name="effectiveResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.effectiveResponderRules"></a>

```java
public CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList getEffectiveResponderRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList">CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `responderRules`<sup>Required</sup> <a name="responderRules" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRules"></a>

```java
public CloudGuardTargetTargetResponderRecipesResponderRulesList getResponderRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList">CloudGuardTargetTargetResponderRecipesResponderRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `responderRecipeIdInput`<sup>Optional</sup> <a name="responderRecipeIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRecipeIdInput"></a>

```java
public java.lang.String getResponderRecipeIdInput();
```

- *Type:* java.lang.String

---

##### `responderRulesInput`<sup>Optional</sup> <a name="responderRulesInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRulesInput"></a>

```java
public java.lang.Object getResponderRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules">CloudGuardTargetTargetResponderRecipesResponderRules</a>>

---

##### `responderRecipeId`<sup>Required</sup> <a name="responderRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.responderRecipeId"></a>

```java
public java.lang.String getResponderRecipeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipes">CloudGuardTargetTargetResponderRecipes</a>

---


### CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList <a name="CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList;

new CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.get"></a>

```java
public CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a>>

---


### CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference <a name="CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference;

new CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKeyInput">configKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKeyInput`<sup>Optional</sup> <a name="configKeyInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKeyInput"></a>

```java
public java.lang.String getConfigKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a>

---


### CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference <a name="CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference;

new CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.putConfigurations">putConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resetConfigurations">resetConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigurations` <a name="putConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.putConfigurations"></a>

```java
public void putConfigurations(IResolvable OR java.util.List<CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a>>

---

##### `resetCondition` <a name="resetCondition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetConfigurations` <a name="resetConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resetConfigurations"></a>

```java
public void resetConfigurations()
```

##### `resetMode` <a name="resetMode" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurationsInput">configurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurations"></a>

```java
public CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `configurationsInput`<sup>Optional</sup> <a name="configurationsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurationsInput"></a>

```java
public java.lang.Object getConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a>>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.internalValue"></a>

```java
public CloudGuardTargetTargetResponderRecipesResponderRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a>

---


### CloudGuardTargetTargetResponderRecipesResponderRulesList <a name="CloudGuardTargetTargetResponderRecipesResponderRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesResponderRulesList;

new CloudGuardTargetTargetResponderRecipesResponderRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.get"></a>

```java
public CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules">CloudGuardTargetTargetResponderRecipesResponderRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules">CloudGuardTargetTargetResponderRecipesResponderRules</a>>

---


### CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference <a name="CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference;

new CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.putDetails">putDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDetails` <a name="putDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.putDetails"></a>

```java
public void putDetails(CloudGuardTargetTargetResponderRecipesResponderRulesDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.putDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.supportedModes">supportedModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.detailsInput">detailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.responderRuleIdInput">responderRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.responderRuleId">responderRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules">CloudGuardTargetTargetResponderRecipesResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.details"></a>

```java
public CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference">CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.supportedModes"></a>

```java
public java.util.List<java.lang.String> getSupportedModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.detailsInput"></a>

```java
public CloudGuardTargetTargetResponderRecipesResponderRulesDetails getDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesDetails">CloudGuardTargetTargetResponderRecipesResponderRulesDetails</a>

---

##### `responderRuleIdInput`<sup>Optional</sup> <a name="responderRuleIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.responderRuleIdInput"></a>

```java
public java.lang.String getResponderRuleIdInput();
```

- *Type:* java.lang.String

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.responderRuleId"></a>

```java
public java.lang.String getResponderRuleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTargetResponderRecipesResponderRules">CloudGuardTargetTargetResponderRecipesResponderRules</a>

---


### CloudGuardTargetTimeoutsOutputReference <a name="CloudGuardTargetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_target.CloudGuardTargetTimeoutsOutputReference;

new CloudGuardTargetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts">CloudGuardTargetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardTarget.CloudGuardTargetTimeouts">CloudGuardTargetTimeouts</a>

---



