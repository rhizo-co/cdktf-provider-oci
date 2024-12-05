# `datascienceModel` Submodule <a name="`datascienceModel` Submodule" id="rhizo-co-terraform-provider-oci.datascienceModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceModel <a name="DatascienceModel" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model oci_datascience_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.NewDatascienceModel(scope Construct, id *string, config DatascienceModelConfig) DatascienceModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig">DatascienceModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig">DatascienceModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putBackupSetting">PutBackupSetting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putCustomMetadataList">PutCustomMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putDefinedMetadataList">PutDefinedMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putRetentionSetting">PutRetentionSetting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetArtifactContentDisposition">ResetArtifactContentDisposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetBackupSetting">ResetBackupSetting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetCustomMetadataList">ResetCustomMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDefinedMetadataList">ResetDefinedMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetInputSchema">ResetInputSchema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetModelVersionSetId">ResetModelVersionSetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetModelVersionSetName">ResetModelVersionSetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetOutputSchema">ResetOutputSchema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetRetentionSetting">ResetRetentionSetting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetVersionLabel">ResetVersionLabel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupSetting` <a name="PutBackupSetting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putBackupSetting"></a>

```go
func PutBackupSetting(value DatascienceModelBackupSetting)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putBackupSetting.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a>

---

##### `PutCustomMetadataList` <a name="PutCustomMetadataList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putCustomMetadataList"></a>

```go
func PutCustomMetadataList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putCustomMetadataList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefinedMetadataList` <a name="PutDefinedMetadataList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putDefinedMetadataList"></a>

```go
func PutDefinedMetadataList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putDefinedMetadataList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRetentionSetting` <a name="PutRetentionSetting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putRetentionSetting"></a>

```go
func PutRetentionSetting(value DatascienceModelRetentionSetting)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putRetentionSetting.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putTimeouts"></a>

```go
func PutTimeouts(value DatascienceModelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts">DatascienceModelTimeouts</a>

---

##### `ResetArtifactContentDisposition` <a name="ResetArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetArtifactContentDisposition"></a>

```go
func ResetArtifactContentDisposition()
```

##### `ResetBackupSetting` <a name="ResetBackupSetting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetBackupSetting"></a>

```go
func ResetBackupSetting()
```

##### `ResetCustomMetadataList` <a name="ResetCustomMetadataList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetCustomMetadataList"></a>

```go
func ResetCustomMetadataList()
```

##### `ResetDefinedMetadataList` <a name="ResetDefinedMetadataList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDefinedMetadataList"></a>

```go
func ResetDefinedMetadataList()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetId"></a>

```go
func ResetId()
```

##### `ResetInputSchema` <a name="ResetInputSchema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetInputSchema"></a>

```go
func ResetInputSchema()
```

##### `ResetModelVersionSetId` <a name="ResetModelVersionSetId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetModelVersionSetId"></a>

```go
func ResetModelVersionSetId()
```

##### `ResetModelVersionSetName` <a name="ResetModelVersionSetName" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetModelVersionSetName"></a>

```go
func ResetModelVersionSetName()
```

##### `ResetOutputSchema` <a name="ResetOutputSchema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetOutputSchema"></a>

```go
func ResetOutputSchema()
```

##### `ResetRetentionSetting` <a name="ResetRetentionSetting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetRetentionSetting"></a>

```go
func ResetRetentionSetting()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersionLabel` <a name="ResetVersionLabel" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetVersionLabel"></a>

```go
func ResetVersionLabel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatascienceModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.DatascienceModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.DatascienceModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.DatascienceModel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.DatascienceModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatascienceModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatascienceModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatascienceModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentMd5">ArtifactContentMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactLastModified">ArtifactLastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.backupOperationDetails">BackupOperationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList">DatascienceModelBackupOperationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.backupSetting">BackupSetting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference">DatascienceModelBackupSettingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.customMetadataList">CustomMetadataList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList">DatascienceModelCustomMetadataListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedMetadataList">DefinedMetadataList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList">DatascienceModelDefinedMetadataListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.emptyModel">EmptyModel</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.retentionOperationDetails">RetentionOperationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList">DatascienceModelRetentionOperationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.retentionSetting">RetentionSetting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference">DatascienceModelRetentionSettingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference">DatascienceModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentDispositionInput">ArtifactContentDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentLengthInput">ArtifactContentLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.backupSettingInput">BackupSettingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.customMetadataListInput">CustomMetadataListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedMetadataListInput">DefinedMetadataListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.inputSchemaInput">InputSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelArtifactInput">ModelArtifactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetIdInput">ModelVersionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetNameInput">ModelVersionSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.outputSchemaInput">OutputSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.retentionSettingInput">RetentionSettingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.versionLabelInput">VersionLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentDisposition">ArtifactContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentLength">ArtifactContentLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.inputSchema">InputSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelArtifact">ModelArtifact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetId">ModelVersionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetName">ModelVersionSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.outputSchema">OutputSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.versionLabel">VersionLabel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactContentMd5`<sup>Required</sup> <a name="ArtifactContentMd5" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentMd5"></a>

```go
func ArtifactContentMd5() *string
```

- *Type:* *string

---

##### `ArtifactLastModified`<sup>Required</sup> <a name="ArtifactLastModified" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactLastModified"></a>

```go
func ArtifactLastModified() *string
```

- *Type:* *string

---

##### `BackupOperationDetails`<sup>Required</sup> <a name="BackupOperationDetails" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.backupOperationDetails"></a>

```go
func BackupOperationDetails() DatascienceModelBackupOperationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList">DatascienceModelBackupOperationDetailsList</a>

---

##### `BackupSetting`<sup>Required</sup> <a name="BackupSetting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.backupSetting"></a>

```go
func BackupSetting() DatascienceModelBackupSettingOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference">DatascienceModelBackupSettingOutputReference</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CustomMetadataList`<sup>Required</sup> <a name="CustomMetadataList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.customMetadataList"></a>

```go
func CustomMetadataList() DatascienceModelCustomMetadataListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList">DatascienceModelCustomMetadataListStructList</a>

---

##### `DefinedMetadataList`<sup>Required</sup> <a name="DefinedMetadataList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedMetadataList"></a>

```go
func DefinedMetadataList() DatascienceModelDefinedMetadataListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList">DatascienceModelDefinedMetadataListStructList</a>

---

##### `EmptyModel`<sup>Required</sup> <a name="EmptyModel" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.emptyModel"></a>

```go
func EmptyModel() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `RetentionOperationDetails`<sup>Required</sup> <a name="RetentionOperationDetails" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.retentionOperationDetails"></a>

```go
func RetentionOperationDetails() DatascienceModelRetentionOperationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList">DatascienceModelRetentionOperationDetailsList</a>

---

##### `RetentionSetting`<sup>Required</sup> <a name="RetentionSetting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.retentionSetting"></a>

```go
func RetentionSetting() DatascienceModelRetentionSettingOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference">DatascienceModelRetentionSettingOutputReference</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.timeouts"></a>

```go
func Timeouts() DatascienceModelTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference">DatascienceModelTimeoutsOutputReference</a>

---

##### `ArtifactContentDispositionInput`<sup>Optional</sup> <a name="ArtifactContentDispositionInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentDispositionInput"></a>

```go
func ArtifactContentDispositionInput() *string
```

- *Type:* *string

---

##### `ArtifactContentLengthInput`<sup>Optional</sup> <a name="ArtifactContentLengthInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentLengthInput"></a>

```go
func ArtifactContentLengthInput() *string
```

- *Type:* *string

---

##### `BackupSettingInput`<sup>Optional</sup> <a name="BackupSettingInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.backupSettingInput"></a>

```go
func BackupSettingInput() DatascienceModelBackupSetting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CustomMetadataListInput`<sup>Optional</sup> <a name="CustomMetadataListInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.customMetadataListInput"></a>

```go
func CustomMetadataListInput() interface{}
```

- *Type:* interface{}

---

##### `DefinedMetadataListInput`<sup>Optional</sup> <a name="DefinedMetadataListInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedMetadataListInput"></a>

```go
func DefinedMetadataListInput() interface{}
```

- *Type:* interface{}

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputSchemaInput`<sup>Optional</sup> <a name="InputSchemaInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.inputSchemaInput"></a>

```go
func InputSchemaInput() *string
```

- *Type:* *string

---

##### `ModelArtifactInput`<sup>Optional</sup> <a name="ModelArtifactInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelArtifactInput"></a>

```go
func ModelArtifactInput() *string
```

- *Type:* *string

---

##### `ModelVersionSetIdInput`<sup>Optional</sup> <a name="ModelVersionSetIdInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetIdInput"></a>

```go
func ModelVersionSetIdInput() *string
```

- *Type:* *string

---

##### `ModelVersionSetNameInput`<sup>Optional</sup> <a name="ModelVersionSetNameInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetNameInput"></a>

```go
func ModelVersionSetNameInput() *string
```

- *Type:* *string

---

##### `OutputSchemaInput`<sup>Optional</sup> <a name="OutputSchemaInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.outputSchemaInput"></a>

```go
func OutputSchemaInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RetentionSettingInput`<sup>Optional</sup> <a name="RetentionSettingInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.retentionSettingInput"></a>

```go
func RetentionSettingInput() DatascienceModelRetentionSetting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionLabelInput`<sup>Optional</sup> <a name="VersionLabelInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.versionLabelInput"></a>

```go
func VersionLabelInput() *string
```

- *Type:* *string

---

##### `ArtifactContentDisposition`<sup>Required</sup> <a name="ArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentDisposition"></a>

```go
func ArtifactContentDisposition() *string
```

- *Type:* *string

---

##### `ArtifactContentLength`<sup>Required</sup> <a name="ArtifactContentLength" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentLength"></a>

```go
func ArtifactContentLength() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.inputSchema"></a>

```go
func InputSchema() *string
```

- *Type:* *string

---

##### `ModelArtifact`<sup>Required</sup> <a name="ModelArtifact" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelArtifact"></a>

```go
func ModelArtifact() *string
```

- *Type:* *string

---

##### `ModelVersionSetId`<sup>Required</sup> <a name="ModelVersionSetId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetId"></a>

```go
func ModelVersionSetId() *string
```

- *Type:* *string

---

##### `ModelVersionSetName`<sup>Required</sup> <a name="ModelVersionSetName" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetName"></a>

```go
func ModelVersionSetName() *string
```

- *Type:* *string

---

##### `OutputSchema`<sup>Required</sup> <a name="OutputSchema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.outputSchema"></a>

```go
func OutputSchema() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `VersionLabel`<sup>Required</sup> <a name="VersionLabel" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.versionLabel"></a>

```go
func VersionLabel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceModelBackupOperationDetails <a name="DatascienceModelBackupOperationDetails" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

&datasciencemodel.DatascienceModelBackupOperationDetails {

}
```


### DatascienceModelBackupSetting <a name="DatascienceModelBackupSetting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

&datasciencemodel.DatascienceModelBackupSetting {
	BackupRegion: *string,
	IsBackupEnabled: interface{},
	CustomerNotificationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.property.backupRegion">BackupRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#backup_region DatascienceModel#backup_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.property.isBackupEnabled">IsBackupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#is_backup_enabled DatascienceModel#is_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.property.customerNotificationType">CustomerNotificationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#customer_notification_type DatascienceModel#customer_notification_type}. |

---

##### `BackupRegion`<sup>Required</sup> <a name="BackupRegion" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.property.backupRegion"></a>

```go
BackupRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#backup_region DatascienceModel#backup_region}.

---

##### `IsBackupEnabled`<sup>Required</sup> <a name="IsBackupEnabled" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.property.isBackupEnabled"></a>

```go
IsBackupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#is_backup_enabled DatascienceModel#is_backup_enabled}.

---

##### `CustomerNotificationType`<sup>Optional</sup> <a name="CustomerNotificationType" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.property.customerNotificationType"></a>

```go
CustomerNotificationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#customer_notification_type DatascienceModel#customer_notification_type}.

---

### DatascienceModelConfig <a name="DatascienceModelConfig" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

&datasciencemodel.DatascienceModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArtifactContentLength: *string,
	CompartmentId: *string,
	ModelArtifact: *string,
	ProjectId: *string,
	ArtifactContentDisposition: *string,
	BackupSetting: github.com/rhizo-co/cdktf-provider-oci-go/oci.datascienceModel.DatascienceModelBackupSetting,
	CustomMetadataList: interface{},
	DefinedMetadataList: interface{},
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	InputSchema: *string,
	ModelVersionSetId: *string,
	ModelVersionSetName: *string,
	OutputSchema: *string,
	RetentionSetting: github.com/rhizo-co/cdktf-provider-oci-go/oci.datascienceModel.DatascienceModelRetentionSetting,
	State: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.datascienceModel.DatascienceModelTimeouts,
	VersionLabel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.artifactContentLength">ArtifactContentLength</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#artifact_content_length DatascienceModel#artifact_content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#compartment_id DatascienceModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.modelArtifact">ModelArtifact</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_artifact DatascienceModel#model_artifact}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#project_id DatascienceModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.artifactContentDisposition">ArtifactContentDisposition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#artifact_content_disposition DatascienceModel#artifact_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.backupSetting">BackupSetting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a></code> | backup_setting block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.customMetadataList">CustomMetadataList</a></code> | <code>interface{}</code> | custom_metadata_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.definedMetadataList">DefinedMetadataList</a></code> | <code>interface{}</code> | defined_metadata_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#defined_tags DatascienceModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#display_name DatascienceModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#freeform_tags DatascienceModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#id DatascienceModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.inputSchema">InputSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#input_schema DatascienceModel#input_schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.modelVersionSetId">ModelVersionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_version_set_id DatascienceModel#model_version_set_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.modelVersionSetName">ModelVersionSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_version_set_name DatascienceModel#model_version_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.outputSchema">OutputSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#output_schema DatascienceModel#output_schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.retentionSetting">RetentionSetting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a></code> | retention_setting block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#state DatascienceModel#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts">DatascienceModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.versionLabel">VersionLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#version_label DatascienceModel#version_label}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactContentLength`<sup>Required</sup> <a name="ArtifactContentLength" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.artifactContentLength"></a>

```go
ArtifactContentLength *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#artifact_content_length DatascienceModel#artifact_content_length}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#compartment_id DatascienceModel#compartment_id}.

---

##### `ModelArtifact`<sup>Required</sup> <a name="ModelArtifact" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.modelArtifact"></a>

```go
ModelArtifact *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_artifact DatascienceModel#model_artifact}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#project_id DatascienceModel#project_id}.

---

##### `ArtifactContentDisposition`<sup>Optional</sup> <a name="ArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.artifactContentDisposition"></a>

```go
ArtifactContentDisposition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#artifact_content_disposition DatascienceModel#artifact_content_disposition}.

---

##### `BackupSetting`<sup>Optional</sup> <a name="BackupSetting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.backupSetting"></a>

```go
BackupSetting DatascienceModelBackupSetting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a>

backup_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#backup_setting DatascienceModel#backup_setting}

---

##### `CustomMetadataList`<sup>Optional</sup> <a name="CustomMetadataList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.customMetadataList"></a>

```go
CustomMetadataList interface{}
```

- *Type:* interface{}

custom_metadata_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#custom_metadata_list DatascienceModel#custom_metadata_list}

---

##### `DefinedMetadataList`<sup>Optional</sup> <a name="DefinedMetadataList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.definedMetadataList"></a>

```go
DefinedMetadataList interface{}
```

- *Type:* interface{}

defined_metadata_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#defined_metadata_list DatascienceModel#defined_metadata_list}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#defined_tags DatascienceModel#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#display_name DatascienceModel#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#freeform_tags DatascienceModel#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#id DatascienceModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputSchema`<sup>Optional</sup> <a name="InputSchema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.inputSchema"></a>

```go
InputSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#input_schema DatascienceModel#input_schema}.

---

##### `ModelVersionSetId`<sup>Optional</sup> <a name="ModelVersionSetId" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.modelVersionSetId"></a>

```go
ModelVersionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_version_set_id DatascienceModel#model_version_set_id}.

---

##### `ModelVersionSetName`<sup>Optional</sup> <a name="ModelVersionSetName" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.modelVersionSetName"></a>

```go
ModelVersionSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_version_set_name DatascienceModel#model_version_set_name}.

---

##### `OutputSchema`<sup>Optional</sup> <a name="OutputSchema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.outputSchema"></a>

```go
OutputSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#output_schema DatascienceModel#output_schema}.

---

##### `RetentionSetting`<sup>Optional</sup> <a name="RetentionSetting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.retentionSetting"></a>

```go
RetentionSetting DatascienceModelRetentionSetting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a>

retention_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#retention_setting DatascienceModel#retention_setting}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#state DatascienceModel#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.timeouts"></a>

```go
Timeouts DatascienceModelTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts">DatascienceModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#timeouts DatascienceModel#timeouts}

---

##### `VersionLabel`<sup>Optional</sup> <a name="VersionLabel" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.versionLabel"></a>

```go
VersionLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#version_label DatascienceModel#version_label}.

---

### DatascienceModelCustomMetadataListStruct <a name="DatascienceModelCustomMetadataListStruct" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

&datasciencemodel.DatascienceModelCustomMetadataListStruct {
	Category: *string,
	Description: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#category DatascienceModel#category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#key DatascienceModel#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#value DatascienceModel#value}. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#category DatascienceModel#category}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#key DatascienceModel#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#value DatascienceModel#value}.

---

### DatascienceModelDefinedMetadataListStruct <a name="DatascienceModelDefinedMetadataListStruct" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

&datasciencemodel.DatascienceModelDefinedMetadataListStruct {
	Category: *string,
	Description: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#category DatascienceModel#category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#key DatascienceModel#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#value DatascienceModel#value}. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#category DatascienceModel#category}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#key DatascienceModel#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#value DatascienceModel#value}.

---

### DatascienceModelRetentionOperationDetails <a name="DatascienceModelRetentionOperationDetails" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

&datasciencemodel.DatascienceModelRetentionOperationDetails {

}
```


### DatascienceModelRetentionSetting <a name="DatascienceModelRetentionSetting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

&datasciencemodel.DatascienceModelRetentionSetting {
	ArchiveAfterDays: *f64,
	CustomerNotificationType: *string,
	DeleteAfterDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.property.archiveAfterDays">ArchiveAfterDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#archive_after_days DatascienceModel#archive_after_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.property.customerNotificationType">CustomerNotificationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#customer_notification_type DatascienceModel#customer_notification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#delete_after_days DatascienceModel#delete_after_days}. |

---

##### `ArchiveAfterDays`<sup>Required</sup> <a name="ArchiveAfterDays" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.property.archiveAfterDays"></a>

```go
ArchiveAfterDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#archive_after_days DatascienceModel#archive_after_days}.

---

##### `CustomerNotificationType`<sup>Optional</sup> <a name="CustomerNotificationType" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.property.customerNotificationType"></a>

```go
CustomerNotificationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#customer_notification_type DatascienceModel#customer_notification_type}.

---

##### `DeleteAfterDays`<sup>Optional</sup> <a name="DeleteAfterDays" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.property.deleteAfterDays"></a>

```go
DeleteAfterDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#delete_after_days DatascienceModel#delete_after_days}.

---

### DatascienceModelTimeouts <a name="DatascienceModelTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

&datasciencemodel.DatascienceModelTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#create DatascienceModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#delete DatascienceModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#update DatascienceModel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#create DatascienceModel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#delete DatascienceModel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#update DatascienceModel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceModelBackupOperationDetailsList <a name="DatascienceModelBackupOperationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.NewDatascienceModelBackupOperationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatascienceModelBackupOperationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.get"></a>

```go
func Get(index *f64) DatascienceModelBackupOperationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatascienceModelBackupOperationDetailsOutputReference <a name="DatascienceModelBackupOperationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.NewDatascienceModelBackupOperationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatascienceModelBackupOperationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.backupState">BackupState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.backupStateDetails">BackupStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.timeLastBackup">TimeLastBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetails">DatascienceModelBackupOperationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupState`<sup>Required</sup> <a name="BackupState" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.backupState"></a>

```go
func BackupState() *string
```

- *Type:* *string

---

##### `BackupStateDetails`<sup>Required</sup> <a name="BackupStateDetails" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.backupStateDetails"></a>

```go
func BackupStateDetails() *string
```

- *Type:* *string

---

##### `TimeLastBackup`<sup>Required</sup> <a name="TimeLastBackup" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.timeLastBackup"></a>

```go
func TimeLastBackup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatascienceModelBackupOperationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetails">DatascienceModelBackupOperationDetails</a>

---


### DatascienceModelBackupSettingOutputReference <a name="DatascienceModelBackupSettingOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.NewDatascienceModelBackupSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatascienceModelBackupSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.resetCustomerNotificationType">ResetCustomerNotificationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomerNotificationType` <a name="ResetCustomerNotificationType" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.resetCustomerNotificationType"></a>

```go
func ResetCustomerNotificationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.backupRegionInput">BackupRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.customerNotificationTypeInput">CustomerNotificationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.isBackupEnabledInput">IsBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.backupRegion">BackupRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.customerNotificationType">CustomerNotificationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.isBackupEnabled">IsBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupRegionInput`<sup>Optional</sup> <a name="BackupRegionInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.backupRegionInput"></a>

```go
func BackupRegionInput() *string
```

- *Type:* *string

---

##### `CustomerNotificationTypeInput`<sup>Optional</sup> <a name="CustomerNotificationTypeInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.customerNotificationTypeInput"></a>

```go
func CustomerNotificationTypeInput() *string
```

- *Type:* *string

---

##### `IsBackupEnabledInput`<sup>Optional</sup> <a name="IsBackupEnabledInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.isBackupEnabledInput"></a>

```go
func IsBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BackupRegion`<sup>Required</sup> <a name="BackupRegion" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.backupRegion"></a>

```go
func BackupRegion() *string
```

- *Type:* *string

---

##### `CustomerNotificationType`<sup>Required</sup> <a name="CustomerNotificationType" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.customerNotificationType"></a>

```go
func CustomerNotificationType() *string
```

- *Type:* *string

---

##### `IsBackupEnabled`<sup>Required</sup> <a name="IsBackupEnabled" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.isBackupEnabled"></a>

```go
func IsBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() DatascienceModelBackupSetting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a>

---


### DatascienceModelCustomMetadataListStructList <a name="DatascienceModelCustomMetadataListStructList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.NewDatascienceModelCustomMetadataListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatascienceModelCustomMetadataListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.get"></a>

```go
func Get(index *f64) DatascienceModelCustomMetadataListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatascienceModelCustomMetadataListStructOutputReference <a name="DatascienceModelCustomMetadataListStructOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.NewDatascienceModelCustomMetadataListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatascienceModelCustomMetadataListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategory` <a name="ResetCategory" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatascienceModelDefinedMetadataListStructList <a name="DatascienceModelDefinedMetadataListStructList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.NewDatascienceModelDefinedMetadataListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatascienceModelDefinedMetadataListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.get"></a>

```go
func Get(index *f64) DatascienceModelDefinedMetadataListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatascienceModelDefinedMetadataListStructOutputReference <a name="DatascienceModelDefinedMetadataListStructOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.NewDatascienceModelDefinedMetadataListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatascienceModelDefinedMetadataListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategory` <a name="ResetCategory" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatascienceModelRetentionOperationDetailsList <a name="DatascienceModelRetentionOperationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.NewDatascienceModelRetentionOperationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatascienceModelRetentionOperationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.get"></a>

```go
func Get(index *f64) DatascienceModelRetentionOperationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DatascienceModelRetentionOperationDetailsOutputReference <a name="DatascienceModelRetentionOperationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.NewDatascienceModelRetentionOperationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatascienceModelRetentionOperationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.archiveState">ArchiveState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.archiveStateDetails">ArchiveStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.deleteState">DeleteState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.deleteStateDetails">DeleteStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.timeArchivalScheduled">TimeArchivalScheduled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.timeDeletionScheduled">TimeDeletionScheduled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetails">DatascienceModelRetentionOperationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveState`<sup>Required</sup> <a name="ArchiveState" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.archiveState"></a>

```go
func ArchiveState() *string
```

- *Type:* *string

---

##### `ArchiveStateDetails`<sup>Required</sup> <a name="ArchiveStateDetails" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.archiveStateDetails"></a>

```go
func ArchiveStateDetails() *string
```

- *Type:* *string

---

##### `DeleteState`<sup>Required</sup> <a name="DeleteState" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.deleteState"></a>

```go
func DeleteState() *string
```

- *Type:* *string

---

##### `DeleteStateDetails`<sup>Required</sup> <a name="DeleteStateDetails" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.deleteStateDetails"></a>

```go
func DeleteStateDetails() *string
```

- *Type:* *string

---

##### `TimeArchivalScheduled`<sup>Required</sup> <a name="TimeArchivalScheduled" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.timeArchivalScheduled"></a>

```go
func TimeArchivalScheduled() *string
```

- *Type:* *string

---

##### `TimeDeletionScheduled`<sup>Required</sup> <a name="TimeDeletionScheduled" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.timeDeletionScheduled"></a>

```go
func TimeDeletionScheduled() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatascienceModelRetentionOperationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetails">DatascienceModelRetentionOperationDetails</a>

---


### DatascienceModelRetentionSettingOutputReference <a name="DatascienceModelRetentionSettingOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.NewDatascienceModelRetentionSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatascienceModelRetentionSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resetCustomerNotificationType">ResetCustomerNotificationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resetDeleteAfterDays">ResetDeleteAfterDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomerNotificationType` <a name="ResetCustomerNotificationType" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resetCustomerNotificationType"></a>

```go
func ResetCustomerNotificationType()
```

##### `ResetDeleteAfterDays` <a name="ResetDeleteAfterDays" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resetDeleteAfterDays"></a>

```go
func ResetDeleteAfterDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.archiveAfterDaysInput">ArchiveAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.customerNotificationTypeInput">CustomerNotificationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.deleteAfterDaysInput">DeleteAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.archiveAfterDays">ArchiveAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.customerNotificationType">CustomerNotificationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveAfterDaysInput`<sup>Optional</sup> <a name="ArchiveAfterDaysInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.archiveAfterDaysInput"></a>

```go
func ArchiveAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `CustomerNotificationTypeInput`<sup>Optional</sup> <a name="CustomerNotificationTypeInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.customerNotificationTypeInput"></a>

```go
func CustomerNotificationTypeInput() *string
```

- *Type:* *string

---

##### `DeleteAfterDaysInput`<sup>Optional</sup> <a name="DeleteAfterDaysInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.deleteAfterDaysInput"></a>

```go
func DeleteAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `ArchiveAfterDays`<sup>Required</sup> <a name="ArchiveAfterDays" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.archiveAfterDays"></a>

```go
func ArchiveAfterDays() *f64
```

- *Type:* *f64

---

##### `CustomerNotificationType`<sup>Required</sup> <a name="CustomerNotificationType" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.customerNotificationType"></a>

```go
func CustomerNotificationType() *string
```

- *Type:* *string

---

##### `DeleteAfterDays`<sup>Required</sup> <a name="DeleteAfterDays" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.deleteAfterDays"></a>

```go
func DeleteAfterDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() DatascienceModelRetentionSetting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a>

---


### DatascienceModelTimeoutsOutputReference <a name="DatascienceModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasciencemodel"

datasciencemodel.NewDatascienceModelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatascienceModelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



