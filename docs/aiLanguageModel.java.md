# `aiLanguageModel` Submodule <a name="`aiLanguageModel` Submodule" id="rhizo-co-terraform-provider-oci.aiLanguageModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiLanguageModel <a name="AiLanguageModel" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model oci_ai_language_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModel;

AiLanguageModel.Builder.create(Construct scope, java.lang.String id)
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
    .modelDetails(AiLanguageModelModelDetails)
    .projectId(java.lang.String)
    .trainingDataset(AiLanguageModelTrainingDataset)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .testStrategy(AiLanguageModelTestStrategy)
//  .timeouts(AiLanguageModelTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#compartment_id AiLanguageModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.modelDetails">modelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a></code> | model_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#project_id AiLanguageModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.trainingDataset">trainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#defined_tags AiLanguageModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#description AiLanguageModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#display_name AiLanguageModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#freeform_tags AiLanguageModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#id AiLanguageModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.testStrategy">testStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a></code> | test_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts">AiLanguageModelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#compartment_id AiLanguageModel#compartment_id}.

---

##### `modelDetails`<sup>Required</sup> <a name="modelDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.modelDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a>

model_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#model_details AiLanguageModel#model_details}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#project_id AiLanguageModel#project_id}.

---

##### `trainingDataset`<sup>Required</sup> <a name="trainingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.trainingDataset"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#training_dataset AiLanguageModel#training_dataset}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#defined_tags AiLanguageModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#description AiLanguageModel#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#display_name AiLanguageModel#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#freeform_tags AiLanguageModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#id AiLanguageModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `testStrategy`<sup>Optional</sup> <a name="testStrategy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.testStrategy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a>

test_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#test_strategy AiLanguageModel#test_strategy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts">AiLanguageModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#timeouts AiLanguageModel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putModelDetails">putModelDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTestStrategy">putTestStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTrainingDataset">putTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetTestStrategy">resetTestStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putModelDetails` <a name="putModelDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putModelDetails"></a>

```java
public void putModelDetails(AiLanguageModelModelDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putModelDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a>

---

##### `putTestStrategy` <a name="putTestStrategy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTestStrategy"></a>

```java
public void putTestStrategy(AiLanguageModelTestStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTestStrategy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTimeouts"></a>

```java
public void putTimeouts(AiLanguageModelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts">AiLanguageModelTimeouts</a>

---

##### `putTrainingDataset` <a name="putTrainingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTrainingDataset"></a>

```java
public void putTrainingDataset(AiLanguageModelTrainingDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.putTrainingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetId"></a>

```java
public void resetId()
```

##### `resetTestStrategy` <a name="resetTestStrategy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetTestStrategy"></a>

```java
public void resetTestStrategy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AiLanguageModel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModel;

AiLanguageModel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModel;

AiLanguageModel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModel;

AiLanguageModel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModel;

AiLanguageModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiLanguageModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AiLanguageModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiLanguageModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiLanguageModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AiLanguageModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.evaluationResults">evaluationResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList">AiLanguageModelEvaluationResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.modelDetails">modelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference">AiLanguageModelModelDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.testStrategy">testStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference">AiLanguageModelTestStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference">AiLanguageModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.trainingDataset">trainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference">AiLanguageModelTrainingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.modelDetailsInput">modelDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.testStrategyInput">testStrategyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts">AiLanguageModelTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.trainingDatasetInput">trainingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `evaluationResults`<sup>Required</sup> <a name="evaluationResults" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.evaluationResults"></a>

```java
public AiLanguageModelEvaluationResultsList getEvaluationResults();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList">AiLanguageModelEvaluationResultsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `modelDetails`<sup>Required</sup> <a name="modelDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.modelDetails"></a>

```java
public AiLanguageModelModelDetailsOutputReference getModelDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference">AiLanguageModelModelDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `testStrategy`<sup>Required</sup> <a name="testStrategy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.testStrategy"></a>

```java
public AiLanguageModelTestStrategyOutputReference getTestStrategy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference">AiLanguageModelTestStrategyOutputReference</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeouts"></a>

```java
public AiLanguageModelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference">AiLanguageModelTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `trainingDataset`<sup>Required</sup> <a name="trainingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.trainingDataset"></a>

```java
public AiLanguageModelTrainingDatasetOutputReference getTrainingDataset();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference">AiLanguageModelTrainingDatasetOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `modelDetailsInput`<sup>Optional</sup> <a name="modelDetailsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.modelDetailsInput"></a>

```java
public AiLanguageModelModelDetails getModelDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `testStrategyInput`<sup>Optional</sup> <a name="testStrategyInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.testStrategyInput"></a>

```java
public AiLanguageModelTestStrategy getTestStrategyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts">AiLanguageModelTimeouts</a>

---

##### `trainingDatasetInput`<sup>Optional</sup> <a name="trainingDatasetInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.trainingDatasetInput"></a>

```java
public AiLanguageModelTrainingDataset getTrainingDatasetInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiLanguageModelConfig <a name="AiLanguageModelConfig" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelConfig;

AiLanguageModelConfig.builder()
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
    .modelDetails(AiLanguageModelModelDetails)
    .projectId(java.lang.String)
    .trainingDataset(AiLanguageModelTrainingDataset)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .testStrategy(AiLanguageModelTestStrategy)
//  .timeouts(AiLanguageModelTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#compartment_id AiLanguageModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.modelDetails">modelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a></code> | model_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#project_id AiLanguageModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.trainingDataset">trainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#defined_tags AiLanguageModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#description AiLanguageModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#display_name AiLanguageModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#freeform_tags AiLanguageModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#id AiLanguageModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.testStrategy">testStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a></code> | test_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts">AiLanguageModelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#compartment_id AiLanguageModel#compartment_id}.

---

##### `modelDetails`<sup>Required</sup> <a name="modelDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.modelDetails"></a>

```java
public AiLanguageModelModelDetails getModelDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a>

model_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#model_details AiLanguageModel#model_details}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#project_id AiLanguageModel#project_id}.

---

##### `trainingDataset`<sup>Required</sup> <a name="trainingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.trainingDataset"></a>

```java
public AiLanguageModelTrainingDataset getTrainingDataset();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#training_dataset AiLanguageModel#training_dataset}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#defined_tags AiLanguageModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#description AiLanguageModel#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#display_name AiLanguageModel#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#freeform_tags AiLanguageModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#id AiLanguageModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `testStrategy`<sup>Optional</sup> <a name="testStrategy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.testStrategy"></a>

```java
public AiLanguageModelTestStrategy getTestStrategy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a>

test_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#test_strategy AiLanguageModel#test_strategy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelConfig.property.timeouts"></a>

```java
public AiLanguageModelTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts">AiLanguageModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#timeouts AiLanguageModel#timeouts}

---

### AiLanguageModelEvaluationResults <a name="AiLanguageModelEvaluationResults" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelEvaluationResults;

AiLanguageModelEvaluationResults.builder()
    .build();
```


### AiLanguageModelEvaluationResultsClassMetrics <a name="AiLanguageModelEvaluationResultsClassMetrics" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelEvaluationResultsClassMetrics;

AiLanguageModelEvaluationResultsClassMetrics.builder()
    .build();
```


### AiLanguageModelEvaluationResultsEntityMetrics <a name="AiLanguageModelEvaluationResultsEntityMetrics" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelEvaluationResultsEntityMetrics;

AiLanguageModelEvaluationResultsEntityMetrics.builder()
    .build();
```


### AiLanguageModelEvaluationResultsMetrics <a name="AiLanguageModelEvaluationResultsMetrics" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelEvaluationResultsMetrics;

AiLanguageModelEvaluationResultsMetrics.builder()
    .build();
```


### AiLanguageModelModelDetails <a name="AiLanguageModelModelDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelModelDetails;

AiLanguageModelModelDetails.builder()
    .modelType(java.lang.String)
//  .classificationMode(AiLanguageModelModelDetailsClassificationMode)
//  .languageCode(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.modelType">modelType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#model_type AiLanguageModel#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.classificationMode">classificationMode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a></code> | classification_mode block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#language_code AiLanguageModel#language_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#version AiLanguageModel#version}. |

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#model_type AiLanguageModel#model_type}.

---

##### `classificationMode`<sup>Optional</sup> <a name="classificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.classificationMode"></a>

```java
public AiLanguageModelModelDetailsClassificationMode getClassificationMode();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a>

classification_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#classification_mode AiLanguageModel#classification_mode}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#language_code AiLanguageModel#language_code}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#version AiLanguageModel#version}.

---

### AiLanguageModelModelDetailsClassificationMode <a name="AiLanguageModelModelDetailsClassificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelModelDetailsClassificationMode;

AiLanguageModelModelDetailsClassificationMode.builder()
    .classificationMode(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode.property.classificationMode">classificationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#classification_mode AiLanguageModel#classification_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#version AiLanguageModel#version}. |

---

##### `classificationMode`<sup>Required</sup> <a name="classificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode.property.classificationMode"></a>

```java
public java.lang.String getClassificationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#classification_mode AiLanguageModel#classification_mode}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#version AiLanguageModel#version}.

---

### AiLanguageModelTestStrategy <a name="AiLanguageModelTestStrategy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTestStrategy;

AiLanguageModelTestStrategy.builder()
    .strategyType(java.lang.String)
    .testingDataset(AiLanguageModelTestStrategyTestingDataset)
//  .validationDataset(AiLanguageModelTestStrategyValidationDataset)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.property.strategyType">strategyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#strategy_type AiLanguageModel#strategy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.property.testingDataset">testingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a></code> | testing_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.property.validationDataset">validationDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a></code> | validation_dataset block. |

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.property.strategyType"></a>

```java
public java.lang.String getStrategyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#strategy_type AiLanguageModel#strategy_type}.

---

##### `testingDataset`<sup>Required</sup> <a name="testingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.property.testingDataset"></a>

```java
public AiLanguageModelTestStrategyTestingDataset getTestingDataset();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a>

testing_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#testing_dataset AiLanguageModel#testing_dataset}

---

##### `validationDataset`<sup>Optional</sup> <a name="validationDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy.property.validationDataset"></a>

```java
public AiLanguageModelTestStrategyValidationDataset getValidationDataset();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a>

validation_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#validation_dataset AiLanguageModel#validation_dataset}

---

### AiLanguageModelTestStrategyTestingDataset <a name="AiLanguageModelTestStrategyTestingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTestStrategyTestingDataset;

AiLanguageModelTestStrategyTestingDataset.builder()
    .datasetType(java.lang.String)
//  .datasetId(java.lang.String)
//  .locationDetails(AiLanguageModelTestStrategyTestingDatasetLocationDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.property.locationDetails">locationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a></code> | location_details block. |

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}.

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}.

---

##### `locationDetails`<sup>Optional</sup> <a name="locationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset.property.locationDetails"></a>

```java
public AiLanguageModelTestStrategyTestingDatasetLocationDetails getLocationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a>

location_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_details AiLanguageModel#location_details}

---

### AiLanguageModelTestStrategyTestingDatasetLocationDetails <a name="AiLanguageModelTestStrategyTestingDatasetLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTestStrategyTestingDatasetLocationDetails;

AiLanguageModelTestStrategyTestingDatasetLocationDetails.builder()
    .bucket(java.lang.String)
    .locationType(java.lang.String)
    .namespace(java.lang.String)
    .objectNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.locationType">locationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.objectNames">objectNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}.

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}.

---

##### `objectNames`<sup>Required</sup> <a name="objectNames" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails.property.objectNames"></a>

```java
public java.util.List<java.lang.String> getObjectNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}.

---

### AiLanguageModelTestStrategyValidationDataset <a name="AiLanguageModelTestStrategyValidationDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTestStrategyValidationDataset;

AiLanguageModelTestStrategyValidationDataset.builder()
    .datasetType(java.lang.String)
//  .datasetId(java.lang.String)
//  .locationDetails(AiLanguageModelTestStrategyValidationDatasetLocationDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.property.locationDetails">locationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a></code> | location_details block. |

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}.

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}.

---

##### `locationDetails`<sup>Optional</sup> <a name="locationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset.property.locationDetails"></a>

```java
public AiLanguageModelTestStrategyValidationDatasetLocationDetails getLocationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a>

location_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_details AiLanguageModel#location_details}

---

### AiLanguageModelTestStrategyValidationDatasetLocationDetails <a name="AiLanguageModelTestStrategyValidationDatasetLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTestStrategyValidationDatasetLocationDetails;

AiLanguageModelTestStrategyValidationDatasetLocationDetails.builder()
    .bucket(java.lang.String)
    .locationType(java.lang.String)
    .namespace(java.lang.String)
    .objectNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.locationType">locationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.objectNames">objectNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}.

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}.

---

##### `objectNames`<sup>Required</sup> <a name="objectNames" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails.property.objectNames"></a>

```java
public java.util.List<java.lang.String> getObjectNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}.

---

### AiLanguageModelTimeouts <a name="AiLanguageModelTimeouts" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTimeouts;

AiLanguageModelTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#create AiLanguageModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#delete AiLanguageModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#update AiLanguageModel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#create AiLanguageModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#delete AiLanguageModel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#update AiLanguageModel#update}.

---

### AiLanguageModelTrainingDataset <a name="AiLanguageModelTrainingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTrainingDataset;

AiLanguageModelTrainingDataset.builder()
    .datasetType(java.lang.String)
//  .datasetId(java.lang.String)
//  .locationDetails(AiLanguageModelTrainingDatasetLocationDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.property.locationDetails">locationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a></code> | location_details block. |

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_type AiLanguageModel#dataset_type}.

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#dataset_id AiLanguageModel#dataset_id}.

---

##### `locationDetails`<sup>Optional</sup> <a name="locationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset.property.locationDetails"></a>

```java
public AiLanguageModelTrainingDatasetLocationDetails getLocationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a>

location_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_details AiLanguageModel#location_details}

---

### AiLanguageModelTrainingDatasetLocationDetails <a name="AiLanguageModelTrainingDatasetLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTrainingDatasetLocationDetails;

AiLanguageModelTrainingDatasetLocationDetails.builder()
    .bucket(java.lang.String)
    .locationType(java.lang.String)
    .namespace(java.lang.String)
    .objectNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.locationType">locationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.objectNames">objectNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#bucket AiLanguageModel#bucket}.

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#location_type AiLanguageModel#location_type}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#namespace AiLanguageModel#namespace}.

---

##### `objectNames`<sup>Required</sup> <a name="objectNames" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails.property.objectNames"></a>

```java
public java.util.List<java.lang.String> getObjectNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_language_model#object_names AiLanguageModel#object_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiLanguageModelEvaluationResultsClassMetricsList <a name="AiLanguageModelEvaluationResultsClassMetricsList" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelEvaluationResultsClassMetricsList;

new AiLanguageModelEvaluationResultsClassMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.get"></a>

```java
public AiLanguageModelEvaluationResultsClassMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AiLanguageModelEvaluationResultsClassMetricsOutputReference <a name="AiLanguageModelEvaluationResultsClassMetricsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelEvaluationResultsClassMetricsOutputReference;

new AiLanguageModelEvaluationResultsClassMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.f1">f1</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.precision">precision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.recall">recall</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.support">support</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetrics">AiLanguageModelEvaluationResultsClassMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `f1`<sup>Required</sup> <a name="f1" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.f1"></a>

```java
public java.lang.Number getF1();
```

- *Type:* java.lang.Number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.precision"></a>

```java
public java.lang.Number getPrecision();
```

- *Type:* java.lang.Number

---

##### `recall`<sup>Required</sup> <a name="recall" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.recall"></a>

```java
public java.lang.Number getRecall();
```

- *Type:* java.lang.Number

---

##### `support`<sup>Required</sup> <a name="support" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.support"></a>

```java
public java.lang.Number getSupport();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsOutputReference.property.internalValue"></a>

```java
public AiLanguageModelEvaluationResultsClassMetrics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetrics">AiLanguageModelEvaluationResultsClassMetrics</a>

---


### AiLanguageModelEvaluationResultsEntityMetricsList <a name="AiLanguageModelEvaluationResultsEntityMetricsList" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelEvaluationResultsEntityMetricsList;

new AiLanguageModelEvaluationResultsEntityMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.get"></a>

```java
public AiLanguageModelEvaluationResultsEntityMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AiLanguageModelEvaluationResultsEntityMetricsOutputReference <a name="AiLanguageModelEvaluationResultsEntityMetricsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelEvaluationResultsEntityMetricsOutputReference;

new AiLanguageModelEvaluationResultsEntityMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.f1">f1</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.precision">precision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.recall">recall</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetrics">AiLanguageModelEvaluationResultsEntityMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `f1`<sup>Required</sup> <a name="f1" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.f1"></a>

```java
public java.lang.Number getF1();
```

- *Type:* java.lang.Number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.precision"></a>

```java
public java.lang.Number getPrecision();
```

- *Type:* java.lang.Number

---

##### `recall`<sup>Required</sup> <a name="recall" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.recall"></a>

```java
public java.lang.Number getRecall();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsOutputReference.property.internalValue"></a>

```java
public AiLanguageModelEvaluationResultsEntityMetrics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetrics">AiLanguageModelEvaluationResultsEntityMetrics</a>

---


### AiLanguageModelEvaluationResultsList <a name="AiLanguageModelEvaluationResultsList" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelEvaluationResultsList;

new AiLanguageModelEvaluationResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.get"></a>

```java
public AiLanguageModelEvaluationResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AiLanguageModelEvaluationResultsMetricsList <a name="AiLanguageModelEvaluationResultsMetricsList" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelEvaluationResultsMetricsList;

new AiLanguageModelEvaluationResultsMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.get"></a>

```java
public AiLanguageModelEvaluationResultsMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AiLanguageModelEvaluationResultsMetricsOutputReference <a name="AiLanguageModelEvaluationResultsMetricsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelEvaluationResultsMetricsOutputReference;

new AiLanguageModelEvaluationResultsMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.accuracy">accuracy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.macroF1">macroF1</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.macroPrecision">macroPrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.macroRecall">macroRecall</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.microF1">microF1</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.microPrecision">microPrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.microRecall">microRecall</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedF1">weightedF1</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedPrecision">weightedPrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedRecall">weightedRecall</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetrics">AiLanguageModelEvaluationResultsMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.accuracy"></a>

```java
public java.lang.Number getAccuracy();
```

- *Type:* java.lang.Number

---

##### `macroF1`<sup>Required</sup> <a name="macroF1" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.macroF1"></a>

```java
public java.lang.Number getMacroF1();
```

- *Type:* java.lang.Number

---

##### `macroPrecision`<sup>Required</sup> <a name="macroPrecision" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.macroPrecision"></a>

```java
public java.lang.Number getMacroPrecision();
```

- *Type:* java.lang.Number

---

##### `macroRecall`<sup>Required</sup> <a name="macroRecall" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.macroRecall"></a>

```java
public java.lang.Number getMacroRecall();
```

- *Type:* java.lang.Number

---

##### `microF1`<sup>Required</sup> <a name="microF1" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.microF1"></a>

```java
public java.lang.Number getMicroF1();
```

- *Type:* java.lang.Number

---

##### `microPrecision`<sup>Required</sup> <a name="microPrecision" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.microPrecision"></a>

```java
public java.lang.Number getMicroPrecision();
```

- *Type:* java.lang.Number

---

##### `microRecall`<sup>Required</sup> <a name="microRecall" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.microRecall"></a>

```java
public java.lang.Number getMicroRecall();
```

- *Type:* java.lang.Number

---

##### `weightedF1`<sup>Required</sup> <a name="weightedF1" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedF1"></a>

```java
public java.lang.Number getWeightedF1();
```

- *Type:* java.lang.Number

---

##### `weightedPrecision`<sup>Required</sup> <a name="weightedPrecision" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedPrecision"></a>

```java
public java.lang.Number getWeightedPrecision();
```

- *Type:* java.lang.Number

---

##### `weightedRecall`<sup>Required</sup> <a name="weightedRecall" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.weightedRecall"></a>

```java
public java.lang.Number getWeightedRecall();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsOutputReference.property.internalValue"></a>

```java
public AiLanguageModelEvaluationResultsMetrics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetrics">AiLanguageModelEvaluationResultsMetrics</a>

---


### AiLanguageModelEvaluationResultsOutputReference <a name="AiLanguageModelEvaluationResultsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelEvaluationResultsOutputReference;

new AiLanguageModelEvaluationResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.classMetrics">classMetrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList">AiLanguageModelEvaluationResultsClassMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.confusionMatrix">confusionMatrix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.entityMetrics">entityMetrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList">AiLanguageModelEvaluationResultsEntityMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList">AiLanguageModelEvaluationResultsMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.modelType">modelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResults">AiLanguageModelEvaluationResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classMetrics`<sup>Required</sup> <a name="classMetrics" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.classMetrics"></a>

```java
public AiLanguageModelEvaluationResultsClassMetricsList getClassMetrics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsClassMetricsList">AiLanguageModelEvaluationResultsClassMetricsList</a>

---

##### `confusionMatrix`<sup>Required</sup> <a name="confusionMatrix" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.confusionMatrix"></a>

```java
public java.lang.String getConfusionMatrix();
```

- *Type:* java.lang.String

---

##### `entityMetrics`<sup>Required</sup> <a name="entityMetrics" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.entityMetrics"></a>

```java
public AiLanguageModelEvaluationResultsEntityMetricsList getEntityMetrics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsEntityMetricsList">AiLanguageModelEvaluationResultsEntityMetricsList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.metrics"></a>

```java
public AiLanguageModelEvaluationResultsMetricsList getMetrics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsMetricsList">AiLanguageModelEvaluationResultsMetricsList</a>

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResultsOutputReference.property.internalValue"></a>

```java
public AiLanguageModelEvaluationResults getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelEvaluationResults">AiLanguageModelEvaluationResults</a>

---


### AiLanguageModelModelDetailsClassificationModeOutputReference <a name="AiLanguageModelModelDetailsClassificationModeOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelModelDetailsClassificationModeOutputReference;

new AiLanguageModelModelDetailsClassificationModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.classificationModeInput">classificationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.classificationMode">classificationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classificationModeInput`<sup>Optional</sup> <a name="classificationModeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.classificationModeInput"></a>

```java
public java.lang.String getClassificationModeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `classificationMode`<sup>Required</sup> <a name="classificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.classificationMode"></a>

```java
public java.lang.String getClassificationMode();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference.property.internalValue"></a>

```java
public AiLanguageModelModelDetailsClassificationMode getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a>

---


### AiLanguageModelModelDetailsOutputReference <a name="AiLanguageModelModelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelModelDetailsOutputReference;

new AiLanguageModelModelDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.putClassificationMode">putClassificationMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resetClassificationMode">resetClassificationMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClassificationMode` <a name="putClassificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.putClassificationMode"></a>

```java
public void putClassificationMode(AiLanguageModelModelDetailsClassificationMode value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.putClassificationMode.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a>

---

##### `resetClassificationMode` <a name="resetClassificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resetClassificationMode"></a>

```java
public void resetClassificationMode()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetVersion` <a name="resetVersion" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.classificationMode">classificationMode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference">AiLanguageModelModelDetailsClassificationModeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.classificationModeInput">classificationModeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.modelTypeInput">modelTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.modelType">modelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classificationMode`<sup>Required</sup> <a name="classificationMode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.classificationMode"></a>

```java
public AiLanguageModelModelDetailsClassificationModeOutputReference getClassificationMode();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationModeOutputReference">AiLanguageModelModelDetailsClassificationModeOutputReference</a>

---

##### `classificationModeInput`<sup>Optional</sup> <a name="classificationModeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.classificationModeInput"></a>

```java
public AiLanguageModelModelDetailsClassificationMode getClassificationModeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsClassificationMode">AiLanguageModelModelDetailsClassificationMode</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `modelTypeInput`<sup>Optional</sup> <a name="modelTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.modelTypeInput"></a>

```java
public java.lang.String getModelTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetailsOutputReference.property.internalValue"></a>

```java
public AiLanguageModelModelDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelModelDetails">AiLanguageModelModelDetails</a>

---


### AiLanguageModelTestStrategyOutputReference <a name="AiLanguageModelTestStrategyOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTestStrategyOutputReference;

new AiLanguageModelTestStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.putTestingDataset">putTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.putValidationDataset">putValidationDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.resetValidationDataset">resetValidationDataset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTestingDataset` <a name="putTestingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.putTestingDataset"></a>

```java
public void putTestingDataset(AiLanguageModelTestStrategyTestingDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.putTestingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a>

---

##### `putValidationDataset` <a name="putValidationDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.putValidationDataset"></a>

```java
public void putValidationDataset(AiLanguageModelTestStrategyValidationDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.putValidationDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a>

---

##### `resetValidationDataset` <a name="resetValidationDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.resetValidationDataset"></a>

```java
public void resetValidationDataset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.testingDataset">testingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference">AiLanguageModelTestStrategyTestingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.validationDataset">validationDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference">AiLanguageModelTestStrategyValidationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.strategyTypeInput">strategyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.testingDatasetInput">testingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.validationDatasetInput">validationDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.strategyType">strategyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `testingDataset`<sup>Required</sup> <a name="testingDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.testingDataset"></a>

```java
public AiLanguageModelTestStrategyTestingDatasetOutputReference getTestingDataset();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference">AiLanguageModelTestStrategyTestingDatasetOutputReference</a>

---

##### `validationDataset`<sup>Required</sup> <a name="validationDataset" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.validationDataset"></a>

```java
public AiLanguageModelTestStrategyValidationDatasetOutputReference getValidationDataset();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference">AiLanguageModelTestStrategyValidationDatasetOutputReference</a>

---

##### `strategyTypeInput`<sup>Optional</sup> <a name="strategyTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.strategyTypeInput"></a>

```java
public java.lang.String getStrategyTypeInput();
```

- *Type:* java.lang.String

---

##### `testingDatasetInput`<sup>Optional</sup> <a name="testingDatasetInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.testingDatasetInput"></a>

```java
public AiLanguageModelTestStrategyTestingDataset getTestingDatasetInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a>

---

##### `validationDatasetInput`<sup>Optional</sup> <a name="validationDatasetInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.validationDatasetInput"></a>

```java
public AiLanguageModelTestStrategyValidationDataset getValidationDatasetInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a>

---

##### `strategyType`<sup>Required</sup> <a name="strategyType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.strategyType"></a>

```java
public java.lang.String getStrategyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyOutputReference.property.internalValue"></a>

```java
public AiLanguageModelTestStrategy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategy">AiLanguageModelTestStrategy</a>

---


### AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference <a name="AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference;

new AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.objectNamesInput">objectNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.locationType">locationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.objectNames">objectNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.locationTypeInput"></a>

```java
public java.lang.String getLocationTypeInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectNamesInput`<sup>Optional</sup> <a name="objectNamesInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.objectNamesInput"></a>

```java
public java.util.List<java.lang.String> getObjectNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `objectNames`<sup>Required</sup> <a name="objectNames" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.objectNames"></a>

```java
public java.util.List<java.lang.String> getObjectNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference.property.internalValue"></a>

```java
public AiLanguageModelTestStrategyTestingDatasetLocationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a>

---


### AiLanguageModelTestStrategyTestingDatasetOutputReference <a name="AiLanguageModelTestStrategyTestingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTestStrategyTestingDatasetOutputReference;

new AiLanguageModelTestStrategyTestingDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.putLocationDetails">putLocationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resetLocationDetails">resetLocationDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocationDetails` <a name="putLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.putLocationDetails"></a>

```java
public void putLocationDetails(AiLanguageModelTestStrategyTestingDatasetLocationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.putLocationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a>

---

##### `resetDatasetId` <a name="resetDatasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetLocationDetails` <a name="resetLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.resetLocationDetails"></a>

```java
public void resetLocationDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.locationDetails">locationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference">AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetTypeInput">datasetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.locationDetailsInput">locationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationDetails`<sup>Required</sup> <a name="locationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.locationDetails"></a>

```java
public AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference getLocationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference">AiLanguageModelTestStrategyTestingDatasetLocationDetailsOutputReference</a>

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `datasetTypeInput`<sup>Optional</sup> <a name="datasetTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetTypeInput"></a>

```java
public java.lang.String getDatasetTypeInput();
```

- *Type:* java.lang.String

---

##### `locationDetailsInput`<sup>Optional</sup> <a name="locationDetailsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.locationDetailsInput"></a>

```java
public AiLanguageModelTestStrategyTestingDatasetLocationDetails getLocationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetLocationDetails">AiLanguageModelTestStrategyTestingDatasetLocationDetails</a>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDatasetOutputReference.property.internalValue"></a>

```java
public AiLanguageModelTestStrategyTestingDataset getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyTestingDataset">AiLanguageModelTestStrategyTestingDataset</a>

---


### AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference <a name="AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference;

new AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.objectNamesInput">objectNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.locationType">locationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.objectNames">objectNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.locationTypeInput"></a>

```java
public java.lang.String getLocationTypeInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectNamesInput`<sup>Optional</sup> <a name="objectNamesInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.objectNamesInput"></a>

```java
public java.util.List<java.lang.String> getObjectNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `objectNames`<sup>Required</sup> <a name="objectNames" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.objectNames"></a>

```java
public java.util.List<java.lang.String> getObjectNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference.property.internalValue"></a>

```java
public AiLanguageModelTestStrategyValidationDatasetLocationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a>

---


### AiLanguageModelTestStrategyValidationDatasetOutputReference <a name="AiLanguageModelTestStrategyValidationDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTestStrategyValidationDatasetOutputReference;

new AiLanguageModelTestStrategyValidationDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.putLocationDetails">putLocationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resetLocationDetails">resetLocationDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocationDetails` <a name="putLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.putLocationDetails"></a>

```java
public void putLocationDetails(AiLanguageModelTestStrategyValidationDatasetLocationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.putLocationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a>

---

##### `resetDatasetId` <a name="resetDatasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetLocationDetails` <a name="resetLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.resetLocationDetails"></a>

```java
public void resetLocationDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.locationDetails">locationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference">AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetTypeInput">datasetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.locationDetailsInput">locationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationDetails`<sup>Required</sup> <a name="locationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.locationDetails"></a>

```java
public AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference getLocationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference">AiLanguageModelTestStrategyValidationDatasetLocationDetailsOutputReference</a>

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `datasetTypeInput`<sup>Optional</sup> <a name="datasetTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetTypeInput"></a>

```java
public java.lang.String getDatasetTypeInput();
```

- *Type:* java.lang.String

---

##### `locationDetailsInput`<sup>Optional</sup> <a name="locationDetailsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.locationDetailsInput"></a>

```java
public AiLanguageModelTestStrategyValidationDatasetLocationDetails getLocationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetLocationDetails">AiLanguageModelTestStrategyValidationDatasetLocationDetails</a>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDatasetOutputReference.property.internalValue"></a>

```java
public AiLanguageModelTestStrategyValidationDataset getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTestStrategyValidationDataset">AiLanguageModelTestStrategyValidationDataset</a>

---


### AiLanguageModelTimeoutsOutputReference <a name="AiLanguageModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTimeoutsOutputReference;

new AiLanguageModelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts">AiLanguageModelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTimeouts">AiLanguageModelTimeouts</a>

---


### AiLanguageModelTrainingDatasetLocationDetailsOutputReference <a name="AiLanguageModelTrainingDatasetLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTrainingDatasetLocationDetailsOutputReference;

new AiLanguageModelTrainingDatasetLocationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.objectNamesInput">objectNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.locationType">locationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.objectNames">objectNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.locationTypeInput"></a>

```java
public java.lang.String getLocationTypeInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectNamesInput`<sup>Optional</sup> <a name="objectNamesInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.objectNamesInput"></a>

```java
public java.util.List<java.lang.String> getObjectNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `objectNames`<sup>Required</sup> <a name="objectNames" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.objectNames"></a>

```java
public java.util.List<java.lang.String> getObjectNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference.property.internalValue"></a>

```java
public AiLanguageModelTrainingDatasetLocationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a>

---


### AiLanguageModelTrainingDatasetOutputReference <a name="AiLanguageModelTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_language_model.AiLanguageModelTrainingDatasetOutputReference;

new AiLanguageModelTrainingDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.putLocationDetails">putLocationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resetLocationDetails">resetLocationDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocationDetails` <a name="putLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.putLocationDetails"></a>

```java
public void putLocationDetails(AiLanguageModelTrainingDatasetLocationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.putLocationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a>

---

##### `resetDatasetId` <a name="resetDatasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetLocationDetails` <a name="resetLocationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.resetLocationDetails"></a>

```java
public void resetLocationDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.locationDetails">locationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference">AiLanguageModelTrainingDatasetLocationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetTypeInput">datasetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.locationDetailsInput">locationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationDetails`<sup>Required</sup> <a name="locationDetails" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.locationDetails"></a>

```java
public AiLanguageModelTrainingDatasetLocationDetailsOutputReference getLocationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetailsOutputReference">AiLanguageModelTrainingDatasetLocationDetailsOutputReference</a>

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `datasetTypeInput`<sup>Optional</sup> <a name="datasetTypeInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetTypeInput"></a>

```java
public java.lang.String getDatasetTypeInput();
```

- *Type:* java.lang.String

---

##### `locationDetailsInput`<sup>Optional</sup> <a name="locationDetailsInput" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.locationDetailsInput"></a>

```java
public AiLanguageModelTrainingDatasetLocationDetails getLocationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetLocationDetails">AiLanguageModelTrainingDatasetLocationDetails</a>

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDatasetOutputReference.property.internalValue"></a>

```java
public AiLanguageModelTrainingDataset getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiLanguageModel.AiLanguageModelTrainingDataset">AiLanguageModelTrainingDataset</a>

---



