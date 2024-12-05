# `datasciencePipeline` Submodule <a name="`datasciencePipeline` Submodule" id="rhizo-co-terraform-provider-oci.datasciencePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasciencePipeline <a name="DatasciencePipeline" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline oci_datascience_pipeline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipeline(scope Construct, id *string, config DatasciencePipelineConfig) DatasciencePipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig">DatasciencePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig">DatasciencePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putConfigurationDetails">PutConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putInfrastructureConfigurationDetails">PutInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putLogConfigurationDetails">PutLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepArtifact">PutStepArtifact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepDetails">PutStepDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetConfigurationDetails">ResetConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDeleteRelatedPipelineRuns">ResetDeleteRelatedPipelineRuns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetInfrastructureConfigurationDetails">ResetInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetLogConfigurationDetails">ResetLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetStepArtifact">ResetStepArtifact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigurationDetails` <a name="PutConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putConfigurationDetails"></a>

```go
func PutConfigurationDetails(value DatasciencePipelineConfigurationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

---

##### `PutInfrastructureConfigurationDetails` <a name="PutInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putInfrastructureConfigurationDetails"></a>

```go
func PutInfrastructureConfigurationDetails(value DatasciencePipelineInfrastructureConfigurationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putInfrastructureConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

---

##### `PutLogConfigurationDetails` <a name="PutLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putLogConfigurationDetails"></a>

```go
func PutLogConfigurationDetails(value DatasciencePipelineLogConfigurationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putLogConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

---

##### `PutStepArtifact` <a name="PutStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepArtifact"></a>

```go
func PutStepArtifact(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepArtifact.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStepDetails` <a name="PutStepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepDetails"></a>

```go
func PutStepDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putTimeouts"></a>

```go
func PutTimeouts(value DatasciencePipelineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a>

---

##### `ResetConfigurationDetails` <a name="ResetConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetConfigurationDetails"></a>

```go
func ResetConfigurationDetails()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDeleteRelatedPipelineRuns` <a name="ResetDeleteRelatedPipelineRuns" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDeleteRelatedPipelineRuns"></a>

```go
func ResetDeleteRelatedPipelineRuns()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetId"></a>

```go
func ResetId()
```

##### `ResetInfrastructureConfigurationDetails` <a name="ResetInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetInfrastructureConfigurationDetails"></a>

```go
func ResetInfrastructureConfigurationDetails()
```

##### `ResetLogConfigurationDetails` <a name="ResetLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetLogConfigurationDetails"></a>

```go
func ResetLogConfigurationDetails()
```

##### `ResetStepArtifact` <a name="ResetStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetStepArtifact"></a>

```go
func ResetStepArtifact()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatasciencePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.DatasciencePipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.DatasciencePipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.DatasciencePipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.DatasciencePipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatasciencePipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatasciencePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatasciencePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatasciencePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.configurationDetails">ConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference">DatasciencePipelineConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.infrastructureConfigurationDetails">InfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference">DatasciencePipelineInfrastructureConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.logConfigurationDetails">LogConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference">DatasciencePipelineLogConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepArtifact">StepArtifact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList">DatasciencePipelineStepArtifactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepDetails">StepDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList">DatasciencePipelineStepDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference">DatasciencePipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.configurationDetailsInput">ConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.deleteRelatedPipelineRunsInput">DeleteRelatedPipelineRunsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.infrastructureConfigurationDetailsInput">InfrastructureConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.logConfigurationDetailsInput">LogConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepArtifactInput">StepArtifactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepDetailsInput">StepDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.deleteRelatedPipelineRuns">DeleteRelatedPipelineRuns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationDetails`<sup>Required</sup> <a name="ConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.configurationDetails"></a>

```go
func ConfigurationDetails() DatasciencePipelineConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference">DatasciencePipelineConfigurationDetailsOutputReference</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `InfrastructureConfigurationDetails`<sup>Required</sup> <a name="InfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.infrastructureConfigurationDetails"></a>

```go
func InfrastructureConfigurationDetails() DatasciencePipelineInfrastructureConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference">DatasciencePipelineInfrastructureConfigurationDetailsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LogConfigurationDetails`<sup>Required</sup> <a name="LogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.logConfigurationDetails"></a>

```go
func LogConfigurationDetails() DatasciencePipelineLogConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference">DatasciencePipelineLogConfigurationDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StepArtifact`<sup>Required</sup> <a name="StepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepArtifact"></a>

```go
func StepArtifact() DatasciencePipelineStepArtifactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList">DatasciencePipelineStepArtifactList</a>

---

##### `StepDetails`<sup>Required</sup> <a name="StepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepDetails"></a>

```go
func StepDetails() DatasciencePipelineStepDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList">DatasciencePipelineStepDetailsList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeouts"></a>

```go
func Timeouts() DatasciencePipelineTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference">DatasciencePipelineTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationDetailsInput`<sup>Optional</sup> <a name="ConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.configurationDetailsInput"></a>

```go
func ConfigurationDetailsInput() DatasciencePipelineConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeleteRelatedPipelineRunsInput`<sup>Optional</sup> <a name="DeleteRelatedPipelineRunsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.deleteRelatedPipelineRunsInput"></a>

```go
func DeleteRelatedPipelineRunsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InfrastructureConfigurationDetailsInput`<sup>Optional</sup> <a name="InfrastructureConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.infrastructureConfigurationDetailsInput"></a>

```go
func InfrastructureConfigurationDetailsInput() DatasciencePipelineInfrastructureConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

---

##### `LogConfigurationDetailsInput`<sup>Optional</sup> <a name="LogConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.logConfigurationDetailsInput"></a>

```go
func LogConfigurationDetailsInput() DatasciencePipelineLogConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `StepArtifactInput`<sup>Optional</sup> <a name="StepArtifactInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepArtifactInput"></a>

```go
func StepArtifactInput() interface{}
```

- *Type:* interface{}

---

##### `StepDetailsInput`<sup>Optional</sup> <a name="StepDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepDetailsInput"></a>

```go
func StepDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeleteRelatedPipelineRuns`<sup>Required</sup> <a name="DeleteRelatedPipelineRuns" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.deleteRelatedPipelineRuns"></a>

```go
func DeleteRelatedPipelineRuns() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasciencePipelineConfig <a name="DatasciencePipelineConfig" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

&datasciencepipeline.DatasciencePipelineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ProjectId: *string,
	StepDetails: interface{},
	ConfigurationDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datasciencePipeline.DatasciencePipelineConfigurationDetails,
	DefinedTags: *map[string]*string,
	DeleteRelatedPipelineRuns: interface{},
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	InfrastructureConfigurationDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails,
	LogConfigurationDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails,
	StepArtifact: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.datasciencePipeline.DatasciencePipelineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#compartment_id DatasciencePipeline#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#project_id DatasciencePipeline#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.stepDetails">StepDetails</a></code> | <code>interface{}</code> | step_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.configurationDetails">ConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a></code> | configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#defined_tags DatasciencePipeline#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.deleteRelatedPipelineRuns">DeleteRelatedPipelineRuns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete_related_pipeline_runs DatasciencePipeline#delete_related_pipeline_runs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#display_name DatasciencePipeline#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#freeform_tags DatasciencePipeline#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#id DatasciencePipeline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.infrastructureConfigurationDetails">InfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a></code> | infrastructure_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.logConfigurationDetails">LogConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a></code> | log_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.stepArtifact">StepArtifact</a></code> | <code>interface{}</code> | step_artifact block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#compartment_id DatasciencePipeline#compartment_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#project_id DatasciencePipeline#project_id}.

---

##### `StepDetails`<sup>Required</sup> <a name="StepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.stepDetails"></a>

```go
StepDetails interface{}
```

- *Type:* interface{}

step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_details DatasciencePipeline#step_details}

---

##### `ConfigurationDetails`<sup>Optional</sup> <a name="ConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.configurationDetails"></a>

```go
ConfigurationDetails DatasciencePipelineConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#configuration_details DatasciencePipeline#configuration_details}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#defined_tags DatasciencePipeline#defined_tags}.

---

##### `DeleteRelatedPipelineRuns`<sup>Optional</sup> <a name="DeleteRelatedPipelineRuns" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.deleteRelatedPipelineRuns"></a>

```go
DeleteRelatedPipelineRuns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete_related_pipeline_runs DatasciencePipeline#delete_related_pipeline_runs}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#display_name DatasciencePipeline#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#freeform_tags DatasciencePipeline#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#id DatasciencePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InfrastructureConfigurationDetails`<sup>Optional</sup> <a name="InfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.infrastructureConfigurationDetails"></a>

```go
InfrastructureConfigurationDetails DatasciencePipelineInfrastructureConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

infrastructure_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#infrastructure_configuration_details DatasciencePipeline#infrastructure_configuration_details}

---

##### `LogConfigurationDetails`<sup>Optional</sup> <a name="LogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.logConfigurationDetails"></a>

```go
LogConfigurationDetails DatasciencePipelineLogConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

log_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_configuration_details DatasciencePipeline#log_configuration_details}

---

##### `StepArtifact`<sup>Optional</sup> <a name="StepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.stepArtifact"></a>

```go
StepArtifact interface{}
```

- *Type:* interface{}

step_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_artifact DatasciencePipeline#step_artifact}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.timeouts"></a>

```go
Timeouts DatasciencePipelineTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#timeouts DatasciencePipeline#timeouts}

---

### DatasciencePipelineConfigurationDetails <a name="DatasciencePipelineConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

&datasciencepipeline.DatasciencePipelineConfigurationDetails {
	Type: *string,
	CommandLineArguments: *string,
	EnvironmentVariables: *map[string]*string,
	MaximumRuntimeInMinutes: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#type DatasciencePipeline#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.commandLineArguments">CommandLineArguments</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#type DatasciencePipeline#type}.

---

##### `CommandLineArguments`<sup>Optional</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.commandLineArguments"></a>

```go
CommandLineArguments *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}.

---

##### `MaximumRuntimeInMinutes`<sup>Optional</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.maximumRuntimeInMinutes"></a>

```go
MaximumRuntimeInMinutes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}.

---

### DatasciencePipelineInfrastructureConfigurationDetails <a name="DatasciencePipelineInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

&datasciencepipeline.DatasciencePipelineInfrastructureConfigurationDetails {
	BlockStorageSizeInGbs: *f64,
	ShapeName: *string,
	ShapeConfigDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.shapeName">ShapeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.shapeConfigDetails">ShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}. |

---

##### `BlockStorageSizeInGbs`<sup>Required</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.blockStorageSizeInGbs"></a>

```go
BlockStorageSizeInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}.

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.shapeName"></a>

```go
ShapeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}.

---

##### `ShapeConfigDetails`<sup>Optional</sup> <a name="ShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.shapeConfigDetails"></a>

```go
ShapeConfigDetails DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a>

shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_config_details DatasciencePipeline#shape_config_details}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}.

---

### DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails <a name="DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

&datasciencepipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails {
	MemoryInGbs: *f64,
	Ocpus: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.property.ocpus">Ocpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.property.memoryInGbs"></a>

```go
MemoryInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.property.ocpus"></a>

```go
Ocpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}.

---

### DatasciencePipelineLogConfigurationDetails <a name="DatasciencePipelineLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

&datasciencepipeline.DatasciencePipelineLogConfigurationDetails {
	EnableAutoLogCreation: interface{},
	EnableLogging: interface{},
	LogGroupId: *string,
	LogId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.enableAutoLogCreation">EnableAutoLogCreation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_auto_log_creation DatasciencePipeline#enable_auto_log_creation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_logging DatasciencePipeline#enable_logging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_group_id DatasciencePipeline#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.logId">LogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_id DatasciencePipeline#log_id}. |

---

##### `EnableAutoLogCreation`<sup>Optional</sup> <a name="EnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.enableAutoLogCreation"></a>

```go
EnableAutoLogCreation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_auto_log_creation DatasciencePipeline#enable_auto_log_creation}.

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.enableLogging"></a>

```go
EnableLogging interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_logging DatasciencePipeline#enable_logging}.

---

##### `LogGroupId`<sup>Optional</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.logGroupId"></a>

```go
LogGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_group_id DatasciencePipeline#log_group_id}.

---

##### `LogId`<sup>Optional</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.logId"></a>

```go
LogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_id DatasciencePipeline#log_id}.

---

### DatasciencePipelineStepArtifact <a name="DatasciencePipelineStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

&datasciencepipeline.DatasciencePipelineStepArtifact {
	ArtifactContentLength: *string,
	PipelineStepArtifact: *string,
	StepName: *string,
	ArtifactContentDisposition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.artifactContentLength">ArtifactContentLength</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_length DatasciencePipeline#artifact_content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.pipelineStepArtifact">PipelineStepArtifact</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#pipeline_step_artifact DatasciencePipeline#pipeline_step_artifact}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.stepName">StepName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.artifactContentDisposition">ArtifactContentDisposition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_disposition DatasciencePipeline#artifact_content_disposition}. |

---

##### `ArtifactContentLength`<sup>Required</sup> <a name="ArtifactContentLength" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.artifactContentLength"></a>

```go
ArtifactContentLength *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_length DatasciencePipeline#artifact_content_length}.

---

##### `PipelineStepArtifact`<sup>Required</sup> <a name="PipelineStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.pipelineStepArtifact"></a>

```go
PipelineStepArtifact *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#pipeline_step_artifact DatasciencePipeline#pipeline_step_artifact}.

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.stepName"></a>

```go
StepName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}.

---

##### `ArtifactContentDisposition`<sup>Optional</sup> <a name="ArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.artifactContentDisposition"></a>

```go
ArtifactContentDisposition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_disposition DatasciencePipeline#artifact_content_disposition}.

---

### DatasciencePipelineStepDetails <a name="DatasciencePipelineStepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

&datasciencepipeline.DatasciencePipelineStepDetails {
	StepName: *string,
	StepType: *string,
	DependsOn: *[]*string,
	Description: *string,
	IsArtifactUploaded: interface{},
	JobId: *string,
	StepConfigurationDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails,
	StepContainerConfigurationDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails,
	StepInfrastructureConfigurationDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepName">StepName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepType">StepType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_type DatasciencePipeline#step_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#depends_on DatasciencePipeline#depends_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.isArtifactUploaded">IsArtifactUploaded</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#is_artifact_uploaded DatasciencePipeline#is_artifact_uploaded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.jobId">JobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#job_id DatasciencePipeline#job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepConfigurationDetails">StepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a></code> | step_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepContainerConfigurationDetails">StepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a></code> | step_container_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepInfrastructureConfigurationDetails">StepInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a></code> | step_infrastructure_configuration_details block. |

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepName"></a>

```go
StepName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}.

---

##### `StepType`<sup>Required</sup> <a name="StepType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepType"></a>

```go
StepType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_type DatasciencePipeline#step_type}.

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.dependsOn"></a>

```go
DependsOn *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#depends_on DatasciencePipeline#depends_on}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}.

---

##### `IsArtifactUploaded`<sup>Optional</sup> <a name="IsArtifactUploaded" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.isArtifactUploaded"></a>

```go
IsArtifactUploaded interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#is_artifact_uploaded DatasciencePipeline#is_artifact_uploaded}.

---

##### `JobId`<sup>Optional</sup> <a name="JobId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.jobId"></a>

```go
JobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#job_id DatasciencePipeline#job_id}.

---

##### `StepConfigurationDetails`<sup>Optional</sup> <a name="StepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepConfigurationDetails"></a>

```go
StepConfigurationDetails DatasciencePipelineStepDetailsStepConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a>

step_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_configuration_details DatasciencePipeline#step_configuration_details}

---

##### `StepContainerConfigurationDetails`<sup>Optional</sup> <a name="StepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepContainerConfigurationDetails"></a>

```go
StepContainerConfigurationDetails DatasciencePipelineStepDetailsStepContainerConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a>

step_container_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_container_configuration_details DatasciencePipeline#step_container_configuration_details}

---

##### `StepInfrastructureConfigurationDetails`<sup>Optional</sup> <a name="StepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepInfrastructureConfigurationDetails"></a>

```go
StepInfrastructureConfigurationDetails DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a>

step_infrastructure_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_infrastructure_configuration_details DatasciencePipeline#step_infrastructure_configuration_details}

---

### DatasciencePipelineStepDetailsStepConfigurationDetails <a name="DatasciencePipelineStepDetailsStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

&datasciencepipeline.DatasciencePipelineStepDetailsStepConfigurationDetails {
	CommandLineArguments: *string,
	EnvironmentVariables: *map[string]*string,
	MaximumRuntimeInMinutes: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.commandLineArguments">CommandLineArguments</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}. |

---

##### `CommandLineArguments`<sup>Optional</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.commandLineArguments"></a>

```go
CommandLineArguments *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}.

---

##### `MaximumRuntimeInMinutes`<sup>Optional</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.maximumRuntimeInMinutes"></a>

```go
MaximumRuntimeInMinutes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}.

---

### DatasciencePipelineStepDetailsStepContainerConfigurationDetails <a name="DatasciencePipelineStepDetailsStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

&datasciencepipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails {
	ContainerType: *string,
	Image: *string,
	Cmd: *[]*string,
	Entrypoint: *[]*string,
	ImageDigest: *string,
	ImageSignatureId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.containerType">ContainerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#container_type DatasciencePipeline#container_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image DatasciencePipeline#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.cmd">Cmd</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#cmd DatasciencePipeline#cmd}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.entrypoint">Entrypoint</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#entrypoint DatasciencePipeline#entrypoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_digest DatasciencePipeline#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.imageSignatureId">ImageSignatureId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_signature_id DatasciencePipeline#image_signature_id}. |

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.containerType"></a>

```go
ContainerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#container_type DatasciencePipeline#container_type}.

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image DatasciencePipeline#image}.

---

##### `Cmd`<sup>Optional</sup> <a name="Cmd" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.cmd"></a>

```go
Cmd *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#cmd DatasciencePipeline#cmd}.

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.entrypoint"></a>

```go
Entrypoint *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#entrypoint DatasciencePipeline#entrypoint}.

---

##### `ImageDigest`<sup>Optional</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.imageDigest"></a>

```go
ImageDigest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_digest DatasciencePipeline#image_digest}.

---

##### `ImageSignatureId`<sup>Optional</sup> <a name="ImageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.imageSignatureId"></a>

```go
ImageSignatureId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_signature_id DatasciencePipeline#image_signature_id}.

---

### DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails <a name="DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

&datasciencepipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails {
	BlockStorageSizeInGbs: *f64,
	ShapeName: *string,
	ShapeConfigDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.shapeName">ShapeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.shapeConfigDetails">ShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}. |

---

##### `BlockStorageSizeInGbs`<sup>Required</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.blockStorageSizeInGbs"></a>

```go
BlockStorageSizeInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}.

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.shapeName"></a>

```go
ShapeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}.

---

##### `ShapeConfigDetails`<sup>Optional</sup> <a name="ShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.shapeConfigDetails"></a>

```go
ShapeConfigDetails DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a>

shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_config_details DatasciencePipeline#shape_config_details}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}.

---

### DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails <a name="DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

&datasciencepipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails {
	MemoryInGbs: *f64,
	Ocpus: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.property.ocpus">Ocpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.property.memoryInGbs"></a>

```go
MemoryInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.property.ocpus"></a>

```go
Ocpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}.

---

### DatasciencePipelineTimeouts <a name="DatasciencePipelineTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

&datasciencepipeline.DatasciencePipelineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#create DatasciencePipeline#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete DatasciencePipeline#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#update DatasciencePipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#create DatasciencePipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete DatasciencePipeline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#update DatasciencePipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasciencePipelineConfigurationDetailsOutputReference <a name="DatasciencePipelineConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasciencePipelineConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetCommandLineArguments">ResetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes">ResetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommandLineArguments` <a name="ResetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetCommandLineArguments"></a>

```go
func ResetCommandLineArguments()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetMaximumRuntimeInMinutes` <a name="ResetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```go
func ResetMaximumRuntimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.commandLineArgumentsInput">CommandLineArgumentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput">MaximumRuntimeInMinutesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.commandLineArguments">CommandLineArguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandLineArgumentsInput`<sup>Optional</sup> <a name="CommandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.commandLineArgumentsInput"></a>

```go
func CommandLineArgumentsInput() *string
```

- *Type:* *string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="MaximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```go
func MaximumRuntimeInMinutesInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CommandLineArguments`<sup>Required</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```go
func CommandLineArguments() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaximumRuntimeInMinutes`<sup>Required</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```go
func MaximumRuntimeInMinutes() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasciencePipelineConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

---


### DatasciencePipelineInfrastructureConfigurationDetailsOutputReference <a name="DatasciencePipelineInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineInfrastructureConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasciencePipelineInfrastructureConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails">PutShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resetShapeConfigDetails">ResetShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShapeConfigDetails` <a name="PutShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails"></a>

```go
func PutShapeConfigDetails(value DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a>

---

##### `ResetShapeConfigDetails` <a name="ResetShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resetShapeConfigDetails"></a>

```go
func ResetShapeConfigDetails()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetails">ShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput">BlockStorageSizeInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetailsInput">ShapeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput">ShapeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShapeConfigDetails`<sup>Required</sup> <a name="ShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetails"></a>

```go
func ShapeConfigDetails() DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference</a>

---

##### `BlockStorageSizeInGbsInput`<sup>Optional</sup> <a name="BlockStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```go
func BlockStorageSizeInGbsInput() *f64
```

- *Type:* *f64

---

##### `ShapeConfigDetailsInput`<sup>Optional</sup> <a name="ShapeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetailsInput"></a>

```go
func ShapeConfigDetailsInput() DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a>

---

##### `ShapeNameInput`<sup>Optional</sup> <a name="ShapeNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput"></a>

```go
func ShapeNameInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `BlockStorageSizeInGbs`<sup>Required</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```go
func BlockStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasciencePipelineInfrastructureConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

---


### DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference <a name="DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```go
func ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetOcpus"></a>

```go
func ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```go
func MemoryInGbsInput() *f64
```

- *Type:* *f64

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```go
func OcpusInput() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a>

---


### DatasciencePipelineLogConfigurationDetailsOutputReference <a name="DatasciencePipelineLogConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineLogConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasciencePipelineLogConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetEnableAutoLogCreation">ResetEnableAutoLogCreation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetLogGroupId">ResetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetLogId">ResetLogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableAutoLogCreation` <a name="ResetEnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetEnableAutoLogCreation"></a>

```go
func ResetEnableAutoLogCreation()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetEnableLogging"></a>

```go
func ResetEnableLogging()
```

##### `ResetLogGroupId` <a name="ResetLogGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetLogGroupId"></a>

```go
func ResetLogGroupId()
```

##### `ResetLogId` <a name="ResetLogId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetLogId"></a>

```go
func ResetLogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableAutoLogCreationInput">EnableAutoLogCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logIdInput">LogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableAutoLogCreation">EnableAutoLogCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableLogging">EnableLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logId">LogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableAutoLogCreationInput`<sup>Optional</sup> <a name="EnableAutoLogCreationInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableAutoLogCreationInput"></a>

```go
func EnableAutoLogCreationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableLoggingInput"></a>

```go
func EnableLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logGroupIdInput"></a>

```go
func LogGroupIdInput() *string
```

- *Type:* *string

---

##### `LogIdInput`<sup>Optional</sup> <a name="LogIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logIdInput"></a>

```go
func LogIdInput() *string
```

- *Type:* *string

---

##### `EnableAutoLogCreation`<sup>Required</sup> <a name="EnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableAutoLogCreation"></a>

```go
func EnableAutoLogCreation() interface{}
```

- *Type:* interface{}

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableLogging"></a>

```go
func EnableLogging() interface{}
```

- *Type:* interface{}

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logId"></a>

```go
func LogId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasciencePipelineLogConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

---


### DatasciencePipelineStepArtifactList <a name="DatasciencePipelineStepArtifactList" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineStepArtifactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatasciencePipelineStepArtifactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.get"></a>

```go
func Get(index *f64) DatasciencePipelineStepArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasciencePipelineStepArtifactOutputReference <a name="DatasciencePipelineStepArtifactOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineStepArtifactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatasciencePipelineStepArtifactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resetArtifactContentDisposition">ResetArtifactContentDisposition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArtifactContentDisposition` <a name="ResetArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resetArtifactContentDisposition"></a>

```go
func ResetArtifactContentDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentMd5">ArtifactContentMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactLastModified">ArtifactLastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentDispositionInput">ArtifactContentDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentLengthInput">ArtifactContentLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.pipelineStepArtifactInput">PipelineStepArtifactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.stepNameInput">StepNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentDisposition">ArtifactContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentLength">ArtifactContentLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.pipelineStepArtifact">PipelineStepArtifact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.stepName">StepName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactContentMd5`<sup>Required</sup> <a name="ArtifactContentMd5" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentMd5"></a>

```go
func ArtifactContentMd5() *string
```

- *Type:* *string

---

##### `ArtifactLastModified`<sup>Required</sup> <a name="ArtifactLastModified" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactLastModified"></a>

```go
func ArtifactLastModified() *string
```

- *Type:* *string

---

##### `ArtifactContentDispositionInput`<sup>Optional</sup> <a name="ArtifactContentDispositionInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentDispositionInput"></a>

```go
func ArtifactContentDispositionInput() *string
```

- *Type:* *string

---

##### `ArtifactContentLengthInput`<sup>Optional</sup> <a name="ArtifactContentLengthInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentLengthInput"></a>

```go
func ArtifactContentLengthInput() *string
```

- *Type:* *string

---

##### `PipelineStepArtifactInput`<sup>Optional</sup> <a name="PipelineStepArtifactInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.pipelineStepArtifactInput"></a>

```go
func PipelineStepArtifactInput() *string
```

- *Type:* *string

---

##### `StepNameInput`<sup>Optional</sup> <a name="StepNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.stepNameInput"></a>

```go
func StepNameInput() *string
```

- *Type:* *string

---

##### `ArtifactContentDisposition`<sup>Required</sup> <a name="ArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentDisposition"></a>

```go
func ArtifactContentDisposition() *string
```

- *Type:* *string

---

##### `ArtifactContentLength`<sup>Required</sup> <a name="ArtifactContentLength" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentLength"></a>

```go
func ArtifactContentLength() *string
```

- *Type:* *string

---

##### `PipelineStepArtifact`<sup>Required</sup> <a name="PipelineStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.pipelineStepArtifact"></a>

```go
func PipelineStepArtifact() *string
```

- *Type:* *string

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.stepName"></a>

```go
func StepName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasciencePipelineStepDetailsList <a name="DatasciencePipelineStepDetailsList" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineStepDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatasciencePipelineStepDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.get"></a>

```go
func Get(index *f64) DatasciencePipelineStepDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasciencePipelineStepDetailsOutputReference <a name="DatasciencePipelineStepDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineStepDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatasciencePipelineStepDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepConfigurationDetails">PutStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepContainerConfigurationDetails">PutStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepInfrastructureConfigurationDetails">PutStepInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetDependsOn">ResetDependsOn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetIsArtifactUploaded">ResetIsArtifactUploaded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetJobId">ResetJobId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepConfigurationDetails">ResetStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepContainerConfigurationDetails">ResetStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepInfrastructureConfigurationDetails">ResetStepInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStepConfigurationDetails` <a name="PutStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepConfigurationDetails"></a>

```go
func PutStepConfigurationDetails(value DatasciencePipelineStepDetailsStepConfigurationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a>

---

##### `PutStepContainerConfigurationDetails` <a name="PutStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepContainerConfigurationDetails"></a>

```go
func PutStepContainerConfigurationDetails(value DatasciencePipelineStepDetailsStepContainerConfigurationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepContainerConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a>

---

##### `PutStepInfrastructureConfigurationDetails` <a name="PutStepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepInfrastructureConfigurationDetails"></a>

```go
func PutStepInfrastructureConfigurationDetails(value DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepInfrastructureConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a>

---

##### `ResetDependsOn` <a name="ResetDependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetDependsOn"></a>

```go
func ResetDependsOn()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIsArtifactUploaded` <a name="ResetIsArtifactUploaded" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetIsArtifactUploaded"></a>

```go
func ResetIsArtifactUploaded()
```

##### `ResetJobId` <a name="ResetJobId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetJobId"></a>

```go
func ResetJobId()
```

##### `ResetStepConfigurationDetails` <a name="ResetStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepConfigurationDetails"></a>

```go
func ResetStepConfigurationDetails()
```

##### `ResetStepContainerConfigurationDetails` <a name="ResetStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepContainerConfigurationDetails"></a>

```go
func ResetStepContainerConfigurationDetails()
```

##### `ResetStepInfrastructureConfigurationDetails` <a name="ResetStepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepInfrastructureConfigurationDetails"></a>

```go
func ResetStepInfrastructureConfigurationDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepConfigurationDetails">StepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepContainerConfigurationDetails">StepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepInfrastructureConfigurationDetails">StepInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.dependsOnInput">DependsOnInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.isArtifactUploadedInput">IsArtifactUploadedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.jobIdInput">JobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepConfigurationDetailsInput">StepConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepContainerConfigurationDetailsInput">StepContainerConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepInfrastructureConfigurationDetailsInput">StepInfrastructureConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepNameInput">StepNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepTypeInput">StepTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.isArtifactUploaded">IsArtifactUploaded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepName">StepName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepType">StepType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StepConfigurationDetails`<sup>Required</sup> <a name="StepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepConfigurationDetails"></a>

```go
func StepConfigurationDetails() DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference</a>

---

##### `StepContainerConfigurationDetails`<sup>Required</sup> <a name="StepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepContainerConfigurationDetails"></a>

```go
func StepContainerConfigurationDetails() DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference</a>

---

##### `StepInfrastructureConfigurationDetails`<sup>Required</sup> <a name="StepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepInfrastructureConfigurationDetails"></a>

```go
func StepInfrastructureConfigurationDetails() DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference</a>

---

##### `DependsOnInput`<sup>Optional</sup> <a name="DependsOnInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.dependsOnInput"></a>

```go
func DependsOnInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IsArtifactUploadedInput`<sup>Optional</sup> <a name="IsArtifactUploadedInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.isArtifactUploadedInput"></a>

```go
func IsArtifactUploadedInput() interface{}
```

- *Type:* interface{}

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.jobIdInput"></a>

```go
func JobIdInput() *string
```

- *Type:* *string

---

##### `StepConfigurationDetailsInput`<sup>Optional</sup> <a name="StepConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepConfigurationDetailsInput"></a>

```go
func StepConfigurationDetailsInput() DatasciencePipelineStepDetailsStepConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a>

---

##### `StepContainerConfigurationDetailsInput`<sup>Optional</sup> <a name="StepContainerConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepContainerConfigurationDetailsInput"></a>

```go
func StepContainerConfigurationDetailsInput() DatasciencePipelineStepDetailsStepContainerConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a>

---

##### `StepInfrastructureConfigurationDetailsInput`<sup>Optional</sup> <a name="StepInfrastructureConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepInfrastructureConfigurationDetailsInput"></a>

```go
func StepInfrastructureConfigurationDetailsInput() DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a>

---

##### `StepNameInput`<sup>Optional</sup> <a name="StepNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepNameInput"></a>

```go
func StepNameInput() *string
```

- *Type:* *string

---

##### `StepTypeInput`<sup>Optional</sup> <a name="StepTypeInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepTypeInput"></a>

```go
func StepTypeInput() *string
```

- *Type:* *string

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsArtifactUploaded`<sup>Required</sup> <a name="IsArtifactUploaded" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.isArtifactUploaded"></a>

```go
func IsArtifactUploaded() interface{}
```

- *Type:* interface{}

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepName"></a>

```go
func StepName() *string
```

- *Type:* *string

---

##### `StepType`<sup>Required</sup> <a name="StepType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepType"></a>

```go
func StepType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference <a name="DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetCommandLineArguments">ResetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes">ResetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommandLineArguments` <a name="ResetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetCommandLineArguments"></a>

```go
func ResetCommandLineArguments()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetMaximumRuntimeInMinutes` <a name="ResetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```go
func ResetMaximumRuntimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.commandLineArgumentsInput">CommandLineArgumentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput">MaximumRuntimeInMinutesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments">CommandLineArguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">MaximumRuntimeInMinutes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandLineArgumentsInput`<sup>Optional</sup> <a name="CommandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.commandLineArgumentsInput"></a>

```go
func CommandLineArgumentsInput() *string
```

- *Type:* *string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="MaximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```go
func MaximumRuntimeInMinutesInput() *string
```

- *Type:* *string

---

##### `CommandLineArguments`<sup>Required</sup> <a name="CommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```go
func CommandLineArguments() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaximumRuntimeInMinutes`<sup>Required</sup> <a name="MaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```go
func MaximumRuntimeInMinutes() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasciencePipelineStepDetailsStepConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a>

---


### DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference <a name="DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetCmd">ResetCmd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetImageDigest">ResetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetImageSignatureId">ResetImageSignatureId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCmd` <a name="ResetCmd" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetCmd"></a>

```go
func ResetCmd()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetEntrypoint"></a>

```go
func ResetEntrypoint()
```

##### `ResetImageDigest` <a name="ResetImageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetImageDigest"></a>

```go
func ResetImageDigest()
```

##### `ResetImageSignatureId` <a name="ResetImageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetImageSignatureId"></a>

```go
func ResetImageSignatureId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.cmdInput">CmdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.containerTypeInput">ContainerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.entrypointInput">EntrypointInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigestInput">ImageDigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureIdInput">ImageSignatureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.cmd">Cmd</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.containerType">ContainerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint">Entrypoint</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId">ImageSignatureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CmdInput`<sup>Optional</sup> <a name="CmdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.cmdInput"></a>

```go
func CmdInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerTypeInput`<sup>Optional</sup> <a name="ContainerTypeInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.containerTypeInput"></a>

```go
func ContainerTypeInput() *string
```

- *Type:* *string

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.entrypointInput"></a>

```go
func EntrypointInput() *[]*string
```

- *Type:* *[]*string

---

##### `ImageDigestInput`<sup>Optional</sup> <a name="ImageDigestInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigestInput"></a>

```go
func ImageDigestInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `ImageSignatureIdInput`<sup>Optional</sup> <a name="ImageSignatureIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureIdInput"></a>

```go
func ImageSignatureIdInput() *string
```

- *Type:* *string

---

##### `Cmd`<sup>Required</sup> <a name="Cmd" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.cmd"></a>

```go
func Cmd() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.containerType"></a>

```go
func ContainerType() *string
```

- *Type:* *string

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint"></a>

```go
func Entrypoint() *[]*string
```

- *Type:* *[]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest"></a>

```go
func ImageDigest() *string
```

- *Type:* *string

---

##### `ImageSignatureId`<sup>Required</sup> <a name="ImageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```go
func ImageSignatureId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasciencePipelineStepDetailsStepContainerConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a>

---


### DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference <a name="DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails">PutShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resetShapeConfigDetails">ResetShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShapeConfigDetails` <a name="PutShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails"></a>

```go
func PutShapeConfigDetails(value DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a>

---

##### `ResetShapeConfigDetails` <a name="ResetShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resetShapeConfigDetails"></a>

```go
func ResetShapeConfigDetails()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetails">ShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput">BlockStorageSizeInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetailsInput">ShapeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput">ShapeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShapeConfigDetails`<sup>Required</sup> <a name="ShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetails"></a>

```go
func ShapeConfigDetails() DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference</a>

---

##### `BlockStorageSizeInGbsInput`<sup>Optional</sup> <a name="BlockStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```go
func BlockStorageSizeInGbsInput() *f64
```

- *Type:* *f64

---

##### `ShapeConfigDetailsInput`<sup>Optional</sup> <a name="ShapeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetailsInput"></a>

```go
func ShapeConfigDetailsInput() DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a>

---

##### `ShapeNameInput`<sup>Optional</sup> <a name="ShapeNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput"></a>

```go
func ShapeNameInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `BlockStorageSizeInGbs`<sup>Required</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```go
func BlockStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a>

---


### DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference <a name="DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```go
func ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetOcpus"></a>

```go
func ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```go
func MemoryInGbsInput() *f64
```

- *Type:* *f64

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```go
func OcpusInput() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a>

---


### DatasciencePipelineTimeoutsOutputReference <a name="DatasciencePipelineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencepipeline"

datasciencepipeline.NewDatasciencePipelineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasciencePipelineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



