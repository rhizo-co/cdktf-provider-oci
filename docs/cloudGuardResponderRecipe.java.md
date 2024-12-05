# `cloudGuardResponderRecipe` Submodule <a name="`cloudGuardResponderRecipe` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardResponderRecipe <a name="CloudGuardResponderRecipe" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe oci_cloud_guard_responder_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipe;

CloudGuardResponderRecipe.Builder.create(Construct scope, java.lang.String id)
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
    .sourceResponderRecipeId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .responderRules(IResolvable)
//  .responderRules(java.util.List<CloudGuardResponderRecipeResponderRules>)
//  .timeouts(CloudGuardResponderRecipeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#compartment_id CloudGuardResponderRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#display_name CloudGuardResponderRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.sourceResponderRecipeId">sourceResponderRecipeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#source_responder_recipe_id CloudGuardResponderRecipe#source_responder_recipe_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#defined_tags CloudGuardResponderRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#description CloudGuardResponderRecipe#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#freeform_tags CloudGuardResponderRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#id CloudGuardResponderRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.responderRules">responderRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules">CloudGuardResponderRecipeResponderRules</a>></code> | responder_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts">CloudGuardResponderRecipeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#compartment_id CloudGuardResponderRecipe#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#display_name CloudGuardResponderRecipe#display_name}.

---

##### `sourceResponderRecipeId`<sup>Required</sup> <a name="sourceResponderRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.sourceResponderRecipeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#source_responder_recipe_id CloudGuardResponderRecipe#source_responder_recipe_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#defined_tags CloudGuardResponderRecipe#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#description CloudGuardResponderRecipe#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#freeform_tags CloudGuardResponderRecipe#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#id CloudGuardResponderRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `responderRules`<sup>Optional</sup> <a name="responderRules" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.responderRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules">CloudGuardResponderRecipeResponderRules</a>>

responder_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#responder_rules CloudGuardResponderRecipe#responder_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts">CloudGuardResponderRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#timeouts CloudGuardResponderRecipe#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.putResponderRules">putResponderRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetResponderRules">resetResponderRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResponderRules` <a name="putResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.putResponderRules"></a>

```java
public void putResponderRules(IResolvable OR java.util.List<CloudGuardResponderRecipeResponderRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.putResponderRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules">CloudGuardResponderRecipeResponderRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.putTimeouts"></a>

```java
public void putTimeouts(CloudGuardResponderRecipeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts">CloudGuardResponderRecipeTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetId"></a>

```java
public void resetId()
```

##### `resetResponderRules` <a name="resetResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetResponderRules"></a>

```java
public void resetResponderRules()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGuardResponderRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipe;

CloudGuardResponderRecipe.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipe;

CloudGuardResponderRecipe.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipe;

CloudGuardResponderRecipe.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipe;

CloudGuardResponderRecipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudGuardResponderRecipe.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudGuardResponderRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudGuardResponderRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudGuardResponderRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardResponderRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.effectiveResponderRules">effectiveResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList">CloudGuardResponderRecipeEffectiveResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.responderRules">responderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList">CloudGuardResponderRecipeResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference">CloudGuardResponderRecipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.responderRulesInput">responderRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules">CloudGuardResponderRecipeResponderRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.sourceResponderRecipeIdInput">sourceResponderRecipeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts">CloudGuardResponderRecipeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.sourceResponderRecipeId">sourceResponderRecipeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveResponderRules`<sup>Required</sup> <a name="effectiveResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.effectiveResponderRules"></a>

```java
public CloudGuardResponderRecipeEffectiveResponderRulesList getEffectiveResponderRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList">CloudGuardResponderRecipeEffectiveResponderRulesList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `responderRules`<sup>Required</sup> <a name="responderRules" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.responderRules"></a>

```java
public CloudGuardResponderRecipeResponderRulesList getResponderRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList">CloudGuardResponderRecipeResponderRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.timeouts"></a>

```java
public CloudGuardResponderRecipeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference">CloudGuardResponderRecipeTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `responderRulesInput`<sup>Optional</sup> <a name="responderRulesInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.responderRulesInput"></a>

```java
public java.lang.Object getResponderRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules">CloudGuardResponderRecipeResponderRules</a>>

---

##### `sourceResponderRecipeIdInput`<sup>Optional</sup> <a name="sourceResponderRecipeIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.sourceResponderRecipeIdInput"></a>

```java
public java.lang.String getSourceResponderRecipeIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts">CloudGuardResponderRecipeTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sourceResponderRecipeId`<sup>Required</sup> <a name="sourceResponderRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.sourceResponderRecipeId"></a>

```java
public java.lang.String getSourceResponderRecipeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipe.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardResponderRecipeConfig <a name="CloudGuardResponderRecipeConfig" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeConfig;

CloudGuardResponderRecipeConfig.builder()
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
    .sourceResponderRecipeId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .responderRules(IResolvable)
//  .responderRules(java.util.List<CloudGuardResponderRecipeResponderRules>)
//  .timeouts(CloudGuardResponderRecipeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#compartment_id CloudGuardResponderRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#display_name CloudGuardResponderRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.sourceResponderRecipeId">sourceResponderRecipeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#source_responder_recipe_id CloudGuardResponderRecipe#source_responder_recipe_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#defined_tags CloudGuardResponderRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#description CloudGuardResponderRecipe#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#freeform_tags CloudGuardResponderRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#id CloudGuardResponderRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.responderRules">responderRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules">CloudGuardResponderRecipeResponderRules</a>></code> | responder_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts">CloudGuardResponderRecipeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#compartment_id CloudGuardResponderRecipe#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#display_name CloudGuardResponderRecipe#display_name}.

---

##### `sourceResponderRecipeId`<sup>Required</sup> <a name="sourceResponderRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.sourceResponderRecipeId"></a>

```java
public java.lang.String getSourceResponderRecipeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#source_responder_recipe_id CloudGuardResponderRecipe#source_responder_recipe_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#defined_tags CloudGuardResponderRecipe#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#description CloudGuardResponderRecipe#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#freeform_tags CloudGuardResponderRecipe#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#id CloudGuardResponderRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `responderRules`<sup>Optional</sup> <a name="responderRules" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.responderRules"></a>

```java
public java.lang.Object getResponderRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules">CloudGuardResponderRecipeResponderRules</a>>

responder_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#responder_rules CloudGuardResponderRecipe#responder_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeConfig.property.timeouts"></a>

```java
public CloudGuardResponderRecipeTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts">CloudGuardResponderRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#timeouts CloudGuardResponderRecipe#timeouts}

---

### CloudGuardResponderRecipeEffectiveResponderRules <a name="CloudGuardResponderRecipeEffectiveResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeEffectiveResponderRules;

CloudGuardResponderRecipeEffectiveResponderRules.builder()
    .build();
```


### CloudGuardResponderRecipeEffectiveResponderRulesDetails <a name="CloudGuardResponderRecipeEffectiveResponderRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeEffectiveResponderRulesDetails;

CloudGuardResponderRecipeEffectiveResponderRulesDetails.builder()
    .build();
```


### CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations <a name="CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations;

CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations.builder()
    .build();
```


### CloudGuardResponderRecipeResponderRules <a name="CloudGuardResponderRecipeResponderRules" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeResponderRules;

CloudGuardResponderRecipeResponderRules.builder()
    .details(CloudGuardResponderRecipeResponderRulesDetails)
    .responderRuleId(java.lang.String)
//  .compartmentId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetails">CloudGuardResponderRecipeResponderRulesDetails</a></code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules.property.responderRuleId">responderRuleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#responder_rule_id CloudGuardResponderRecipe#responder_rule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#compartment_id CloudGuardResponderRecipe#compartment_id}. |

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules.property.details"></a>

```java
public CloudGuardResponderRecipeResponderRulesDetails getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetails">CloudGuardResponderRecipeResponderRulesDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#details CloudGuardResponderRecipe#details}

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules.property.responderRuleId"></a>

```java
public java.lang.String getResponderRuleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#responder_rule_id CloudGuardResponderRecipe#responder_rule_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#compartment_id CloudGuardResponderRecipe#compartment_id}.

---

### CloudGuardResponderRecipeResponderRulesDetails <a name="CloudGuardResponderRecipeResponderRulesDetails" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeResponderRulesDetails;

CloudGuardResponderRecipeResponderRulesDetails.builder()
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetails.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#is_enabled CloudGuardResponderRecipe#is_enabled}. |

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetails.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#is_enabled CloudGuardResponderRecipe#is_enabled}.

---

### CloudGuardResponderRecipeResponderRulesDetailsConfigurations <a name="CloudGuardResponderRecipeResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurations;

CloudGuardResponderRecipeResponderRulesDetailsConfigurations.builder()
    .build();
```


### CloudGuardResponderRecipeTimeouts <a name="CloudGuardResponderRecipeTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeTimeouts;

CloudGuardResponderRecipeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#create CloudGuardResponderRecipe#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#delete CloudGuardResponderRecipe#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#update CloudGuardResponderRecipe#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#create CloudGuardResponderRecipe#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#delete CloudGuardResponderRecipe#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_responder_recipe#update CloudGuardResponderRecipe#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList <a name="CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList;

new CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.get"></a>

```java
public CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference <a name="CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference;

new CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations">CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations">CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations</a>

---


### CloudGuardResponderRecipeEffectiveResponderRulesDetailsList <a name="CloudGuardResponderRecipeEffectiveResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList;

new CloudGuardResponderRecipeEffectiveResponderRulesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.get"></a>

```java
public CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference <a name="CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference;

new CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList">CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetails">CloudGuardResponderRecipeEffectiveResponderRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.configurations"></a>

```java
public CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList">CloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.internalValue"></a>

```java
public CloudGuardResponderRecipeEffectiveResponderRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetails">CloudGuardResponderRecipeEffectiveResponderRulesDetails</a>

---


### CloudGuardResponderRecipeEffectiveResponderRulesList <a name="CloudGuardResponderRecipeEffectiveResponderRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeEffectiveResponderRulesList;

new CloudGuardResponderRecipeEffectiveResponderRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.get"></a>

```java
public CloudGuardResponderRecipeEffectiveResponderRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardResponderRecipeEffectiveResponderRulesOutputReference <a name="CloudGuardResponderRecipeEffectiveResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference;

new CloudGuardResponderRecipeEffectiveResponderRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList">CloudGuardResponderRecipeEffectiveResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.responderRuleId">responderRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.supportedModes">supportedModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRules">CloudGuardResponderRecipeEffectiveResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.details"></a>

```java
public CloudGuardResponderRecipeEffectiveResponderRulesDetailsList getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesDetailsList">CloudGuardResponderRecipeEffectiveResponderRulesDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.responderRuleId"></a>

```java
public java.lang.String getResponderRuleId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.supportedModes"></a>

```java
public java.util.List<java.lang.String> getSupportedModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.internalValue"></a>

```java
public CloudGuardResponderRecipeEffectiveResponderRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeEffectiveResponderRules">CloudGuardResponderRecipeEffectiveResponderRules</a>

---


### CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList <a name="CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList;

new CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.get"></a>

```java
public CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference <a name="CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference;

new CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.configKey">configKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurations">CloudGuardResponderRecipeResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configKey`<sup>Required</sup> <a name="configKey" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```java
public java.lang.String getConfigKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```java
public CloudGuardResponderRecipeResponderRulesDetailsConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurations">CloudGuardResponderRecipeResponderRulesDetailsConfigurations</a>

---


### CloudGuardResponderRecipeResponderRulesDetailsOutputReference <a name="CloudGuardResponderRecipeResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference;

new CloudGuardResponderRecipeResponderRulesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList">CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetails">CloudGuardResponderRecipeResponderRulesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.configurations"></a>

```java
public CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList getConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList">CloudGuardResponderRecipeResponderRulesDetailsConfigurationsList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.internalValue"></a>

```java
public CloudGuardResponderRecipeResponderRulesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetails">CloudGuardResponderRecipeResponderRulesDetails</a>

---


### CloudGuardResponderRecipeResponderRulesList <a name="CloudGuardResponderRecipeResponderRulesList" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeResponderRulesList;

new CloudGuardResponderRecipeResponderRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.get"></a>

```java
public CloudGuardResponderRecipeResponderRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules">CloudGuardResponderRecipeResponderRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules">CloudGuardResponderRecipeResponderRules</a>>

---


### CloudGuardResponderRecipeResponderRulesOutputReference <a name="CloudGuardResponderRecipeResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeResponderRulesOutputReference;

new CloudGuardResponderRecipeResponderRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDetails` <a name="putDetails" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.putDetails"></a>

```java
public void putDetails(CloudGuardResponderRecipeResponderRulesDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.putDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetails">CloudGuardResponderRecipeResponderRulesDetails</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference">CloudGuardResponderRecipeResponderRulesDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.supportedModes">supportedModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.detailsInput">detailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetails">CloudGuardResponderRecipeResponderRulesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.responderRuleIdInput">responderRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.responderRuleId">responderRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules">CloudGuardResponderRecipeResponderRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.details"></a>

```java
public CloudGuardResponderRecipeResponderRulesDetailsOutputReference getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetailsOutputReference">CloudGuardResponderRecipeResponderRulesDetailsOutputReference</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `supportedModes`<sup>Required</sup> <a name="supportedModes" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.supportedModes"></a>

```java
public java.util.List<java.lang.String> getSupportedModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.detailsInput"></a>

```java
public CloudGuardResponderRecipeResponderRulesDetails getDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesDetails">CloudGuardResponderRecipeResponderRulesDetails</a>

---

##### `responderRuleIdInput`<sup>Optional</sup> <a name="responderRuleIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.responderRuleIdInput"></a>

```java
public java.lang.String getResponderRuleIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `responderRuleId`<sup>Required</sup> <a name="responderRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.responderRuleId"></a>

```java
public java.lang.String getResponderRuleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeResponderRules">CloudGuardResponderRecipeResponderRules</a>

---


### CloudGuardResponderRecipeTimeoutsOutputReference <a name="CloudGuardResponderRecipeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_responder_recipe.CloudGuardResponderRecipeTimeoutsOutputReference;

new CloudGuardResponderRecipeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts">CloudGuardResponderRecipeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardResponderRecipe.CloudGuardResponderRecipeTimeouts">CloudGuardResponderRecipeTimeouts</a>

---



